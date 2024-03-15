import { Flex } from "@chakra-ui/react";
import React from "react";
import Intro from "../Components/Introduction/Intro";

function Introduction() {
  return (
    <>
      <Flex w={"100vw"} h={"85vh"} position={"relative"}>
        <Intro />
      </Flex>
    </>
  );
}

export default Introduction;
