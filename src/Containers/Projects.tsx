import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Project from "../Components/Projects/Projects/Projects";
import Modal from "../Components/Projects/Modal/Modal";
import Decoration from "../Components/Projects/Decoration";
import Button from "../Components/Projects/Button";

const projects = [
  {
    title: "Signed By",
    src: "SignedBy-Project.webp",
    color: "#FFFFFF",
  },
  {
    title: "Overfrag",
    src: "Overfrag-Project.webp",
    color: "#000000",
  },
  {
    title: "Barroca Endless South",
    src: "Barroca-Project.webp",
    color: "#FFFFFF",
  },
  {
    title: "Silencio",
    src: "silencio.webp",
    color: "#706D63",
  },
];

function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
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
      <Button />
    </>
  );
}

export default Projects;
