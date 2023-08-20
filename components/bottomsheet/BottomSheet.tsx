import { createSheet, styled, Stack } from "tamagui";

const Handle = styled(Stack, {
  variants: {
    open: {
      true: { opacity: 0.35 },
      false: { opacity: 0.5 },
    },
  } as const,
});

const Overlay = styled(Stack, {
  variants: {
    open: {
      true: { opacity: 1, pointerEvents: "auto" },
      false: { opacity: 0, pointerEvents: "none" },
    },
  } as const,
});

const Frame = styled(Stack, {
  backgroundColor: "$background",
});

const BottomSheet = createSheet({
  Frame,
  Handle,
  Overlay,
});

export default BottomSheet;
