import React from "react";
import { Box } from "@/components/box";
import useTheme from "@/hooks/useTheme";
import { Header } from "@/components/header";
import { Input, View, XStack } from "tamagui";
import { IconButton } from "@/components/button";
import { Ionicons } from "@expo/vector-icons";
import { Message } from "@/components/message";
import { FlatList } from "react-native";

const ChatScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <Header title={"@username"} />

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <Message />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      <MessageInput />
    </Box>
  );
};

export default ChatScreen;

const MessageInput = () => {
  const theme = useTheme();

  return (
    <XStack p={10} alignItems={"center"} spaceDirection="horizontal" space={10}>
      <Input
        placeholder={"Write a message"}
        size="$4"
        borderColor="$gray3"
        color="$text"
        placeholderTextColor="$gray10"
        backgroundColor="$gray3"
        flex={1}
      />

      <IconButton
        size={40}
        icon={<Ionicons name={"send"} size={16} color={"white"} />}
      />
    </XStack>
  );
};
