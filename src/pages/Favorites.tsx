import { Flex, Grid, Heading } from "@chakra-ui/react";
import data from "../../data/movies.json";
import Thumbnail from "../components/Thumbnail";
import { useLocalStorage } from "../hooks/useLocalStorage";
function Favorites() {
  const [likedMovies] = useLocalStorage("likedMovies", []);

  const favoriteMovies = data.filter((movie) =>
    likedMovies.includes(movie.title)
  );

  return (
    <Flex flexDir="column" px={35}>
      <Heading pb={4}>Favorites</Heading>
      <Flex flexDir="column">
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
          {favoriteMovies.map((movie, index) => (
            <Thumbnail
              key={index}
              image={movie.thumbnail}
              rating={movie.rating}
              year={movie.year}
              title={movie.title}
              genre={movie.genre}
            />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Favorites;
