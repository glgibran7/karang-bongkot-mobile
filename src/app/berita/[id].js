import { useLocalSearchParams } from "expo-router";
import { Image, View } from "react-native";

import AppEmpty from "../../components/ui/AppEmpty";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppText from "../../components/ui/AppText";

import { berita } from "../../mock/berita";

export default function BeritaDetailScreen() {
  const { id } = useLocalSearchParams();

  const item = berita.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <AppLayout>
        <AppHeader title="Berita" subtittle="Detail Berita" showBack />

        <AppEmpty title="Berita tidak ditemukan" />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <AppHeader title="Detail Berita" showBack />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: "100%",
            height: 220,
            borderRadius: 16,
          }}
          resizeMode="cover"
        />

        <AppText
          size="title"
          weight="700"
          style={{
            marginTop: 16,
          }}
        >
          {item.title}
        </AppText>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 16,
            marginBottom: 20,
          }}
        >
          <Image
            source={{
              uri: item.authorImage,
            }}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
            }}
          />

          <View
            style={{
              marginLeft: 12,
            }}
          >
            <AppText weight="600">{item.author}</AppText>

            <AppText size="small">{item.date}</AppText>
          </View>
        </View>

        {/* Cek apakah content berupa Array atau String */}
        {Array.isArray(item.content) ? (
          item.content.map((paragraf, index) => (
            <AppText
              key={index}
              style={{
                lineHeight: 26,
                marginBottom: 14,
              }}
            >
              {paragraf}
            </AppText>
          ))
        ) : (
          <AppText
            style={{
              lineHeight: 26,
            }}
          >
            {item.content}
          </AppText>
        )}
      </AppScrollView>
    </AppLayout>
  );
}
