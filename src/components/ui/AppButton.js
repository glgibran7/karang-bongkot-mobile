import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppButton({
  title,
  onPress,
  loading = false,
  disabled = false,
}) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={{
        backgroundColor: theme.colors.primary,

        borderRadius: theme.radius.md,

        paddingVertical: 14,

        opacity: disabled || loading ? 0.7 : 1,
      }}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
