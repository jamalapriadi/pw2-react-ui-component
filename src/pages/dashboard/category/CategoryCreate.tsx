import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { api } from "../../../lib/axios";
import { InputText } from "../../../components/ui/InputText";

const schema = z.object({
  name: z.string().min(1, "Nama kategori harus diisi"),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CategoryCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await api.post("/categories", data);
      navigate("/dashboard/category");
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan kategori. Silakan coba lagi.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Tambah Category</h1>
      <p className="text-gray-600 mb-8">Isi data kategori baru dan simpan.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputText
          label="Nama Kategori"
          nama="name"
          register={register}
          error={errors.name?.message?.toString()}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="description">
            Deskripsi
          </label>
          <textarea
            id="description"
            {...register("description")}
            rows={4}
            className={`w-full rounded border px-3 py-2 focus:border-indigo-500 focus:outline-none ${
              errors.description ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message?.toString()}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Menyimpan..." : "Simpan Kategori"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/category")}
            className="rounded border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
