import {
	Box,
	Center,
	Flex,
	Heading,
	IconButton,
	Image,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useParams } from "react-router-dom";
import { useLikeContext, usetoggleLike } from "../hooks/useLikeContext";

type Movie = {
	title: string;
	year: number;
	rating: string;
	actors: string[];
	genre: string;
	synopsis: string;
	thumbnail?: string;
	isTrending?: boolean;
};

function MovieDetails({ movies }: { movies: Movie[] }) {
	const { likedMovies, setLikedMovies } = useLikeContext();
	const { movieTitle } = useParams();
	const [isLiked, setIsLiked] = useState(false);
	const movie = movies.find((movie) => movie.title === movieTitle);

	if (!movie) {
		return (
			<Center m="12" as="b" fontSize="2xl">
				<Text>The movie was not found</Text>;
			</Center>
		);
	}

	if (!movieTitle) {
		throw new Error("Movie title is undefined or empty");
	}

	function handleToggleLike() {
		if (!movie) {
			return <Text>The movie was not found</Text>;
		}

		const title = movie.title || "";
		setIsLiked(!isLiked);
		usetoggleLike(likedMovies, setLikedMovies, title, isLiked, setIsLiked);
	}

	return (
		<Center>
			<Flex flexDir={["column", "column", "row"]}>
				<Box p="4" maxW="400" maxH="600">
					<Image src={movie.thumbnail} w="100%" h="auto" objectFit="cover" />
				</Box>
				<Flex flexDir="column" p="4" w={[300, 400, 500]}>
					<Heading>{movie.title}</Heading>
					<Flex flexDir="row" py="4">
						<Text>From {movie.year}</Text>
						<Spacer />
						<Text>{movie.rating}</Text>
					</Flex>
					<Text pb="4">
						Actors:
						<br /> {movie.actors.join(", ")}
					</Text>{" "}
					<Text pb="4">
						Genre:
						<br /> {movie.genre}
					</Text>
					<Text pb="4">{movie.synopsis}</Text>
					<IconButton
						icon={
							likedMovies.includes(movie.title) ? <GoHeartFill /> : <GoHeart />
						}
						data-testid="like-button"
						aria-label={isLiked ? "Liked" : "Not liked"}
						fontSize={24}
						w="fit-content"
						bg="none"
						color="white"
						ml="auto"
						_hover={{ bg: "none" }}
						onClick={handleToggleLike}
					/>
				</Flex>
			</Flex>
		</Center>
	);
}

export default MovieDetails;
