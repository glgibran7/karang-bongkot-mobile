import { RefreshControl, ScrollView } from "react-native";

export default function AppScrollView({
  children,
  refreshing,
  onRefresh,
  contentContainerStyle,
}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
}
