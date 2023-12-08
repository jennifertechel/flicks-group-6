import { fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import data from '../../data/movies.json';
import Carousel from './Carousel';

const Movies = data.slice(0, 30); 

describe('Carousel Component', () => {
  test('Renders without errors', () => {
    render(<MemoryRouter>
    <Carousel movies={Movies}/>
    </MemoryRouter>
    );
  });

  test('Displays movies correctly on initial render', async () => {
    const { findAllByText } = render(
      <MemoryRouter>
        <Carousel movies={Movies} />
      </MemoryRouter>);
    const movies = await findAllByText(/The Godfather/i); 
    expect(movies.length).toBeGreaterThan(0); 
  });

  test('Navigates to next movie', async () => {
    const { getByLabelText, findAllByText } = render(
    <MemoryRouter>
      <Carousel movies={Movies} />
    </MemoryRouter>);
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
