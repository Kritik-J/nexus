import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { XStack, Paragraph, GetProps } from "tamagui";
import useTheme from "@/hooks/useTheme";

export type HeaderProps = GetProps<typeof XStack> & {
  title?: string;
};

export const Header = (props: HeaderProps) => {
  const theme = useTheme();

  let str = "Hello World Hello World Hello Hello World";

  return (
    <XStack
      justifyContent="space-between"
      ai={"center"}
      p={10}
      {...props}
      width="100%"
    >
      <Ionicons
        name="close"
        size={24}
        color={theme.colors.icon}
        onPress={() => {
          router.back();
        }}
      />

      <Paragraph>
        {props.title
          ? props.title.length > 32
            ? props.title.slice(0, 32) + "..."
            : props.title
          : ""}
      </Paragraph>

      <Ionicons
        name="ellipsis-horizontal"
        size={20}
        color={theme.colors.icon}
      />
    </XStack>
  );
};
