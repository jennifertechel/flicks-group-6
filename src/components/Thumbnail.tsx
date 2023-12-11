import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toggleLike, useLikeContext } from "../context/LikeContext";

interface ThumbnailProps {
  image: string;
  rating: string;
  year: number;
  title: string;
  genre: string;
}

function Thumbnail({ image, rating, year, title, genre }: ThumbnailProps) {
  const { likedMovies, setLikedMovies } = useLikeContext();
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${encodeURIComponent(title)}`);
  };

  function handleToggleLike(event: React.MouseEvent) {
    event.stopPropagation();
    setIsLiked(!isLiked);
    toggleLike(likedMovies, setLikedMovies, title, isLiked, setIsLiked);
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
      onClick={handleClick}
      cursor="pointer"
    >
      <Image src={image} alt={title} />
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
              icon={likedMovies.includes(title) ? <GoHeartFill /> : <GoHeart />}
              aria-label={isLiked ? "Liked" : "Not liked"}
              fontSize={24}
              w="fit-content"
              bg="none"
              color="white"
              _hover={{ bg: "none" }}
              onClick={handleToggleLike}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Thumbnail;
