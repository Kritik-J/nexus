import React from "react";
import { Box } from "@/components/box";
import { Header, MessagesHeader } from "@/components/header";
import { Searchbar } from "@/components/searchbar";
import { YStack } from "tamagui";
import { ChatListItem } from "@/components/chatlistitem";

const MessageScreen = () => {
  return (
    <Box>
      <MessagesHeader />
      <YStack p={10}>
        <Searchbar placeholder={"Search..."} borderRadius={25} />
      </YStack>

      <ChatListItem />
    </Box>
  );
};

export default MessageScreen;
