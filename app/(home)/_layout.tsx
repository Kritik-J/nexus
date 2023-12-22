import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="discussion/[id]" />
      <Stack.Screen name="community/[id]" />
    </Stack>
  );
}
