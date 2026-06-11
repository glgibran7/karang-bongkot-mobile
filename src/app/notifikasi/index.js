import { useMemo, useState } from "react";

import AppFilterChips from "../../components/ui/AppFilterChips";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppSearchBar from "../../components/ui/AppSearchBar";

import NotifikasiCard from "../../components/cards/NotifikasiCard";
import AppEmpty from "../../components/ui/AppEmpty";

import { notifikasi as initialNotifications } from "../../mock/notifikasi";

export default function NotifikasiScreen() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [notifications, setNotifications] = useState(initialNotifications);

  const filterOptions = [
    {
      label: "Semua",
      value: "all",
    },
    {
      label: "Belum Dibaca",
      value: "unread",
    },
    {
      label: "Sudah Dibaca",
      value: "read",
    },
  ];

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        isRead: true,
      }))
    );
  };

  const filteredData = useMemo(() => {
    return notifications.filter((item) => {
      const matchSearch =
        item.title?.toLowerCase().includes(search.toLowerCase()) ||
        item.message?.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        filter === "all"
          ? true
          : filter === "unread"
            ? item.isRead === false
            : item.isRead === true;

      return matchSearch && matchFilter;
    });
  }, [notifications, search, filter]);

  const isEmpty = filteredData.length === 0;

  return (
    <AppLayout>
      <AppHeader
        title="Notifikasi"
        subtittle="Semua notifikasi"
        showBack
        rightAction={{
          label: "Semua Dibaca",
          onPress: markAllAsRead,
        }}
      />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <AppSearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Cari notifikasi..."
        />

        <AppFilterChips
          value={filter}
          onChange={setFilter}
          options={filterOptions}
        />

        {isEmpty ? (
          <AppEmpty
            title="Notifikasi tidak ditemukan"
            description="Coba ubah kata kunci atau filter."
          />
        ) : (
          filteredData.map((item) => (
            <NotifikasiCard key={item.id} item={item} />
          ))
        )}
      </AppScrollView>
    </AppLayout>
  );
}
