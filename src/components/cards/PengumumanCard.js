import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

import AppBadge from "../ui/AppBadge";
import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

export default function PengumumanCard({ item }) {
  return (
    <TouchableOpacity onPress={() => router.push(`/pengumuman/${item.id}`)}>
      <AppCard
        style={{
          marginBottom: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AppBadge label={item.category} type="primary" />
        </View>

        <AppText
          weight="700"
          style={{
            marginTop: 12,
          }}
        >
          {item.title}
        </AppText>

        <AppText
          size="small"
          style={{
            marginTop: 6,
          }}
        >
          {item.summary}
        </AppText>

        <AppText
          size="small"
          style={{
            marginTop: 8,
          }}
        >
          {item.date}
        </AppText>
      </AppCard>
    </TouchableOpacity>
  );
}
