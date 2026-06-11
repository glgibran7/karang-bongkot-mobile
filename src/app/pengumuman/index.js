import { useState } from "react";

import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppSearchInput from "../../components/ui/AppSearchBar";

import PengumumanCard from "../../components/cards/PengumumanCard";

import { pengumuman } from "../../mock/pengumuman";

export default function PengumumanScreen() {
  const [search, setSearch] = useState("");

  const filteredData = pengumuman.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <AppHeader title="Pengumuman" subtittle="Semua Pengumuman" showBack />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
        }}
      >
        <AppSearchInput
          value={search}
          onChangeText={setSearch}
          placeholder="Cari pengumuman..."
        />

        {filteredData.map((item) => (
          <PengumumanCard key={item.id} item={item} />
        ))}
      </AppScrollView>
    </AppLayout>
  );
}
