import { View } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";
import AppText from "./AppText";

export default function AppBadge({ label, type = "primary" }) {
  const { theme } = useTheme();

  const variants = {
    primary: {
      bg: theme.colors.primary,
      text: "#FFFFFF",
    },

    success: {
      bg: theme.colors.success,
      text: "#FFFFFF",
    },

    warning: {
      bg: theme.colors.warning,
      text: "#FFFFFF",
    },

    danger: {
      bg: theme.colors.danger,
      text: "#FFFFFF",
    },

    secondary: {
      bg: theme.colors.secondary,
      text: "#FFFFFF",
    },
  };

  const current = variants[type] || variants.primary;

  return (
    <View
      style={{
        alignSelf: "flex-start",

        backgroundColor: current.bg,

        paddingHorizontal: 12,
        paddingVertical: 6,

        borderRadius: theme.radius.full,
      }}
    >
      <AppText color={current.text} size="small" weight="600">
        {label}
      </AppText>
    </View>
  );
}
