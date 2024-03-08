import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import Carrossel from "../Components/Carrossel/Carrossel";
import ImagesBorder from "../Components/Carrossel/ImagesBorder";

function Images() {
  return (
    <>
      <Flex w={"100vw"} h={"100vh"} position={"relative"}>
        <Carrossel />
        <ImagesBorder />
      </Flex>
    </>
  );
}

export default Images;
