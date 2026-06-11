import { TextInput, View } from "react-native";

import AppText from "../ui/AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppTextarea({
  label,
  value,
  onChangeText,
  placeholder,
}) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      <AppText
        weight="600"
        style={{
          marginBottom: 8,
        }}
      >
        {label}
      </AppText>

      <TextInput
        multiline
        textAlignVertical="top"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        style={{
          minHeight: 120,

          borderWidth: 1,
          borderColor: theme.colors.border,

          borderRadius: 12,

          color: theme.colors.text,

          backgroundColor: theme.colors.card,

          padding: 14,
        }}
      />
    </View>
  );
}
