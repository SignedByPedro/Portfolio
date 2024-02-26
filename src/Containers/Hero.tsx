import React from "react";
import { Flex } from "@chakra-ui/react";
import BG from "../Components/Hero/BG";
import Me from "../Components/Hero/Me";
import Slider from "../Components/Hero/Slider";

function Hero() {
  return (
    <>
      <BG />
      <Me />
      <Slider />
      <Flex w={"100vw"} h={"100vh"} bg={"red"}></Flex>
    </>
  );
}

export default Hero;
