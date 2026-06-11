import { useMemo, useState } from "react";

import { RefreshControl, ScrollView } from "react-native";

import AppLayout from "../../components/ui/AppLayout";
import AppSearchBar from "../../components/ui/AppSearchBar";

import KontakCard from "../../components/cards/KontakCard";

import AppHeader from "../../components/ui/AppHeader";
import { kontak } from "../../mock/kontak";

export default function KontakScreen() {
  const [search, setSearch] = useState("");

  const [refreshing, setRefreshing] = useState(false);

  const filteredData = useMemo(() => {
    return kontak.filter(
      (item) =>
        item.nama.toLowerCase().includes(search.toLowerCase()) ||
        item.jabatan.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <AppLayout>
      <AppHeader title="Kontak Desa" showBack />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <AppSearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Cari kontak..."
        />

        {filteredData.map((item) => (
          <KontakCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </AppLayout>
  );
}
