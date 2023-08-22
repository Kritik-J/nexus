import React from "react";
import { Box } from "@/components/box";
import { Avatar, Separator, Spacer, YStack } from "tamagui";
import { Image } from "react-native";
import useTheme from "@/hooks/useTheme";
import { SecondaryButton } from "@/components/button";
import { StyledText } from "@/components/styledtext";

const ProfileScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <YStack p={10}>
        <Avatar size={72} circular>
          {/* <Avatar.Image source={{ uri: "https://picsum.photos/200" }} /> */}

          <Avatar.Fallback bc={"$gray4"} />
        </Avatar>

        <Spacer size={"$2"} />

        <StyledText fontSize={"$lg"}>John Doe | @john_doe</StyledText>

        <Spacer size={"$2"} />

        <StyledText fontSize={"$sm"} color={"$gray11"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </StyledText>

        <Spacer size={"$3"} />

        <SecondaryButton>Edit Profile</SecondaryButton>
      </YStack>
    </Box>
  );
};

export default ProfileScreen;
