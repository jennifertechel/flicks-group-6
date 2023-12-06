import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useParams } from "react-router-dom";

type Movie = {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail?: string;
  isTrending?: boolean;
};

function MovieDetails({ movies }: { movies: Movie[] }) {
  const { movieTitle } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const movie = movies.find(
    (movie: { title: string | undefined }) => movie.title === movieTitle
  );

  if (!movie) {
    return <Text>The movie was not found</Text>;
  }

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Center>
      <Flex flexDir={["column", "column", "row"]}>
        <Box p="4">
          <Image src={movie.thumbnail} />
        </Box>
        <Flex flexDir="column" p="4" w={[300, 400, 500]}>
          <Heading>{movie.title}</Heading>
          <Flex flexDir="row" py="4">
            <Text>From {movie.year}</Text>
            <Spacer />
            <Text>{movie.rating}</Text>
          </Flex>
          <Text pb="4">
            Actors:
            <br /> {movie.actors.join(", ")}
          </Text>{" "}
          <Text pb="4">
            Genre:
            <br /> {movie.genre}
          </Text>
          <Text pb="4">{movie.synopsis}</Text>
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
    </Center>
  );
}

export default MovieDetails;
