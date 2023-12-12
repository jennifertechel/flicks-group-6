import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Thumbnail from "./Thumbnail";

interface Movie {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  genre: string;
}

interface CarouselProps {
  movies: Movie[];
}

function Carousel({ movies }: CarouselProps) {
  const moviesPerPage = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalMovies = movies.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1,
    );
  };

  const startSliceIndex = currentIndex * moviesPerPage;
  const endSliceIndex = startSliceIndex + moviesPerPage;

  const moviesToDisplay = movies.slice(startSliceIndex, endSliceIndex);

  return (
    <Flex justifyContent="center" alignItems="center" width="100vw">
      <IconButton
        aria-label="Previous"
        icon={<FaChevronLeft />}
        onClick={handlePrev}
        left="0"
        
        zIndex="1"
        position="relative"
        isDisabled={movies.length <= moviesPerPage || currentIndex === 0}
      />
      <Flex
        css={{
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {moviesToDisplay.map((movie: Movie) => (
          <Box
            key={movie.title}
            display="inline-block"
            borderRadius="md"
            margin="2rem"
            justifyContent="center"
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
        position="relative"
        right="0"
        zIndex="1"
        isDisabled={
          movies.length <= moviesPerPage ||
          currentIndex === Math.ceil(movies.length / moviesPerPage) - 1
        }
      />
    </Flex>
  );
}

export default Carousel;
