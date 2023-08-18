import React from "react";
import { Avatar, H5, Paragraph, Spacer, XStack, YStack } from "tamagui";
import { Image, Pressable } from "react-native";
import { numberToShortString } from "@/utils/transformation";
import { router } from "expo-router";

export type CommunityProps = {
  isLast?: boolean;
  community: {
    id: number;
    name: string;
    description: string;
    image: string;
    cover: string;
    members: number;
    discussions: number;
  };
};

const Community = ({ isLast, community }: CommunityProps) => {
  return (
    <Pressable
      onPress={() => {
        router.push(`/community/${community.id}`);
      }}
    >
      <YStack br={16} mb={isLast ? 0 : 10} backgroundColor={"$gray2"}>
        <Image
          source={{
            uri: community.cover,
          }}
          style={{
            width: "100%",
            aspectRatio: 12 / 3,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />

        <YStack mt={-16} px={10} pb={10} br={16} backgroundColor={"$gray2"}>
          <Avatar
            size={50}
            circular
            mt={-25}
            borderColor={"$gray2"}
            borderWidth={2}
          >
            <Avatar.Image source={{ uri: community.image }} />

            <Avatar.Fallback bc={"$gray4"} />
          </Avatar>

          <Spacer size={5} />

          <H5 fontWeight={"600"}>{community.name}</H5>

          <Spacer size={2} />

          <Paragraph color={"$gray11"}>{community.description}</Paragraph>

          <Spacer size={2} />

          <XStack alignItems={"center"} spaceDirection="horizontal" space="$5">
            <Paragraph color={"$gray11"}>
              {numberToShortString(community.members)} members
            </Paragraph>

            <Paragraph color={"$gray11"}>
              {numberToShortString(community.discussions)} discussions
            </Paragraph>
          </XStack>
        </YStack>
      </YStack>
    </Pressable>
  );
};

export default Community;
