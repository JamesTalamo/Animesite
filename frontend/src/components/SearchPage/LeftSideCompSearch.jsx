import { Box, Text, Grid, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let LeftSideCompSearch = ({ animeName, animeData }) => {
    return (
        <Box
            bg="gray.800"
            w="100%"
            border={{ lg: "1px rgba(255, 255, 255, 0.16) solid", base: "none" }}
            borderRadius="xl"
            position="relative"
            p="20px"
        >
            {/* Title */}
            <Text color="white" fontWeight="bold" fontSize="xl" mb="4">
                <Text as="span" color="#E53E3E">{animeName[0]}</Text>
                {animeName.slice(1)}
            </Text>

            {/* Responsive Grid for Anime Cards */}
            <Grid
                templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
                gap="4"
            >
                {animeData.map((anime) => (
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
                                backgroundColor: "#2D3748",
                                border: "1px rgba(255, 255, 255, 0.16) solid",
                            }}
                            title={anime.name}
                        >
                            <Image
                                borderRadius="lg"
                                src={anime.poster}
                                objectFit="cover"
                                w="100%"
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
        </Box>
    );
};

export default LeftSideCompSearch;
