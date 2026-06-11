import { ScrollView } from "react-native";

import AppHeader from "./AppHeader";
import AppLayout from "./AppLayout";

export default function AppScreen({ title, children, scroll = true }) {
  const Content = scroll ? ScrollView : ({ children }) => children;

  return (
    <AppLayout>
      {title && <AppHeader title={title} />}

      <Content
        contentContainerStyle={{
          padding: 16,
        }}
      >
        {children}
      </Content>
    </AppLayout>
  );
}
