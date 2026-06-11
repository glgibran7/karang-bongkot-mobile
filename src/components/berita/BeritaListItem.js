import { router } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";

import AppText from "../ui/AppText";

export default function BeritaListItem({ item }) {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/berita/${item.id}`)}
      style={{
        marginBottom: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 12,
          }}
        />

        <View
          style={{
            flex: 1,
            marginLeft: 12,
          }}
        >
          <AppText weight="700" numberOfLines={2}>
            {item.title}
          </AppText>

          <AppText
            size="small"
            numberOfLines={2}
            style={{
              marginTop: 4,
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
      </View>
    </TouchableOpacity>
  );
}
