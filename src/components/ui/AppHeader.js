import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";
import AppText from "./AppText";

export default function AppHeader({
  title,
  subtittle,
  showBack = false,
  rightComponent,
}) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {showBack && (
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              marginRight: 12,
            }}
          >
            <ArrowLeft size={24} color={theme.colors.text} />
          </TouchableOpacity>
        )}

        <AppText size="title" weight="700">
          {title}
        </AppText>
      </View>

      {rightComponent}
    </View>
  );
}
