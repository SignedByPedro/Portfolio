import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Project from "../Components/Projects/Projects/Projects";
import Modal from "../Components/Projects/Modal/Modal";
import Decoration from "../Components/Projects/Decoration";

const projects = [
  {
    title: "Signed By",
    src: "SignedBy-Project.png",
    color: "#FFFFFF",
  },
  {
    title: "Overfrag",
    src: "Overfrag-Project.png",
    color: "#000000",
  },
  {
    title: "Barroca Endless South",
    src: "Barroca-Project.png",
    color: "#FFFFFF",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <Box overflow={"hidden"}>
      <Box paddingTop={"20%"} paddingBottom={"10%"} position={"relative"}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
        <Decoration />
      </Box>
      <Modal modal={modal} projects={projects} />
    </Box>
  );
}

export default Projects;
