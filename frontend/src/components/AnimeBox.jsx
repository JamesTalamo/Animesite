


import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AnimeBox = ({ anime }) => {

    return (
        <Link to={`/anime/${anime.id}`}>
            <Box
                onClick={() => {
                    console.log("Redirect triggered", anime.id);
                    // Simulate redirection for testing
                }}
                p="25px"
                shadow="lg"
                rounded="lg"
                transition="all 0.3s"
                cursor="pointer"
                w="150px"
                h="230px"
                overflow="hidden"
                role="group" // Enables group-based hover targeting
                _hover={{
                    backgroundColor: '#2D3748',
                    border: 'rgba(255, 255, 255, 0.16) solid'
                }}


            >
                <Image
                    borderRadius='lg'
                    title={anime.name}
                    src={anime.poster}
                    objectFit="cover"
                    w="100%"
                    h="80%"
                    position="relative"
                    transition="all 0.3s"
                    _groupHover={{
                        transform: "scale(1.1)", // Zoom the image on box hover

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
