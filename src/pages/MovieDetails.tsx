import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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

  const movie = movies.find(
    (movie: { title: string | undefined }) => movie.title === movieTitle
  );

  if (!movie) {
    return <Text>Movie not found</Text>;
  }

  return (
    <Flex flexDir="row">
      <Box>{movie.thumbnail}</Box>
      <Flex flexDir="column">
        <Heading>{movie.title}</Heading>
        <Box>
          <Text>From {movie.year}</Text>
          <Text>{movie.rating}</Text>
        </Box>
        <Text>Actors: {movie.actors.join(", ")}</Text>{" "}
        <Text>Genre: {movie.genre}</Text>
        <Text>{movie.synopsis}</Text>
      </Flex>
    </Flex>
  );
}

export default MovieDetails;
