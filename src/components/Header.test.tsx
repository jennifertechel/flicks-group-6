import { render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

import Header from "./Header";

// Default test to make sure that logo is rendered
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
  const iconButton = screen.getByTestId("search-button");
  await user.click(iconButton);

  await waitFor(() => {
    const searchField = screen.queryByTestId("search-input");

    expect(searchField).toBeInTheDocument();
  });
});
