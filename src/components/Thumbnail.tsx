import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';


interface ThumbnailProps {
  image: string;
  rating: string;
  year: number;
  title: string; 
  genre: string;
}

function Thumbnail({ image, rating, year, title, genre }: ThumbnailProps) {
  return (
    <Box
      maxW="200px"
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      borderRadius="md"
      overflow="hidden"
      bg="white"
      p="2"
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={image} alt="Movie Thumbnail" />
      <Box bg="rgba(0, 0, 0, 0.5)" p="2" color="white">
        <Text fontSize="sm" fontWeight="bold">
          {title}
        </Text>
        <Flex direction="column" alignItems="center">
          <Tooltip label={`Rating: ${rating}`} placement="top">
            <Text fontSize="sm">Rating: {rating}{genre}</Text>
          </Tooltip>
          <Text fontSize="sm">Year: {year}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Thumbnail;
