import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(index)",
};

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tabIconSelected,
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: theme.colors.headerBackground,
        },
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
