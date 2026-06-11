import { TouchableOpacity, View } from "react-native";

import AppText from "./AppText";
import SectionTitle from "./SectionTitle";

export default function AppSectionHeader({ title, actionText, onPress }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
      }}
    >
      <SectionTitle title={title} />

      {actionText && (
        <TouchableOpacity onPress={onPress}>
          <AppText size="small" weight="600">
            {actionText}
          </AppText>
        </TouchableOpacity>
      )}
    </View>
  );
}
