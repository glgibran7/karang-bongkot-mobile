import { TouchableOpacity, View } from "react-native";

import AppText from "./AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppSegmentedControl({ options, value, onChange }) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: theme.colors.card,
        borderRadius: 14,
        padding: 4,
        marginBottom: 20,
      }}
    >
      {options.map((option) => {
        const active = value === option.value;

        return (
          <TouchableOpacity
            key={option.value}
            onPress={() => onChange(option.value)}
            style={{
              flex: 1,
              paddingVertical: 10,

              borderRadius: 10,

              backgroundColor: active ? theme.colors.primary : "transparent",
            }}
          >
            <AppText
              align="center"
              color={active ? "#fff" : theme.colors.text}
              weight="600"
            >
              {option.label}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
