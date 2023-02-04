import "./App.css";
import CopySVGButton from "./svgbutton";
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

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [color, setColor] = useState("#FAD02C");
  const [bgColor, setBgColor] = useState("#68BBE3");
  const [eyeColor, setEyeColor] = useState("#000000");
  const [beakColor, setBeakColor] = useState("#E7625F");
  const [hatColor, setHatColor] = useState("#228B22");
  const colours = require("nice-color-palettes/1000");

  const handleRandomize = () => {
    const randomColours = colours[random(0, colours.length - 1)];
    setColor(randomColours[0]);
    setBgColor(randomColours[1]);
    setEyeColor(randomColours[2]);
    setBeakColor(randomColours[3]);
    setHatColor(randomColours[4]);
  };

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

  const variables = ['color', 'bgColor', 'eyeColor', 'beakColor', 'hatColor'];
  const colors = [color, bgColor, eyeColor, beakColor, hatColor];
  const posPerms = generatePermutations(variables, colors);
  const posPerm = shuffleArray(posPerms);

  console.log(posPerm);

  return (
    <SimpleGrid spacing={4} p={4}>
      <Card align="center" p={4}>
        <Box>
          <HStack spacing={4}>
            <Heading size="md">Pixel Duck Maker</Heading>
            <Button onClick={handleRandomize}>Randomize</Button>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </HStack>
        </Box>
      </Card>
      <Card align="center">
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
      <Card align="center" p={4}>
        <SimpleGrid
          align="center"
          width="100%"
          minChildWidth="128px"
          spacing="20px"
        >
          {posPerm.map((com, index) => (
            <Box>
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
                <rect
                  x="40"
                  y="28"
                  width="24"
                  height="16"
                  fill={com.hatColor}
                />
                <rect x="36" y="44" width="32" height="4" fill={com.hatColor} />
                <rect x="40" y="48" width="24" height="4" fill={com.color} />
                <rect x="40" y="52" width="24" height="4" fill={com.color} />
                <rect x="48" y="52" width="4" height="4" fill={com.eyeColor} />
                <rect x="36" y="56" width="4" height="4" fill={com.beakColor} />
                <rect
                  x="32"
                  y="60"
                  width="12"
                  height="4"
                  fill={com.beakColor}
                />
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
            </Box>
          ))}
        </SimpleGrid>
      </Card>
      <Card align="center" p={4}>
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
