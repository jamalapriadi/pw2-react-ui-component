import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { api } from "../../../lib/axios";

type Category = {
  id: number;
  name: string;
  createdAt?: string;
};

export default function CategoryIndex() {
  const {
    data: categories = [],
    isLoading,
    isError,
    error,
  } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get<Category[]>("/categories");
      return response.data;
    },
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold">Category</h1>
          <p>Selamat Datang di halaman Category</p>
        </div>

        <Link to="/dashboard/category/create" className="p-2 bg-red-500 text-white rounded">
          Tambah Category
        </Link>
      </div>

      {isLoading ? (
        <div className="text-center py-10">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{isError}</div>
      ) : categories.length === 0 ? (
        <div className="text-gray-500">Belum ada kategori.</div>
      ) : (
        <div className="grid gap-4">
          {categories.map((category) => (
            <div key={category.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}