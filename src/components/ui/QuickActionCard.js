import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

import AppCard from "./AppCard";
import AppText from "./AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function QuickActionCard({ title, description, icon, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <AppCard
        style={{
          marginBottom: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {icon}

          <View
            style={{
              flex: 1,
              marginLeft: 12,
            }}
          >
            <AppText weight="700">{title}</AppText>

            <AppText size="small" color={theme.colors.textSecondary}>
              {description}
            </AppText>
          </View>

          <ChevronRight size={20} color={theme.colors.textSecondary} />
        </View>
      </AppCard>
    </TouchableOpacity>
  );
}
