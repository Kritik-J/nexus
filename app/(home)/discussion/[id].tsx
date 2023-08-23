import React from "react";
import { Box } from "@/components/box";
import { Separator, Spacer, XStack, YStack } from "tamagui";
import { Header } from "@/components/header";
import { Ionicons } from "@expo/vector-icons";
import { numberToShortString } from "@/utils/transformation";
import useTheme from "@/hooks/useTheme";
import { FlatList } from "react-native";
import { Comment } from "@/components/comment";
import comments from "@/assets/data/comments";
import { Input } from "@/components/input";
import { IconButton } from "@/components/button";
import { StyledText } from "@/components/styledtext";

const DiscussionScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <Header title={"Discussion"} />

      <FlatList
        ListHeaderComponent={DiscussionInfoHeader}
        showsVerticalScrollIndicator={false}
        data={comments}
        renderItem={({ item, index }) => (
          <Comment comment={item} isLast={index === comments.length - 1} />
        )}
      />

      <DiscussionFooter />
    </Box>
  );
};

export default DiscussionScreen;

export const DiscussionFooter = () => {
  const theme = useTheme();

  return (
    <YStack p={10} backgroundColor={"$background"}>
      <XStack ai={"center"} gap={"$2"}>
        <Ionicons name="camera-outline" size={24} color={theme.colors.icon} />

        <Input
          placeholder={"Write a reply..."}
          size={"$4"}
          borderRadius={50}
          flex={1}
        />

        <IconButton icon={<Ionicons name="send" size={16} color={"white"} />} />
      </XStack>
    </YStack>
  );
};

export const DiscussionInfoHeader = () => {
  const theme = useTheme();

  return (
    <YStack>
      <YStack p={10} backgroundColor={"$background"}>
        <XStack ai={"center"} gap={"$2"}>
          <StyledText fontSize={"$sm"} color={"$gray12"} fontWeight={"600"}>
            @username
          </StyledText>

          <StyledText fontSize={"$sm"} color={"$gray12"}>
            2 hours ago
          </StyledText>
        </XStack>

        <Spacer size={"$2"} />

        <StyledText fontSize={"$lg"} fontWeight={"600"}>
          Who is the best Spiderman?
        </StyledText>

        <Spacer size={"$4"} />

        <XStack
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"$2"}
        >
          <XStack alignItems={"center"} gap={"$2"}>
            {/* <Ionicons name="heart-outline" size={18} color={theme.colors.icon} /> */}
            <Ionicons name="heart" size={18} color={"red"} />

            <StyledText fontSize={"$sm"}>
              {numberToShortString(15000)}
            </StyledText>
          </XStack>

          <XStack alignItems={"center"} gap={"$2"}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={18}
              color={theme.colors.icon}
            />

            <StyledText fontSize={"$sm"}>
              {numberToShortString(25930)}
            </StyledText>
          </XStack>

          <XStack alignItems={"center"} gap={"$2"}>
            <Ionicons
              name="share-outline"
              size={18}
              color={theme.colors.icon}
            />

            <StyledText fontSize={"$sm"}>Share</StyledText>
          </XStack>

          <XStack alignItems={"center"} gap={"$2"}>
            <Ionicons
              name="bookmark-outline"
              size={18}
              color={theme.colors.icon}
            />

            <StyledText fontSize={"$sm"}>Save</StyledText>
          </XStack>
        </XStack>
      </YStack>

      <Spacer size={"$2"} />

      <Separator borderBottomColor={"$gray3"} borderBottomWidth={4} />

      <Spacer size={10} />
    </YStack>
  );
};
