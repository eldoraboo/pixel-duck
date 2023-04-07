import React from "react";
import {
  Heading,
  SimpleGrid,
  Card,
  Image,
  Text,
} from "@chakra-ui/react";
import eth from "../img/eth.svg";

const Team = () => {
  return (
    <>
      <Heading id="team">Team</Heading>
      <SimpleGrid
        align="center"
        width="100%"
        p={4}
        minChildWidth="200px"
        spacing="20px">
        <Card
          variant="outline"
          borderWidth="2px"
          borderColor="white"
          align="center"
          p={4}
        >
          <Image src={eth} height="64px" alt="ETH logo" />
          <Text as="b" pt={4}>
            Eldora
          </Text>
          <Text>Software Engineer</Text>
        </Card>
        <Card
          variant="outline"
          borderWidth="2px"
          borderColor="white"
          align="center"
          p={4}
        >
          <Text fontSize="4xl">??</Text>
          <Text as="b" pt={4}>
            ??
          </Text>
          <Text>??</Text>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Team;
