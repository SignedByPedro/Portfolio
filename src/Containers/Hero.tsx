import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import Me from "../Components/Hero/Me";
import Slider from "../Components/Hero/Slider";
import Head from "../Components/Hero/Header/Head";

function Hero() {
  return (
    <>
      <Flex w={"100vw"} h={"100vh"}>
        <Head />
        <Flex w={"100%"} h={"100%"} zIndex={0} bg={"lightgray"}></Flex>
        <Me />
        <Slider />
      </Flex>
    </>
  );
}

export default Hero;
