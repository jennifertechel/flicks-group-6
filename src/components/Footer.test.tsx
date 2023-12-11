import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";
test("Logo should link correctly to start", () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );
  const startLink = screen.getByRole("link", { name: /flicks/i });
  expect(startLink).toBeInTheDocument();
});
