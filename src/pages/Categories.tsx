import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import data from "../../data/movies.json";

const genres = Array.from(
	new Set(data.flatMap((movie) => movie.genre.split(", ")))
);

const genres = Array.from(
	new Set(data.flatMap((movie) => movie.genre.split(", ")))
);

function Categories() {
	return (
		<Flex flexDir="column" px={35}>
			<Heading>Categories</Heading>
			<Flex flexDir="column">
				{data.map((movie, index) => (
					<Box key={index}>
						<Text>{movie.title}</Text>
						<Text>{movie.genre}</Text>
					</Box>
				))}
			</Flex>
		</Flex>
	);
}

export default Categories;
