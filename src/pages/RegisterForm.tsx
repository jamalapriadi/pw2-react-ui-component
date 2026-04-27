import { useForm } from "react-hook-form";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

type FormData = {
  nama: string;
  email: string;
  password: string;
  password_confirm: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  email: z.string().min(1, "Email harus diisi"),
  password: z.string().min(8, "Minimal 8 Karakter"),
  password_confirm: z.string().min(8, "Minimal 8 Karakter"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* nama */}
        <InputText
          label="Nama"
          nama="nama"
          register={register}
          error={errors.nama?.message}
        />

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

        <InputPassword
          label="Password Confirm"
          nama="password_confirm"
          register={register}
          error={errors.password_confirm?.message}
        />

        {/* button */}
        <Button label="Register" variant="primary" />
      </form>

      <p className="mt-4 text-sm">
        Sudah punya akun?
        <Link to="/login">Login Disini</Link>
      </p>
    </div>
  );
}
