import { ScrollView, TouchableOpacity } from "react-native";

import AppText from "./AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppFilterChips({ value, onChange, options }) {
  const { theme } = useTheme();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 8,
        paddingBottom: 16,
      }}
    >
      {options.map((item) => {
        const active = value === item.value;

        return (
          <TouchableOpacity
            key={item.value}
            onPress={() => onChange(item.value)}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,

              borderRadius: 999,

              backgroundColor: active
                ? theme.colors.primary
                : theme.colors.card,

              borderWidth: 1,

              borderColor: active ? theme.colors.primary : theme.colors.border,
            }}
          >
            <AppText color={active ? "#FFFFFF" : theme.colors.text}>
              {item.label}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
