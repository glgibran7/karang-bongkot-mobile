import { router } from "expo-router";
import { FileText } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

import AppBadge from "../ui/AppBadge";
import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

import { getSuratStatus } from "../../utils/suratStatus";

export default function SuratCard({ item }) {
  const status = getSuratStatus(item.status);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push(`/surat/${item.id}`)}
    >
      <AppCard
        style={{
          marginBottom: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              flex: 1,
              marginRight: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FileText size={18} color="#2563EB" />

              <AppText weight="700">{item.jenis}</AppText>
            </View>

            <AppText
              size="small"
              style={{
                marginTop: 8,
                color: "#6B7280",
              }}
            >
              {item.nomor}
            </AppText>

            <AppText
              size="small"
              style={{
                marginTop: 2,
                color: "#6B7280",
              }}
            >
              {item.tanggal}
            </AppText>
          </View>

          <AppBadge label={status.label} type={status.type} />
        </View>
      </AppCard>
    </TouchableOpacity>
  );
}
