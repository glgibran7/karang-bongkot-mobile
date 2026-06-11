import { View } from "react-native";

import AppText from "./AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppAvatar({ name = "W", size = 50 }) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        width: size,
        height: size,

        borderRadius: size / 2,

        backgroundColor: theme.colors.primary,

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText color="#fff" weight="700">
        {name.charAt(0)}
      </AppText>
    </View>
  );
}
