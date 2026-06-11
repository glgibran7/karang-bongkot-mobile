import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

import AppText from "../ui/AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function ProfileMenuItem({ icon, title, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 14,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          {icon}

          <AppText>{title}</AppText>
        </View>

        <ChevronRight size={18} color={theme.colors.textSecondary} />
      </View>
    </TouchableOpacity>
  );
}
