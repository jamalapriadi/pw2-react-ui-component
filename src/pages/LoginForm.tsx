import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link, useNavigate, type ErrorResponse } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

import {useMutation, useQueryClient} from "@tanstack/react-query"
import {AxiosError} from "axios"

import type { LoginInput, LoginResponse } from "../types/auth"
import { api } from "../lib/axios"


type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
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
    mutationFn: async(credentials: LoginInput) => {
      //logic awal
      const response = await api.post<LoginResponse>("/auth/login", credentials);

      return response.data
    },
    onSuccess:(data) =>{
      //logic jika success
      login({
        user: data.user,
        token: data.token
      });

      queryClient.setQueryData(["me"], data.user);

      navigate("/dashboard");
    },
    onError: (error: AxiosError<ErrorResponse>) =>{
      //logic jika error
      const message = error.message || "Terjadi kesalahan"

      alert(`Login Gagal : ${message}`)
    }
  })

  const onSubmit = (data: FormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Email"
          nama="email"
          register={register}
          error={errors.email?.message}
        />

        <InputPassword
          label="Password"
          nama="password"
          register={register}
          error={errors.password?.message}
        />

        <div>
          <Button label="Login" variant="primary" />
        </div>

        <div className="mt-6">
          Belum punya akun? <Link to="/register">Daftar Disini</Link>
        </div>
      </form>
    </div>
  );
}
