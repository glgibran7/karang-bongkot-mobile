import { Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";

export default function AppEmpty({ title = "Belum Ada Data" }) {
  const { theme } = useTheme();

  return (
    <View className="items-center justify-center py-10">
      <Text
        style={{
          color: theme.colors.textSecondary,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
