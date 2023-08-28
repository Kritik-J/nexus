import React from "react";
import { Box } from "@/components/box";
import useTheme from "@/hooks/useTheme";
import { Header } from "@/components/header";
import { XStack, YStack } from "tamagui";
import { IconButton } from "@/components/button";
import { Ionicons } from "@expo/vector-icons";
import { Message } from "@/components/message";
import { FlatList } from "react-native";
import { BaseInput } from "@/components/input";

const ChatScreen = () => {
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

export const MessageInput = () => {
  const theme = useTheme();

  return (
    <YStack p={10} backgroundColor={"$background"}>
      <XStack ai={"center"} gap={"$3"}>
        <Ionicons name="camera-outline" size={24} color={theme.colors.icon} />

        <BaseInput
          placeholder={"Write a message..."}
          size={"$4"}
          borderRadius={50}
          flex={1}
        />

        <IconButton icon={<Ionicons name="send" size={16} color={"white"} />} />
      </XStack>
    </YStack>
  );
};
