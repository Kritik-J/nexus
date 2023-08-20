import React from "react";
import { Box } from "@/components/box";
import { Avatar, Separator, Spacer, YStack } from "tamagui";
import { Image } from "react-native";
import { Header } from "@/components/header";
import useTheme from "@/hooks/useTheme";
import { PrimaryButton, SecondaryButton } from "@/components/button";
import { StyledText } from "@/components/styledtext";

const ProfileScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <Image
        source={{ uri: "https://picsum.photos/1200/300" }}
        style={{
          width: "100%",
          aspectRatio: 12 / 4,
        }}
      />
      <YStack
        mt={-16}
        btrr={16}
        btlr={16}
        backgroundColor={"$background"}
        f={1}
        px={10}
        pb={10}
      >
        <Avatar size={72} circular mt={-36}>
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
