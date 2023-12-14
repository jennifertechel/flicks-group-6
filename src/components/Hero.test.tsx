import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Hero from "./Hero";

test("Should render a Hero component with content correctly", async () => {
	render(
		<MemoryRouter>
			<Hero />
		</MemoryRouter>
	);
	const heading = screen.getByText("Welcome to Flicks");
	expect(heading).toBeInTheDocument();

	const text = screen.getByText(
		"Explore a variety of categories and find your favorite movies."
	);
	expect(text).toBeInTheDocument();

	const user = userEvent.setup();
	const viewLink = screen.getByRole("link", { name: /view more/i });
	expect(viewLink).toBeInTheDocument();
	await user.click(viewLink);
});
