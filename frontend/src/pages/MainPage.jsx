
import { Box, Button, Image, Flex, Text, VStack } from '@chakra-ui/react'

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'


import AnimeBoxContainer from '../components/AnimeBoxContainer'

let MainPage = ({ page, setPage, featAnime, todayAnime, weeklyAnime, monthlyAnime, setSelected }) => {




    let handleSetPageLeft = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    };

    let handleSetPageRight = () => {
        if (page < 9) {
            setPage(page + 1);
        }
    };

    return (
        <Box>
            <Box position="relative" w="full" h="100vh">
                {/* Background Image */}
                <Image
                    src={featAnime.poster}
                    alt="Anime Poster"
                    filter="blur(7px)"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    opacity={0.9}
                    position="absolute"
                    top={0}
                    right={0}
                    zIndex={-1}  // Ensure the image is behind other content
                    style={{
                        maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 00%, rgba(0, 0, 0, 0) 100%)', // Fade from center outwards
                        WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)', // For Safari
                    }}

                />

                <VStack align='start' pt={{ base: "30%", md: "20%", lg: "10%" }} spacing='5'>
                    {/* Anime Rank */}
                    <Text
                        position="relative"
                        top="20%"
                        left="10%"
                        color="white"
                        fontSize={{ base: "sm", md: "md", lg: "lg" }}
                        fontWeight="bold"
                    >
                        {`RANK ${featAnime.rank}!`}
                    </Text>

                    {/* Anime Title */}
                    <Text
                        position="relative"
                        top="25%"
                        left="10%"
                        color="white"
                        fontSize={{ base: "28px", md: "30px", lg: "48px" }}
                        fontWeight="bold"

                        w={{ base: "sm", md: "lg", lg: "3xl" }}
                    >
                        {featAnime.name}
                    </Text>

                    {/* Anime Description */}
                    <Text
                        position="relative"
                        top="35%"
                        left="10%"
                        color="white"
                        fontSize={{ base: "sm", md: "md", lg: "lg" }}
                        maxW={{ base: "sm", md: "md", lg: "lg" }}
                    >
                        {featAnime.description}
                    </Text>
                    {/* Watch Now Button */}

                    <Button colorScheme="purple" size="lg" position="relative"
                        // bottom="20%"
                        left="10%"
                    >
                        Watch Now
                    </Button>
                </VStack>




                {/* Navigation Buttons (Left/Right) */}
                <Flex
                    position="absolute"
                    bottom="20px"
                    right="20px"
                    gap={4}
                >
                    <Button
                        onClick={handleSetPageLeft}
                        colorScheme="purple"
                        aria-label="Go to previous page"
                    >
                        <ArrowBackIcon />
                    </Button>
                    <Button
                        onClick={handleSetPageRight}
                        colorScheme="purple"
                        aria-label="Go to next page"
                    >
                        <ArrowForwardIcon />
                    </Button>
                </Flex>
            </Box>

            <AnimeBoxContainer anime={todayAnime} animeHead={'Top Anime Today'} setSelected={setSelected} />
            <AnimeBoxContainer anime={weeklyAnime} animeHead={'Top Anime Week'} setSelected={setSelected} />
            <AnimeBoxContainer anime={monthlyAnime} animeHead={'Top Anime Month'} setSelected={setSelected} />
        </Box>

    )
}

export default MainPage