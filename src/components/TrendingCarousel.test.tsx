import { fireEvent, render, screen } from '@testing-library/react';
import TrendingCarousel from './TrendingCarousel';

describe('TrendingCarousel', () => {
  test('displays trending movies', () => {
    render(<TrendingCarousel />);

    const prevButton = screen.getByLabelText('Previous');
    const nextButton = screen.getByLabelText('Next');
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    
    expect(screen.getByText('Indiana Jones and the Raiders of the Lost Ark')).toBeInTheDocument();
  });

  
});
