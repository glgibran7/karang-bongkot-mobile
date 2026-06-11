import { Image, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import AppBadge from "../../components/ui/AppBadge";
import AppCard from "../../components/ui/AppCard";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppText from "../../components/ui/AppText";

import TrackingStep from "../../components/surat/TrackingStep";

import { aduan } from "../../mock/aduan";

import { getAduanStatus } from "../../utils/aduanStatus";

import { getAduanTracking } from "../../utils/aduanTracking";

export default function DetailAduanScreen() {
  const { id } = useLocalSearchParams();

  const data = aduan.find((item) => item.id === Number(id));

  if (!data) return null;

  const status = getAduanStatus(data.status);

  const tracking = getAduanTracking(data.status);

  return (
    <AppLayout>
      <AppHeader title="Aduan" subtittle="Detail aduan anda" showBack />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <Image
          source={{
            uri: data.foto,
          }}
          style={{
            width: "100%",
            height: 220,
            borderRadius: 16,
            marginBottom: 16,
          }}
        />

        <AppCard>
          <AppText size="title" weight="700">
            {data.judul}
          </AppText>

          <AppText
            style={{
              marginTop: 6,
            }}
          >
            {data.kategori}
          </AppText>

          <View
            style={{
              marginTop: 12,
            }}
          >
            <AppBadge label={status.label} type={status.type} />
          </View>
        </AppCard>

        <View style={{ height: 16 }} />

        <AppCard>
          <AppText
            weight="700"
            style={{
              marginBottom: 12,
            }}
          >
            Deskripsi
          </AppText>

          <AppText>{data.deskripsi}</AppText>
        </AppCard>

        <View style={{ height: 16 }} />

        <AppCard>
          <AppText
            weight="700"
            style={{
              marginBottom: 12,
            }}
          >
            Tanggapan Petugas
          </AppText>

          <AppText>{data.tanggapan || "Belum ada tanggapan."}</AppText>
        </AppCard>

        <View style={{ height: 16 }} />

        <AppCard>
          <AppText
            weight="700"
            style={{
              marginBottom: 16,
            }}
          >
            Tracking Aduan
          </AppText>

          <TrackingStep title="Aduan Dikirim" active={tracking.submitted} />

          <TrackingStep title="Diverifikasi" active={tracking.verified} />

          <TrackingStep title="Ditindaklanjuti" active={tracking.processing} />

          <TrackingStep title="Selesai" active={tracking.finished} last />
        </AppCard>
      </AppScrollView>
    </AppLayout>
  );
}
