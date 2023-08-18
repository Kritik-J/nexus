import React from "react";
import { Avatar, Text, XStack } from "tamagui";
import members from "@/assets/data/members";

const Members = () => {
  return (
    <XStack ai={"center"} gap={"$2"}>
      <XStack ai={"center"}>
        {members.map((member, index) => (
          <Avatar
            size={32}
            circular
            borderColor={"$gray2"}
            borderWidth={2.5}
            key={index}
            ml={index === 0 ? 0 : -5}
          >
            <Avatar.Image
              source={{
                uri: member.image,
              }}
            />

            <Avatar.Fallback bc={"$gray4"} />
          </Avatar>
        ))}
      </XStack>

      {/* <Text color={"$gray12"}>
        {members.map((member, index) => (
          <Text key={index} color={"$gray12"}>
            {member.name}
            {index === members.length - 1 ? "" : ", "}
          </Text>
        ))}
      </Text> */}
    </XStack>
  );
};

export default Members;
