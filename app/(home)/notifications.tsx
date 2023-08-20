import React from "react";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { JoinedNotification } from "@/components/notification";

const NotificationScreen = () => {
  return (
    <Box>
      <Header title={"Notifications"} />

      <JoinedNotification />
      <JoinedNotification />
      <JoinedNotification />
      <JoinedNotification />
      <JoinedNotification />
      <JoinedNotification />
      <JoinedNotification />
      <JoinedNotification />
    </Box>
  );
};

export default NotificationScreen;
