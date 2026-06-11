import { TouchableOpacity, View } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";
import AppText from "./AppText";

export default function StatCard({ title, subtitle, icon, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,

        backgroundColor: theme.colors.card,

        borderRadius: theme.radius.lg,

        padding: theme.spacing.md,

        borderWidth: 1,
        borderColor: theme.colors.border,
      }}
    >
      <View
        style={{
          marginBottom: 12,
        }}
      >
        {icon}
      </View>

      <AppText weight="700">{title}</AppText>

      {subtitle ? (
        <AppText
          size="small"
          color={theme.colors.textSecondary}
          style={{
            marginTop: 4,
          }}
        >
          {subtitle}
        </AppText>
      ) : null}
    </TouchableOpacity>
  );
}
