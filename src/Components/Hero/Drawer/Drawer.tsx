import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Project from "./Projects";

const projects = [
  {
    title: "Home",
    href: "./",
  },
  {
    title: "About Me",
    href: "",
  },
  {
    title: "Services",
    href: "",
  },
  {
    title: "Contact Me",
    href: "",
  },
];

const Drawer = () => {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100%"}
        align={"center"}
        direction={"column"}
        position={"absolute"}
        top={0}
      >
        <Image
          src="../../src/assets/Images/Logo-Cracked-Opacity.webp"
          alt="Logo Cracked"
          width="900px"
          top={0}
          position={"absolute"}
        />
        <Image
          src="../src/assets/Images/wall-big.webp"
          alt="Me"
          position="absolute"
          width="800px"
          top={0}
          right={"50px"}
          pointerEvents={"none"}
          zIndex={1}
        />
        <Box marginTop={"10%"} position={"relative"}>
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;
            return (
              <Project
                index={index}
                title={project.title}
                key={index}
                href={project.href}
                isLast={isLast}
              />
            );
          })}
        </Box>
      </Flex>
    </>
  );
};

export default Drawer;
