import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Project from "../Components/Projects/Projects/Projects";
import Modal from "../Components/Projects/Modal/Modal";
import Decoration from "../Components/Projects/Decoration";
import Button from "../Components/Projects/Button";

const projects = [
  {
    href: "",
    title: "Signed By",
    src: "SignedBy-Project.webp",
    color: "var(--light)",
  },
  {
    href: "https://overfrag-website.vercel.app/",
    title: "Overfrag",
    src: "Overfrag-Project.webp",
    color: "#000000",
  },
  {
    href: "",
    title: "Barroca Endless South",
    src: "Barroca-Project.webp",
    color: "var(--light)",
  },
  {
    href: "https://signedbypedro.github.io/CrossingGame/",
    title: "Crossing Game",
    src: "CrossingGame-Project.webp",
    color: "#000000",
  },
];

function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <Box overflow={"hidden"}>
        <Box paddingTop={"20%"} paddingBottom={"10%"} position={"relative"}>
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;
            return (
              <Project
                index={index}
                title={project.title}
                href={project.href}
                setModal={setModal}
                key={index}
                isLast={isLast}
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
