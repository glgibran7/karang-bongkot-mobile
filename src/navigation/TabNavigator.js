import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" />
      <Tab.Screen name="Surat" />
      <Tab.Screen name="Aduan" />
      <Tab.Screen name="Agenda" />
      <Tab.Screen name="Profil" />
    </Tab.Navigator>
  );
}
