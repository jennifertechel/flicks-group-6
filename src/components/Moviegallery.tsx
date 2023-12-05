import React from 'react';
import data from "../../data/movies.json";
import Thumbnail from "./Thumbnail";

interface Movie {
    title: string;
    year: number;
    rating: string;
    thumbnail: string;
    genre:string
  }
  const MovieGallery: React.FC = () => {
  return (
    <div>
      {data.map((movie: Movie) => (
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

export default MovieGallery;
