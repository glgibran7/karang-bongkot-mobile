import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

import { useThemeStore } from "../store/themeStore";
import { darkTheme, lightTheme } from "./themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const mode = useThemeStore((state) => state.mode);

  const systemTheme = useColorScheme();

  const currentMode = mode === "system" ? systemTheme : mode;

  const theme = currentMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        currentMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
