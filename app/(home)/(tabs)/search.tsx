import React from "react";
import { Box } from "@/components/box";
import { Searchbar } from "@/components/searchbar";
import { Separator, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { router } from "expo-router";
import { StyledText } from "@/components/styledtext";

const SearchScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <YStack p={10}>
        <XStack alignItems="center" gap={10}>
          <Searchbar
            borderRadius={50}
            placeholder={"Search..."}
            value=""
            onChangeText={(text) => {
              console.log(text);
            }}
            flex={1}
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
        <StyledText fontSize={"$sm"} color={"$gray12"}>
          No results for{" "}
          <StyledText fontSize={"$sm"} fontWeight={"600"} color={"$blue10"}>
            “Spiderman”
          </StyledText>
        </StyledText>
      </YStack>
    </Box>
  );
};

export default SearchScreen;
