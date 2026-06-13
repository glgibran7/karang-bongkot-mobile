import { useState } from "react";

import { Check, Eye, EyeOff } from "lucide-react-native";
import {
  Image,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import { accounts } from "../../mock/accounts";

import { router } from "expo-router";

import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";
import AppLayout from "../../components/ui/AppLayout";
import AppText from "../../components/ui/AppText";

import { useAuthStore } from "../../store/authStore";
import { useTheme } from "../../theme/ThemeProvider";

export default function LoginScreen() {
  const { theme } = useTheme();

  const login = useAuthStore((state) => state.login);

  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/6281234567890");
  };

  const handleLogin = async () => {
    setError("");

    if (!nik.trim() || !password.trim()) {
      setError("NIK dan Password wajib diisi.");
      return;
    }

    const account = accounts.find((item) => item.nik === nik.trim());

    if (!account) {
      setError("NIK tidak terdaftar.");
      return;
    }

    if (account.password !== password) {
      setError("Password yang Anda masukkan salah.");
      return;
    }

    login({
      user: {
        nama: account.nama,
        nik: account.nik,
        email: account.email,
      },
      token: "dummy-token",
    });

    router.replace("/(tabs)");
  };

  return (
    <AppLayout>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            padding: 24,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <Image
              source={require("../../../assets/images/logo-desa.png")}
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
              Selamat Datang
            </AppText>

            <AppText
              style={{
                marginTop: 8,
                textAlign: "center",
                color: theme.colors.textSecondary,
              }}
            >
              Masuk untuk mengakses layanan Desa Digital
            </AppText>
          </View>

          <AppInput
            label="NIK"
            placeholder="Masukkan NIK"
            value={nik}
            keyboardType="number-pad"
            onChangeText={(text) => {
              setNik(text);
              if (error) setError("");
            }}
          />

          <View style={{ height: 16 }} />

          <AppInput
            label="Password"
            placeholder="Masukkan Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (error) setError("");
            }}
            rightElement={
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{
                  padding: 6,
                }}
              >
                {showPassword ? (
                  <EyeOff size={20} color={theme.colors.textSecondary} />
                ) : (
                  <Eye size={20} color={theme.colors.textSecondary} />
                )}
              </TouchableOpacity>
            }
          />

          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  borderWidth: 1.5,
                  borderColor: rememberMe
                    ? theme.colors.primary
                    : theme.colors.border,
                  backgroundColor: rememberMe
                    ? theme.colors.primary
                    : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {rememberMe && <Check size={14} color="#fff" />}
              </View>

              <AppText size="small">Ingat Saya</AppText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/forgot-password")}>
              <AppText weight="600" color={theme.colors.primary}>
                Lupa Password?
              </AppText>
            </TouchableOpacity>
          </View>

          <View style={{ height: 24 }} />

          {error ? (
            <View
              style={{
                backgroundColor: "#FEF2F2",
                borderWidth: 1,
                borderColor: "#FECACA",
                padding: 12,
                borderRadius: 12,
                marginBottom: 16,
              }}
            >
              <AppText
                weight="600"
                style={{
                  color: "#DC2626",
                }}
              >
                {error}
              </AppText>
            </View>
          ) : null}

          <AppButton title="Masuk" onPress={handleLogin} />

          {/* <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <AppText>Belum punya akun? </AppText>

            <TouchableOpacity onPress={() => router.push("/register")}>
              <AppText weight="700" color={theme.colors.primary}>
                Daftar
              </AppText>
            </TouchableOpacity>
          </View> */}

          <View
            style={{
              marginTop: 28,
              alignItems: "center",
            }}
          >
            <AppText size="small" color={theme.colors.textSecondary}>
              Butuh bantuan?
            </AppText>

            <TouchableOpacity
              onPress={openWhatsApp}
              style={{
                marginTop: 8,
              }}
            >
              <AppText weight="700" color={theme.colors.primary}>
                Hubungi Admin Desa via{" "}
                <AppText weight="700" style={{ color: "#25D366" }}>
                  WhatsApp
                </AppText>
              </AppText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </AppLayout>
  );
}
