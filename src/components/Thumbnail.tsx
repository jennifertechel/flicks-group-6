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
      textAlign="center"
      justifyContent="center"
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      borderRadius="md"
      overflow="hidden"
      bg="white"
      p="2"
      position="relative"
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={image} alt="Movie Thumbnail" />
      <Box
        bg="rgba(0, 0, 0, 0.7)"
        p="2"
        color="white"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0"
        transition="opacity 0.3s"
        _hover={{ opacity: '1' }}
      >
        <Flex direction="column" alignItems="center">
          <Text fontSize="sm" fontWeight="bold">
            {title}
          </Text>
          <Tooltip label={`Rating: ${rating}`} placement="top">
            <Text fontSize="sm">Rating: {rating}</Text>
          </Tooltip>
          <Text fontSize="sm">Year: {year}</Text>
          <Text fontSize="sm">Genre: {genre}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Thumbnail;
