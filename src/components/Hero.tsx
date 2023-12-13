import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<Flex
			w="full"
			h="70vh"
			flexDir="column"
			justifyContent="center"
			bgImage={`url(https://image.jimcdn.com/app/cms/image/transf/dimension=2080x10000:format=jpg/path/s2217cd0bb1220415/image/i1f8a44dd5ee0a217/version/1696589143/a-roman-gladiator-wearing-a-detailed-bronze-helmet-with-intricate-engravings.jpg)`}
			bgSize="cover"
			bgPos="center"
		>
			<Box pl={{ base: "4", md: "10" }}>
				<Heading fontSize={{ base: "30", md: "52" }}>Welcome to Flicks</Heading>
				<Text mb={6} fontSize={{ base: "18", md: "22" }}>
					Explore a variety of categories and <br />
					find your favorite movies.
				</Text>
				<Link to="/categories">View more</Link>
			</Box>
		</Flex>
	);
}
export default Hero;
