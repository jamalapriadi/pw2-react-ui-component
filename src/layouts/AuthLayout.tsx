import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 min-h-screen items-center">
      {/* kiri */}
      <div className="h-screen bg-gray-100 flex items-center p-4">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
          alt=""
        />
      </div>

      {/* kanan */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
