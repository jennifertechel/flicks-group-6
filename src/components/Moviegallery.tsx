import movies from './data/movies.json';
import Thumbnail from "./Thumbnail";

interface Movie {
    title: string;
    year: number;
    rating: string;
    thumbnail: string;
  }
  const MovieGallery: React.FC = () => {
  return (
    <div>
      {movies.map((movie: Movie) => (
        <Thumbnail
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
