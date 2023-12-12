import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LikeContextProvider } from "../context/LikeContext";
import TrendingCarousel from "./TrendingCarousel";

describe("TrendingCarousel", () => {
  test("displays trending movies", async () => {
    render(
      <MemoryRouter>
        <LikeContextProvider>
          <TrendingCarousel />
        </LikeContextProvider>
      </MemoryRouter>
    );

    const prevButton = screen.getByLabelText("Previous");
    const nextButton = screen.getByLabelText("Next");

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    await waitFor(() =>
      expect(
        screen.getByText("Indiana Jones and the Raiders of the Lost Ark")
      ).toBeInTheDocument()
    );
  });
});
