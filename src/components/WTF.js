import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";
const WTF = () => {
  return (
    <>
      <Heading id="wtf">About</Heading>
      <Box>
        <Text fontSize="lg" p={4}>
          Long ago, a mysterious and powerful{" "}
          <Text as="span" color="purple.500">
            wizard
          </Text>{" "}
          created a magical world of {" "}
          <Text as="span" color="teal.500">
            ducks
          </Text>
          . These ducks were unlike any other ducks in the world, each one
          possessing unique and enchanting colors that shone like precious gems.
          Over time, the wizard's world faded into myth and legend, but the
          magic of the ducks lived on.
        </Text>
        <Text fontSize="lg" p={4}>
          Now, in modern times, a group of{" "}
          <Text as="span" color="orange.500">
            intrepid adventurers
          </Text>{" "}
          have discovered the secrets of the wizard's world and have set out to
          bring the magic of the ducks to the masses. With the help of {" "}
          <Text as="span" color="green.500">
            cutting-edge technology
          </Text>{" "}
          and a keen eye for color, they have developed a way to create{" "}
          <Text as="span" color="pink.500">
            unique and one-of-a-kind duck images
          </Text>{" "}
          that capture the essence of the wizard's world.
        </Text>
      </Box>
    </>
  );
};

export default WTF;
