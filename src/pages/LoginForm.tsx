import { useForm } from "react-hook-form";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link, useNavigate, type ErrorResponse } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

import {useMutation, useQueryClient} from "@tanstack/react-query"
import {AxiosError} from "axios"
import type {LoginRequest, LoginResponse} from "../types/auth"
import {api} from "../lib/axios"

type FormData = LoginRequest

const schema = z.object({
  username: z.string().min(1, "Username harus diisi"),
  password: z.string().min(8, "Mimimal 8 Karakter"),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const loginMutation = useMutation({
    mutationFn: async(credentials: LoginRequest)=>{
      //logic disini
      const response = await api.post<LoginResponse>("/auth/login", credentials)

      return response.data
    },
    onSuccess :(data) =>{
      //logic disini
      login({
        user: data.user,
        token: data.token
      })

      queryClient.setQueryData(["me"], data.user)

      navigate("/dashboard")
    },
    onError: (error: AxiosError<ErrorResponse>) =>{
      //logic disini
      const message = error.message || 'Terjadi kesalahan saat login'

      alert(`Login Gagal : ${message}`)
    }
  })

  const onSubmit = (data: FormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <InputText
          label="Username"
          nama="username"
          register={register}
          error={errors.username?.message}
        />

        {/* password */}
        <InputPassword
          label="Password"
          nama="password"
          register={register}
          error={errors.password?.message}
        />

        {/* button */}
        <Button label="Login" variant="primary" />
      </form>

      <p className="mt-4 text-sm">
        Belum punya akun?
        <Link to="/register">Daftar Sekarang</Link>
      </p>
    </div>
  );
}
