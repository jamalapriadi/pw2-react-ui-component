import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="py-24 container mx-auto min-h-screen flex items-center justify-between">
        <Outlet />
      </main>

      <footer className="p-4 bg-slate-100 text-center">
        <div>&copy; 2026 Universitas Harkat Negeri</div>
      </footer>
    </>
  );
}
