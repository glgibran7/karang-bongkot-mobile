import { Image, View } from "react-native";

import AppBadge from "../ui/AppBadge";
import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

export default function ProfileHeaderCard({ profile }) {
  return (
    <AppCard>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: profile.photo,
          }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 999,
          }}
        />

        <AppText
          size="title"
          weight="700"
          style={{
            marginTop: 12,
          }}
        >
          {profile.nama}
        </AppText>

        <AppText size="small">
          NIK ••••••••••••
          {profile.nik.slice(-4)}
        </AppText>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <AppBadge label={profile.status} type="success" />
        </View>
      </View>
    </AppCard>
  );
}
