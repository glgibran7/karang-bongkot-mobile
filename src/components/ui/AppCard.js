import { View } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppCard({ children, style }) {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.card,

          padding: theme.spacing.md,

          borderRadius: theme.radius.lg,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
