import { router } from "expo-router";
import { ChevronRight, Clock3, MapPin } from "lucide-react-native";

import { TouchableOpacity, View } from "react-native";

import AppBadge from "../ui/AppBadge";
import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function AgendaCard({ item }) {
  const { theme } = useTheme();

  const [day, month] = item.date.split(" ");

  const isUpcoming = item.status === "upcoming";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push(`/agenda/${item.id}`)}
    >
      <AppCard
        style={{
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Date */}
          <View
            style={{
              width: 64,
              height: 72,
              borderRadius: 12,
              backgroundColor: theme.colors.primary + "15",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AppText
              weight="700"
              style={{
                fontSize: 26,
                lineHeight: 30,
              }}
            >
              {day}
            </AppText>

            <AppText size="small" color={theme.colors.primary} weight="600">
              {month}
            </AppText>
          </View>

          {/* Content */}
          <View
            style={{
              flex: 1,
              marginLeft: 16,
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
                  marginRight: 8,
                }}
              >
                <AppText weight="700" numberOfLines={2}>
                  {item.title}
                </AppText>
              </View>

              <AppBadge
                label={isUpcoming ? "Akan Datang" : "Selesai"}
                type={isUpcoming ? "primary" : "success"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Clock3 size={14} color={theme.colors.textSecondary} />

              <AppText
                size="small"
                color={theme.colors.textSecondary}
                style={{
                  marginLeft: 6,
                }}
              >
                {item.time}
              </AppText>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 6,
              }}
            >
              <MapPin size={14} color={theme.colors.textSecondary} />

              <AppText
                size="small"
                color={theme.colors.textSecondary}
                numberOfLines={1}
                style={{
                  marginLeft: 6,
                  flex: 1,
                }}
              >
                {item.location}
              </AppText>
            </View>
          </View>

          <ChevronRight size={18} color={theme.colors.textSecondary} />
        </View>
      </AppCard>
    </TouchableOpacity>
  );
}
