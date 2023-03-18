import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  auth: { email: '', active: false },
  setEmail: (mail) =>
    set((state) => ({ auth: { ...state.auth, email: mail } })),
}));

export const useAuthUsername = create((set) => ({
  auth: { username: '', active: false },
  setUsername: (name) =>
    set((state) => ({ auth: { ...state.auth, username: name } })),
}));
