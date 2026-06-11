import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  loading: false,

  showLoading: () => set({ loading: true }),

  hideLoading: () => set({ loading: false }),
}));
