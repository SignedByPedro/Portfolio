import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import "./Intro.scss";
import Magnetic from "../Full/Magnetic/Magnetic";

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
        fontFamily={"Body Font"}
      >
        <Text
          w={"40%"}
          fontSize={"35px"}
          position={"absolute"}
          left={"7%"}
          color={"var(--dark)"}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </Text>
        <Image
          src="../src/assets/Images/button-texture.webp"
          alt="button texture"
          zIndex="0"
          width="1400px"
          position={"absolute"}
          top={"15%"}
          pointerEvents={"none"}
        />
        <Image
          src="../src/assets/Images/button-texture-overlay.webp"
          alt="button texture"
          zIndex="3"
          width="1400px"
          position={"absolute"}
          top={"15%"}
          pointerEvents={"none"}
        />
        <div className="SVG-Container">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 49.69 60.37"
            width="215"
          >
            <path
              className="Opacity"
              d="M49.69,3.62c-.94,1.02-1.54,2.11-3.02,2.14-.46,0-.96.36-1.37.64-3.74,2.57-7.57,5.01-11.15,7.78-3.47,2.69-7.19,5.16-9.54,9.08-1.33,2.23-2.23,4.56-2.43,7.15-.47,6.01,1.55,11.15,5.17,15.89,2.88,3.77,6.37,6.74,10.39,9.15.74.44,1.5.85,2.37,1.34-.54,1.22-1.77,1.27-2.73,1.61-1.74.62-3.53,1.18-5.34,1.54-1.5.3-3.07.33-4.61.41-5.49.28-9.99-2.05-14.13-5.36-.86-.69-1.84-1.26-2.78-1.84-2.42-1.5-4.2-3.6-5.64-6.02-.14-.24-.31-.47-.47-.69-.52-.73-1.16-1.45-.26-1.96-.79-2.1-1.68-4.03-2.25-6.04-.67-2.39-1.13-4.84-1.58-7.29-.63-3.41-.28-6.77.71-10.08.35-1.17.64-2.37,1.11-3.5.32-.78.86-1.49,1.37-2.19,2.47-3.38,5.62-5.96,9.29-7.99,2.99-1.65,5.85-3.54,8.81-5.27C23.88.79,26.35-.03,28.98,0c3.18.04,6.35.29,9.53.45.12,0,.24,0,.36.03,3.4.94,6.8,1.89,10.2,2.83.14.04.27.13.62.31Z"
              fill="var(--light)"
              strokeWidth="0"
            />
          </svg>
        </div>
        <Text
          w={"40%"}
          fontSize={"35px"}
          position={"absolute"}
          top={"39%"}
          zIndex={4}
          right={"20%"}
          color={"var(--dark)"}
          fontFamily={"Body Font"}
        >
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </Text>
        <Magnetic>
          <a
            href="https://your-link-here.com"
            className="button"
            target="_blank"
          >
            <p>About me</p>
          </a>
        </Magnetic>
      </Flex>
    </>
  );
};

export default Intro;
