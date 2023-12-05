import { Flex, Heading, Box, Input, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <Flex px={20} py={3} justify="space-between" align="center">
      <Heading fontSize={72}>
        <Link to="/">Flicks</Link>
      </Heading>
      <Flex gap={10}>
        <Flex position="relative" alignSelf="center">
          <IconButton
            icon={<FiSearch />}
            aria-label="Search"
            fontSize={30}
            onClick={handleSearchClick}
            bg="none"
            color="white"
            marginRight={isSearchOpen ? "5px" : 0}
            _hover={{ bg: "none" }}
          />

          {isSearchOpen && (
            <Input placeholder="Search..." size="sm" marginTop="3px" />
          )}
        </Flex>
        <Heading order={3}>
          <Link to="categories">Categories</Link>
        </Heading>
        <Heading order={3}>
          <Link to="favorites">Favorites</Link>
        </Heading>
      </Flex>
    </Flex>
  );
}

export default Header;
