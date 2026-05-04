import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../components/FormInput";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

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
          text="nama"
          tipe="text"
          name="Nama"
          register={register}
          error={errors.nama?.message}
        />

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

        <FormInput
          text="password_confirm"
          tipe="password"
          name="Password Confirm"
          register={register}
          error={errors.password_confirm?.message}
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
