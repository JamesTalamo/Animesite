import React from 'react';
import { Carousel } from 'antd';
import { Button, Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

import { Link } from 'react-router-dom'

const CarouselPage = ({ featAnime }) => (

    <Box
        h="600px"
        position='relative'
        pt='80px'
        overflow='hidden'
    >
        < Carousel autoplay >
            {featAnime.map((anime) => (
                <Box h='500px' position='relative'>
                    <Image
                        src={anime.poster}
                        objectFit="cover"
                        objectPosition={{ lg: "center", base: "bottom" }} // Adjust position for zoom effect
                        w='100%'
                        h={{ lg: "100%", base: '100%' }}
                        alt="Anime Poster"
                        opacity="0.2"

                    />
                    <VStack
                        fontSize='20px'
                        position="absolute"
                        top='15%'
                        align={{ lg: 'start', sm: 'center' }}
                        w='100%'


                        pl={{ lg: '5%', sm: '0' }}

                    >
                        <Text
                            fontWeight='bold'
                            color='rgb(244 63 94)'
                        >Rank #{anime.rank}</Text>

                        <Text
                            fontWeight='bold'
                            fontSize='30px'

                            color='white'
                            w={{ lg: "400px", sm: '300px' }}
                            align={{ lg: 'start', sm: 'center' }}
                        >
                            {anime.name}
                        </Text>
                        <Text
                            fontSize="18px"
                            color="white"
                            noOfLines={3}
                            maxW={{ lg: "800px", md: '400px', sm: '250px' }}
                            align={{ lg: 'start', sm: 'center' }}
                        >
                            {anime.description}
                        </Text>


                        <Link to={`/anime/${anime.id}`}>
                            <Button
                                color='white'
                                colorScheme='red'
                            >
                                Watch Now
                            </Button>
                        </Link>
                    </VStack>
                </Box>

            ))}


        </Carousel >
    </Box >


);


export default CarouselPage;
