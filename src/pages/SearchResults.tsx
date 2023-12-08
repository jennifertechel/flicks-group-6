import { Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import data from "../../data/movies.json";
import Thumbnail from "../components/Thumbnail";

interface Movie {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  genre: string;
}

function SearchResults() {
  const { term } = useParams<{ term: string }>();

  const filteredMovies = data.filter((movie: Movie) =>
    movie.title.toLowerCase().includes(term!.toLowerCase())
  );

  return (
    <Flex direction="column" align="center" py={10}>
      <Heading mb={10} data-testid="search-heading">
        Search Results for "{term}"
      </Heading>
      {filteredMovies.length === 0 ? (
        <Text>No results found</Text>
      ) : (
        <Flex flexWrap="wrap" justifyContent="center" gap={10}>
          {filteredMovies.map((movie) => (
            <Thumbnail
              key={movie.title}
              image={movie.thumbnail}
              rating={movie.rating}
              year={movie.year}
              title={movie.title}
              genre={movie.genre}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
}

export default SearchResults;
