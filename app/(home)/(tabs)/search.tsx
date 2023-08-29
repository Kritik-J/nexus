import React from "react";
import { Box } from "@/components/box";
import { Searchbar } from "@/components/searchbar";
import { Separator, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { StyledText } from "@/components/styledtext";
import { FlatList } from "react-native";
import { Community } from "@/components/community";
import communities from "@/assets/data/communities";

const SearchScreen = () => {
  const theme = useTheme();

  const result = [1];

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

      {result.length > 0 ? (
        <FlatList
          contentContainerStyle={{
            padding: 10,
          }}
          data={communities}
          renderItem={({ item, index }) => (
            <Community
              key={item.id}
              community={item}
              isLast={index === communities.length - 1}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <YStack p={10} flex={1}>
          <StyledText fontSize={"$sm"} color={"$gray12"}>
            No results for{" "}
            <StyledText fontSize={"$sm"} fontWeight={"600"} color={"$blue10"}>
              “Spiderman”
            </StyledText>
          </StyledText>
        </YStack>
      )}
    </Box>
  );
};

export default SearchScreen;
