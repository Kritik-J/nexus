import React from "react";
import { Box } from "@/components/box";
import { Separator, Spacer, XStack, YStack } from "tamagui";
import { Header } from "@/components/header";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { numberToShortString } from "@/utils/transformation";
import useTheme from "@/hooks/useTheme";
import { FlatList } from "react-native";
import { Comment } from "@/components/comment";
import comments from "@/assets/data/comments";
import { BaseInput, Input } from "@/components/input";
import { IconButton } from "@/components/button";
import { StyledText } from "@/components/styledtext";
import { Avatar } from "tamagui";

const DiscussionScreen = () => {
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

export const DiscussionInfoHeader = () => {
  const theme = useTheme();

  return (
    <YStack>
      <YStack p={10} backgroundColor={"$background"}>
        <XStack gap={"$2"}>
          <Avatar circular size={"$2"}>
            <Avatar.Image
              source={{
                uri: "https://picsum.photos/200/300",
              }}
            />

            <Avatar.Fallback bc={"$gray4"} />
          </Avatar>

          <StyledText fontSize={"$sm"} color={"$gray11"} fontWeight={"$bold"}>
            @username
          </StyledText>

          <StyledText fontSize={"$sm"} color={"$gray11"}>
            2h
          </StyledText>
        </XStack>

        <Spacer size={"$2"} />

        <StyledText fontSize={"$lg"} fontWeight={"600"}>
          Who is the best Spiderman?
        </StyledText>

        <Spacer size={"$4"} />

        <DiscussionOptions />
      </YStack>

      <Spacer size={"$1"} />

      <Separator borderBottomColor={"$gray4"} borderBottomWidth={"$2"} />

      <Spacer size={10} />
    </YStack>
  );
};

export const DiscussionFooter = () => {
  const theme = useTheme();

  return (
    <YStack p={10} backgroundColor={"$background"}>
      <XStack ai={"center"} gap={"$3"}>
        <Ionicons name="camera-outline" size={24} color={theme.colors.icon} />

        <BaseInput
          placeholder={"Write a comment..."}
          size={"$4"}
          borderRadius={50}
          flex={1}
        />

        <IconButton icon={<Ionicons name="send" size={16} color={"white"} />} />
      </XStack>
    </YStack>
  );
};

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
