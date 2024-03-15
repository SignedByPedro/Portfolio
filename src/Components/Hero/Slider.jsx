"use client";
import { Flex, Text, Image, keyframes } from "@chakra-ui/react";

const slide = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-100%, 0, 0); }
`;

export default function Slider() {
  const animation = `${slide} infinite 50s linear`;
  const array = Array.from({ length: 5 });

  return (
    <>
      <Flex
        h="200px"
        w="max-content"
        whiteSpace="nowrap"
        position="absolute"
        bottom={0}
        zIndex={1}
      >
        <Flex animation={animation}>
          {array.map((item) => (
            <Flex direction="row" justify="center" align="center" gap="40px">
              <Text
                fontFamily="Heading Font"
                fontSize="100px"
                mt="-2px"
                color="var(--dark)"
              >
                {" "}
                Designer / Full Stack Web Developer /
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex animation={animation}>
          {array.map((item) => (
            <Flex direction="row" justify="center" align="center" gap="40px">
              <Text
                fontFamily="Heading Font"
                fontSize="100px"
                mt="-2px"
                color="var(--dark)"
              >
                {" "}
                Designer / Full Stack Web Developer /
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
