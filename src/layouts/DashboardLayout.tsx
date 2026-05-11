import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  //fungi logout
  const handleLogout = () => {
    logout();

    // Redirect ke halaman login
    navigate("/login");
  };
  return (
    <div className="flex w-full min-h-screen">
      {/* kiri */}
      <div className="bg-pink-200 w-64 flex flex-col justify-between p-4">
        {/* atas */}
        <div>
          <h1 className="text-2xl font-bold text-center text-red-900">
            Invofest
          </h1>
        </div>

        {/* tengah */}
        <div>
          <ul className="flex flex-col gap-6 w-full">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/category">Category</Link>
            </li>
            <li>
              <Link to="/dashboard/pembicara">Pembicara</Link>
            </li>
            <li>
              <Link to="/dashboard">Event</Link>
            </li>
          </ul>
        </div>

        {/* bawah */}
        <div>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full p-4 bg-red-600 text-white rounded cursor-pointer hover:bg-red-950"
          >
            Logout
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
