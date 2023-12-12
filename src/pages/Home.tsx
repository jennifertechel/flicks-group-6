import { Flex, Heading } from "@chakra-ui/react";
import RecommendedGallery from "../components/Recommendedgallery";
import TrendingCarousel from "../components/TrendingCarousel";

function Home() {
  return (
    <Flex px={35} flexDirection="column" gap={10}>
      <Heading>Trending right now</Heading>
      <TrendingCarousel />
      <Heading>Recommended for you</Heading>
      <RecommendedGallery />
    </Flex>
  );
}

export default Home;
