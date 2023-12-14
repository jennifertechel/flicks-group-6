import { Flex, Heading } from "@chakra-ui/react";
import Carousel2 from "../components/Carousel2";

function Home() {
  return (
    <Flex flexDir="column">
      <Heading>Home</Heading>
      <Carousel2 />
    </Flex>
  );
}

export default Home;
