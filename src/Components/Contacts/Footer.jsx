import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "./Footer.scss";
import Magnetic from "../Full/Magnetic/Magnetic3";
import GsapMagneticWrapper from "../Full/Magnetic/MagneticSocials";

const Footer = () => {
  return (
    <Box>
      <Magnetic>
        <a
          href="https://your-link-here.com"
          className="buttonF"
          target="_blank"
        >
          <p>Let's Chat!</p>
        </a>
      </Magnetic>
      <div className="SVG-f">
        <svg
          id="P11"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 216.48 216.72"
        >
          <path
            class="cls-1"
            d="M216.48,81.75h-54.4v-27.05h-27.26V0h81.66v81.75Z"
            fill="var(--light)"
            strokeWidth="0"
          />
          <path
            class="cls-1"
            d="M0,216.72v-81.43h54.85v26.71h26.66v54.72H0Z"
            fill="var(--light)"
            strokeWidth="0"
          />
          <path
            class="cls-1"
            d="M81.42,54.69h-26.49v26.98H.07V.06h81.35v54.63Z"
            fill="var(--light)"
            strokeWidth="0"
          />
          <path
            class="cls-1"
            d="M95.09,149.3h-20.96v-81.6h20.96v81.6Z"
            fill="var(--light)"
            strokeWidth="0"
          />
          <path
            class="cls-1"
            d="M121.36,149.27v-81.6h20.95v81.6h-20.95Z"
            fill="var(--light)"
            strokeWidth="0"
          />
        </svg>
      </div>
      <div className="FooterLine">Contact Me</div>
      <Flex position={"absolute"} bottom={"40px"} left={"1020px"}>
        <GsapMagneticWrapper>
          <a href="https://www.instagram.com/pedro_bduarte/" target="_blank">
            <svg
              id="Insta"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 88 88"
              width={"64px"}
              style={{ marginRight: "70px" }}
            >
              <path
                class="cls-1"
                d="M26,0C11.66,0,0,11.66,0,26v36c0,14.34,11.66,26,26,26h36c14.34,0,26-11.66,26-26V26c0-14.34-11.66-26-26-26H26ZM68,16c2.2,0,4,1.8,4,4s-1.8,4-4,4-4-1.8-4-4,1.8-4,4-4ZM44,22c12.14,0,22,9.86,22,22s-9.86,22-22,22-22-9.86-22-22,9.86-22,22-22ZM44,26c-9.92,0-18,8.08-18,18s8.08,18,18,18,18-8.08,18-18-8.08-18-18-18Z"
                fill="var(--light)"
                strokeWidth="0"
              />
            </svg>
          </a>
        </GsapMagneticWrapper>
        <GsapMagneticWrapper>
          <a
            href="https://www.linkedin.com/in/pedro-duarte-99bba5203/"
            target="_blank"
          >
            <svg
              id="Linkedin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 73.33 73.33"
              width={"64px"}
              style={{ marginRight: "70px" }}
            >
              <path
                class="cls-1"
                d="M66.67,0H6.67C2.98,0,0,2.98,0,6.67v60c0,3.68,2.98,6.67,6.67,6.67h60c3.68,0,6.67-2.98,6.67-6.67V6.67c0-3.68-2.98-6.67-6.67-6.67ZM23.18,60h-9.83v-31.64h9.83v31.64ZM18.16,23.84c-3.17,0-5.73-2.57-5.73-5.73s2.57-5.73,5.73-5.73,5.73,2.57,5.73,5.73-2.57,5.73-5.73,5.73ZM60.01,60h-9.83v-15.39c0-3.67-.07-8.39-5.11-8.39s-5.9,4-5.9,8.12v15.65h-9.83v-31.64h9.43v4.32h.13c1.31-2.49,4.52-5.11,9.3-5.11,9.96,0,11.8,6.55,11.8,15.07,0,0,0,17.35,0,17.35Z"
                fill="var(--light)"
                strokeWidth="0"
              />
            </svg>
          </a>
        </GsapMagneticWrapper>
        <GsapMagneticWrapper>
          <a href="https://github.com/SignedByPedro" target="_blank">
            <svg
              id="GitHub"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 78.77"
              width={"64px"}
            >
              <path
                class="cls-1"
                d="M40,0C17.91,0,0,17.91,0,40c0,18.74,12.91,34.43,30.31,38.77-.19-.54-.31-1.17-.31-1.94v-6.84h-5.03c-2.74,0-5.17-1.18-6.35-3.36-1.31-2.43-1.54-6.15-4.78-8.42-.96-.76-.23-1.62.88-1.5,2.05.58,3.75,1.99,5.35,4.07,1.59,2.09,2.34,2.56,5.32,2.56,1.44,0,3.6-.08,5.64-.4,1.09-2.78,2.98-5.33,5.29-6.54-13.32-1.37-19.68-8-19.68-16.99,0-3.87,1.65-7.62,4.45-10.78-.92-3.13-2.08-9.52.35-11.96,5.99,0,9.62,3.89,10.49,4.94,2.99-1.02,6.27-1.6,9.71-1.6s6.75.58,9.74,1.61c.86-1.04,4.49-4.94,10.49-4.94,2.44,2.44,1.27,8.85.34,11.98,2.79,3.15,4.43,6.89,4.43,10.75,0,8.99-6.35,15.61-19.65,16.99,3.66,1.91,6.33,7.28,6.33,11.32v9.11c0,.35-.08.6-.12.89,15.59-5.46,26.78-20.26,26.78-37.72C80,17.91,62.09,0,40,0Z"
                fill="var(--light)"
                strokeWidth="0"
              />
            </svg>
          </a>
        </GsapMagneticWrapper>
      </Flex>
    </Box>
  );
};
export default Footer;
