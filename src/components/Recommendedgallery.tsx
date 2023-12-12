import data from "../../data/movies.json";
import Carousel from "./Carousel";

function RecommendedGallery() {
  const RecommendedMovies = data.slice(0, 10);

  return <Carousel movies={RecommendedMovies} />;
}
export default RecommendedGallery;
