import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<Flex py={35} px={10} direction={"column"}>
			<Flex
				direction={{ base: "column", sm: "row" }}
				justifyContent={"space-between"}
			>
				<Heading fontSize={{ base: 68, md: 72 }}>
					<Link to="/">FLICKS</Link>
				</Heading>

				<Flex direction={"column"} mb={4}>
					<Link to="categories">Categories</Link>
					<Link to="favorites">Favorites</Link>
				</Flex>

				<Flex direction={"column"}>
					<Link to="/">FAQ</Link>
					<Link to="/">Term of use</Link>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Footer;
