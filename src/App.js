import "./App.css";
import Ducks from "./components/Ducks";
import React from "react";
import { Link, SimpleGrid, Card, Text } from "@chakra-ui/react";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <SimpleGrid spacing={4} p={4}>
        <Ducks/>
        <Card
          variant="unstyled"
          boxShadow="lg"
          align="center"
          p={4}
          id="bottom"
        >
          <Text>Made with ♥ by Eldora</Text>
          <Text>
            Colors from{" "}
            <Link href="https://github.com/Jam3/nice-color-palettes">
              Nice Color Palettes
            </Link>{" "}
          </Text>
          <Text>
            Color Picker from{" "}
            <Link href="https://github.com/casesandberg/react-color">
              React Color
            </Link>
          </Text>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default App;
