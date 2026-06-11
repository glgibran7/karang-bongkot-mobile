import { router } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, View } from "react-native";

import {
  Circle,
  CircleDot,
  Info,
  LogOut,
  Moon,
  Phone,
  Users,
} from "lucide-react-native";

import { profile } from "../../mock/profile";

import AppButton from "../../components/ui/AppButton";
import AppCard from "../../components/ui/AppCard";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppText from "../../components/ui/AppText";

import ProfileHeaderCard from "../../components/profile/ProfileHeaderCard";
import ProfileMenuItem from "../../components/profile/ProfileMenuItem";

import { useAuthStore } from "../../store/authStore";
import { useThemeStore } from "../../store/themeStore";
import { useTheme } from "../../theme/ThemeProvider";

export default function ProfilScreen() {
  const { theme } = useTheme();

  const logout = useAuthStore((state) => state.logout);

  const mode = useThemeStore((state) => state.mode);
  const setThemeMode = useThemeStore((state) => state.setThemeMode);

  const [refreshing, setRefreshing] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);

  const currentThemeLabel =
    mode === "light" ? "Terang" : mode === "dark" ? "Gelap" : "Ikuti Sistem";

  const onRefresh = async () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handleLogout = () => {
    logout();
    router.replace("/(auth)/login");
  };

  const InfoRow = ({ label, value }) => (
    <View
      style={{
        marginBottom: 14,
      }}
    >
      <AppText size="small" color={theme.colors.textSecondary}>
        {label}
      </AppText>

      <AppText weight="600">{value}</AppText>
    </View>
  );

  return (
    <AppLayout>
      <AppHeader title="Profil" showBack />

      <AppScrollView
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <ProfileHeaderCard profile={profile} />

        <View style={{ height: 16 }} />

        <AppButton
          title="Edit Profil"
          onPress={() => router.push("/profil/edit")}
        />

        <View style={{ height: 16 }} />

        {/* Informasi */}
        <AppCard>
          <AppText
            weight="700"
            style={{
              marginBottom: 16,
            }}
          >
            Informasi Warga
          </AppText>

          <InfoRow label="NIK" value={profile.nik} />
          <InfoRow label="Nomor KK" value={profile.kk} />
          <InfoRow label="Nomor HP" value={profile.phone} />
          <InfoRow label="RT / RW" value={`${profile.rt}/${profile.rw}`} />
          <InfoRow label="Dusun" value={profile.dusun} />
          <InfoRow label="Alamat" value={profile.alamat} />
        </AppCard>

        <View style={{ height: 16 }} />

        {/* Anggota KK */}
        <AppCard>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Users size={18} color={theme.colors.primary} />

            <AppText
              weight="700"
              style={{
                marginLeft: 8,
              }}
            >
              Anggota Kartu Keluarga
            </AppText>
          </View>

          {profile.anggota_kk.map((anggota, index) => (
            <View
              key={anggota.nik}
              style={{
                paddingVertical: 12,
                borderBottomWidth:
                  index === profile.anggota_kk.length - 1 ? 0 : 1,
                borderBottomColor: theme.colors.border,
              }}
            >
              <AppText weight="600">{anggota.nama}</AppText>

              <AppText size="small" color={theme.colors.textSecondary}>
                {anggota.hubungan}
              </AppText>

              <AppText size="small" color={theme.colors.textSecondary}>
                NIK: {anggota.nik}
              </AppText>
            </View>
          ))}
        </AppCard>

        <View style={{ height: 16 }} />

        {/* Menu */}
        <AppCard>
          <ProfileMenuItem
            icon={<Moon size={20} color={theme.colors.text} />}
            title="Tema"
            subtitle={currentThemeLabel}
            onPress={() => setThemeModalVisible(true)}
          />

          <ProfileMenuItem
            icon={<Phone size={20} color={theme.colors.text} />}
            title="Kontak Desa"
            onPress={() => router.push("/kontak")}
          />

          <ProfileMenuItem
            icon={<Info size={20} color={theme.colors.text} />}
            title="Tentang Aplikasi"
            onPress={() => router.push("/tentang")}
          />

          <ProfileMenuItem
            icon={<LogOut size={20} color="#EF4444" />}
            title="Logout"
            onPress={handleLogout}
          />
        </AppCard>

        <View
          style={{
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <AppText size="small" color={theme.colors.textSecondary}>
            Desa Digital v1.0.0
          </AppText>
        </View>
      </AppScrollView>

      {/* Modal Tema */}
      <Modal
        visible={themeModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setThemeModalVisible(false)}
      >
        <Pressable
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
          onPress={() => setThemeModalVisible(false)}
        >
          <Pressable
            onPress={(e) => e.stopPropagation()}
            style={{
              backgroundColor: theme.colors.card,
              paddingHorizontal: 20,
              paddingTop: 20,
              paddingBottom: 32,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            }}
          >
            <AppText
              weight="700"
              size="title"
              style={{
                marginBottom: 20,
              }}
            >
              Pilih Tema
            </AppText>

            {[
              {
                label: "Gelap",
                value: "dark",
              },
              {
                label: "Terang",
                value: "light",
              },
              {
                label: "Ikuti Sistem",
                value: "system",
              },
            ].map((item, index, array) => (
              <Pressable
                key={item.value}
                onPress={() => {
                  setThemeMode(item.value);
                  setThemeModalVisible(false);
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 16,
                  borderBottomWidth: index === array.length - 1 ? 0 : 1,
                  borderBottomColor: theme.colors.border,
                }}
              >
                {mode === item.value ? (
                  <CircleDot size={22} color={theme.colors.primary} />
                ) : (
                  <Circle size={22} color={theme.colors.textSecondary} />
                )}

                <AppText
                  style={{
                    marginLeft: 12,
                  }}
                >
                  {item.label}
                </AppText>
              </Pressable>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </AppLayout>
  );
}
