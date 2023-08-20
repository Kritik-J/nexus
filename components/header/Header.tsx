import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { XStack, Paragraph, GetProps, View } from "tamagui";
import useTheme from "@/hooks/useTheme";

export type HeaderProps = GetProps<typeof XStack> & {
  title?: string;
  menu?: boolean;
};

export const Header = (props: HeaderProps) => {
  const theme = useTheme();
  const { menu = true } = props;

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

      <Paragraph fontSize={16}>
        {props.title
          ? props.title.length > 32
            ? props.title.slice(0, 32) + "..."
            : props.title
          : ""}
      </Paragraph>

      {menu ? (
        <Ionicons
          name="ellipsis-horizontal"
          size={20}
          color={theme.colors.icon}
        />
      ) : (
        <View></View>
      )}
    </XStack>
  );
};

export const MessagesHeader = (props: HeaderProps) => {
  const theme = useTheme();

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

      <Paragraph fontSize={16}>Messages</Paragraph>

      <XStack spaceDirection="horizontal" space={10}>
        <Ionicons name="create-outline" size={20} color={theme.colors.icon} />
      </XStack>
    </XStack>
  );
};