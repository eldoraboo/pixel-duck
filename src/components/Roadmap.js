import React from "react";
import { Heading, Box, VStack, Text, Flex, Badge } from "@chakra-ui/react";

const Roadmap = () => {
  return (
    <Box p={4}>
      <Heading id="roadmap" mb={4}>
        What's Next?
      </Heading>
      <VStack alignItems="stretch">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Heading size="md" color="purple.500">
              Concept
            </Heading>
            <Text mt={2}>
              The idea for the project is developed and refined.
            </Text>
          </Box>
          <Badge colorScheme="green">Completed</Badge>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Heading size="md" color="teal.500">
              Design
            </Heading>
            <Text mt={2}>
              The visual design and user experience is created.
            </Text>
          </Box>
          <Badge colorScheme="yellow">In Progress</Badge>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Heading size="md" color="orange.500">
              Contract
            </Heading>
            <Text mt={2}>The smart contract is developed and tested.</Text>
          </Box>
          <Badge colorScheme="red">Not Started</Badge>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Heading size="md" color="green.500">
              Minting
            </Heading>
            <Text mt={2}>The NFTs are minted and prepared for sale.</Text>
          </Box>
          <Badge colorScheme="red">Not Started</Badge>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Heading size="md" color="pink.500">
              Launch
            </Heading>
            <Text mt={2}>The project is launched and the NFTs are sold.</Text>
          </Box>
          <Badge colorScheme="red">Not Started</Badge>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Roadmap;
