import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { useForm } from "react-hook-form";

type FormData = {
  nama: string;
  role: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama pembicara harus diisi"),
  role: z.string().min(1, "Role pembicara harus diisi"),
});

export default function PembicaraCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tambah Pembicara</h1>
      <p>Form untuk menambahkan pembicara baru.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nama Pembicara"
          name="nama"
          register={register}
          error={errors.nama?.message}
        />

        <Input
          label="Role Pembicara"
          name="role"
          register={register}
          error={errors.role?.message}
        />

        <Button label="Simpan" variant="primary" />
      </form>
    </div>
  );
}
