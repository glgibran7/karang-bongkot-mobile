import { create } from "zustand";

import { notifikasi as initialData } from "../mock/notifikasi";

export const useNotifikasiStore = create((set) => ({
  notifications: initialData,

  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((item) =>
        item.id === id
          ? {
              ...item,
              isRead: true,
            }
          : item
      ),
    })),

  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((item) => ({
        ...item,
        isRead: true,
      })),
    })),
}));
