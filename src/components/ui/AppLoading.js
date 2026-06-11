import { ActivityIndicator, View } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppLoading() {
  const { theme } = useTheme();

  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}
