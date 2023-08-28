import React from "react";
import { Avatar, Separator, Spacer, XStack, YStack } from "tamagui";
import comments from "@/assets/data/comments";
import useTheme from "@/hooks/useTheme";
import { StyledText } from "../styledtext";

export type CommentProps = {
  comment: {
    id: number;
    username: string;
    text: string;
    time: string;
    repliedTo?: number;
  };
  isLast?: boolean;
};

export const Comment = (props: CommentProps) => {
  const { isLast } = props;

  return (
    <>
      <YStack p={10}>
        <CommentContainer {...props} />
      </YStack>

      {isLast ? null : (
        <Separator borderBottomColor={"$gray3"} borderBottomWidth={2} />
      )}
    </>
  );
};

export const CommentContainer = (props: CommentProps) => {
  const { comment } = props;
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
            @{comment.username}
          </StyledText>

          <StyledText fontSize={"$sm"} color={"$gray11"}>
            {comment.time}
          </StyledText>
        </XStack>

        {comment.repliedTo ? (
          <>
            <Spacer size={"$3"} />

            <XStack
              p={10}
              br={10}
              bc={"$gray2"}
              borderTopColor={"$gray7"}
              borderTopWidth={1}
              borderLeftColor={theme.colors.primaryButton}
              borderLeftWidth={4}
            >
              <StyledText fontSize={"$sm"}>
                {comments.find((m) => m.id === comment.repliedTo)?.text}
              </StyledText>
            </XStack>
          </>
        ) : null}

        <Spacer size={"$3"} />

        <StyledText>{comment.text}</StyledText>
      </YStack>
    </XStack>
  );
};
