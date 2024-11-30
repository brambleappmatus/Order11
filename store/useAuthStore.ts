import { create } from 'zustand';

interface AuthState {
  adminPassword: string;
  isAuthenticated: boolean;
  setAdminPassword: (password: string) => void;
  login: (password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  adminPassword: '1111',
  isAuthenticated: false,
  setAdminPassword: (password) => set({ adminPassword: password }),
  login: (password) => {
    const isValid = password === get().adminPassword;
    if (isValid) {
      set({ isAuthenticated: true });
    }
    return isValid;
  },
  logout: () => set({ isAuthenticated: false }),
}));