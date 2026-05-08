import { Link } from "react-router-dom";

export default function PembicaraIndex() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pembicara</h1>
      <p>Daftar pembicara yang tersedia.</p>

      <Link to="/dashboard/pembicara/create" className="text-blue-500">
        Tambah Pembicara
      </Link>
    </div>
  );
}
