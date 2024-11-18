import { Box, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"


let EpisodeContainer = ({animeEpisodes}) => {
    return (
        <Box
            bg='gray.800'
            p='10px'
            h='100%'
            w={{ lg: '29%', base: '100%' }}
            borderRadius='lg'
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
            overflow='auto'
        >
            <Text align='start' pl='2%' fontWeight='bold' fontSize='xl' color='white'><span style={{ color: '#E53E3E' }}>E</span>pisodes :</Text>

            <Box
                display="flex"
                flexDirection="row"
                align='start'
                justify='start'
                overflowY="auto"
                flexWrap="wrap"
                // border={{ base: '1px rgba(255, 255, 255, 0.16) solid', lg: 'none' }}
                borderRadius='lg'
                gap='5px'
                p='10px'
            >

                {animeEpisodes.map((episode) => (

                    <Link to={`/watch/${episode.number}/${episode.episodeId}`} key={episode.number} >
                        <Button

                            color='white'
                            w='50px'
                            height='50px'
                            bg='gray.700'
                            borderRadius='lg'
                            justify='center'
                            align='center'
                            flexShrink='0'
                            fontWeight='bold'
                            _hover={{
                                backgroundColor: "rgba(229, 62, 62, 0.2)",
                                color: "#E53E3E",
                            }}
                        >{episode.number}</Button>
                    </Link>
                ))}

            </Box>
        </Box>
    )
}

export default EpisodeContainer