import { TouchableOpacity, View } from "react-native";

import AppBadge from "../ui/AppBadge";
import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

import { navigateNotification } from "../../utils/notifikasiNavigation";
import { getNofikasiType } from "../../utils/notifikasiType";

export default function NotifikasiCard({ item }) {
  const type = getNofikasiType(item.type);

  return (
    <TouchableOpacity
      onPress={() => navigateNotification(item)}
      activeOpacity={0.8}
    >
      <AppCard
        style={{
          marginBottom: 12,
          opacity: item.isRead ? 0.6 : 1,
        }}
      >
        {/* HEADER ROW (TITLE + BADGE) */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <AppText weight="700" style={{ flex: 1, paddingRight: 8 }}>
            {item.title}
          </AppText>

          <AppBadge label={type.label.toUpperCase()} type={type.type} />
        </View>

        {/* MESSAGE */}
        <AppText style={{ marginTop: 6 }}>{item.message}</AppText>

        {/* FOOTER */}
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AppText size="small">{item.date}</AppText>

          {!item.isRead && (
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#EF4444",
              }}
            />
          )}
        </View>
      </AppCard>
    </TouchableOpacity>
  );
}
