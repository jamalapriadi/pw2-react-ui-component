import { Link } from "react-router-dom";

export default function CategoryIndex() {
  return (
    <div>
      <h1>Category</h1>
      <p>Selamat Datang di halaman Category</p>

      <Link
        to="/dashboard/category/create"
        className="p-2 bg-red-500 text-white"
      >
        Tambah Category
      </Link>
    </div>
  );
}
