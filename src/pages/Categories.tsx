import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import data from "../../data/movies.json";
import Carousel from "../components/Carousel";
import Thumbnail from "../components/Thumbnail";

const genres = Array.from(
	new Set(data.flatMap((movie) => movie.genre.split(", ")))
);

function Categories() {
	return (
		<Flex flexDir="column">
			<Heading mb={4}>Categories</Heading>
			<Flex flexDir="column">
				{genres.map((genre) => {
					const moviesInGenre = data.filter((movie) =>
						movie.genre.includes(genre)
					);
					if (moviesInGenre.length > 4) {
						return (
							<Box key={genre}>
								<Text mt={4} mb={4}>
									{genre}
								</Text>
								<Carousel genre={genre} movies={moviesInGenre} />
							</Box>
						);
					}
					return (
						<Flex flexDir="column" key={genre}>
							<Text mt={4} mb={4}>
								{genre}
							</Text>
							<Flex flexDir="row" gap="20">
								{moviesInGenre.map((movie) => (
									<Thumbnail
										key={movie.title}
										genre={movie.genre}
										title={movie.title}
										image={movie.thumbnail}
										rating={movie.rating}
										year={movie.year}
									/>
								))}
							</Flex>
						</Flex>
					);
				})}
			</Flex>
		</Flex>
	);
}
export default Categories;
