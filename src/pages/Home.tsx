import { Flex, Heading } from "@chakra-ui/react";
import Thumbnail from "../components/Thumbnail";

function Home() {
  return (
    <Flex>
      <Heading>Home</Heading>
      <Thumbnail
        image={
          "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg"
        }
        rating={"R"}
        year={1987}
        title={"The Shawshank Redemption"}
        genre={"Drama"}
      />
    </Flex>
  );
}

export default Home;
