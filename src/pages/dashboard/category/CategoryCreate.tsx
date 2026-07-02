import { useForm } from "react-hook-form";
import InputText from "../../../components/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import {AxiosError} from "axios";
import {createCategory} from "../../../features/categories/categoryApi";

type FormData = {
  name: string;
};

const schema = z.object({
  name: z.string().min(1, "Nama Category harus diisi"),
});

export default function CategoryCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const createCategoryMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await createCategory(data);
      return response;
    },
    onSuccess: () => {
      // Handle success, e.g., show a success message or redirect
      navigate("/dashboard/category");
    },
    onError: (error: AxiosError) => {
      // Handle error, e.g., show an error message
      console.error("Error creating category:", error);
    },
  });

  const onSubmit = (data: FormData) => {
    createCategoryMutation.mutate(data);
  };

  return (
    <div>
      <h2>Add new Category</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Name"
          nama="name"
          register={register}
          error={errors.name?.message}
        />

        <Button label="Simpan" variant="primary" />
      </form>
    </div>
  );
}

