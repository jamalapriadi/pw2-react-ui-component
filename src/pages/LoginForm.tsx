import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

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
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (data.email == "admin@gmail.com" && data.password == "admin123") {
      alert("Login Berhasil");

      login(data.email);

      // Redirect ke halaman dashboard
      navigate("/dashboard");
    } else {
      alert("Email atau password anda salah!");
    }
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
