import { render, screen } from '@testing-library/react';
import RecommendedGallery from './RecommendedGallery';

describe('RecommendedGallery component', () => {
  test('renders between 5 and 10 recommended movies', () => {
    render(<RecommendedGallery />);
    
    const movieThumbnails = screen.getAllByAltText('Movie Thumbnail');
    const numberOfMovies = movieThumbnails.length;

    expect(numberOfMovies).toBeGreaterThanOrEqual(5);
    expect(numberOfMovies).toBeLessThanOrEqual(10);
  });
});
