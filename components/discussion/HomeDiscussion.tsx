import React from "react";
import { Avatar, Spacer, XStack, YStack } from "tamagui";
import { Pressable } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { numberToShortString } from "@/utils/transformation";
import { StyledText } from "../styledtext";

const HomeDiscussion = () => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => {
        router.push(`/discussion/id`);
      }}
    >
      <YStack p={10}>
        <XStack justifyContent={"space-between"} alignItems={"center"}>
          <XStack gap={"$2"}>
            <StyledText fontSize={"$sm"} color={"$gray11"}>
              community name
            </StyledText>

            <StyledText fontSize={"$sm"} color={"$gray11"}>
              @username
            </StyledText>
          </XStack>

          <StyledText fontSize={"$sm"} color={"$gray11"}>
            2 hours ago
          </StyledText>
        </XStack>

        <Spacer size={"$2"} />

        <StyledText>Discussion Title</StyledText>

        <Spacer size={"$1"} />
      </YStack>

      <XStack
        p={10}
        // borderTopWidth={1}
        borderBottomWidth={1}
        borderColor={"$gray5"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"$2"}
      >
        <XStack alignItems={"center"} gap={"$2"}>
          <Ionicons name="heart-outline" size={18} color={theme.colors.icon} />
          {/* <Ionicons name="heart" size={18} color={"red"} /> */}

          <StyledText fontSize={"$sm"}>
            {numberToShortString(1320700)}
          </StyledText>
        </XStack>

        <XStack alignItems={"center"} gap={"$2"}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={18}
            color={theme.colors.icon}
          />

          <StyledText fontSize={"$sm"}>{numberToShortString(2140)}</StyledText>
        </XStack>

        <XStack alignItems={"center"} gap={"$2"}>
          <Ionicons name="share-outline" size={18} color={theme.colors.icon} />

          <StyledText fontSize={"$sm"}>Share</StyledText>
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

export default HomeDiscussion;
