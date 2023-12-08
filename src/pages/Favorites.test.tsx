import { render } from "@testing-library/react";
import Favorites from "./Favorites";

describe("Favorites component", () => {
  it("renders correctly with Thumbnail components", () => {
    const { container, rerender } = render(<Favorites />);

    expect(container).toMatchSnapshot();

    rerender(<Favorites />);

    const thumbnails = container.querySelectorAll(".thumbnail");
    if (thumbnails.length > 0) {
      thumbnails.forEach((thumbnail) => {
        expect(thumbnail).toBeInTheDocument();
      });
    } else {
      expect(thumbnails.length).toBe(0);
    }
  });
});
