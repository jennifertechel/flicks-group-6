import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LikeContextProvider } from "../hooks/useLikeContext";
import Thumbnail from "./Thumbnail";

describe("Thumbnail component", () => {
  const movieData = {
    image: "movie_image.jpg",
    rating: "R",
    year: 2022,
    title: "Test Movie",
    genre: "Action",
  };

  test("renders thumbnail image properly", () => {
    render(
      <MemoryRouter>
        <LikeContextProvider>
          <Thumbnail
            image={movieData.image}
            rating={movieData.rating}
            year={movieData.year}
            title={movieData.title}
            genre={movieData.genre}
          />
        </LikeContextProvider>
      </MemoryRouter>
    );
    const thumbnailImage = screen.queryByRole("img");
    expect(thumbnailImage).toBeTruthy();
  });

  test("toggles like button state", () => {
    render(
      <MemoryRouter>
        <LikeContextProvider>
          <Thumbnail
            image={movieData.image}
            rating={movieData.rating}
            year={movieData.year}
            title={movieData.title}
            genre={movieData.genre}
          />
        </LikeContextProvider>
      </MemoryRouter>
    );

    const likeButton = screen.getByLabelText("Not liked");
    expect(likeButton).toBeTruthy();

    fireEvent.click(likeButton);

    expect(screen.getByLabelText("Liked")).toBeInTheDocument();

    fireEvent.click(likeButton);

    expect(screen.getByLabelText("Not liked")).toBeInTheDocument();
  });
});
