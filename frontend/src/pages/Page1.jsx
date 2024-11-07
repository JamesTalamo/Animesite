import { useEffect, useState } from 'react'

import { Box, Button, Image, Flex, Text, VStack } from '@chakra-ui/react'

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

let Page1 = () => {
    let [page, setPage] = useState(0)
    let [anime, setAnime] = useState({
        name: "",
        poster: "",
        description: "",
        rank: "",
        animeId: ""
    })



    let handleSetPageLeft = () => {

        console.log('i got clicked')
        console.log(page)
        if (page > 0) {
            setPage(page - 1)
        }
    };

    let handleSetPageRight = () => {
        if (page < 9) {
            console.log('i got clicked')
            console.log(page)
            setPage(page + 1);
        }
    };


    let fetchAnime = async () => {
        let res = await fetch('http://localhost:4000/api/v2/hianime/home')
        let data = await res.json()

        console.log(data.data.spotlightAnimes)

        setAnime({
            rank: data.data.spotlightAnimes[page].rank,
            name: data.data.spotlightAnimes[page].name,
            poster: data.data.spotlightAnimes[page].poster,
            description: data.data.spotlightAnimes[page].description,
            animeId: data.data.spotlightAnimes[page].id,
        })
    }

    useEffect(() => {
        console.log(anime)
        fetchAnime();
    }, [page]);

    return (
        <Box position="relative" w="full" h="100vh">
            {/* Background Image */}
            <Image
                src={anime.poster}
                alt="Anime Poster"
                filter="blur(7px)"
                objectFit="cover"
                w="100%"
                h="100%"
                opacity={0.7}
                position="absolute"
                top={0}
                left={0}
                zIndex={-1}  // Ensure the image is behind other content

            />

            <VStack align='start' pt='120'>
                {/* Anime Rank */}
                <Text
                    position="relative"
                    top="20%"
                    left="10%"
                    color="white"
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                >
                    {`RANK ${anime.rank}!`}
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
                    {anime.name}
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
                    {anime.description}
                </Text>
                {/* Watch Now Button */}

                <Button colorScheme="purple" size="lg" position="relative"
                    top="70%"
                    left="10%">
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
    )
}

export default Page1