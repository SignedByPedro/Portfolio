import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrossel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };

  return (
    <Box
      w={"80%"}
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
      overflow={"hidden"}
      zIndex={1}
    >
      <Slider {...settings}>
        <Image src="../src/assets/Images/6.png" alt="Us" />
        <Image src="../src/assets/Images/6.png" alt="Us" />
        <Image src="../src/assets/Images/6.png" alt="Us" />
        <Image src="../src/assets/Images/6.png" alt="Us" />
        <Image src="../src/assets/Images/6.png" alt="Us" />
        <Image src="../src/assets/Images/6.png" alt="Us" />
      </Slider>
    </Box>
  );
};

export default Carrossel;
