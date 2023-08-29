import React from "react";
import { Avatar, Spacer, XStack, YStack } from "tamagui";
import { Image, Pressable } from "react-native";
import { router } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { numberToShortString } from "@/utils/transformation";
import { StyledText } from "../styledtext";

const Discussion = () => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => {
        router.push(`/discussion/id`);
      }}
    >
      <YStack py={10} borderBottomWidth={"$2"} borderBottomColor={"$gray4"}>
        <YStack px={10}>
          <XStack justifyContent={"space-between"} alignItems={"center"}>
            <XStack gap={"$2"}>
              <Avatar circular size={"$2"}>
                <Avatar.Image
                  source={{
                    uri: "https://picsum.photos/200/300",
                  }}
                />

                <Avatar.Fallback bc={"$gray4"} />
              </Avatar>

              <StyledText
                fontSize={"$sm"}
                color={"$gray11"}
                fontWeight={"$bold"}
              >
                @username
              </StyledText>

              <StyledText fontSize={"$sm"} color={"$gray11"}>
                2h
              </StyledText>
            </XStack>

            <Ionicons
              name="ellipsis-horizontal"
              size={16}
              color={theme.colors.icon}
            />
          </XStack>

          <Spacer size={"$2"} />

          <StyledText>Discussion Title</StyledText>
        </YStack>

        <Spacer size={"$3"} />

        <Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          style={{ width: "100%", height: 200 }}
        />

        <Spacer size={10} />

        <DiscussionOptions />
      </YStack>
    </Pressable>
  );
};

export default Discussion;

export const DiscussionOptions = () => {
  const theme = useTheme();

  return (
    <XStack justifyContent={"space-between"} alignItems={"center"}>
      <XStack gap={"$3"}>
        <XStack
          gap={"$2.5"}
          bw={1}
          borderColor={"$gray4"}
          py={6}
          px={10}
          br={20}
          alignItems={"center"}
        >
          <AntDesign name="like2" size={18} color={theme.colors.icon} />

          <StyledText fontSize={"$sm"}>{numberToShortString(100)}</StyledText>

          <AntDesign name="dislike2" size={18} color={theme.colors.icon} />
        </XStack>

        <XStack
          gap={"$2.5"}
          bw={1}
          borderColor={"$gray4"}
          py={6}
          px={10}
          br={20}
          alignItems={"center"}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={18}
            color={theme.colors.icon}
          />

          <StyledText fontSize={"$sm"}>{numberToShortString(100)}</StyledText>
        </XStack>
      </XStack>

      <Ionicons name="share-outline" size={18} color={theme.colors.icon} />
    </XStack>
  );
};
