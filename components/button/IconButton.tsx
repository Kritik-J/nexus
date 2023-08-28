import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";

export type IconButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  size?: number;
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
          backgroundColor: theme.colors.primaryButton,
          width: props.size || 36,
          height: props.size || 36,
          borderRadius: props.size ? props.size / 2 : 18,
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
  },
});
