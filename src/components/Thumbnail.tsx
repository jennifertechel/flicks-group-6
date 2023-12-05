import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from 'react';

interface ThumbnailProps {
    image: string;
    rating: string; 
    year: number;
  }
  
  function Thumbnail({ image, rating, year }: ThumbnailProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
      borderRadius="md"
      overflow="hidden"
      position="relative"
      maxW="200px"
      bg="white"
      p="2"
    >
      <Image src={image} alt="Movie Thumbnail" />
      <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="rgba(0, 0, 0, 0.5)" opacity={0}>
        <Flex direction="column" alignItems="center" justifyContent="center" h="100%" color="white">
          <Tooltip label={`Rating: ${rating}`} placement="top">
            <Text fontSize="sm">Rating: {rating}</Text>
          </Tooltip>
          <Text fontSize="sm">Year: {year}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Thumbnail;
