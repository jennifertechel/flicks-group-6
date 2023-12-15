import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import data from '../../data/movies.json';
import { LikeContextProvider } from '../hooks/useLikeContext';
import Carousel from './Carousel';

const Movies = data.slice(0, 30);

describe('Carousel Component', () => {
  test('Renders without errors', () => {
    render(
      <MemoryRouter>
        <LikeContextProvider>
          <Carousel movies={Movies} />
        </LikeContextProvider>
      </MemoryRouter>,
    );
  });

  test('Displays movies correctly on initial render', async () => {
    const { findAllByText } = render(
      <MemoryRouter>
        <LikeContextProvider>
          <Carousel movies={Movies} />
        </LikeContextProvider>
      </MemoryRouter>,
    );
    const movies = await findAllByText(/The Godfather/i);
    expect(movies.length).toBeGreaterThan(0);
  });

  test('Renders SwiperSlides', () => {
    const { container } = render(
      <MemoryRouter>
        <LikeContextProvider>
          <Carousel movies={Movies} />
        </LikeContextProvider>
      </MemoryRouter>,
    );

    const swiperSlides = container.querySelectorAll('.swiper-slide');
    expect(swiperSlides.length).toBeGreaterThan(0);
  });
});
