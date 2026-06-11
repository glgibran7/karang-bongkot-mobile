import { useState } from "react";
import { View } from "react-native";

import { router } from "expo-router";

import AppButton from "../../components/ui/AppButton";
import AppHeader from "../../components/ui/AppHeader";
import AppInput from "../../components/ui/AppInput";
import AppLayout from "../../components/ui/AppLayout";

import { useAuthStore } from "../../store/authStore";

export default function LoginScreen() {
  const login = useAuthStore((state) => state.login);

  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    login({
      user: {
        nama: "Warga Desa",
      },
      token: "dummy-token",
    });

    router.replace("/(tabs)");
  };

  return (
    <AppLayout>
      <AppHeader title="Login Warga" />

      <View className="px-4 gap-4">
        <AppInput placeholder="NIK" value={nik} onChangeText={setNik} />

        <AppInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <AppButton title="Masuk" onPress={handleLogin} />
      </View>
    </AppLayout>
  );
}
