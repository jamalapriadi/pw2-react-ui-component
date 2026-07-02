import axios, {AxiosError} from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const api  = axios.create({
    baseURL: import.meta.env.API_URL || "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
})

api.interceptors.request.use(
    (config) => {
        //logic 
        const token = useAuthStore.getState().token;

        //cek apakah ada token 
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) =>{

        //logic

        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        //logic
        if(error.response?.status === 401){
            useAuthStore.getState().logout()
        }

        return Promise.reject(error)
    }
)