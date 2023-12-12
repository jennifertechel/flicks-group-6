import data from '../../data/movies.json';
import Carousel from "./Carousel";

function TrendingCarousel() {
  const TrendingMovies = data.slice(20, 30); 

  return (
    <Carousel movies={TrendingMovies} />
  )
};
export default TrendingCarousel;
