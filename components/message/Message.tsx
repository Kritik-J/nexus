import React from "react";
import { StyledText } from "../styledtext";
import { Spacer, YStack } from "tamagui";

const Message = () => {
  return (
    <YStack
      p={10}
      backgroundColor={"$gray3"}
      borderRadius={10}
      alignSelf={"flex-start"}
      maxWidth={"80%"}
    >
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </StyledText>

      <Spacer size={5} />

      <StyledText color={"$gray10"} fontSize={"$sm"} textAlign="right">
        2:00 PM
      </StyledText>
    </YStack>
  );
};

export default Message;
