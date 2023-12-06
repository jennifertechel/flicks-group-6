import { Box, Flex, Text } from "@chakra-ui/react";
import { PiCopyrightThin } from "react-icons/pi";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<Flex
			py={30}
			px={10}
			bg={"black"}
			color={"white"}
			direction={{ base: "row", md: "column" }}
		>
			<Flex justifyContent={"space-between"} m={8}>
				<Box fontSize={30}>
					<Link to="/">FLICKS</Link>
				</Box>
				<Flex direction={"column"}>
					<Link to="categories">Categories</Link>
					<Link to="/">Trendings</Link>
					<Link to="favorites">Favorites</Link>
				</Flex>

				<Flex direction={"column"}>
					<Link to="/">FAQ</Link>
					<Link to="/">Term of use</Link>
					<Link to="/">Contact</Link>
				</Flex>
			</Flex>

			<Flex justifyContent={"center"}>
				<Text>Copyright 2023</Text>
				<Box>
					<PiCopyrightThin />
				</Box>
			</Flex>
		</Flex>
	);
}

export default Footer;
