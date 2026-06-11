import { View } from "react-native";

import AppCard from "../../components/ui/AppCard";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppText from "../../components/ui/AppText";

export default function TentangScreen() {
  return (
    <AppLayout>
      <AppHeader title="Tentang Aplikasi" showBack />

      <View
        style={{
          padding: 16,
        }}
      >
        <AppCard>
          <AppText size="title" weight="700">
            Desa Digital
          </AppText>

          <AppText
            style={{
              marginTop: 8,
            }}
          >
            Aplikasi layanan desa yang memudahkan warga mengakses informasi,
            mengajukan surat, membuat pengaduan, dan melihat agenda desa.
          </AppText>

          <View
            style={{
              height: 16,
            }}
          />

          <AppText size="small">Versi 1.0.0</AppText>
        </AppCard>
      </View>
    </AppLayout>
  );
}
