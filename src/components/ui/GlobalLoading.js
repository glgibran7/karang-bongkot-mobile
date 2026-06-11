import { ActivityIndicator, View } from "react-native";

import { useLoadingStore } from "../../store/loadingStore";

export default function GlobalLoading() {
  const loading = useLoadingStore((state) => state.loading);

  if (!loading) return null;

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(0,0,0,0.3)",

        zIndex: 9999,
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
