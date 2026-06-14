import { forwardRef } from "react";
import { RefreshControl, ScrollView } from "react-native";

const AppScrollView = forwardRef(
  (
    { children, refreshing, onRefresh, contentContainerStyle, ...props },
    ref
  ) => {
    return (
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        {...props}
      >
        {children}
      </ScrollView>
    );
  }
);

export default AppScrollView;
