import { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "../../theme/ThemeProvider";
import AppText from "../ui/AppText";

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
          borderRadius: 14,
          padding: 14,
          backgroundColor: theme.colors.card,
        }}
      >
        <AppText color={value ? undefined : theme.colors.textSecondary}>
          {value || "Pilih Jenis"}
        </AppText>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable
          onPress={() => setVisible(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "flex-end",
          }}
        >
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: theme.colors.background,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingTop: 12,
              paddingBottom: 24,
            }}
          >
            {/* Handle */}
            <View
              style={{
                width: 50,
                height: 5,
                borderRadius: 999,
                backgroundColor: theme.colors.border,
                alignSelf: "center",
                marginBottom: 16,
              }}
            />

            {/* Header */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                marginBottom: 12,
              }}
            >
              <AppText weight="700" size={18}>
                Pilih Jenis
              </AppText>

              <TouchableOpacity onPress={() => setVisible(false)}>
                <AppText color={theme.colors.primary}>Tutup</AppText>
              </TouchableOpacity>
            </View>

            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                const selected = item === value;

                return (
                  <TouchableOpacity
                    onPress={() => {
                      onChange(item);
                      setVisible(false);
                    }}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 20,
                      paddingVertical: 16,
                    }}
                  >
                    <AppText weight={selected ? "600" : "400"}>{item}</AppText>

                    {selected && (
                      <AppText color={theme.colors.primary}>✓</AppText>
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
