import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* landing page  */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Beranda />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/seminar" element={<Seminar />} />
            <Route path="/talkshow" element={<Talkshow />} />
            <Route path="/workshop" element={<Workshop />} />
          </Route>

          {/* auth */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>

          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardIndex />} />
              <Route path="/dashboard/category" element={<CategoryIndex />} />
              <Route
                path="/dashboard/category/create"
                element={<CategoryCreate />}
              />

              <Route path="/dashboard/event" element={<EventIndex />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
