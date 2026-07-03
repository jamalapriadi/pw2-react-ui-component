import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { api } from "../../../lib/axios";

import {getCategories} from "../../../api/categoryApi"

type Category = {
  id: number;
  name: string;
  createdAt?: string;
};

export default function CategoryIndex() {

  //tanstack query untuk mengambil data category dari api
  const {
    data: categories = [],
    isLoading,
    isError,
    error,
  } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories
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
        <table className="w-full border-collapse border border-gray-300"> 
          <thead>
            <tr>
              <td>No.</td>
              <td>Nama Kategori</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
        