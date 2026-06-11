import { TextInput, View } from "react-native";

import AppText from "../ui/AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
}) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      {label && (
        <AppText
          weight="600"
          style={{
            marginBottom: 8,
          }}
        >
          {label}
        </AppText>
      )}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        keyboardType={keyboardType}
        style={{
          borderWidth: 1,
          borderColor: theme.colors.border,

          backgroundColor: theme.colors.card,

          color: theme.colors.text,

          borderRadius: 12,

          paddingHorizontal: 14,
          paddingVertical: 12,
        }}
      />
    </View>
  );
}
