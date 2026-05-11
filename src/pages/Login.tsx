import FormInput from "../components/ui/FormInput";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

//tentukan form data
type FormData = {
  email: string;
  password: string;
};

// schema validasi
const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z.string().min(8, "Password minimal 8 angka"),
});

export default function Login() {
  //hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  //fungsi ketika form di submit
  const onSubmit = (data: FormData) => {
    if (data.email == "admin@gmail.com" && data.password == "password123") {
      //login sukses
      alert("login sukses");

      login(data.email);

      navigate("/dashboard");
    } else {
      //login gagal
      alert("login gagal");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="E-mail"
        />

        <FormInput
          type="password"
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message}
          placeholder="Password"
        />

        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      <p className="mt-6">
        Belum punya akun?
        <Link to="/register" className="text-blue-500">
          Daftar di sini
        </Link>
      </p>
    </div>
  );
}
