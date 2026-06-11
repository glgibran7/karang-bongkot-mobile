import { Linking, TouchableOpacity, View } from "react-native";

import { MessageCircle, Phone } from "lucide-react-native";

import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function KontakCard({ item }) {
  const { theme } = useTheme();

  const handleCall = () => {
    Linking.openURL(`tel:${item.phone}`);
  };

  const handleWhatsapp = () => {
    const number = item.phone.replace(/^0/, "62");

    Linking.openURL(`https://wa.me/${number}`);
  };

  return (
    <AppCard
      style={{
        marginBottom: 12,
      }}
    >
      <AppText weight="700">{item.jabatan}</AppText>

      <AppText
        style={{
          marginTop: 4,
        }}
      >
        {item.nama}
      </AppText>

      <AppText
        size="small"
        style={{
          marginTop: 4,
        }}
      >
        {item.phone}
      </AppText>

      <View
        style={{
          flexDirection: "row",
          marginTop: 14,
          gap: 12,
        }}
      >
        <TouchableOpacity onPress={handleCall}>
          <Phone size={20} color={theme.colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleWhatsapp}>
          <MessageCircle size={20} color="#22C55E" />
        </TouchableOpacity>
      </View>
    </AppCard>
  );
}
