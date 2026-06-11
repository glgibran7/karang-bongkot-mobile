import { Text } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";

export default function AppText({
  children,
  size = "body",
  color,
  weight = "normal",
  style,
}) {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        {
          color: color || theme.colors.text,

          fontSize: theme.typography[size] || theme.typography.body,

          fontWeight: weight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
