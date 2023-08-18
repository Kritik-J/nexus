import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";

export type IconButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const IconButton = (props: IconButtonProps) => {
  const { icon, onPress, style } = props;
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.primaryButtonColor,
        },
        style,
      ]}
    >
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
