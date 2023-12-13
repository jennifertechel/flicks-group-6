import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LikeContextProvider } from "../hooks/useLikeContext";
import RecommendedGallery from "./RecommendedGallery";

describe("RecommendedGallery component", () => {
  test("renders between 5 and 10 recommended movies", () => {
    render(
      <MemoryRouter>
        <LikeContextProvider>
          <RecommendedGallery />
        </LikeContextProvider>
      </MemoryRouter>
    );

    const movieThumbnails = screen.getAllByRole("img");
    const numberOfMovies = movieThumbnails.length;

    expect(numberOfMovies).toBeGreaterThanOrEqual(5);
    expect(numberOfMovies).toBeLessThanOrEqual(10);
  });
});
