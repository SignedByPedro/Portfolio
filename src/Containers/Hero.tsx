import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import Me from "../Components/Hero/Me";
import Slider from "../Components/Hero/Slider";

function Hero() {
  return (
    <>
      <Flex w={"100vw"} h={"100vh"}>
        <Me />
        <Slider />
      </Flex>
    </>
  );
}

export default Hero;
