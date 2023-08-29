import { Box } from "@/components/box";
import { PrimaryButton } from "@/components/button";
import { BaseInput } from "@/components/input";
import { StyledText } from "@/components/styledtext";
import { Spacer, YStack } from "tamagui";

export default function HomeScreen() {
  return (
    <Box>
      <YStack p={10}>
        <StyledText fontSize={"$lg"}>Create Community</StyledText>

        <Spacer size={20} />

        <BaseInput placeholder="Community Name" size={"$3.5"} />

        <Spacer size={10} />

        <BaseInput placeholder="Community Description" size={"$3.5"} />

        <Spacer size={15} />

        <PrimaryButton size={"$3.5"}>Create</PrimaryButton>
      </YStack>
    </Box>
  );
}
