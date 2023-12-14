import { Box } from "@chakra-ui/react";
import Thumbnail from "./Thumbnail";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
  return (
    <Box maxW="100vw">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {movies.map((movie: Movie, index: number) => (
          <SwiperSlide key={index}>
            <Thumbnail
              genre={movie.genre}
              title={movie.title}
              image={movie.thumbnail}
              rating={movie.rating}
              year={movie.year}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Carousel;
