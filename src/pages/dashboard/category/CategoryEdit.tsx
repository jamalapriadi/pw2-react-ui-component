import { Button } from "../../../components/ui/Button";
import InputText from "../../../components/ui/InputText";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  getCategoryById,
  updateCategory,
} from "../../../features/categories/categoryApi";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import type { AxiosError } from "axios";

type FormData = {
  name: string;
};

const schema = z.object({
  name: z.string().min(1, "Nama Category harus diisi"),
});

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  // Ambil data category berdasarkan id
  const { data, isLoading } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoryById(Number(id)),
    enabled: !!id,
  });

  // Ketika data berhasil didapat, isi form
  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
      });
    }
  }, [data, reset]);

  // Update data
  const editCategoryMutation = useMutation({
    mutationFn: (formData: FormData) =>
      updateCategory(Number(id), formData),

    onSuccess: () => {
      console.log("Category updated successfully");
      alert('Category updated successfully');
      navigate("/dashboard/category");
    },

    onError: (error: AxiosError) => {
      console.error(error);
    },
  });

  const onSubmit = (data: FormData) => {
    editCategoryMutation.mutate(data);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Category</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Name"
          nama="name"
          register={register}
          error={errors.name?.message}
        />

        <Button
          label={editCategoryMutation.isPending ? "Menyimpan..." : "Simpan"}
          variant="primary"
        />
      </form>
    </div>
  );
}