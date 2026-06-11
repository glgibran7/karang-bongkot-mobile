import { useState } from "react";

import AgendaCard from "../../components/cards/AgendaCard";

import { agenda } from "../../mock/agenda";

import AppEmpty from "../../components/ui/AppEmpty";
import AppFilterChips from "../../components/ui/AppFilterChips";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppSearchBar from "../../components/ui/AppSearchBar";

export default function AgendaScreen() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filterOptions = [
    {
      label: "Semua",
      value: "all",
    },
    {
      label: "Akan Datang",
      value: "upcoming",
    },
    {
      label: "Selesai",
      value: "done",
    },
  ];

  const filteredData = agenda.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" ? true : item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <AppLayout>
      {/* <AppHeader title="Agenda Desa" subtittle="Pantau seluruh agenda desa" /> */}

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 120,
        }}
      >
        <AppSearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Cari agenda..."
        />

        <AppFilterChips
          value={statusFilter}
          onChange={setStatusFilter}
          options={filterOptions}
        />

        {filteredData.length === 0 ? (
          <AppEmpty
            title="Agenda tidak ditemukan"
            description="Coba ubah kata kunci atau filter."
          />
        ) : (
          filteredData.map((item) => <AgendaCard key={item.id} item={item} />)
        )}
      </AppScrollView>

      {/* <AppFab onPress={() => router.push("/agenda/create")} /> */}
    </AppLayout>
  );
}
