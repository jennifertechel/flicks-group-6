import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useLikeContext, usetoggleLike } from "../hooks/useLikeContext";

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
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${encodeURIComponent(title)}`);
  };

  function handleToggleLike(event: React.MouseEvent) {
    event.stopPropagation();
    setIsLiked(!isLiked);
    usetoggleLike(likedMovies, setLikedMovies, title, isLiked, setIsLiked);
  }

  return (
    <Box
      width="14rem"
      alignItems="flex-start"
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      borderRadius="10px"
      overflow="hidden"
      bg="white"
      position="relative"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.08)" }}
      onClick={handleClick}
      cursor="pointer"
      height="auto"
      minH="331px"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Image src={image} alt={title} color="black" />

      <Box
        bg="rgba(0, 0, 0, 0.9)"
        p={2}
        color="white"
        position="absolute"
        top="50%"
        left="0"
        right="0"
        bottom="0"
        opacity={showOverlay ? "1" : "0"}
        transition="opacity 0.3s"
      >
        <Flex direction="column">
          <Flex justify="space-between" align="center">
            <Heading fontSize={20}>{title}</Heading>
            <IconButton
              icon={likedMovies.includes(title) ? <GoHeartFill /> : <GoHeart />}
              aria-label={isLiked ? "Liked" : "Not liked"}
              fontSize="1.5rem"
              w="fit-content"
              bg="none"
              color="white"
              _hover={{ bg: "none" }}
              onClick={handleToggleLike}
            />
          </Flex>
          <Flex gap={5} align="center" pb={2}>
            <Text>Rating:</Text>
            <Badge px={3} borderRadius="xl">
              {rating}
            </Badge>
          </Flex>

          <Text fontSize={16}>From: {year}</Text>
          <Text fontSize={16}>Genre: {genre}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Thumbnail;
