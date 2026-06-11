import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import AppBadge from "../../components/ui/AppBadge";
import AppEmpty from "../../components/ui/AppEmpty";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppText from "../../components/ui/AppText";

import { pengumuman } from "../../mock/pengumuman";

export default function PengumumanDetailScreen() {
  const { id } = useLocalSearchParams();

  const item = pengumuman.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <AppLayout>
        <AppHeader title="Detail Pengumuman" showBack />

        <AppEmpty title="Data tidak ditemukan" />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <AppHeader title="Detail Pengumuman" showBack />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <AppBadge label={item.category} type="primary" />

        <AppText
          size="title"
          weight="700"
          style={{
            marginTop: 16,
          }}
        >
          {item.title}
        </AppText>

        <AppText
          size="small"
          style={{
            marginTop: 8,
          }}
        >
          {item.date}
        </AppText>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <AppText
            style={{
              lineHeight: 26,
            }}
          >
            {item.content}
          </AppText>
        </View>
      </AppScrollView>
    </AppLayout>
  );
}
