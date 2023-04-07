import "./App.css";
import Duck from "./components/Duck";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import random from "lodash/random";
import {
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  HStack,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Text,
  Heading,
  useColorMode,
} from "@chakra-ui/react";


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generatePermutations(variables, colors) {
  const permutations = [];

  function permute(arr, data) {
    let i;
    if (arr.length === 0) {
      permutations.push(data);
    } else {
      for (i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr, data.concat(next));
      }
    }
  }

  permute(colors, []);

  const result = permutations.map((permutation) => {
    return variables.reduce((obj, variable, index) => {
      obj[variable] = permutation[index];
      return obj;
    }, {});
  });

  return result;
}

function replacePlaceholders(arr, placeholders, colors) {
  const result = arr.map((obj) => {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      const index = placeholders.indexOf(value);
      newObj[key] = colors[index];
    }
    return newObj;
  });
  return result;
}

const variables = ["color", "bgColor", "eyeColor", "beakColor", "hatColor"];
const place = ['a', 'b', 'c', 'd', 'e'];
const posPerms = generatePermutations(variables, place);
const posPerm = shuffleArray(posPerms);

const App = () => {
  const colours = require("nice-color-palettes/1000");
  const randomColour = colours[random(0, colours.length - 1)];
  const { colorMode, toggleColorMode } = useColorMode();
  const [color, setColor] = useState(randomColour[0]);
  const [bgColor, setBgColor] = useState(randomColour[1]);
  const [eyeColor, setEyeColor] = useState(randomColour[2]);
  const [beakColor, setBeakColor] = useState(randomColour[3]);
  const [hatColor, setHatColor] = useState(randomColour[4]);
  
  const handleRandomize = () => {
    const randomColours = colours[random(0, colours.length - 1)];
    setColor(randomColours[0]);
    setBgColor(randomColours[1]);
    setEyeColor(randomColours[2]);
    setBeakColor(randomColours[3]);
    setHatColor(randomColours[4]);
    // eslint-disable-next-line
    const posPerm = shuffleArray(posPerms);
  };

  const colors = [color, bgColor, eyeColor, beakColor, hatColor];
  const posPermColors = replacePlaceholders(posPerm, place, colors);

  return (
    <SimpleGrid spacing={4} p={4}>
      <Card boxShadow="lg" align="center" p={4}>
        <Box>
          <HStack spacing={4}>
            <Heading size="md">Pixel Duck</Heading>
            <Button onClick={handleRandomize}>Randomize</Button>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </HStack>
        </Box>
      </Card>
      <Card boxShadow="lg" align="center">
        <CardBody>
          <Popover>
            <PopoverTrigger>
              <Button bg={color} m={1}></Button>
            </PopoverTrigger>
            <PopoverContent>
              <ChromePicker
                width="100%"
                color={color}
                onChange={(color) => setColor(color.hex)}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button bg={beakColor} m={1}></Button>
            </PopoverTrigger>
            <PopoverContent>
              <ChromePicker
                width="100%"
                color={beakColor}
                onChange={(beakColor) => setBeakColor(beakColor.hex)}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button bg={eyeColor} m={1}></Button>
            </PopoverTrigger>
            <PopoverContent>
              <ChromePicker
                width="100%"
                color={eyeColor}
                onChange={(eyeColor) => setEyeColor(eyeColor.hex)}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button bg={bgColor} m={1}></Button>
            </PopoverTrigger>
            <PopoverContent>
              <ChromePicker
                width="100%"
                color={bgColor}
                onChange={(bgColor) => setBgColor(bgColor.hex)}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button bg={hatColor} m={1}></Button>
            </PopoverTrigger>
            <PopoverContent>
              <ChromePicker
                width="100%"
                color={hatColor}
                onChange={(hatColor) => setHatColor(hatColor.hex)}
              />
            </PopoverContent>
          </Popover>
        </CardBody>
      </Card>
      {/* <Card boxShadow="lg" align="center" p={4}> */}
      <SimpleGrid
        align="center"
        width="100%"
        columns="2"
        minChildWidth="200px"
        spacing="20px"
      >
        {posPermColors.map((com, index) => (
          <Card boxShadow="lg" align="center" p={4}>
            <Duck com={com} index={index} />
          </Card>
        ))}
      </SimpleGrid>
      {/* </Card> */}
      <Card boxShadow="lg" align="center" p={4}>
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
  );
};

export default App;
