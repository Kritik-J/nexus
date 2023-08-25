import { Separator, Spacer, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { router } from "expo-router";
import { StyledText } from "@/components/styledtext";
import { Box } from "@/components/box";
import { HomeDiscussion } from "@/components/discussion";
import { FlatList } from "react-native";

export const Header = () => {
  const theme = useTheme();

  return (
    <YStack p={10} borderBottomWidth={1} borderColor={"$gray3"}>
      <XStack justifyContent="space-between" alignItems="center">
        <StyledText
          fontSize={"$2xl"}
          fontWeight="$bold"
          fontStyle="italic"
          color={"$blue10"}
        >
          Nexus
        </StyledText>

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
      <Header />

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item, index }) => <HomeDiscussion key={index} />}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
