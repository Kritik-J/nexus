import React from "react";
import { Box } from "@/components/box";
import { Avatar, XStack, Spacer, YStack } from "tamagui";
import useTheme from "@/hooks/useTheme";
import { SecondaryButton } from "@/components/button";
import { StyledText } from "@/components/styledtext";
import Community from "../../../components/community/Community";

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <Box>
      <YStack p={10}>
        <XStack
          p={10}
          gap={"$4"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Avatar size={"$8"} circular>
            {/* <Avatar.Image source={{ uri: "https://picsum.photos/200" }} /> */}

            <Avatar.Fallback bc={"$gray4"} />
          </Avatar>

          <XStack gap={"$4"}>
            <YStack alignItems={"center"}>
              <StyledText fontWeight={"$bold"}>100</StyledText>
              <StyledText fontSize={"$sm"}>Discussions</StyledText>
            </YStack>

            <YStack alignItems={"center"}>
              <StyledText fontWeight={"$bold"}>100</StyledText>
              <StyledText fontSize={"$sm"}>Followers</StyledText>
            </YStack>

            <YStack alignItems={"center"}>
              <StyledText fontWeight={"$bold"}>100</StyledText>
              <StyledText fontSize={"$sm"}>Following</StyledText>
            </YStack>
          </XStack>
        </XStack>

        <Spacer size={"$2"} />

        <StyledText fontSize={"$lg"}>John Doe</StyledText>

        <Spacer size={"$2"} />

        <StyledText fontSize={"$sm"} color={"$gray11"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </StyledText>

        <Spacer size={"$3"} />

        <SecondaryButton>Edit Profile</SecondaryButton>
      </YStack>
    </Box>
  );
}
