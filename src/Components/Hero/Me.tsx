import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Me = () => {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100%"}
        align={"center"}
        direction={"column"}
        position={"absolute"}
        top={0}
      >
        <Image
          src="../src/assets/Images/Me.webp"
          alt="Me"
          zIndex="4"
          width="700px"
          bottom={0}
          position={"absolute"}
        />
        <Image
          src="../src/assets/Images/wall-big.webp"
          alt="Me"
          position="absolute"
          zIndex="3"
          width="800px"
          top={0}
          right={"50px"}
          pointerEvents={"none"}
        />
      </Flex>
    </>
  );
};

export default Me;
