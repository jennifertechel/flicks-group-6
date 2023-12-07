import { fireEvent, render, screen } from "@testing-library/react";
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
      <Thumbnail
        image={movieData.image}
        rating={movieData.rating}
        year={movieData.year}
        title={movieData.title}
        genre={movieData.genre}
      />
    );

    const thumbnailImage = screen.getByAltText("Movie Thumbnail");
    expect(thumbnailImage).toBeTruthy();
  });

  test("toggles like button state", () => {
    render(
      <Thumbnail
        image={movieData.image}
        rating={movieData.rating}
        year={movieData.year}
        title={movieData.title}
        genre={movieData.genre}
      />
    );

    const likeButton = screen.getByLabelText("Not liked");
    expect(likeButton).toBeTruthy();

    fireEvent.click(likeButton);

    expect(screen.getByLabelText("Liked")).toBeTruthy();

    fireEvent.click(likeButton);

    expect(screen.getByLabelText("Not liked")).toBeTruthy();
  });
});
