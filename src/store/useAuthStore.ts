import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, LoginResponse } from "../types/auth"

interface AuthState {
  isAutheticated: boolean;
  user: User | null;
  token : string | null;
  login: (loginResponse: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAutheticated: false,
      user: null,
      token: null,
      login: ({user, token}) =>
        set(() => ({ isAutheticated: true, user, token })),
      logout: () => set(() => ({ isAutheticated: false, user: null, token: null })),
    }),
    {
      name: "auth-storage",
    },
  ),
);
