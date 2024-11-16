import AnimeBox from "./AnimeBox"
import { Box, Text } from "@chakra-ui/react"

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


let AnimeBoxContainer = ({ anime, animeHead }) => {

    return (
        <Box w={{ lg: '70%', md: '90%', base: '100%' }} pb='15px' bg='gray.800' borderRadius='lg' border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }} p='25px'>
            <Text
                fontWeight='bold'
                fontSize='xl'
                align='start'
                color='white'
                pl='25px'
                b='red'
            >{animeHead}
            </Text>

            <div className="slider-container">
                <Slider {...settings}>
                    {anime.map((anime) => (
                        <AnimeBox anime={anime} />
                    ))}
                </Slider>
            </div>
        </Box>
    )
}

export default AnimeBoxContainer

