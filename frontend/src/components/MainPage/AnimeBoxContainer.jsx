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
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={onClick}
        ><ArrowBackIcon /></Button>
    );
}


let AnimeBoxContainer = ({ anime, animeHead }) => {

    return (
        <Box
            w={{ lg: '70%', md: '90%', base: '100%' }}
            bg='gray.800'
            borderRadius='lg'
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
            p='35px'
            position='relative'>
            <Text
                fontWeight='bold'
                fontSize='xl'
                align='start'
                color='white'

                b='red'
                position='relative'
                top='-15px'
            >{animeHead}
            </Text>


            <Slider {...settings} style={{ position: 'relative' }}>
                {anime.map((anime) => (
                    <AnimeBox anime={anime} key={anime.id}/>
                ))}
            </Slider>

        </Box>
    )
}

export default AnimeBoxContainer

