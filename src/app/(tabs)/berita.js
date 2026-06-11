import { router } from "expo-router";
import { useMemo, useState } from "react";

import { Image, TouchableOpacity, View } from "react-native";

import AppEmpty from "../../components/ui/AppEmpty";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppSearchInput from "../../components/ui/AppSearchBar";
import AppText from "../../components/ui/AppText";

import { berita } from "../../mock/berita";

export default function BeritaScreen() {
  const [search, setSearch] = useState("");

  const [refreshing, setRefreshing] = useState(false);

  const filteredBerita = useMemo(() => {
    return berita.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const onRefresh = async () => {
    setRefreshing(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setRefreshing(false);
  };

  return (
    <AppLayout>
      <AppScrollView
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <AppSearchInput
          value={search}
          onChangeText={setSearch}
          placeholder="Cari berita..."
        />

        {filteredBerita.length === 0 ? (
          <AppEmpty title="Berita tidak ditemukan" />
        ) : (
          filteredBerita.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => router.push(`/berita/${item.id}`)}
            >
              <View
                style={{
                  marginBottom: 20,
                }}
              >
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: "100%",
                    height: 180,
                    borderRadius: 16,
                  }}
                  resizeMode="cover"
                />

                <AppText
                  size="title"
                  weight="700"
                  style={{
                    marginTop: 12,
                  }}
                >
                  {item.title}
                </AppText>

                <AppText
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
              </View>
            </TouchableOpacity>
          ))
        )}
      </AppScrollView>
    </AppLayout>
  );
}
