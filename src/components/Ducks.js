import "../App.css";
import Duck from "./Duck";
import React, { useState } from "react";
import random from "lodash/random";
import { SimpleGrid, Card, Button, Heading } from "@chakra-ui/react";

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
const place = ["a", "b", "c", "d", "e"];
const posPerms = generatePermutations(variables, place);
const posPerm = shuffleArray(posPerms);

const Ducks = () => {
  const colours = require("nice-color-palettes/1000");
  const randomColour = colours[random(0, colours.length - 1)];
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

  const [ducksToShow, setDucksToShow] = useState(10);

  const handleSeeMoreClick = () => {
    setDucksToShow((prev) => prev + 10);
  };

  return (
    <>
      <Button
        position="fixed"
        bottom="10"
        right="10"
        zIndex="5"
        onClick={handleRandomize}
        bgColor="pink.600"
      >
        Randomize
      </Button>
      <Heading id="ducks">
        Meet the Ducks
      </Heading>
      <SimpleGrid
        align="center"
        width="100%"
        p={4}
        minChildWidth="160px"
        spacing="20px"
      >
        {posPermColors.slice(0, ducksToShow).map((com, index) => (
          <Card
            variant="outline"
            borderWidth="2px"
            borderColor={com.color}
            align="center"
            p={4}
          >
            <Duck com={com} index={index} />
          </Card>
        ))}
      </SimpleGrid>
      {ducksToShow < 120 && (
        <Button colorScheme="pink" onClick={handleSeeMoreClick}>
          See More Ducks
        </Button>
      )}
    </>
  );
};

export default Ducks;
