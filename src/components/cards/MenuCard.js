import { Text, TouchableOpacity } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";

export default function MenuCard({ title, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        minHeight: 100,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: theme.colors.card,

        borderRadius: theme.radius.lg,
      }}
    >
      <Text
        style={{
          color: theme.colors.text,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
