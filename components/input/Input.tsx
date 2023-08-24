import { GetProps, Text, YStack, Input as _Input, styled } from "tamagui";

export const BaseInput = styled(_Input, {
  borderWidth: 2,
  borderRadius: 10,
  size: "$4",
  borderColor: "$gray3",
  color: "$text",
  placeholderTextColor: "$gray10",
  backgroundColor: "$gray3",

  variants: {
    error: {
      true: {
        borderColor: "$red10",
      },

      false: {
        borderColor: "$gray3",
      },
    },

    radius: {
      round: {
        borderRadius: 100,
      },

      normal: {
        borderRadius: 10,
      },

      square: {
        borderRadius: 0,
      },
    },
  },

  defaultVariants: {
    radius: "normal",
  },
});

export type InputProps = GetProps<typeof BaseInput> & {
  error?: boolean;
  errorText?: string;
};

export const Input = (props: InputProps) => {
  return (
    <YStack w={props.w} flex={props.flex}>
      <BaseInput {...props} />

      {props.error && props.errorText && (
        <Text color={"$red10"} mt={"$1"} fontSize={"$base"}>
          {props.errorText}
        </Text>
      )}
    </YStack>
  );
};
