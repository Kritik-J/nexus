import React from "react";
import { Avatar, Separator, Spacer, XStack, YStack } from "tamagui";
import messages from "@/assets/data/messages";
import useTheme from "@/hooks/useTheme";
import { StyledText } from "../styledtext";

export type MessageProps = {
  message: {
    id: number;
    username: string;
    text: string;
    time: string;
    repliedTo?: number;
  };
  isLast?: boolean;
};

export const Message = (props: MessageProps) => {
  const { isLast } = props;

  return (
    <>
      <YStack p={10}>
        <MessageContainer {...props} />
      </YStack>

      {isLast ? null : (
        <Separator borderBottomColor={"$gray3"} borderBottomWidth={2} />
      )}
    </>
  );
};

export const MessageContainer = (props: MessageProps) => {
  const { message } = props;
  const theme = useTheme();

  return (
    <XStack gap={"$3"} w={"100%"}>
      <YStack flex={1}>
        <XStack ai={"center"} gap={"$2"}>
          <Avatar circular size={"$1"}>
            <Avatar.Image source={{ uri: "https://picsum.photos/200/200" }} />

            <Avatar.Fallback bc={"$gray4"} />
          </Avatar>

          <StyledText fontSize={"$sm"} fontWeight={"600"} color={"$gray11"}>
            @{message.username}
          </StyledText>

          <StyledText fontSize={"$sm"} color={"$gray11"}>
            {message.time}
          </StyledText>
        </XStack>

        {message.repliedTo ? (
          <>
            <Spacer size={"$3"} />

            <XStack
              p={10}
              br={10}
              bc={"$gray2"}
              borderTopColor={"$gray7"}
              borderTopWidth={1}
              borderLeftColor={theme.colors.primaryButtonColor}
              borderLeftWidth={4}
            >
              <StyledText fontSize={"$sm"} fontWeight={"600"}>
                {messages.find((m) => m.id === message.repliedTo)?.text}
              </StyledText>
            </XStack>
          </>
        ) : null}

        <Spacer size={"$3"} />

        <StyledText>{message.text}</StyledText>
      </YStack>
    </XStack>
  );
};
