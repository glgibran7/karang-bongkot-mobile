import { Search } from "lucide-react-native";
import { TextInput, View } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppSearchBar({
  value,
  onChangeText,
  placeholder = "Cari...",
}) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",

        borderWidth: 1,
        borderColor: theme.colors.border,

        backgroundColor: theme.colors.card,

        borderRadius: 14,

        paddingHorizontal: 12,
        marginBottom: 16,
      }}
    >
      <Search size={18} color={theme.colors.textSecondary} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        style={{
          flex: 1,
          color: theme.colors.text,
          paddingVertical: 12,
          marginLeft: 8,
        }}
      />
    </View>
  );
}
