import ReactDOMServer from "react-dom/server";
import {
  Box,
  Image,
  Flex,
  Divider,
  Text,
  Heading,
  HStack,
  VStack,
  Input,
  Button,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
  ModalOverlay,
  useDisclosure,
  Progress,
} from "@chakra-ui/react";
import eth from "../img/eth.svg";
import CopySVGButton from "./SVGButton";
import { useState, useEffect } from "react";

const priceHash = (colors) => {
  const concatenatedRGB = colors.map((color) => color.substring(1)).join("");
  const hash = parseInt(concatenatedRGB, 16) % 1000;
  return (hash / 1000).toFixed(3).replace(/^0\./, "0.");
};

const colorHash = (colors) => {
  const concatenatedRGB = colors.map((color) => color.substring(1)).join("");
  const hash = parseInt(concatenatedRGB, 16) % 10000;
  return hash.toString().padStart(4, "0");
};

const Duck = ({ com, index }) => {
  const svgCode = (
    <svg
      key={index}
      id="duck"
      viewBox="0 0 128 128"
      width="128"
      height="128"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="128" height="128" fill={com.bgColor} />
      <rect x="40" y="28" width="24" height="16" fill={com.hatColor} />
      <rect x="36" y="44" width="32" height="4" fill={com.hatColor} />
      <rect x="40" y="48" width="24" height="4" fill={com.color} />
      <rect x="40" y="52" width="24" height="4" fill={com.color} />
      <rect x="48" y="52" width="4" height="4" fill={com.eyeColor} />
      <rect x="36" y="56" width="4" height="4" fill={com.beakColor} />
      <rect x="32" y="60" width="12" height="4" fill={com.beakColor} />
      <rect x="40" y="56" width="24" height="4" fill={com.color} />
      <rect x="44" y="60" width="20" height="4" fill={com.color} />
      <rect x="48" y="64" width="32" height="4" fill={com.color} />
      <rect x="44" y="68" width="52" height="4" fill={com.color} />
      <rect x="44" y="72" width="48" height="4" fill={com.color} />
      <rect x="44" y="76" width="44" height="4" fill={com.color} />
      <rect x="44" y="80" width="44" height="4" fill={com.color} />
      <rect x="48" y="84" width="40" height="4" fill={com.color} />
      <rect x="52" y="88" width="32" height="4" fill={com.color} />
    </svg>
  );

  const ducksvg = ReactDOMServer.renderToStaticMarkup(svgCode);
  const colorNumber = colorHash(Object.values(com));
  const randomPrice = priceHash(Object.values(com));

  const [hash, setHash] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const newHash = `${colorHash(Object.values(com))}_${com.bgColor}_${
      com.hatColor
    }_${com.color}_${com.eyeColor}_${com.beakColor}`;
    setHash(newHash);
  }, [com]);

  const randomStats = () => {
    // define an array of stat names and colors
    const stats = [
      { name: "Speed", color: com.bgColor },
      { name: "Attack", color: com.hatColor },
      { name: "Defense", color: com.color },
      { name: "Special", color: com.eyeColor },
      { name: "Agility", color: com.beakColor },
    ];

    // generate a random level for each stat
    const levels = stats.map((stat) => ({
      name: stat.name,
      level: Math.floor(Math.random() * 100) + 1,
      color: stat.color,
    }));

    // render progress bars for each stat
    return levels.map((stat) => (
      <Box key={stat.name}>
        <Text fontWeight="bold">{stat.name}</Text>
        <Progress
          value={stat.level}
          colorScheme="gray"
          bgColor={stat.color}
          style={{ transform: "rotate(180deg)" }}
        />
      </Box>
    ));
  };

  return (
    <>
      <Box position="relative">
        <Image
          src={`data:image/svg+xml;base64,${btoa(ducksvg)}`}
          borderRadius="8px"
          marginBottom={6}
          cursor="pointer"
          alt="NFT image"
          zIndex="2"
        ></Image>
        <Box
          zIndex="1"
          position="absolute"
          backgroundColor="#000000"
          width="128px"
          height="128px"
          top="0"
          borderRadius="8px"
          opacity="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{
            opacity: "50%",
          }}
        >
          <CopySVGButton
            svg={`<svg
key="${index}"
id="duck"
viewBox="0 0 128 128"
width="128"
height="128"
role="img"
xmlns="http://www.w3.org/2000/svg"
>
<rect x="0" y="0" width="128" height="128" fill="${com.bgColor}" />
<rect
    x="40"
    y="28"
    width="24"
    height="16"
    fill="${com.hatColor}"
/>
<rect x="36" y="44" width="32" height="4" fill="${com.hatColor}" />
<rect x="40" y="48" width="24" height="4" fill="${com.color}" />
<rect x="40" y="52" width="24" height="4" fill="${com.color}" />
<rect x="48" y="52" width="4" height="4" fill="${com.eyeColor}" />
<rect x="36" y="56" width="4" height="4" fill="${com.beakColor}" />
<rect
    x="32"
    y="60"
    width="12"
    height="4"
    fill="${com.beakColor}"
/>
<rect x="40" y="56" width="24" height="4" fill="${com.color}" />
<rect x="44" y="60" width="20" height="4" fill="${com.color}" />
<rect x="48" y="64" width="32" height="4" fill="${com.color}" />
<rect x="44" y="68" width="52" height="4" fill="${com.color}" />
<rect x="44" y="72" width="48" height="4" fill="${com.color}" />
<rect x="44" y="76" width="44" height="4" fill="${com.color}" />
<rect x="44" y="80" width="44" height="4" fill="${com.color}" />
<rect x="48" y="84" width="40" height="4" fill="${com.color}" />
<rect x="52" y="88" width="32" height="4" fill="${com.color}" />
</svg>`}
          />
          {/* <Image src={view} height="48px" width="48px"></Image> */}
        </Box>
      </Box>
      <Heading as="h2" fontSize="22px" mb={4}>
        Duck #{colorNumber}
      </Heading>
      {/* <Text mb={6} fontSize="18px">
        Our Equilibrium collection promotes balance and calm.
      </Text> */}
      <HStack justify="space-between">
        <Flex align="center">
          <Image
            src={eth}
            marginRight="6px"
            height="18px"
            alt="ETH logo"
          ></Image>
          <Text fontWeight="bold">{randomPrice} PEET</Text>
        </Flex>
      </HStack>
      <Button onClick={onOpen} borderColor={com.color} variant="outline" mt={6}>
        View Stats
      </Button>
      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Duck #{colorNumber}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h3" size="lg" mb={4}>
              Duck Stats
            </Heading>
            <HStack spacing={10}>
              <VStack alignItems="left" mb={4} width="50%">
                {randomStats()}
              </VStack>
              <Image
                src={`data:image/svg+xml;base64,${btoa(ducksvg)}`}
                borderRadius="8px"
                marginBottom={6}
                alt="NFT image"
                zIndex="2"
              ></Image>
            </HStack>
            <Divider mb={4} />
            <Heading as="h3" size="lg" mb={4}>
              Other Stats
            </Heading>
            <Box mb={4}>
              <Box as="span" fontWeight="bold">
                Price:{" "}
                <HStack>
                  <Image
                    src={eth}
                    marginRight="6px"
                    height="18px"
                    alt="ETH logo"
                  ></Image>
                  <Text fontWeight="bold">{randomPrice} PEET</Text>
                </HStack>
              </Box>
              <Box as="span">{com.price}</Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Divider borderColor={com.color} mt={6} mb={4} />
      <Flex>
        <Text>
          <Input focusBorderColor={com.color} defaultValue={hash} />
        </Text>
      </Flex>
    </>
  );
};

export default Duck;
