import { TouchableOpacity } from "react-native";

export default function AppFab({
  onPress,
  icon: Icon,
  backgroundColor = "#2563EB",
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        right: 20,
        bottom: 24,
        width: 50,
        height: 50,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      {Icon && <Icon color="#fff" size={24} />}
    </TouchableOpacity>
  );
}
