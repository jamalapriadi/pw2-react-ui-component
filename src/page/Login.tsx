import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import InputText from "../components/ui/Input";
import Button from "../components/ui/Button";
import InputPassword from "../components/ui/InputPassword";

type FormData = {
  username: string;
  password: string;
};

const schema = z.object({
  username: z.string().min(1, "Username harus diisi"),
  password: z.string().min(8, "Minimal 8 Karakter"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Username"
          name="username"
          register={register}
          error={errors.username?.message}
        />

        <InputPassword
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <div>
          <Button label="Login" variant="primary" />
        </div>
      </form>
    </div>
  );
}
