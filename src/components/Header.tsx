import {
  Flex,
  Heading,
  Input,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import data from "../../data/movies.json";

interface Movie {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
  genre: string;
}

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      filterMovies(searchTerm);
    }
  };

  const filterMovies = (term: string) => {
    navigate(`/search-results/${term}`);
  };

  return (
    <Flex
      px={{ base: 5, lg: 20 }}
      py={3}
      justify="space-between"
      align="center"
    >
      <Heading fontSize={{ base: 68, md: 72 }}>
        <Link to="/">Flicks</Link>
      </Heading>
      <Flex gap={{ base: 2, md: 10 }}>
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
            data-testid="search-button"
          />

          {isSearchOpen && (
            <Input
              placeholder="Search..."
              size="sm"
              marginTop="3px"
              type="search"
              data-testid="search-input"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleSearchKeyDown}
            />
          )}
        </Flex>
        {/** Desktop */}
        <Flex gap={10} display={{ base: "none", md: "flex" }}>
          <Heading order={3}>
            <Link to="categories">Categories</Link>
          </Heading>
          <Heading order={3}>
            <Link to="favorites">Favorites</Link>
          </Heading>
        </Flex>
        {/** Mobile */}
        <IconButton
          icon={<RxHamburgerMenu />}
          aria-label="menu"
          fontSize={30}
          bg="none"
          color="white"
          _hover={{ bg: "none" }}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} size="full" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody bg="#202020">
              <DrawerCloseButton
                paddingTop={12}
                paddingRight={8}
                fontSize={20}
              />
              <Flex
                gap={10}
                flexDir="column"
                paddingTop={40}
                justifyItems="center"
                alignItems="center"
              >
                <Heading order={3}>
                  <Link to="categories" onClick={onClose}>
                    Categories
                  </Link>
                </Heading>
                <Heading order={3}>
                  <Link to="favorites" onClick={onClose}>
                    Favorites
                  </Link>
                </Heading>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default Header;
