


import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AnimeBox = ({ anime }) => {

    return (
        <Link to={`/anime/${anime.id}`}>
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
                    borderRadius='lg'

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
                    color='white'
                >
                    {anime.name}
                </Text>
            </Box>
        </Link>
    );
};

export default AnimeBox;
