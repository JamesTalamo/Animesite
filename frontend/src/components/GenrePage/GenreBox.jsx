import { Box, Wrap, Text } from "@chakra-ui/react";
import { useAnimeStore } from "../../product/AnimeStore";

let GenreBox = () => {
    let { genres } = useAnimeStore();
    return (
        <Box
            mt={{ lg: '0', base: '25px' }}
            w="100%"
            borderRadius="lg"
            border="1px rgba(255, 255, 255, 0.16) solid"
            p={1}
            bg='gray.800'
        >
            <Text align='Start' fontWeight='bold' fontSize='xl' pl='25px' pt='1%' pb='1%'>Genres</Text>
            <Wrap spacing={1} justify="start">
                {genres.map((genre, index) => (
                    <Box
                        key={index}
                        flex="0 1 150px"
                        h="40px"
                        display="flex"
                        alignItems="center"
                        justifyContent="start"
                        backgroundColor="gray.800"
                        fontSize="sm"
                        fontWeight="bold"
                        borderRadius="md"
                        cursor="pointer"
                        _hover={{
                            backgroundColor: "rgba(229, 62, 62, 0.2)",
                            color: "#E53E3E",
                        }}
                        color='white'

                    >
                        <Text p='25px'>
                            {genre}
                        </Text>
                    </Box>
                ))}
            </Wrap>
        </Box>
    );
};

export default GenreBox;
