import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

export default function BeritaCard({ item }) {
  return (
    <TouchableOpacity onPress={() => router.push(`/berita/${item.id}`)}>
      <AppCard
        style={{
          marginBottom: 12,
        }}
      >
        <AppText weight="700">{item.title}</AppText>

        <AppText
          size="caption"
          weight="300"
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
