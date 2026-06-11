import { router } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";

import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

export default function FeaturedBeritaCard({ item }) {
  return (
    <TouchableOpacity onPress={() => router.push(`/berita/${item.id}`)}>
      <AppCard
        style={{
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: "100%",
            height: 180,
          }}
        />

        <View
          style={{
            paddingTop: 12,
          }}
        >
          <AppText size="title" weight="700">
            {item.title}
          </AppText>

          <AppText
            style={{
              marginTop: 8,
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
        </View>
      </AppCard>
    </TouchableOpacity>
  );
}
