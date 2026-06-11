import { TextInput, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";

export default function AppInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.card,
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.radius.md,
        paddingHorizontal: theme.spacing.md,
      }}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={{
          color: theme.colors.text,
          height: 50,
        }}
      />
    </View>
  );
}
