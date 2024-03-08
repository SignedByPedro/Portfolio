import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import FooterBG from "../Components/Contacts/FooterBG";
import Brands from "../Components/Contacts/Brands";
import Brands2 from "../Components/Contacts/Brands2";
import Footer from "../Components/Contacts/Footer";

function Contacts() {
  return (
    <>
      <Box w={"100vw"} h={"100vh"} position={"relative"}>
        <Flex w={"100%"} h={"100%"} zIndex={0} bg={"lightgray"}></Flex>
        <Brands />
        <Brands2 />
        <Footer />
        <FooterBG />
      </Box>
    </>
  );
}

export default Contacts;
