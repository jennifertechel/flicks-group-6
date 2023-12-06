import { Box, Flex } from '@chakra-ui/react';
import data from '../../data/movies.json';
import Thumbnail from './Thumbnail';

interface Movie {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  genre: string;
}

function RecommendedGallery() {
  const RecommendedMovies = data.slice(0, 5);

  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap" gap="20px">
      {RecommendedMovies.map((movie: Movie) => (
        <Box key={movie.title} boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)" borderRadius="md">
          <Thumbnail
            genre={movie.genre}
            title={movie.title}
            image={movie.thumbnail}
            rating={movie.rating}
            year={movie.year}
          />
        </Box>
      ))}
    </Flex>
  );
}

export default RecommendedGallery;
