import { Text } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";

export default function SectionTitle({ title }) {
  const { theme } = useTheme();

  return (
    <Text
      style={{
        color: theme.colors.text,
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 12,
      }}
    >
      {title}
    </Text>
  );
}
