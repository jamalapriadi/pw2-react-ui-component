import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // redirect ke halaman login setelah logout
    navigate("/login");
  };

  return (
    <div className="flex w-full min-h-screen">
      <aside className="w-64 bg-amber-700 flex flex-col justify-between p-4 text-white">
        <div className="flex items-center justify-center border-b border-white/20 h-16">
          <h2 className="text-2xl font-bold mb-4">Invofest</h2>
        </div>

        <div>
          <nav className="flex flex-col gap-2">
            <Link
              to="/dashboard"
              className="p-4 rounded-2xl hover:bg-black transition-colors ease-in duration-150"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/category"
              className="p-4 rounded-2xl hover:bg-black transition-colors ease-in duration-150"
            >
              Kategori Event
            </Link>
            <Link
              to="/dashboard/event"
              className="p-4 rounded-2xl hover:bg-black transition-colors ease-in duration-150"
            >
              Event
            </Link>
            <Link
              to="/dashboard/pembicara"
              className="p-4 rounded-2xl hover:bg-black transition-colors ease-in duration-150"
            >
              Pembicara
            </Link>
          </nav>
        </div>

        <div>
          <button
            onClick={handleLogout}
            type="button"
            className="p-3 bg-red-700 w-full"
          >
            Logout
          </button>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
