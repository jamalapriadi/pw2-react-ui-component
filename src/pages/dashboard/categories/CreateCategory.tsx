import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormInput } from "../../../components/ui/FormInput";
import { Button } from "../../../components/ui/Button";

type FormData = {
  nama: string;
};

//validasi
const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
});

export default function CreateCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Create new Category</h1>
      <p>Silahkan isi semua data dengan benar</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Nama"
          name="nama"
          register={register}
          error={errors.nama?.message}
          type="text"
          placeholder="Nama"
        />

        <Button label="Simpan" variant="primary" />
      </form>
    </div>
  );
}
