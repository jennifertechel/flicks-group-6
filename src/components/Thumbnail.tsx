import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ThumbnailProps {
  image: string;
  rating: string;
  year: number;
  title: string;
  genre: string;
}

function Thumbnail({ image, rating, year, title, genre }: ThumbnailProps) {
  const [isLiked, setIsLiked] = useState(false);

  const [likedMovies, setLikedMovies] = useLocalStorage("likedMovies", []);

  useEffect(() => {
    setIsLiked(likedMovies.includes(title));
  }, [likedMovies, title]);

  function toggleLike() {
    setIsLiked(!isLiked);

    if (!isLiked) {
      setLikedMovies([...likedMovies, title]);
    } else {
      const updatedLikedMovies = likedMovies.filter(
        (likedMovie: string | undefined) => likedMovie !== title
      );
      setLikedMovies(updatedLikedMovies);
    }
  }

  return (
    <Box
      maxW="200px"
      alignItems="flex-start"
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      borderRadius="md"
      overflow="hidden"
      bg="white"
      position="relative"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={image} alt="Movie Thumbnail" />
      <Box
        bg="rgba(0, 0, 0, 0.7)"
        p="2"
        color="white"
        position="absolute"
        top="190"
        left="0"
        right="0"
        bottom="0"
        opacity="0"
        transition="opacity 0.3s"
        _hover={{ opacity: "1" }}
      >
        <Flex direction="column">
          <Heading fontSize="xl" pb="2">
            {title}
          </Heading>
          <Tooltip label={`Rating: ${rating}`} placement="top">
            <Text fontSize="sm">{rating}</Text>
          </Tooltip>

          <Flex direction="row" justify="space-between">
            <Box>
              <Text fontSize="sm">From: {year}</Text>
              <Text fontSize="sm">Genre: {genre}</Text>
            </Box>
            <IconButton
              icon={isLiked ? <GoHeartFill /> : <GoHeart />}
              aria-label={isLiked ? "Liked" : "Not liked"}
              fontSize={24}
              w="fit-content"
              bg="none"
              color="white"
              _hover={{ bg: "none" }}
              onClick={toggleLike}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Thumbnail;
