import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { FormInput } from "../components/ui/FormInput";

type FormData = {
  nama: string;
  email: string;
  password: string;
  password_confirm: string;
};

//validasi
const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  email: z.string().min(8, "Email minimal 8 angka"),
  password: z.string().min(8, "Password minimal 8 angka"),
  password_confirm: z.string().min(8, "Password confirm harus diisi"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(console.log())}>
        <FormInput
          label="Nama"
          name="nama"
          register={register}
          error={errors.nama?.message}
          type="text"
          placeholder="Nama"
        />

        <FormInput
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          type="email"
          placeholder="Email"
        />

        <FormInput
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message}
          type="password"
          placeholder="Password"
        />

        <FormInput
          label="Password Confirm"
          name="password_confirm"
          register={register}
          error={errors.password_confirm?.message}
          type="password"
          placeholder="Password Confirm"
        />

        <div>
          <Button label="Register" variant="primary" />
        </div>
      </form>

      <p className="mt-6">
        Sudah punya akun?
        <Link to="/login" className="text-blue-500">
          Login di sini
        </Link>
      </p>
    </div>
  );
}
