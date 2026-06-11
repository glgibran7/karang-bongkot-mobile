import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppLayout({ children }) {
  const { theme, currentMode } = useTheme();

  return (
    <>
      <StatusBar style={currentMode === "dark" ? "light" : "dark"} />

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        {children}
      </SafeAreaView>
    </>
  );
}
