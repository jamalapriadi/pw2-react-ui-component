import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAutheticated: boolean;
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAutheticated: false,
      user: null,
      login: (username: string) =>
        set(() => ({ isAutheticated: true, user: username })),
      logout: () => set(() => ({ isAutheticated: false, user: null })),
    }),
    {
      name: "auth-storage",
    },
  ),
);
