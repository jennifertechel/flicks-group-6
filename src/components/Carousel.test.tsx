import { fireEvent, render, waitFor } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel Component', () => {
  test('Renders without errors', () => {
    render(<Carousel />);
  });

  test('Displays movies correctly on initial render', async () => {
    const { findAllByText } = render(<Carousel />);
    const movies = await findAllByText(/The Godfather/i); 
    expect(movies.length).toBeGreaterThan(0); 
  });

  test('Navigates to next movie', async () => {
    const { getByLabelText, findAllByText } = render(<Carousel />);
    const nextButton = getByLabelText('Next');

    const initialMovies = await findAllByText(/The Godfather/i).then((movies) =>
      movies.map((movie) => movie.textContent)
    );

    fireEvent.click(nextButton);
    await waitFor(() =>
      expect(findAllByText(/The Godfather/i).then((movies) =>
        movies.map((movie) => movie.textContent)
      )).not.toEqual(initialMovies)
    );
  });
});
