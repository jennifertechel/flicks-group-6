import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import data from '../../data/movies.json';
import Thumbnail from './Thumbnail';

interface Movie {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  genre: string;
}

function Carousel() {
  const moviesPerPage = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalMovies = data.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const startSliceIndex = currentIndex * moviesPerPage;
  const endSliceIndex = startSliceIndex + moviesPerPage;

  const moviesToDisplay = data.slice(startSliceIndex, endSliceIndex);

  return (
    <Flex justifyContent="center" alignItems="center"  >
      <IconButton
        aria-label="Previous"
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
        left="0"
        top="50%"
        zIndex="1"
      />
      <Flex
        maxWidth="100%"
        css={{
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {moviesToDisplay.map((movie: Movie, index: number) => (
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
        icon={<ChevronRightIcon />}
        onClick={handleNext}
        position="absolute"
        right="0"
        top="50%"
        zIndex="1"
      />
    </Flex>
  );
}

export default Carousel;
