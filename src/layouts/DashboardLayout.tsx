import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
          <h1 className="text-lg font-semibold">Admin Panel</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-800">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-800">
            Users
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-800">
            Posts
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-800">
            Settings
          </a>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button className="w-full px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h2 className="font-semibold text-lg">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span>Hi, Admin</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

        <footer className="h-14 bg-white border-t flex items-center justify-center text-sm text-gray-500">
          © 2026 Your Company
        </footer>
      </div>
    </div>
  );
}
