import { Link } from "react-router-dom";

export default function CategoryIndex() {
  return (
    <div>
      <h2>Ini adalah halaman Category Event</h2>

      <Link
        to="/dashboard/category/create"
        className="p-2 bg-blue-600 rounded text-white"
      >
        Add New Category
      </Link>
    </div>
  );
}
