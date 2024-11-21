
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useAnimeStore } from "../../product/AnimeStore";
import { Link } from "react-router-dom";

let LeftSideCompSearch = ({ animeName, animeData }) => {
    return (
        <Box
            bg='gray.800'
            w="100%"
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
            borderRadius="xl"
            position='relative'
        >


            <Text color="white" fontWeight="bold" fontSize="xl" pt="3%" pl='5%' align="start">
                <Text as="span" color="#E53E3E">{animeName[0]}</Text>
                {animeName.slice(1)} 
            </Text>


            <Flex
                spacing="0"
                p="20px"
                align="center"
                wrap="wrap"
                justifyContent="flex-start"
                gap="4"
            >
                {animeData.map((anime) => (
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

export default LeftSideCompSearch;
