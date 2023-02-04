import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import { BlockPicker } from "react-color";
import random from "lodash/random";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  CardHeader,
  Text,
} from "@chakra-ui/react";

const App = () => {
  const [color, setColor] = useState("#FAD02C");
  const [bgColor, setBgColor] = useState("#68BBE3");
  const [eyeColor, setEyeColor] = useState("#000000");
  const [beakColor, setBeakColor] = useState("#E7625F");
  const colours = require("nice-color-palettes");

  const handleRandomize = () => {
    const randomColours = colours[random(0, colours.length - 1)];
    setColor(randomColours[0]);
    setBgColor(randomColours[1]);
    setEyeColor(randomColours[2]);
    setBeakColor(randomColours[3]);
  };

  const posCom = [
    {
      color: color,
      bgColor: bgColor,
      eyeColor: eyeColor,
      beakColor: beakColor,
    },
    {
      color: bgColor,
      bgColor: eyeColor,
      eyeColor: beakColor,
      beakColor: color,
    },
    {
      color: eyeColor,
      bgColor: beakColor,
      eyeColor: color,
      beakColor: bgColor,
    },
    {
      color: beakColor,
      bgColor: color,
      eyeColor: bgColor,
      beakColor: eyeColor,
    },
    {
      color: color,
      bgColor: eyeColor,
      eyeColor: bgColor,
      beakColor: beakColor,
    },
    {
      color: bgColor,
      bgColor: beakColor,
      eyeColor: eyeColor,
      beakColor: color,
    },
    {
      color: eyeColor,
      bgColor: color,
      eyeColor: beakColor,
      beakColor: bgColor,
    },
    {
      color: beakColor,
      bgColor: bgColor,
      eyeColor: color,
      beakColor: eyeColor,
    },
    {
      color: color,
      bgColor: beakColor,
      eyeColor: eyeColor,
      beakColor: bgColor,
    },
    {
      color: bgColor,
      bgColor: color,
      eyeColor: beakColor,
      beakColor: eyeColor,
    },
    {
      color: eyeColor,
      bgColor: bgColor,
      eyeColor: color,
      beakColor: beakColor,
    },
    {
      color: beakColor,
      bgColor: eyeColor,
      eyeColor: bgColor,
      beakColor: color,
    },
    {
      color: color,
      bgColor: beakColor,
      eyeColor: bgColor,
      beakColor: eyeColor,
    },
    {
      color: bgColor,
      bgColor: color,
      eyeColor: eyeColor,
      beakColor: beakColor,
    },
    {
      color: eyeColor,
      bgColor: bgColor,
      eyeColor: beakColor,
      beakColor: color,
    },
    {
      color: beakColor,
      bgColor: eyeColor,
      eyeColor: color,
      beakColor: bgColor,
    },
  ];

  return (
    <SimpleGrid spacing={4} p={4}>
      <Card align="center" p={4}>
        <Box>
          <HStack spacing={4}>
            <Heading size="md">Pixel Duck Maker</Heading>
            <Button onClick={handleRandomize}>Randomize</Button>
          </HStack>
        </Box>
      </Card>
      <Card align="center">
        <CardBody>
          <Popover>
            <PopoverTrigger>
              <Button bg={color} m={1}>
                Colour 1
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <BlockPicker
                width="100%"
                color={color}
                onChange={(color) => setColor(color.hex)}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button bg={beakColor} m={1}>
                Colour 2
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <BlockPicker
                width="100%"
                color={beakColor}
                onChange={(beakColor) => setBeakColor(beakColor.hex)}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button bg={eyeColor} m={1}>
                Colour 3
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <BlockPicker
                width="100%"
                color={eyeColor}
                onChange={(eyeColor) => setEyeColor(eyeColor.hex)}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button bg={bgColor} m={1}>
                Colour 4
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <BlockPicker
                width="100%"
                color={bgColor}
                onChange={(bgColor) => setBgColor(bgColor.hex)}
              />
            </PopoverContent>
          </Popover>
        </CardBody>
      </Card>
      <Card align="center" p={4}>
        <HStack spacing={4}>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }}>
            {posCom.map((com, index) => (
              <Box>
                <svg
                  key={index}
                  id="duck"
                  viewBox="0 0 128 128"
                  width="128"
                  height="128"
                >
                  <rect
                    x="0"
                    y="0"
                    width="128"
                    height="128"
                    fill={com.bgColor}
                  />
                  <rect x="44" y="44" width="16" height="4" fill={com.color} />
                  <rect x="40" y="48" width="24" height="4" fill={com.color} />
                  <rect x="40" y="52" width="24" height="4" fill={com.color} />
                  <rect
                    x="48"
                    y="52"
                    width="4"
                    height="4"
                    fill={com.eyeColor}
                  />
                  <rect
                    x="36"
                    y="56"
                    width="4"
                    height="4"
                    fill={com.beakColor}
                  />
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
              </Box>
            ))}
          </SimpleGrid>
        </HStack>
      </Card>
      <Card align="center" p={4}>
        Made with ♥ by Eldora
      </Card>
    </SimpleGrid>
  );
};

export default App;
