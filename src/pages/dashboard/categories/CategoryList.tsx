import { Link } from "react-router-dom";

export default function CategoryList() {
  return (
    <div>
      <h1>List Category</h1>

      <Link
        to="/dashboard/category/create"
        className="p-4 bg-red-500 text-white"
      >
        Tambah Category
      </Link>
    </div>
  );
}
