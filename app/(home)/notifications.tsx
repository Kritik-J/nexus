import React from "react";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { JoinedNotification } from "@/components/notification";
import { FlatList } from "react-native";

export default function NotificationScreen() {
  return (
    <Box>
      <Header title={"Notifications"} />

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        renderItem={({ item }) => <JoinedNotification />}
        keyExtractor={(item) => item.toString()}
      />
    </Box>
  );
}
