import { useState } from "react";
import "./App.css";
import MouseFollower from "../Components/Full/MouseFollower/MouseFollower";
import { Flex } from "@chakra-ui/react";
import Hero from "../Containers/Hero";
import Introduction from "../Containers/Introduction";
import Projects from "../Containers/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Flex position={"absolute"} zIndex={1}>
        <MouseFollower />
      </Flex>
      <Hero />
      <Introduction />
      <Projects />
    </>
  );
}

export default App;
