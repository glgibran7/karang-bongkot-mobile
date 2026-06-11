import { TouchableOpacity } from "react-native";

import { Plus } from "lucide-react-native";

export default function AppFab({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",

        right: 20,
        bottom: 24,

        width: 60,
        height: 60,

        borderRadius: 999,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#0EA5E9",
      }}
    >
      <Plus color="#fff" size={24} />
    </TouchableOpacity>
  );
}
