import React from "react";
import { Avatar, XStack, YStack } from "tamagui";
import { Pressable } from "react-native";
import useTheme from "@/hooks/useTheme";
import { SecondaryButton } from "../button";
import { StyledText } from "../styledtext";

const JoinedNotification = () => {
  const theme = useTheme();

  return (
    <Pressable onPress={() => {}}>
      <XStack p={10} ai={"center"} spaceDirection="horizontal" space={10}>
        <Avatar circular size={"$4"}>
          <Avatar.Image
            source={{
              uri: "https://picsum.photos/200/300",
            }}
          />

          <Avatar.Fallback bc={"$gray4"} />
        </Avatar>

        <StyledText fontSize={"$sm"} flex={1}>
          You have joined Spiderman community
        </StyledText>

        <SecondaryButton
          onPress={() => {
            console.log("Leave Community");
          }}
          size={"$3"}
          fontSize={"$xs"}
        >
          Leave
        </SecondaryButton>
      </XStack>
    </Pressable>
  );
};

export default JoinedNotification;
