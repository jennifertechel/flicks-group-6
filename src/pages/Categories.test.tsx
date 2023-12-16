import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import Carousel from "../components/Carousel";
import { LikeContextProvider } from "../hooks/useLikeContext";
import Categories from "./Categories";

const movieData = [
	{
		thumbnail: "movie_image.jpg",
		rating: "R",
		year: 2022,
		title: "The Dark Knight",
		genre: "Action",
	},
];

describe("Categories component", () => {
	test("should render carousel component correct into categories page", () => {
		render(
			<MemoryRouter>
				<LikeContextProvider>
					<Categories />
				</LikeContextProvider>
			</MemoryRouter>
		);
		const carousel = screen.findByTestId("carousel-container");
		expect(carousel).toBeTruthy();
	});

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

	test("should navigate to details page when user clicked on a movie", async () => {
		render(
			<MemoryRouter>
				<LikeContextProvider>
					<Carousel movies={movieData} />
				</LikeContextProvider>
			</MemoryRouter>
		);
		const movieCard = screen.getByText(/The Dark Knight/i);
		const user = userEvent.setup();
		expect(movieCard).toBeInTheDocument();
		await user.click(movieCard);
	});
});
