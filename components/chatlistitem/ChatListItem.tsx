import React from "react";
import { Avatar, XStack, YStack } from "tamagui";
import { StyledText } from "../styledtext";

const ChatListItem = () => {
  return (
    <XStack p={10} spaceDirection="horizontal" space={15}>
      <Avatar circular size={"$4.5"}>
        <Avatar.Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
        />

        <Avatar.Fallback bc={"$gray4"} />
      </Avatar>

      <YStack>
        <StyledText color={"$gray12"}>John Snow</StyledText>

        <StyledText color={"$gray11"}>You: Hey, how are you?</StyledText>
      </YStack>
    </XStack>
  );
};

export default ChatListItem;