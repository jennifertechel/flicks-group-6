import React from 'react';
import data from '../../data/movies.json';
import Thumbnail from './Thumbnail';

interface Movie {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  genre: string;
}

function RecommendedGallery() {
  const RecommendedMovies = data.slice(0, 5); 

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
      {RecommendedMovies.map((movie: Movie) => (
        <Thumbnail
          genre={movie.genre}
          title={movie.title}
          key={movie.title}
          image={movie.thumbnail}
          rating={movie.rating}
          year={movie.year}
        />
      ))}
    </div>
  );
}

export default RecommendedGallery;
