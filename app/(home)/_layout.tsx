import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="messages" />
      <Stack.Screen name="discussion/[id]" />
      <Stack.Screen name="community/[id]" />
    </Stack>
  );
};

export default HomeLayout;
