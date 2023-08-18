import { Image } from "react-native";
import React from "react";
import { XStack } from "tamagui";
// import RNImageVideoGridViewer from "@leafletui/rn-image-video-grid-viewer";

type CarouselProps = React.ComponentProps<typeof XStack> & {
  images: string[];
};

export const Carousel = (props: CarouselProps) => {
  const { images } = props;

  return (
    <XStack
      gap={"$2"}
      borderWidth={1.5}
      borderColor={"$gray5"}
      jc={"center"}
      br={10}
      h={240}
    >
      <Image
        source={{ uri: images[0] }}
        style={{
          height: "100%",
          maxWidth: "100%",
          width: 240,
          //   borderRadius: 10,
        }}
      />
    </XStack>
  );
};
