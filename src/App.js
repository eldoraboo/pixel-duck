import "./App.css";
import Ducks from "./components/Ducks";
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Credits from "./components/Credits";
import WTF from "./components/WTF";

const App = () => {
  return (
    <>
      <Nav />
      <SimpleGrid spacing={4} p={4}>
        <WTF/>
        <Ducks/>
        <Roadmap/>
        <Team/>
        <Credits/>
      </SimpleGrid>
    </>
  );
};

export default App;
