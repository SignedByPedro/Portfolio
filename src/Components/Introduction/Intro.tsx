import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import "./Intro.scss";
import Rounded from "../Full/RoundedButton";

const Intro = () => {
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
        <Text w={"40%"} fontSize={"35px"} position={"absolute"} left={"10px"}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </Text>
        <Image
          src="../src/assets/Images/button-texture.png"
          alt="button texture"
          zIndex="3"
          width="1400px"
          position={"absolute"}
          top={"15%"}
        />
        <Text
          w={"40%"}
          fontSize={"35px"}
          position={"absolute"}
          top={"39%"}
          zIndex={4}
          right={"20%"}
        >
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </Text>
        <Rounded className="button">
          <p>About me</p>
        </Rounded>
      </Flex>
    </>
  );
};

export default Intro;
