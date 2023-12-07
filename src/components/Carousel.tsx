import { Flex } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
	return (
		<Flex w="100%" justifyContent="center" alignItems="center">
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={1}
				navigation
				breakpoints={{
					480: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1280: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1536: {
						slidesPerView: 6,
						spaceBetween: 50,
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
		</Flex>
	);
}

export default Carousel;
