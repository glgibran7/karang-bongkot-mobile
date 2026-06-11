import { router } from "expo-router";
import { Bell, CircleUser } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

import { notifikasi } from "../../mock/notifikasi";
import { useTheme } from "../../theme/ThemeProvider";
import AppText from "../ui/AppText";

export default function HomeHeader() {
  const { theme } = useTheme();

  const unreadCount = notifikasi.filter((item) => item.isRead === false).length;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      {/* SECTION BRANDING */}
      <View>
        <AppText size="header" weight="800" color={theme.colors.text}>
          DESA DIGITAL
        </AppText>
        <AppText color={theme.colors.textSecondary} size="caption" weight="400">
          Pelayanan Cepat, Warga Hebat
        </AppText>
      </View>

      {/* SECTION RIGHT ACTION (NOTIFIKASI & PROFIL) */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/notifikasi")}
        >
          <View
            style={{
              width: 32,
              height: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size={24} color={theme.colors.text} />

            {unreadCount > 0 && (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  minWidth: 18,
                  height: 18,
                  borderRadius: 999,
                  backgroundColor: "#EF4444",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 4,
                }}
              >
                <AppText
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                    fontWeight: "700",
                  }}
                >
                  {unreadCount > 99 ? "99+" : unreadCount}
                </AppText>
              </View>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/profil")}
        >
          <CircleUser size={28} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
