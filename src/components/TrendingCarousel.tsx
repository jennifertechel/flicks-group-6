import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from '../../data/movies.json';
import Thumbnail from './Thumbnail';

interface Movie {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  genre: string;
}

function TrendingCarousel() {
  const moviesPerPage = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingMovies = data.slice(20, 30);
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trendingMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trendingMovies.length - 1 : prevIndex - 1
    );
  };

  const startSliceIndex = currentIndex * moviesPerPage;
  const endSliceIndex = startSliceIndex + moviesPerPage;

  const moviesToDisplay = trendingMovies.slice(startSliceIndex, endSliceIndex);

  return (
    <Flex justifyContent="center" alignItems="center"  >
      <IconButton
        aria-label="Previous"
        icon={<FaChevronLeft />}
        onClick={handlePrev}
        left="0"
        top="50%"
        zIndex="1"
        position="absolute"
        isDisabled={trendingMovies.length <= moviesPerPage || currentIndex === 0}
      />
      <Flex
        maxWidth="100%"
        css={{
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {moviesToDisplay.map((movie: Movie) => (
          <Box
            key={movie.title}
            display="inline-block"
            borderRadius="md"
            minWidth="19vw"
            marginRight="20px"
            flexShrink={0}
          >
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
      <IconButton
        aria-label="Next"
        icon={<FaChevronRight />}
        onClick={handleNext}
        position="absolute"
        right="0"
        top="50%"
        zIndex="1"
        isDisabled={
        trendingMovies.length <= moviesPerPage ||
        currentIndex === Math.ceil(trendingMovies.length / moviesPerPage) - 1
        }
      />
    </Flex>
  );
}

export default TrendingCarousel;
