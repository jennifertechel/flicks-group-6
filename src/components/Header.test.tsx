import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom"; // Import MemoryRouter
import { expect, test } from "vitest";

import App from "../App";
import { LikeContextProvider } from "../hooks/useLikeContext";
import Categories from "../pages/Categories";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResult";
import Header from "./Header";

test("should render render logo", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const logo = screen.getByText("Flicks");
  expect(logo).toBeInTheDocument();
});

test("display search field after click", async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const user = userEvent.setup();
  const iconButton = screen.getByLabelText("Search");
  await user.click(iconButton);

  await waitFor(() => {
    const searchField = screen.queryByPlaceholderText("Search...");

    expect(searchField).toBeInTheDocument();
  });
});

test("get rerouted when typing in input", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search-results/:term" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  const user = userEvent.setup();

  const iconButton = screen.getByLabelText("Search");
  expect(iconButton).toBeInTheDocument();
  await user.click(iconButton);

  const searchField = screen.getByPlaceholderText("Search...");
  expect(searchField).toBeInTheDocument();
  await user.type(searchField, "hello");

  const searchResultsHeading = await waitFor(() =>
    screen.queryByText('Search Results for "hello"')
  );
  expect(searchResultsHeading).toBeInTheDocument();
});

test("display error when movie doesn't exist", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search-results/:term" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  const user = userEvent.setup();

  const iconButton = screen.getByLabelText("Search");
  expect(iconButton).toBeInTheDocument();
  await user.click(iconButton);

  const searchField = screen.getByPlaceholderText("Search...");
  expect(searchField).toBeInTheDocument();
  await user.type(searchField, "hello");

  const error = await waitFor(() => screen.queryByText("No results found"));
  expect(error).toBeInTheDocument();
});

test("display thumbnail after search", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search-results/:term" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  const user = userEvent.setup();

  const iconButton = screen.getByLabelText("Search");
  expect(iconButton).toBeInTheDocument();
  await user.click(iconButton);

  const searchField = screen.getByPlaceholderText("Search...");
  expect(searchField).toBeInTheDocument();
  await user.type(searchField, "godfather");

  const movieTitle = await waitFor(() =>
    screen.queryByAltText("The Godfather")
  );
  expect(movieTitle).toBeInTheDocument();
});
