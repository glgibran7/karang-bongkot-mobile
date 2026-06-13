import { useEffect } from "react";
import { Image, View } from "react-native";

import { router } from "expo-router";

import AppLayout from "../components/ui/AppLayout";
import AppText from "../components/ui/AppText";

import { useAuthStore } from "../store/authStore";
import { useTheme } from "../theme/ThemeProvider";

export default function SplashScreen() {
  const { theme } = useTheme();

  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        router.replace("/(tabs)");
      } else {
        router.replace("/(auth)/login");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLayout>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <Image
          source={require("../../assets/images/logo-desa.png")}
          style={{
            width: 90,
            height: 90,
          }}
          resizeMode="contain"
        />

        <AppText
          size="title"
          weight="700"
          style={{
            marginTop: 20,
          }}
        >
          Desa Digital
        </AppText>

        <AppText
          style={{
            marginTop: 8,
            textAlign: "center",
          }}
        >
          Pelayanan desa modern dalam genggaman
        </AppText>
      </View>

      <View
        style={{
          paddingBottom: 40,
          alignItems: "center",
        }}
      >
        <AppText size="small" color={theme.colors.textSecondary}>
          Version 1.0.0
        </AppText>
      </View>
    </AppLayout>
  );
}
