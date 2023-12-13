import { Box, Flex, Heading } from "@chakra-ui/react";
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
			<Box>
				<Heading>Welcome! Flicks</Heading>
				<Link to="/categories">View more</Link>
			</Box>
		</Flex>
	);
}
export default Hero;
