import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { HomeIcon } from "lucide-react";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* kiri */}
      <div className="min-h-screen bg-red-900 w-64 flex flex-col justify-between p-4">
        {/* satu */}
        <div className="border-b border-gray-50 py-4">
          <h1 className="text-white text-2xl font-semibold">
            InvoFest Dashboard
          </h1>
        </div>

        {/* dua */}
        <div>
          <nav className="flex flex-col gap-2">
            <Link
              to="/dashboard"
              className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150 flex items-center gap-3"
            >
              <span>
                <HomeIcon size={18} />
              </span>
              Dashboard
            </Link>
            <Link
              to="/dashboard/category"
              className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150"
            >
              Categories
            </Link>
            <Link
              to="/dashboard/speaker"
              className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150"
            >
              Speaker
            </Link>
            <Link
              to="/dashboard/events"
              className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150"
            >
              Events
            </Link>
          </nav>
        </div>

        {/* tiga */}
        <div>
          <button
            onClick={handleLogout}
            className="bg-amber-500 p-4 w-full hover:bg-amber-400 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
