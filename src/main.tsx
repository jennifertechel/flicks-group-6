import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

import "@fontsource/bebas-neue/400.css";
import "@fontsource/montserrat/400.css";

import data from "../data/movies.json";
import SearchResults from "./pages/SearchResults";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#202020",
        color: "white",
        margin: 0,
      },
    },
  },
  fonts: {
    heading: `'Bebas Neue', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="favorites" element={<Favorites />} />
      <Route
        path="/movies/:movieTitle"
        element={<MovieDetails movies={data} />}
      />
      <Route path="search-results/:term" element={<SearchResults />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
