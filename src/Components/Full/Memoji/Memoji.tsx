import React from "react";
import { Box } from "@chakra-ui/react";
import ColorSlider from "./ColorSlider";

function Memoji() {
  return (
    <>
      <Box w={"100vw"} h={"100vh"} position={"fixed"} zIndex={9}>
        <ColorSlider />
      </Box>
    </>
  );
}

export default Memoji;
