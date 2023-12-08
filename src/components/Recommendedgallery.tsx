import data from '../../data/movies.json';
import Carousel from "./Carousel";

function RecommendedGallery() {
  const RecommendedMovies = data.slice(20, 30); 

  return (
    <Carousel movies={RecommendedMovies} />
  )
};
export default RecommendedGallery;
