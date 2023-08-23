import { FlatList } from "react-native";
import { Community } from "@/components/community";
import communities from "@/assets/data/communities";
import { XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { router } from "expo-router";
import { StyledText } from "@/components/styledtext";
import { Box } from "@/components/box";
import { HomeDiscussion } from "@/components/discussion";

export const Header = () => {
  const theme = useTheme();

  return (
    <YStack bg={"$background"} mb={15}>
      <XStack justifyContent="space-between" alignItems="center">
        <YStack>
          <StyledText
            fontSize={"$2xl"}
            fontWeight="$bold"
            fontStyle="italic"
            color={"$blue10"}
          >
            Nexus
          </StyledText>
        </YStack>

        <XStack alignItems="center" gap="$4">
          <Ionicons
            name="notifications-outline"
            size={24}
            color={theme.colors.icon}
            onPress={() => {
              router.push("notifications");
            }}
          />
        </XStack>
      </XStack>
    </YStack>
  );
};

export default function HomeScreen() {
  return (
    <Box>
      <FlatList
        contentContainerStyle={{
          padding: 10,
        }}
        ListHeaderComponent={Header}
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
    </Box>
  );
}
