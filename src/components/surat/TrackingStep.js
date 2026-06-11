import { View } from "react-native";

import AppText from "../ui/AppText";

export default function TrackingStep({ title, active, last }) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginRight: 12,
        }}
      >
        <View
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            backgroundColor: active ? "#16A34A" : "#CBD5E1",
          }}
        />

        {!last && (
          <View
            style={{
              width: 2,
              height: 40,
              backgroundColor: "#CBD5E1",
            }}
          />
        )}
      </View>

      <View
        style={{
          flex: 1,
          paddingBottom: 20,
        }}
      >
        <AppText weight="600">{title}</AppText>
      </View>
    </View>
  );
}
