
import { Box, Button, Container, Flex, HStack, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
        <Box
            as="nav"
            minW="full"
            bg="black"
            position="fixed"
            top={0}
            zIndex={1000}
            boxShadow="md"
        >
            <Container maxW="container.xl" >
                <Flex
                    align='center'
                    justify='space-between'
                    w='full'
                >
                    {/* {logo} */}
                    <Box>
                        <Image
                            src="./assets/navbarAssets/Frame%2072.png"
                            alt="Logo"
                            boxSize="90px"
                            objectFit="contain"
                        />
                    </Box>

                    {/* Navigation Buttons */}
                    <Box>
                        <Flex gap={4}>
                            <Button size="lg" colorScheme="purple" variant="outline">
                                Genre
                            </Button>
                            <Button size="lg" colorScheme="purple" variant="outline">
                                Movies
                            </Button>
                            <Button size="lg" colorScheme="purple" variant="outline">
                                ONAs
                            </Button>
                            <Button size="lg" colorScheme="purple" variant="outline">
                                News
                            </Button>
                        </Flex>
                    </Box>

                    {/* Search Bar */}
                    <Box>
                        <InputGroup display={{ base: "none", md: "flex" }}>
                            <InputLeftElement pointerEvents="none">
                                <Search2Icon color="gray.300" />
                            </InputLeftElement>
                            <Input
                                size="lg"
                                placeholder="Search Anime"
                                htmlSize="40"
                                width="auto"
                                focusBorderColor="purple.200"
                                _placeholder={{ color: "white", fontWeight: "bold" }}
                            />
                        </InputGroup>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Navbar;
