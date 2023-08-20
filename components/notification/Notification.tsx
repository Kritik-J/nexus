import React from "react";
import { Avatar, H5, H6, Paragraph, Spacer, XStack, YStack } from "tamagui";
import { Pressable } from "react-native";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { SecondaryButton } from "../button";

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

        <Paragraph flex={1}>You have joined Spiderman community</Paragraph>

        <SecondaryButton
          onPress={() => {
            console.log("Leave Community");
          }}
          size={"$3"}
          fontSize={"$2"}
        >
          Leave
        </SecondaryButton>
      </XStack>
    </Pressable>
  );
};

export default JoinedNotification;
