import { router } from "expo-router";
import { useMemo, useRef, useState } from "react";

import { Image, TouchableOpacity, View } from "react-native";

import { ArrowUp } from "lucide-react-native";
import AppEmpty from "../../components/ui/AppEmpty";
import AppFab from "../../components/ui/AppFab";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppSearchInput from "../../components/ui/AppSearchBar";
import AppText from "../../components/ui/AppText";

import { berita } from "../../mock/berita";

export default function BeritaScreen() {
  const [search, setSearch] = useState("");
  const scrollRef = useRef(null);
  const [showFab, setShowFab] = useState(false);

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
        ref={scrollRef}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onScroll={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;

          setShowFab((prev) => {
            if (offsetY > 200 && !prev) return true;
            if (offsetY <= 200 && prev) return false;
            return prev;
          });
        }}
        scrollEventThrottle={16}
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
      {showFab && (
        <AppFab
          icon={ArrowUp}
          backgroundColor="#2563EB"
          onPress={() => {
            scrollRef.current?.scrollTo({
              y: 0,
              animated: true,
            });
          }}
        />
      )}
    </AppLayout>
  );
}
