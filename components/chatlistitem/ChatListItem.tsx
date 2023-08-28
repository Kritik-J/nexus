import React from "react";
import { Avatar, Spacer, XStack, YStack } from "tamagui";
import { StyledText } from "../styledtext";
import { Pressable } from "react-native";
import { router } from "expo-router";

const ChatListItem = () => {
  return (
    <Pressable
      onPress={() => {
        router.push(`/chat/1`);
      }}
    >
      <XStack p={10} spaceDirection="horizontal" space={15}>
        <Avatar circular size={"$4"}>
          <Avatar.Image
            source={{
              uri: "https://picsum.photos/200/300",
            }}
          />

          <Avatar.Fallback bc={"$gray4"} />
        </Avatar>

        <YStack>
          <StyledText color={"$gray12"}>John Snow</StyledText>

          <Spacer size={5} />

          <StyledText color={"$gray11"} fontSize={"$sm"}>
            You: Hey, how are you?
          </StyledText>
        </YStack>
      </XStack>
    </Pressable>
  );
};

export default ChatListItem;
