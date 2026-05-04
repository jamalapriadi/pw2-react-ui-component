import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

// schema validasi
const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z.string().min(8, "Password minimal 8 angka"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  <form onSubmit={handleSubmit(onSubmit)}></form>;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          text="email"
          tipe="text"
          name="Email"
          register={register}
          error={errors.email?.message}
        />

        <FormInput
          text="password"
          tipe="password"
          name="Password"
          register={register}
          error={errors.password?.message}
        />

        <div>
          <Button label="Login" variant="primary" />
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
