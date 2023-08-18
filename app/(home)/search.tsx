import React from "react";
import { Box } from "@/components/box";
import { Searchbar } from "@/components/searchbar";
import { Paragraph, Separator, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { router } from "expo-router";

const SearchScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <YStack p={10}>
        <XStack alignItems="center" gap={10}>
          <Ionicons
            name="close"
            size={24}
            color={theme.colors.icon}
            onPress={() => {
              router.back();
            }}
          />

          <Searchbar
            borderRadius={50}
            placeholder={"Search..."}
            value=""
            onChangeText={(text) => {
              console.log(text);
            }}
          />

          <Ionicons name="mic-outline" size={24} color={theme.colors.icon} />

          <Ionicons
            name="options-outline"
            size={24}
            color={theme.colors.icon}
          />
        </XStack>
      </YStack>

      <Separator />

      <YStack p={10} flex={1}>
        <Paragraph color={"$gray12"}>
          No results for{" "}
          <Paragraph fontWeight={"600"} color={"$blue10"}>
            “Spiderman”
          </Paragraph>
        </Paragraph>
      </YStack>
    </Box>
  );
};

export default SearchScreen;
