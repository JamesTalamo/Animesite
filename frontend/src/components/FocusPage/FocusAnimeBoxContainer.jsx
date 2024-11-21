import AnimeBox from "../AnimeBox"
import { Box, Text, Button } from "@chakra-ui/react"

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1130,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 5
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 4
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <Button
            color='#E53E3E'
            w="40px"
            h="40px"
            cursor="pointer"
            position="absolute"
            top="-20%"
            right={{ lg: "1%", base: '0%' }}
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
            onClick={onClick}
        >
            <ArrowForwardIcon />
        </Button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <Button
            color='#E53E3E'
            w="40px"
            h="40px"
            cursor="pointer"
            position="absolute"
            top='-20%'
            right={{ lg: "10%", base: '20%' }}
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
            onClick={onClick}
        ><ArrowBackIcon /></Button>
    );
}


let FocusAnimeBoxContainer = ({ anime, animeHead }) => {

    return (
        <Box
            mt='2.5%'
            mb='2.5%'
            w={{ lg: '100%', base: '100%' }}
            bg='gray.800'
            borderRadius='lg'
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
            p='35px'
            position='relative'>
            <Text
                fontWeight="bold"
                fontSize="xl"
                align="start"
                color="white"
                position="relative"
                top="-15px"
            >
                <Text as="span" color="#E53E3E">{animeHead[0]}</Text>
                {animeHead.slice(1)}
            </Text>


            <Slider {...settings} style={{ position: 'relative' }}>
                {anime.map((anime) => (
                    <AnimeBox anime={anime} key={anime.id} />
                ))}
            </Slider>

        </Box>
    )
}

export default FocusAnimeBoxContainer

