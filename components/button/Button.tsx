import { styled, Button as _Button, GetProps } from "tamagui";
import { ActivityIndicator } from "react-native";
import useTheme from "@/hooks/useTheme";

export const ButtonFrame = styled(_Button, {
  borderWidth: 0,

  variants: {
    loading: {
      true: {
        opacity: 0.75,
        cursor: "not-allowed",
      },

      false: {
        opacity: 1,
        cursor: "pointer",
      },
    },

    disabled: {
      true: {
        opacity: 0.75,
        cursor: "not-allowed",
      },

      false: {
        opacity: 1,
        cursor: "pointer",
      },
    },
  },

  defaultVariants: {
    loading: false,
  },

  componentName: "Button",
});

export type ButtonProps = GetProps<typeof ButtonFrame> & {
  activityIndicatorColor?: string;
};

export const BaseButton = (props: ButtonProps) => {
  return (
    <ButtonFrame
      size={"$3"}
      fontSize={"$sm"}
      {...props}
      icon={props.loading ? null : props.icon}
      iconAfter={props.loading ? null : props.iconAfter}
    >
      {props.loading ? (
        <ActivityIndicator
          color={props.activityIndicatorColor}
          size={"small"}
        />
      ) : (
        props.children
      )}
    </ButtonFrame>
  );
};

export const PrimaryButton = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <BaseButton
      {...props}
      bg={"$primaryButtonColor"}
      color={"$primaryButtonTextColor"}
      activityIndicatorColor={theme.colors.primaryButtonTextColor}
    >
      {props.children}
    </BaseButton>
  );
};

export const SecondaryButton = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <BaseButton
      {...props}
      bg={"$secondaryButtonColor"}
      color={"$secondaryButtonTextColor"}
      activityIndicatorColor={theme.colors.secondaryButtonTextColor}
    >
      {props.children}
    </BaseButton>
  );
};

export const DangerButton = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <BaseButton
      {...props}
      bg={"$dangerButtonColor"}
      color={"$dangerButtonTextColor"}
      activityIndicatorColor={theme.colors.dangerButtonTextColor}
    >
      {props.children}
    </BaseButton>
  );
};
