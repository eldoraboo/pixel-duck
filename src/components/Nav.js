import React, { useState } from "react";
import {
  Link,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const navBg = "black";

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const scrollToWTF = () => {
    const WTFSection = document.querySelector("#wtf");
    WTFSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDucks = () => {
    const ducksSection = document.querySelector("#ducks");
    ducksSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRoadmap = () => {
    const roadmapSection = document.querySelector("#roadmap");
    roadmapSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTeam = () => {
    const teamSection = document.querySelector("#team");
    teamSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    const bottomSection = document.querySelector("#bottom");
    bottomSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >
      <Flex alignItems="center">
        <Stack justify={"flex-end"} direction={"row"} h={6} spacing={5}>
          <Link _hover={{ color: "pink.600" }} mb="5" onClick={scrollToWTF}>
            <Text fontSize="lg">WTF?</Text>
          </Link>
          <Link _hover={{ color: "pink.600" }} mb="5" onClick={scrollToDucks}>
            <Text fontSize="lg">Ducks</Text>
          </Link>
          <Link _hover={{ color: "pink.600" }} mb="5" onClick={scrollToRoadmap}>
            <Text fontSize="lg">Roadmap</Text>
          </Link>
          <Link _hover={{ color: "pink.600" }} mb="5" onClick={scrollToTeam}>
            <Text fontSize="lg">Team</Text>
          </Link>
          <Link _hover={{ color: "pink.600" }} mb="5" onClick={scrollToBottom}>
            <Text fontSize="lg">Credits</Text>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Nav;
