import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import "./Button.scss";
import Magnetic from "../Full/Magnetic/Magnetic2";

const Button = () => {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100%"}
        align={"center"}
        direction={"column"}
        position={"absolute"}
        top={"200%"}
        pointerEvents={"none"}
      >
        <Image
          src="../src/assets/Images/button-texture-2.webp"
          alt="button texture"
          zIndex="1"
          width="875px"
          position={"absolute"}
          top={"27.5%"}
          right={"0.5%"}
          pointerEvents={"none"}
        />
        <Image
          src="../src/assets/Images/button-texture-overlay-2.webp"
          alt="button texture"
          zIndex="3"
          width="875px"
          position={"absolute"}
          top={"27.5%"}
          right={"0.5%"}
          pointerEvents={"none"}
        />
        <div className="Svg-Container">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 58.86 59.54"
          >
            <path
              className="cls-1"
              d="M58.86,33.81c-.33,3.87-.39,7.31-1.01,10.65-.34,1.84-1.6,3.51-2.46,5.25-1.38,2.81-3.8,4.46-6.52,5.69-2.68,1.22-5.38,2.38-8.15,3.37-1.36.48-2.87.66-4.32.71-2.77.11-5.55.05-8.32.02-.67,0-1.44.01-1.98-.3-1.31-.74-2.69-.58-4.07-.69-.6-.05-1.17-.49-1.75-.74-.34-.15-.71-.42-1.04-.39-2.68.19-5.21-.5-7.44-1.79-1.57-.91-2.92-2.38-4.04-3.84-2.02-2.64-4.11-5.12-7.13-6.68-.34-.18-.73-.96-.6-1.23.26-.53.8-1.19,1.32-1.28,1.4-.24,2.84-.24,4.27-.29,3.1-.1,6.22-.03,9.31-.28,4.04-.34,8.05-.89,11.5-3.37,3.86-2.77,6.58-6.39,8.66-10.66,1.84-3.76,2.31-7.68,2.53-11.75.17-3.03-.11-5.96-1.33-8.69-.78-1.74-2.05-3.26-3.2-4.81-.43-.58-.73-1.05-.28-1.69.44-.62,1-.82,1.77-.54.34.12.78,0,1.17-.07.31-.05.6-.27.91-.28,1.54-.06,3.09-.08,4.64-.12,1.98-.05,3.18,1.22,4.37,2.55.46.51,1.04.96,1.66,1.27,1.02.51,2.23.72,3.15,1.36.84.59,1.49,1.51,2.09,2.39,2.25,3.31,3.59,7.03,4.33,10.9.59,3.1.7,6.3,1.09,9.44.26,2.11.63,4.21.89,5.9Z"
              fill="#d3d3d3"
              strokeWidth="0"
            />
          </svg>
        </div>
      </Flex>
      <Magnetic>
        <a href="https://your-link-here.com" className="Button" target="_blank">
          <p>More</p>
        </a>
      </Magnetic>
    </>
  );
};

export default Button;
