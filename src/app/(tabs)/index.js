import { useState } from "react";

import { router } from "expo-router";

import { Clock, FilePlus, MessageSquarePlus } from "lucide-react-native";

import { RefreshControl, ScrollView, View } from "react-native";

import HomeHeader from "../../components/home/HomeHeader";

import AppCard from "../../components/ui/AppCard";
import AppLayout from "../../components/ui/AppLayout";
import AppText from "../../components/ui/AppText";

import { MoonStar, Sun, Sunrise, Sunset } from "lucide-react-native";
import AppSectionHeader from "../../components/ui/AppSectionHeader";
import SectionTitle from "../../components/ui/SectionTitle";

import BeritaListItem from "../../components/berita/BeritaListItem";
import FeaturedBeritaCard from "../../components/berita/FeaturedBeritaCard";
import BannerCarousel from "../../components/home/BannerCarousel";

import PengumumanCard from "../../components/cards/PengumumanCard";

import { berita } from "../../mock/berita";
import { pengumuman } from "../../mock/pengumuman";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setRefreshing(false);
  };

  const hour = new Date().getHours();

  const greetingData =
    hour >= 5 && hour < 11
      ? {
          text: "Selamat Pagi",
          icon: <Sunrise size={14} color="#F59E0B" />,
        }
      : hour >= 11 && hour < 15
        ? {
            text: "Selamat Siang",
            icon: <Sun size={14} color="#F59E0B" />,
          }
        : hour >= 15 && hour < 18
          ? {
              text: "Selamat Sore",
              icon: <Sunset size={14} color="#F97316" />,
            }
          : {
              text: "Selamat Malam",
              icon: <MoonStar size={14} color="#6366F1" />,
            };

  return (
    <AppLayout>
      <HomeHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 120,
        }}
      >
        {/* Hero */}
        <BannerCarousel />

        <View style={{ height: 20 }} />

        {/* Info Ringkas: Greeting & Status */}
        <AppCard style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                {greetingData.icon}
                <AppText
                  size="small"
                  style={{ color: "#64748B", marginTop: 2 }}
                >
                  {greetingData.text},
                </AppText>
              </View>
              <AppText weight="700">Agib</AppText>
            </View>

            <View style={{ flexDirection: "row", gap: 16 }}>
              {/* Info Surat */}
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <FilePlus size={24} color="#F59E0B" />
                <AppText weight="700">1</AppText>
              </View>

              {/* Info Aduan */}
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <MessageSquarePlus size={24} color="#EF4444" />
                <AppText weight="700">3</AppText>
              </View>
            </View>
          </View>
        </AppCard>

        <View style={{ height: 20 }} />

        {/* Quick Actions */}

        {/* <SectionTitle title="Aksi Cepat" />

        <View
          style={{
            flexDirection: "row",
            gap: 12,
          }}
        >
          <QuickGridCard
            title="Surat"
            icon={<FilePlus size={26} color="#F59E0B" />}
          />

          <QuickGridCard
            title="Aduan"
            icon={<MessageSquarePlus size={26} color="#EF4444" />}
          />

          <QuickGridCard
            title="Agenda"
            icon={<CalendarDays size={26} color="#0EA5E9" />}
          />
        </View> */}

        {/* <View style={{ height: 20 }} /> */}

        {/* Informasi */}

        {/* 4. Informasi Hari Ini */}
        <SectionTitle title="Informasi Hari Ini" />
        <View style={{ marginTop: 8 }}>
          <AppCard
            style={{
              padding: 16,
              borderRadius: 12,
              borderLeftWidth: 4,
              borderLeftColor: "#0EA5E9", // Aksen warna biru di sebelah kiri biar eye-catching
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={{
                pading: 8,
                backgroundColor: "#F0F9FF",
                borderRadius: 8,
                padding: 8,
              }}
            >
              <Clock size={20} color="#0EA5E9" />
            </View>
            <View style={{ flex: 1 }}>
              <AppText weight="700">Rapat Desa Bulanan</AppText>
              <AppText
                size="small"
                style={{
                  marginTop: 2,
                  color: "#64748B",
                }}
              >
                15 Juni 2026 • Balai Desa
              </AppText>
            </View>
          </AppCard>
        </View>

        <View style={{ height: 24 }} />

        {/* Berita */}

        <AppSectionHeader
          title="Berita Terbaru"
          actionText="Lihat Semua"
          onPress={() => router.push("/berita")}
        />

        <FeaturedBeritaCard item={berita[0]} />

        <View style={{ height: 16 }} />

        <AppText
          weight="700"
          style={{
            marginBottom: 12,
          }}
        >
          Berita Lainnya
        </AppText>

        {berita.slice(1).map((item) => (
          <BeritaListItem key={item.id} item={item} />
        ))}

        <View style={{ height: 12 }} />

        {/* Pengumuman */}

        <AppSectionHeader
          title="Pengumuman"
          actionText="Lihat Semua"
          onPress={() => router.push("/pengumuman")}
        />

        {pengumuman.map((item) => (
          <PengumumanCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </AppLayout>
  );
}
