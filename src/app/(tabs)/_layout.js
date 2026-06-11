// app/(tabs)/_layout.js
import {
  Calendar,
  FileText,
  House,
  Megaphone,
  Newspaper,
} from "lucide-react-native";

import { Tabs } from "expo-router";
import { useTheme } from "../../theme/ThemeProvider";

export default function TabsLayout() {
  const { theme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        sceneStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="berita"
        options={{
          title: "Berita",
          tabBarIcon: ({ color, size }) => (
            <Newspaper color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="agenda"
        options={{
          title: "Agenda",
          tabBarIcon: ({ color, size }) => (
            <Calendar color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="surat"
        options={{
          title: "Surat",
          tabBarIcon: ({ color, size }) => (
            <FileText color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="aduan"
        options={{
          title: "Aduan",
          tabBarIcon: ({ color, size }) => (
            <Megaphone color={color} size={size} />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      /> */}
    </Tabs>
  );
}
