import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import MovieGallery from "../components/Moviegallery";

function Home() {
  return (
    <Flex>
      <Heading>Home</Heading>
      <MovieGallery></MovieGallery>
    </Flex>
  );
}

export default Home;
