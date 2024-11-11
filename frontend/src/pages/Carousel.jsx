import React from 'react';
import { Carousel } from 'antd';
import { Box, Heading, Image } from '@chakra-ui/react';

import { Link } from 'react-router-dom'

const CarouselPage = ({ featAnime }) => (

    < Carousel autoplay >

        {featAnime.map((anime) => (
            <Link to={`/anime/${anime.id}`}>
                <Box w='full' h='500px' position='relative' title={anime.name}>
                    <Image
                        src={anime.poster}
                        objectFit="contain"  // or "cover" for different effects
                        w="100%"
                        h="100%"
                        bg="blackAlpha.100"  // Dark overlay for extra drama
                        alt="Anime Poster"
                        borderRadius="lg"  // Smooth, rounded edges (you can adjust this value)
                        boxShadow="md"  // Optional: add a subtle shadow for more depth
                        filter="blur(1px)"  // Apply blur effect to the image
                        opacity="0.8"

                    />
                    <Heading
                        position="absolute"
                        top="50%"  // Position the text just below the heading
                        left="50%"
                        transform='translate(-50%, -50%)'
                        color="white"
                        fontSize={{lg:'48px', md : '40px', sm :'sm'}}
                        textAlign='center'
                    >
                        {anime.name}  {/* Display a short description of the anime */}
                    </Heading>
                </Box>
            </Link>
        ))}

    </Carousel >
);


export default CarouselPage;
