import { FlatList } from "react-native";
import { Community } from "@/components/community";
import Screen from "@/components/box/Box";
import communities from "@/assets/data/communities";
import { Avatar, H2, H3, H4, H6, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { router } from "expo-router";

export const Header = () => {
  const theme = useTheme();

  return (
    <YStack bg={"$background"} mb={15}>
      <XStack justifyContent="space-between" alignItems="center">
        <YStack>
          <H2 fontStyle="italic" fontWeight={"700"} color={"$blue10"}>
            Nexus
          </H2>
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

          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color={theme.colors.icon}
            onPress={() => {
              router.push("messages");
            }}
          />
        </XStack>
      </XStack>
    </YStack>
  );
};

export default function HomeScreen() {
  return (
    <Screen>
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
    </Screen>
  );
}
