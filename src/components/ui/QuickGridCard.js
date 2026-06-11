import { TouchableOpacity, View } from "react-native";

import AppCard from "./AppCard";
import AppText from "./AppText";

export default function QuickGridCard({ icon, title, onPress }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
      }}
      onPress={onPress}
    >
      <AppCard
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginBottom: 8,
          }}
        >
          {icon}
        </View>

        <AppText size="small" weight="600">
          {title}
        </AppText>
      </AppCard>
    </TouchableOpacity>
  );
}
