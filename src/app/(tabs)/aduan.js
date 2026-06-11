import { useMemo, useState } from "react";

import { router } from "expo-router";

import { RefreshControl, ScrollView } from "react-native";

import EmptyState from "../../components/ui/AppEmpty";
import AppFilterChips from "../../components/ui/AppFilterChips";
import AppLayout from "../../components/ui/AppLayout";
import AppSearchBar from "../../components/ui/AppSearchBar";

import AppFab from "../../components/ui/AppFab";

import AduanCard from "../../components/cards/AduanCard";

import { aduan } from "../../mock/aduan";

export default function AduanScreen() {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const filterOptions = [
    {
      label: "Semua",
      value: "all",
    },

    {
      label: "Menunggu",
      value: "pending",
    },

    {
      label: "Diproses",
      value: "process",
    },

    {
      label: "Selesai",
      value: "done",
    },
  ];

  const filteredData = useMemo(() => {
    return aduan.filter((item) => {
      const matchSearch = item.judul
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchFilter = filter === "all" ? true : item.status === filter;

      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <AppLayout>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      >
        <AppSearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Cari aduan..."
        />

        <AppFilterChips
          value={filter}
          onChange={setFilter}
          options={filterOptions}
        />

        {filteredData.length === 0 ? (
          <EmptyState
            title="Tidak ada aduan"
            description="Belum ada data yang sesuai."
          />
        ) : (
          filteredData.map((item) => <AduanCard key={item.id} item={item} />)
        )}
      </ScrollView>

      <AppFab onPress={() => router.push("/aduan/create")} />
    </AppLayout>
  );
}
