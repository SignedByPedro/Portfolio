import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Me = () => {
  return (
    <>
      <Flex
        w={"100vw"}
        h={"100vh"}
        align={"center"}
        direction={"column"}
        position={"absolute"}
        top={0}
      >
        <Image
          src="../src/assets/Images/Me.png"
          alt="Me"
          zIndex="3"
          width="700px"
          bottom={0}
          position={"absolute"}
        />
        <Image
          src="../src/assets/Images/wall-big.png"
          alt="Me"
          position="absolute"
          zIndex="2"
          width="800px"
          top={0}
          right={"50px"}
        />
      </Flex>
    </>
  );
};

export default Me;
