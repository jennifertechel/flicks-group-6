import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "../../data/movies.json";
import Thumbnail from "./Thumbnail";

interface Movie {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  genre: string;
}


function RecommendedGallery() {
  const moviesPerPage = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingMovies = data.slice(0, 5);
  

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

  const RecommendedMovies = trendingMovies.slice(startSliceIndex, endSliceIndex);


  return (

    <Flex justifyContent="space-evenly">
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
      {RecommendedMovies.map((movie: Movie) => (
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

export default RecommendedGallery;
