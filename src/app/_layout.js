// app/_layout.js
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import "../../global.css";

import GlobalLoading from "../components/ui/GlobalLoading";

import { ThemeProvider } from "../theme/ThemeProvider";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      <GlobalLoading />
      <Toast />

    </ThemeProvider>
  );
}
