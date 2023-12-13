import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
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
  const [imageLoaded, setImageLoaded] = useState(true);
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");

  const handleClick = () => {
    navigate(`/movies/${encodeURIComponent(title)}`);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setIsLiked(likedMovies.includes(title));
  }, [likedMovies, title]);

  function toggleLike(event: React.MouseEvent) {
    event.stopPropagation();

    setIsLiked(!isLiked);

    if (!isLiked) {
      setLikedMovies([...likedMovies, title]);
    } else {
      const updatedLikedMovies = likedMovies.filter(
        (likedMovie: string | undefined) => likedMovie !== title,
      );
      setLikedMovies(updatedLikedMovies);
    }
  }

  return (
    <Box
      maxW="16vw"
      minW="12vw"
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
      height={imageLoaded ? "auto" : "100%"}
    >
      <Image
        src={image}
        alt={title}
        onError={() => setImageLoaded(false)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      {!imageLoaded && (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>{title}</span>
        </div>
      )}
      <Box
        bg="rgba(0, 0, 0, 0.7)"
        p="2"
        color="white"
        position="absolute"
        top={imageLoaded ? (isSmallerThan1000 ? "0" : "50%") : "0%"}
        left="0"
        right="0"
        bottom="0"
        opacity="0"
        transition="opacity 0.3s"
        _hover={{ opacity: "1" }}
      >
        <Flex direction="column">
          <Heading fontSize={isSmallerThan500 ? "1vw" : "1.5vw"}>
            {title}
          </Heading>
          <Tooltip label={`Rating: ${rating}`} placement="top">
            <Text fontSize="1vw">{rating}</Text>
          </Tooltip>

          <Flex direction="row" justify="space-between">
            <Box>
              <Text fontSize="1vw">From: {year}</Text>
              <Text fontSize="1vw">Genre: {genre}</Text>
            </Box>
            <IconButton
              icon={isLiked ? <GoHeartFill /> : <GoHeart />}
              aria-label={isLiked ? "Liked" : "Not liked"}
              fontSize={isSmallerThan500 ? "2.5vw" : "2vw"}
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
