import { color, size, space, radius, zIndex } from "@tamagui/themes";
import { createTokens } from "tamagui";
import colors from "./colors";

const tokens = createTokens({
  color: {
    ...color,
    ...colors,
  },
  space,
  size,
  radius,
  zIndex,
});

export default tokens;
