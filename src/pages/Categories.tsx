import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import data from "../../data/movies.json";

function Categories() {
  return (
    <Flex flexDir='column'>
      <Heading>Categories</Heading>
      <Flex flexDir='column'>
        {data.map((movie, index) => (
          <Box key={index}>
            <Text>{movie.title}</Text>
            <Text>{movie.genre}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default Categories;
