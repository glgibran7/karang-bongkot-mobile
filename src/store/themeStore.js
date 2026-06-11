import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      mode: "system",

      setThemeMode: (mode) =>
        set({
          mode,
        }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
