import React from "react";
import { Avatar, H5, H6, Paragraph, Spacer, XStack, YStack } from "tamagui";
import { Pressable } from "react-native";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { numberToShortString } from "@/utils/transformation";

const Discussion = () => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => {
        router.push(`/discussion/id`);
      }}
    >
      <YStack p={10}>
        <XStack gap={"$2"}>
          <Avatar circular size={"$2"}>
            <Avatar.Image
              source={{
                uri: "https://picsum.photos/200/300",
              }}
            />

            <Avatar.Fallback bc={"$gray4"} />
          </Avatar>

          <YStack f={1}>
            <XStack justifyContent={"space-between"} alignItems={"center"}>
              <Paragraph>@username</Paragraph>
              <Paragraph>2 hours ago</Paragraph>
            </XStack>
            <Spacer size={"$2"} />

            <H6>Discussion Title</H6>

            <Spacer size={"$3"} />
          </YStack>
        </XStack>
      </YStack>

      <XStack
        p={10}
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor={"$gray3"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"$2"}
      >
        <XStack alignItems={"center"} gap={"$2"}>
          <Ionicons name="heart-outline" size={18} color={theme.colors.icon} />
          {/* <Ionicons name="heart" size={18} color={"red"} /> */}

          <Paragraph>{numberToShortString(1320700)}</Paragraph>
        </XStack>

        <XStack alignItems={"center"} gap={"$2"}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={18}
            color={theme.colors.icon}
          />

          <Paragraph>{numberToShortString(2140)}</Paragraph>
        </XStack>

        <XStack alignItems={"center"} gap={"$2"}>
          <Ionicons name="share-outline" size={18} color={theme.colors.icon} />

          <Paragraph>Share</Paragraph>
        </XStack>

        <XStack alignItems={"center"} gap={"$2"}>
          <Ionicons
            name="ellipsis-horizontal"
            size={18}
            color={theme.colors.icon}
          />
        </XStack>
      </XStack>
    </Pressable>
  );
};

export default Discussion;
