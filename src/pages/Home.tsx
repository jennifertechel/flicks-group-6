import { Flex, Heading } from "@chakra-ui/react";
import TrendingCarousel from "../components/TrendingCarousel";

function Home() {
  return (
    <Flex>
      <Heading>Home</Heading>
      <TrendingCarousel></TrendingCarousel>
    </Flex>
  );
}

export default Home;
