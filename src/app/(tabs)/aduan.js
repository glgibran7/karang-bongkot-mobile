import { useMemo, useRef, useState } from "react";

import { router } from "expo-router";

import { RefreshControl, ScrollView } from "react-native";

import { ArrowUp, Plus } from "lucide-react-native";

import EmptyState from "../../components/ui/AppEmpty";
import AppFab from "../../components/ui/AppFab";
import AppFilterChips from "../../components/ui/AppFilterChips";
import AppLayout from "../../components/ui/AppLayout";
import AppSearchBar from "../../components/ui/AppSearchBar";

import AduanCard from "../../components/cards/AduanCard";

import { aduan } from "../../mock/aduan";

export default function AduanScreen() {
  const scrollRef = useRef(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [refreshing, setRefreshing] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const handleFabPress = () => {
    if (showScrollTop) {
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });

      return;
    }

    router.push("/aduan/create");
  };

  return (
    <AppLayout>
      <ScrollView
        ref={scrollRef}
        onScroll={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;

          setShowScrollTop(offsetY > 100);
        }}
        scrollEventThrottle={16}
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
      <AppFab
        icon={showScrollTop ? ArrowUp : Plus}
        onPress={handleFabPress}
        backgroundColor={
          showScrollTop
            ? "#2563EB" // biru = scroll ke atas
            : "#16A34A" // hijau = tambah aduan
        }
      />
    </AppLayout>
  );
}
