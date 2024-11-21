import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Text, Flex, Image, Button, Grid } from "@chakra-ui/react";
import { useAnimeStore } from "../../product/AnimeStore";
import { Link } from "react-router-dom";

let LeftSideCompGenre = ({ genreName, addPage, delPage }) => {
    let { genreAnimes } = useAnimeStore();

    return (
        <Box
            bg='gray.800'
            w="100%"
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
            borderRadius="xl"
            position='relative'
            p="20px"
        >
       
            <Text color="white" fontWeight="bold" fontSize="xl" mb="4" align='start'>
                <Text as="span" color="#E53E3E">{genreName[0]}</Text>
                {genreName.slice(1)} Animes
            </Text>

         
            <Grid
                templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
                gap="4"
            >
                {genreAnimes.map((anime) => (
                    <Link key={anime.id} to={`/anime/${anime.id}`}>
                        <Box
                            shadow="lg"
                            rounded="lg"
                            transition="all 0.3s"
                            cursor="pointer"
                            w="full"
                            overflow="hidden"
                            role="group"
                            _hover={{
                                backgroundColor: '#2D3748',
                                border: '1px rgba(255, 255, 255, 0.16) solid',
                            }}
                            title={anime.name}
                        >
                            <Image
                                borderRadius="lg"
                                src={anime.poster}
                                objectFit="cover"
                                w="90%"
                                h="200px"
                                transition="all 0.3s"
                                _groupHover={{
                                    transform: "scale(1.1)",
                                }}
                            />
                            <Text
                                mt={2}
                                textAlign="center"
                                fontWeight="bold"
                                fontSize="sm"
                                isTruncated
                                color="white"
                            >
                                {anime.name}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Grid>

            <Flex position='relative' h='50px' w='100%' align='center' justify='center' gap='2' mt="4">
                <Button
                    color='#E53E3E'
                    w="40px"
                    h="40px"
                    cursor="pointer"
                    border='1px rgba(255, 255, 255, 0.16) solid'
                    bg='gray.800'
                    _hover={{
                        backgroundColor: "rgba(229, 62, 62, 0.2)",
                        color: "#E53E3E",
                    }}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={delPage}
                >
                    <ArrowBackIcon />
                </Button>
                <Button
                    color='#E53E3E'
                    w="40px"
                    h="40px"
                    cursor="pointer"
                    border='1px rgba(255, 255, 255, 0.16) solid'
                    bg='gray.800'
                    _hover={{
                        backgroundColor: "rgba(229, 62, 62, 0.2)",
                        color: "#E53E3E",
                    }}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={addPage}
                >
                    <ArrowForwardIcon />
                </Button>
            </Flex>
        </Box>
    );
};

export default LeftSideCompGenre;
