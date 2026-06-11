import { Modal, TouchableOpacity, View } from "react-native";

import { useState } from "react";

import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";

import { useTheme } from "../../theme/ThemeProvider";

export default function AppSelect({ label, value, options, onChange }) {
  const { theme } = useTheme();

  const [visible, setVisible] = useState(false);

  return (
    <>
      <AppText
        weight="600"
        style={{
          marginBottom: 8,
        }}
      >
        {label}
      </AppText>

      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={{
          borderWidth: 1,
          borderColor: theme.colors.border,

          padding: 14,

          borderRadius: 12,
        }}
      >
        <AppText>{value || "Pilih"}</AppText>
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <AppCard>
            {options.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => {
                  onChange(item);

                  setVisible(false);
                }}
              >
                <AppText
                  style={{
                    padding: 16,
                  }}
                >
                  {item}
                </AppText>
              </TouchableOpacity>
            ))}
          </AppCard>
        </View>
      </Modal>
    </>
  );
}
