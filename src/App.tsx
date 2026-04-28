import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
// import Login from "./pages/Login";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard";
// import DashboardLayout from "./layouts/DashboardLayout";
// import { useThemeStore } from "./store/useThemeStore";
// import { useEffect } from "react";
// import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  // const isDarkMode = useThemeStore((state) => state.isDarkMode);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", isDarkMode);
  // }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Routes>
        {/* website utama */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        {/* login dan register */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
