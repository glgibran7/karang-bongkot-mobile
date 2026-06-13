import { TextInput, View } from "react-native";

import AppText from "./AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  rightElement,
  ...props
}) {
  const { theme } = useTheme();

  return (
    <View>
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

      <View
        style={{
          backgroundColor: theme.colors.card,
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.md,

          paddingHorizontal: theme.spacing.md,

          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textSecondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{
            flex: 1,
            color: theme.colors.text,
            height: 50,
          }}
          {...props}
        />

        {rightElement}
      </View>
    </View>
  );
}
