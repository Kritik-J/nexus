import { StatusBar } from "react-native";
import { View, styled } from "tamagui";

const Box = styled(View, {
  flex: 1,
  backgroundColor: "$background",
  pt: StatusBar.currentHeight,
});

export default Box;
