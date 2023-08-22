import React from "react";
import { FlatList } from "react-native";
import { Box } from "@/components/box";
import { Searchbar } from "@/components/searchbar";
import { Spacer, XStack, YStack } from "tamagui";
import { ChatListItem } from "@/components/chatlistitem";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { StyledText } from "@/components/styledtext";

const MessageScreen = () => {
  const theme = useTheme();

  return (
    <Box>
      <YStack px={10}>
        <XStack justifyContent="space-between" alignItems="center">
          <StyledText fontSize={"$lg"}>@username</StyledText>

          <Ionicons name="create-outline" size={24} color={theme.colors.icon} />
        </XStack>

        <Spacer size={"$3"} />

        <Searchbar placeholder={"Search..."} borderRadius={25} />

        <Spacer size={"$2"} />
      </YStack>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <ChatListItem />}
        keyExtractor={(item) => item.toString()}
      />
    </Box>
  );
};

export default MessageScreen;
