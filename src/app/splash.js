import { useEffect } from "react";
import { ActivityIndicator, Image, View } from "react-native";

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
  }, [token]);

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
        <View
          style={{
            width: 140,
            height: 140,
            borderRadius: 40,

            backgroundColor: theme.colors.card,

            justifyContent: "center",
            alignItems: "center",

            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 12,
            shadowOffset: {
              width: 0,
              height: 4,
            },

            elevation: 5,
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
        </View>

        <AppText
          size="title"
          weight="700"
          style={{
            marginTop: 28,
            fontSize: 30,
          }}
        >
          Desa Digital
        </AppText>

        <AppText
          style={{
            marginTop: 8,
            textAlign: "center",
            color: theme.colors.textSecondary,
            maxWidth: 260,
          }}
        >
          Pelayanan desa modern, cepat, transparan dan mudah diakses oleh warga.
        </AppText>

        <View
          style={{
            marginTop: 32,
          }}
        >
          <ActivityIndicator size="small" color={theme.colors.primary} />
        </View>
      </View>

      <View
        style={{
          paddingBottom: 40,
          alignItems: "center",
        }}
      >
        <AppText
          size="small"
          color={theme.colors.textSecondary}
          style={{
            marginBottom: 4,
          }}
        >
          Powered by Outlook Project
        </AppText>

        <AppText size="small" color={theme.colors.textSecondary}>
          Version 1.0.0
        </AppText>
      </View>
    </AppLayout>
  );
}
