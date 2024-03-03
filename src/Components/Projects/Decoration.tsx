import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Decoration = () => {
  return (
    <>
      <Image
        src="../src/assets/Images/wall-small.png"
        alt="wall-small"
        zIndex="3"
        width="500px"
        position={"absolute"}
        top={0}
      />
    </>
  );
};

export default Decoration;
