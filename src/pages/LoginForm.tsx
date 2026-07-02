import { useForm } from "react-hook-form";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {AxiosError} from "axios";
import type {LoginInput, LoginResponse} from "../types/auth"
import {api} from "../lib/axios"

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
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

  //login 
  const loginMutation = useMutation({
    mutationFn: async (data: LoginInput) => {
      //logic disini
      const response = await api.post<LoginResponse>("/auth/login", data);

      return response.data
    },
    onSuccess: (data: LoginResponse) => {
      //jika sukses
      login({
        user: data.user,
        token: data.token
      })

      //redirect ke dashboard
      navigate("/dashboard");
    },
    onError: (error: AxiosError) => {
      //jika error
      console.log(error);

      alert('Login Gagal, pastikan email dan password benar');
    }
  })

  const onSubmit = (data: FormData) => {
    loginMutation.mutate(data)
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <InputText
          label="Email"
          nama="email"
          register={register}
          error={errors.email?.message}
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
