import { render } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import RecommendedGallery from './components/Recommendedgallery';
import Thumbnail from './components/Thumbnail';


describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

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

  const thumbnailImage = document.querySelector('img[alt="Movie Thumbnail"]');
    expect(thumbnailImage).toBeTruthy();
});

describe('RecommendedGallery component', () => {
  test('renders between 5 and 10 recommended movies', () => {
    const { getAllByAltText } = render(<RecommendedGallery />);
    
    const movieThumbnails = getAllByAltText('Movie Thumbnail');
    const numberOfMovies = movieThumbnails.length;

    expect(numberOfMovies).toBeGreaterThanOrEqual(5);
    expect(numberOfMovies).toBeLessThanOrEqual(10);
  });
});