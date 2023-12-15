import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Carousel from "../components/Carousel";
import { LikeContextProvider } from "../hooks/useLikeContext";

const movieData = [
	{
		thumbnail: "movie_image.jpg",
		rating: "R",
		year: 2022,
		title: "Test Movie",
		genre: "Action",
	},
];
test("should display genre 'Actions' correctly", () => {
	render(
		<MemoryRouter>
			<LikeContextProvider>
				<Carousel movies={movieData} />
			</LikeContextProvider>
		</MemoryRouter>
	);
	const genre = screen.getByText(/Action/i);
	expect(genre).toBeInTheDocument();
});
