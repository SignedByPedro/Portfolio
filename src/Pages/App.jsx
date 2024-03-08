import { useState, useRef } from "react";
import "./App.css";
import MouseFollower from "../Components/Full/MouseFollower/MouseFollower";
import { Flex } from "@chakra-ui/react";
import Head from "../Components/Hero/Header/Head";
import Hero from "../Containers/Hero";
import Introduction from "../Containers/Introduction";
import Projects from "../Containers/Projects";
import Images from "../Containers/Images";
import Contacts from "../Containers/Contacts";

function App() {
  const [count, setCount] = useState(0);
  const stickyElement = useRef(null);

  return (
    <>
      <Flex position={"absolute"} zIndex={2}>
        <MouseFollower stickyElement={stickyElement} />
      </Flex>
      <Head ref={stickyElement} />
      <Hero />
      <Introduction />
      <Projects />
      <Images />
      <Contacts />
    </>
  );
}

export default App;
