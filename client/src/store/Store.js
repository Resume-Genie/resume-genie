import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  auth: { email: '', active: false },
  setEmail: (mail) =>
    set((state) => ({ auth: { ...state.auth, email: mail } })),
}));
