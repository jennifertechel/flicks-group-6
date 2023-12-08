import { render, screen } from '@testing-library/react';
import Thumbnail from './Thumbnail';

test('renders thumbnail image properly', () => {
  const movieData = {
    image: 'movie_image.jpg',
    rating: 'R',
    year: 2022,
    title: 'Test Movie',
    genre: 'Action',
  };

  render(
    <Thumbnail
      image={movieData.image}
      rating={movieData.rating}
      year={movieData.year}
      title={movieData.title}
      genre={movieData.genre}
    />
  );

  const thumbnailImage = screen.queryByAltText("The Godfather");
  expect(thumbnailImage).toBeTruthy(); 
});
