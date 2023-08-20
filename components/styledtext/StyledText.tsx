import React from "react";
import type { StyleProp, TextProps, TextStyle } from "react-native";
import type { SizableTextProps } from "tamagui";
import { Text } from "tamagui";
import useTheme from "@/hooks/useTheme";

export type StyledTextProps = TextProps &
  SizableTextProps & {
    fontSize?: number | string;
    fontWeight?: string;
    children: React.ReactNode;
    textAlign?: SizableTextProps["textAlign"];
    color?: string;
    style?: StyleProp<TextStyle>;
  };

export function StyledText({
  fontWeight = "500",
  fontSize = "$base",
  textAlign,
  children,
  color,
  style,
  ...props
}: StyledTextProps) {
  const theme = useTheme();
  const _color = color || theme.colors.text;
  return (
    <Text
      color={_color}
      fontSize={fontSize}
      fontFamily="$body"
      fontWeight={fontWeight}
      textAlign={textAlign}
      style={style}
      {...props}
    >
      {children}
    </Text>
  );
}
