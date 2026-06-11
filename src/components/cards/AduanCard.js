import { router } from "expo-router";

import { CalendarDays, ChevronRight } from "lucide-react-native";

import { Image, TouchableOpacity, View } from "react-native";

import AppBadge from "../ui/AppBadge";
import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

import { getAduanStatus } from "../../utils/aduanStatus";

import { useTheme } from "../../theme/ThemeProvider";

export default function AduanCard({ item }) {
  const { theme } = useTheme();

  const status = getAduanStatus(item.status);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/aduan/${item.id}`)}
      activeOpacity={0.8}
    >
      <AppCard
        style={{
          marginBottom: 14,
          overflow: "hidden",
          padding: 0,
        }}
      >
        <Image
          source={{
            uri: item.foto,
          }}
          style={{
            width: "100%",
            height: 180,
          }}
        />

        <View
          style={{
            padding: 14,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                flex: 1,
                paddingRight: 12,
              }}
            >
              <AppText weight="700" size="body">
                {item.judul}
              </AppText>

              <AppText
                size="small"
                style={{
                  marginTop: 4,
                }}
              >
                {item.kategori}
              </AppText>
            </View>

            <ChevronRight size={20} color={theme.colors.textSecondary} />
          </View>

          <View
            style={{
              height: 12,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CalendarDays size={14} color={theme.colors.textSecondary} />

              <AppText
                size="small"
                style={{
                  marginLeft: 4,
                }}
              >
                {item.tanggal}
              </AppText>
            </View>

            <AppBadge label={status.label} type={status.type} />
          </View>
        </View>
      </AppCard>
    </TouchableOpacity>
  );
}
