import React from "react";
import { Box } from "@/components/box";
import useTheme from "@/hooks/useTheme";
import { Header } from "@/components/header";

const ChatScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <Header title={"@username"} />
    </Box>
  );
};

export default ChatScreen;
