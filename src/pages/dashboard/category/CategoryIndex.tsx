import { Link } from "react-router-dom";
import { deleteCategory, getCategories } from "../../../features/categories/categoryApi";
import { useMutation, useQuery } from "@tanstack/react-query";

type Category = {
  id: number;
  name: string;
};

export default function CategoryIndex() {
  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      alert("Category deleted successfully");
      categories.refetch();
    },
  });

  const handleDelete = (id:number) => {
    const confirmDelete = confirm("Yakin ingin menghapus kategori ini?");

    if (confirmDelete) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div>
      <h2>Ini adalah halaman Category Event</h2>

      <Link
        to="/dashboard/category/create"
        className="p-2 bg-blue-600 rounded text-white"
      >
        Add New Category
      </Link>

      <table className="table-auto border-collapse border border-slate-400 mt-4">
        <thead>
          <tr>
            <th className="border border-slate-300 px-4 py-2">ID</th>
            <th className="border border-slate-300 px-4 py-2">Name</th>
            <th className="border border-slate-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.data?.map((category: Category) => (
            <tr key={category.id}>
              <td className="border border-slate-300 px-4 py-2">{category.id}</td>
              <td className="border border-slate-300 px-4 py-2">{category.name}</td>
              <td className="border border-slate-300 px-4 py-2">
                <Link
                  to={`/dashboard/category/${category.id}/edit`}
                  className="p-2 bg-yellow-500 rounded text-white"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(category.id)}
                  disabled={deleteMutation.isPending}
                  style={{ marginLeft: "8px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
