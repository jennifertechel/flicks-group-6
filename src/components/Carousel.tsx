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
  const Movies = data.slice(25, 30);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Movies.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Movies.length - 1 : prevIndex - 1
    );
  };
  return (
    <Flex justifyContent="center" alignItems="center">
      <IconButton
        aria-label="Previous"
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
      />
      <Flex
        maxWidth="100%"
        
        css={{
  
          scrollbarWidth: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {Movies.map((movie: Movie, index: number) => (
          <Box
            key={movie.title}
            display={index === currentIndex ? 'inline-block' : 'none'}
            mr="20px"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            borderRadius="md"
            minWidth="200px"
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
      />
    </Flex>
  );
}
export default Carousel;