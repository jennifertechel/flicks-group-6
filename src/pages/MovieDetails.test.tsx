import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect } from "vitest";
import MovieDetails from "./MovieDetails";

describe("MovieDetails", () => {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      rating: "PG-13",
      actors: ["Leonardo DiCaprio", "Ellen Page"],
      genre: "Sci-Fi",
      synopsis: "A mind-bending thriller.",
    },
  ];

  test("renders movie details correctly", () => {
    render(
      <MemoryRouter initialEntries={["/movies/Inception"]}>
        <Routes>
          <Route
            path="/movies/:movieTitle"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Inception")).toBeTruthy();
    expect(screen.getByText("From 2010")).toBeTruthy();
    expect(screen.getByText("PG-13")).toBeTruthy();
    expect(
      screen.getByText("Actors: Leonardo DiCaprio, Ellen Page")
    ).toBeTruthy();
    expect(screen.getByText("Genre: Sci-Fi")).toBeTruthy();
    expect(screen.getByText("A mind-bending thriller.")).toBeTruthy();
  });

  test('displays "Movie not found" for missing movie', () => {
    render(
      <MemoryRouter initialEntries={["/movies/NonExistingMovie"]}>
        <Routes>
          <Route
            path="/movies/:movieTitle"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("The movie was not found")).toBeTruthy();
  });
});
