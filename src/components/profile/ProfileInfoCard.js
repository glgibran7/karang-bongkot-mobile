import { View } from "react-native";

import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

export default function ProfileInfoCard({ profile }) {
  const Row = ({ label, value }) => (
    <View
      style={{
        marginBottom: 14,
      }}
    >
      <AppText size="small">{label}</AppText>

      <AppText weight="600">{value}</AppText>
    </View>
  );

  return (
    <AppCard>
      <Row label="Nomor HP" value={profile.phone} />

      <Row label="RT / RW" value={`${profile.rt}/${profile.rw}`} />

      <Row label="Dusun" value={profile.dusun} />

      <Row label="Alamat" value={profile.alamat} />
    </AppCard>
  );
}
