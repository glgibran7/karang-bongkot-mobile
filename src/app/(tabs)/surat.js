import { router } from "expo-router";
import { useState } from "react";

import AppEmpty from "../../components/ui/AppEmpty";
import AppFab from "../../components/ui/AppFab";
import AppFilterChips from "../../components/ui/AppFilterChips";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppSearchBar from "../../components/ui/AppSearchBar";

import SuratCard from "../../components/cards/SuratCard";

import { surat } from "../../mock/surat";

export default function SuratScreen() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filterOptions = [
    {
      label: "Semua",
      value: "all",
    },
    {
      label: "Pending",
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

  const filteredData = surat.filter((item) => {
    const matchSearch =
      item.jenis.toLowerCase().includes(search.toLowerCase()) ||
      item.nomor.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" ? true : item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <AppLayout>
      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 120,
        }}
      >
        <AppSearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Cari surat..."
        />

        <AppFilterChips
          value={statusFilter}
          onChange={setStatusFilter}
          options={filterOptions}
        />

        {filteredData.length === 0 ? (
          <AppEmpty
            title="Surat tidak ditemukan"
            description="Coba ubah kata kunci atau filter."
          />
        ) : (
          filteredData.map((item) => <SuratCard key={item.id} item={item} />)
        )}
      </AppScrollView>

      <AppFab onPress={() => router.push("/surat/create")} />
    </AppLayout>
  );
}
