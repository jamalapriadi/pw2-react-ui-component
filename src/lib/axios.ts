import axios, { AxiosError } from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const api = axios.create({
    baseURL: import.meta.env.API_URL || 'http://localhost:3000',
    headers:{
        'Content-Type' : 'application/json'
    }
})

//jika sudah login tambahkan authorization pada header 
api.interceptors.request.use(
    (config) => {
        //jika sudah login seharusnya kita sudah dapat token 
        const token = useAuthStore.getState().token 

        //jika ada token, maka tambahkan di headers dengan key Authorization
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (error) => {
        //logic disini
        return Promise.reject(error)
    }
)

//untuk default error
api.interceptors.request.use(
    (response) => response,
    (error: AxiosError) =>{
        if(error.response?.status === 401){
            useAuthStore.getState().logout()

            window.dispatchEvent(new Event('auth:unauthorization'))
        }

        return Promise.reject(error);
    }
)