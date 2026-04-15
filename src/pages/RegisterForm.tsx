import { useForm } from "react-hook-form";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";

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
    </div>
  );
}
