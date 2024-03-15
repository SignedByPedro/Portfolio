import React from "react";
import { Box } from "@chakra-ui/react";
import FooterBG from "../Components/Contacts/FooterBG";
import Brands from "../Components/Contacts/Brands";
import Brands2 from "../Components/Contacts/Brands2";
import Footer from "../Components/Contacts/Footer";

function Contacts() {
  return (
    <>
      <Box w={"100vw"} h={"100vh"} position={"relative"}>
        <Brands />
        <Brands2 />
        <FooterBG />
        <Footer />
      </Box>
    </>
  );
}

export default Contacts;
