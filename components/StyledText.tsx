import { Text, TextProps } from "tamagui";

const StyledText = (props: TextProps) => {
  return <Text {...props} style={[props.style]} />;
};

export default StyledText;

export const MonoText = (props: TextProps) => {
  return (
    <StyledText {...props} style={[props.style, { fontFamily: "monospace" }]} />
  );
};
