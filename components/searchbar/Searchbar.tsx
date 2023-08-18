import React from "react";
import { GetProps, XStack, Input as _Input, styled } from "tamagui";

export const BaseSearchInput = styled(_Input, {
  borderWidth: 0,
  color: "$text",
  placeholderTextColor: "$gray10",
  backgroundColor: "$colorTransparent",
});

export type InputProps = GetProps<typeof BaseSearchInput> & {
  containerProps?: GetProps<typeof XStack>;
};

export const Searchbar = (props: InputProps) => {
  const inputRef = React.useRef(null);

  return (
    // <XStack
    //   w={props.w}
    //   alignItems="center"
    //   borderRadius={10}
    //   backgroundColor="$gray3"
    //   px={"$3"}
    //   onPress={() => {
    //     inputRef.current?.focus();
    //   }}
    //   {...props.containerProps}
    // >
    <BaseSearchInput
      flex={1}
      backgroundColor="$gray2"
      placeholder="Search"
      size="$4"
      {...props}
      ref={inputRef}
    />
    // </XStack>
  );
};
export default Searchbar;
