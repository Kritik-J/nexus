import React from "react";
import { Box } from "@/components/box";
import { Avatar, H5, H6, Paragraph, Separator, Spacer, YStack } from "tamagui";
import { Image } from "react-native";
import { Header } from "@/components/header";
import useTheme from "@/hooks/useTheme";
import { PrimaryButton, SecondaryButton } from "@/components/button";

const ProfileScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <Image
        source={{ uri: "https://picsum.photos/1200/300" }}
        style={{
          width: "100%",
          aspectRatio: 12 / 3,
        }}
      />
      <YStack px={10} pb={10} mt={-36}>
        <Avatar size={72} circular>
          {/* <Avatar.Image source={{ uri: "https://picsum.photos/200" }} /> */}

          <Avatar.Fallback bc={"$gray4"} />
        </Avatar>

        <Spacer size={"$2"} />

        <H5>John Doe | @john_doe</H5>

        <Spacer size={"$2"} />

        <Paragraph color={"$gray11"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Paragraph>

        <Spacer size={"$3"} />

        <SecondaryButton>Edit Profile</SecondaryButton>
      </YStack>
    </Box>
  );
};

export default ProfileScreen;
