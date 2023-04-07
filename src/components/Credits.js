import React from "react";
import { Link, Text, Card } from "@chakra-ui/react";

const Credits = () => {
  return (
    <Card variant="unstyled" boxShadow="lg" align="center" p={4} id="bottom">
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
  );
};

export default Credits;