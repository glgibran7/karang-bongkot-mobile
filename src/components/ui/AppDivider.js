import { View } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppDivider() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        height: 1,

        backgroundColor: theme.colors.border,

        marginVertical: theme.spacing.md,
      }}
    />
  );
}
