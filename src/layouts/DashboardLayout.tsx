import { useNavigate, Outlet, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="flex min-h-screen w-full">
      {/* kiri */}
      <div className="w-64 bg-amber-700 h-screen p-4 flex flex-col justify-between">
        {/* nama aplikasi */}
        <div className="border-b border-gray-50 p-2">
          <h2 className="text-white text-2xl">Invofest Dashboard</h2>
        </div>

        {/* menu */}
        <div className="flex flex-col gap-6">
          <Link to="/dashboard" className="text-white p-4 hover:bg-black">
            Dashboard
          </Link>
          <Link
            to="/dashboard/category"
            className="text-white p-4 hover:bg-black"
          >
            Category
          </Link>
          <Link to="/dashboard/event" className="text-white p-4 hover:bg-black">
            Event
          </Link>
        </div>

        {/* untuk button logout nanti bisa ditaruh disini */}
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 p-2 text-white w-full hover:bg-amber-300 hover:text-black"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="w-full p-4">
        <Outlet />
      </div>
    </div>
  );
}
