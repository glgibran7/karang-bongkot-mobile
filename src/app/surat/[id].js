import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import AppBadge from "../../components/ui/AppBadge";
import AppCard from "../../components/ui/AppCard";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppText from "../../components/ui/AppText";

import TrackingStep from "../../components/surat/TrackingStep";

import { surat } from "../../mock/surat";

import { getTracking } from "../../utils/suratTracking";

import { getSuratStatus } from "../../utils/suratStatus";

export default function DetailSuratScreen() {
  const { id } = useLocalSearchParams();

  const data = surat.find((item) => item.id === Number(id));

  if (!data) return null;

  const status = getSuratStatus(data.status);

  const tracking = getTracking(data.status);

  return (
    <AppLayout>
      <AppHeader title="Surat Saya" subtittle="Detail Surat" showBack />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <AppCard>
          <AppText size="title" weight="700">
            {data.jenis}
          </AppText>

          <AppText
            style={{
              marginTop: 6,
            }}
          >
            {data.nomor}
          </AppText>

          <View
            style={{
              marginTop: 12,
            }}
          >
            <AppBadge label={status.label} type={status.type} />
          </View>
        </AppCard>

        <View
          style={{
            height: 16,
          }}
        />

        <AppCard>
          <AppText
            weight="700"
            style={{
              marginBottom: 12,
            }}
          >
            Informasi Surat
          </AppText>

          <AppText>Pemohon:</AppText>

          <AppText
            weight="600"
            style={{
              marginBottom: 12,
            }}
          >
            {data.pemohon}
          </AppText>

          <AppText>Tanggal:</AppText>

          <AppText
            weight="600"
            style={{
              marginBottom: 12,
            }}
          >
            {data.tanggal}
          </AppText>

          <AppText>Keterangan:</AppText>

          <AppText weight="600">{data.keterangan}</AppText>
        </AppCard>

        <View
          style={{
            height: 16,
          }}
        />

        <AppCard>
          <AppText
            weight="700"
            style={{
              marginBottom: 16,
            }}
          >
            Tracking Surat
          </AppText>

          <TrackingStep title="Surat Diajukan" active={tracking.submitted} />

          <TrackingStep title="Verifikasi" active={tracking.verified} />

          <TrackingStep title="Diproses" active={tracking.processing} />

          <TrackingStep title="Selesai" active={tracking.finished} last />
        </AppCard>
      </AppScrollView>
    </AppLayout>
  );
}
