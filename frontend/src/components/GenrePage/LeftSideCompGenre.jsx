
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { useAnimeStore } from "../../product/AnimeStore";
import { Link } from "react-router-dom";

let LeftSideCompGenre = ({genreName}) => {
    let { genreAnimes } = useAnimeStore();

    return (
        <Box
            w="100%"
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
            borderRadius="xl"
            h="auto"
            position='relative'
        >

            <Flex position='absolute' h='50px' w='150px' right='5%' top='1%' align='center' justify='space-around'>
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

                >
                    <ArrowForwardIcon />
                </Button>
            </Flex>
            <Text color="white" fontWeight="bold" fontSize="xl" p="25px" align="start">
                {`${genreName} Animes`}
            </Text>

            <Flex
                spacing="0"
                p="35px"
                align="start"
                wrap="wrap"
                justifyContent="flex-start"
                gap="4"
            >
                {genreAnimes.map((anime) => (
                    <Link key={anime.id} to={`/anime/${anime.id}`}>
                        <Box
                            p="15px"
                            shadow="lg"
                            rounded="lg"
                            transition="all 0.3s"
                            cursor="pointer"
                            w="150px"
                            h="230px"
                            overflow="hidden"
                            role="group"
                            _hover={{
                                backgroundColor: '#2D3748',
                                border: '1px rgba(255, 255, 255, 0.16) solid'
                            }}
                            title={anime.name}
                        >
                            <Image
                                borderRadius="lg"
                                src={anime.poster}
                                objectFit="cover"
                                w="100%"
                                h="80%"
                                position="relative"
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
                                title={anime.name}
                                color="white"
                            >
                                {anime.name}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Flex>
        </Box>
    );
};

export default LeftSideCompGenre;
