import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Flex py={30} px={10} bg={"black"} color={"white"} direction={"column"}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent={"space-between"}
      >
        <Box fontSize={30} mb={{ base: 4, sm: 0 }}>
          <Link to="/">FLICKS</Link>
        </Box>

        <Flex direction={"column"} mb={4}>
          <Link to="categories">Categories</Link>
          <Link to="trendings">Trendings</Link>
          <Link to="favorites">Favorites</Link>
        </Flex>

        <Flex direction={"column"}>
          <Link to="/">FAQ</Link>
          <Link to="/">Term of use</Link>
          <Link to="/">Contact</Link>
        </Flex>
      </Flex>

      {/*
      <Flex justifyContent={"center"}>
				<Text>Copyright 2023</Text>
				<Box>
					<PiCopyrightThin />
				</Box>
			</Flex>*/}
    </Flex>
  );
}

export default Footer;
