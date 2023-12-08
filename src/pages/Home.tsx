import { Flex, Heading } from "@chakra-ui/react";
import RecommendedGallery from "../components/RecommendedGallery";

function Home() {
  return (
    <Flex>
      <Heading>Home</Heading>
      <RecommendedGallery></RecommendedGallery>
    </Flex>
  );
}

export default Home;
