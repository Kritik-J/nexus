import React from "react";
import { Image, FlatList } from "react-native";
import {
  Avatar,
  H4,
  Paragraph,
  Separator,
  Spacer,
  XStack,
  YStack,
} from "tamagui";
import communities from "@/assets/data/communities";
import { Box } from "@/components/box";
import { numberToShortString } from "@/utils/transformation";
import { Discussion } from "@/components/discussion";
import { PrimaryButton, SecondaryButton } from "@/components/button";
import useTheme from "@/hooks/useTheme";
import { Header } from "@/components/header";
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from "@/components/searchbar";

const CommunityScreen = () => {
  return (
    <Box>
      <Header title={"Community"} />

      <FlatList
        ListHeaderComponent={CommunityHeader}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        maxToRenderPerBatch={5}
        renderItem={({ item, index }) => <Discussion key={index} />}
      />
    </Box>
  );
};

export default CommunityScreen;

export const CommunityHeader = () => {
  const theme = useTheme();

  const isJoined = true;

  return (
    <YStack f={1}>
      <Image
        source={{
          uri: communities[1].cover,
        }}
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
      >
        <Avatar
          size={64}
          circular
          mt={-32}
          borderWidth={2}
          borderColor={"$background"}
        >
          <Avatar.Image source={{ uri: communities[1].image }} />

          <Avatar.Fallback bc={"$gray4"} />
        </Avatar>

        <Spacer size={"$3"} />

        <H4 fontWeight={"600"}>{communities[1].name}</H4>

        <Spacer size={"$2"} />

        <Paragraph color={"$gray12"}>{communities[1].description}</Paragraph>

        <Spacer size={"$2"} />

        <XStack alignItems={"center"} gap={"$5"}>
          <Paragraph color={"$gray12"}>
            {numberToShortString(communities[1].members)} members
          </Paragraph>

          <Paragraph color={"$gray12"}>
            {numberToShortString(communities[1].discussions)} discussions
          </Paragraph>
        </XStack>

        <Spacer size={"$3"} />

        {isJoined ? (
          <SecondaryButton
            flex={1}
            onPress={() => {
              console.log("Leave Community");
            }}
          >
            Leave Community
          </SecondaryButton>
        ) : (
          <PrimaryButton
            onPress={() => {
              console.log("Join Community");
            }}
          >
            Join Community
          </PrimaryButton>
        )}
      </YStack>

      <Spacer size={"$4"} />

      <Separator />

      <XStack gap={"$3"} p={10} alignItems={"center"}>
        <Searchbar
          size={"$3"}
          placeholder={"Search discussions"}
          borderRadius={25}
        />

        <Ionicons name="options-outline" size={24} color={theme.colors.text} />
      </XStack>

      <Separator />
    </YStack>
  );
};
