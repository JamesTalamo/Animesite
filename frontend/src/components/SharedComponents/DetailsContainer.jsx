import { Box, Text, VStack, Badge, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"


let DetailsContainer = ({ selectedAnime, moreInfoAnime, detailsGenres }) => {

    return (
        <Box
            bg='gray.800'
            p='10px'
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
            h='100%'
            w={{ lg: '70%', base: '100%' }}
            borderRadius='lg'>
            <Text align='start' pl='2%' fontWeight='bold' fontSize='xl' color='white'><span style={{ color: '#E53E3E' }}>D</span>etails :</Text>

            <Flex flexDirection={{ lg: 'row', base: 'column' }}>
                <VStack align='start' p='2%'>
                    <Text fontWeight="bold" color='white' w='100%' align='start'>
                        Name: <Text as="span" fontWeight="normal" color='white'>{selectedAnime.name}</Text>
                    </Text>

                    <Text fontWeight="bold" color='white' w='100%' align='start'>
                        Japanese Name: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.japanese}</Text>
                    </Text>
                    <Text fontWeight="bold" color='white' w='100%' align='start'>
                        Duration: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.duration}</Text>
                    </Text>
                    <Text fontWeight="bold" color='white' w='100%' align='start'>
                        Status: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.status}</Text>
                    </Text>
                    <Text fontWeight="bold" color='white' w='100%' align='start'>
                        Premiered: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.premiered}</Text>
                    </Text>



                </VStack>

                <VStack align='start' p='2%'>
                    <Text fontWeight="bold" color='white' w='100%' align='start'>
                        Studio: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.studios}</Text>
                    </Text>
                    <Text fontWeight="bold" color='white' w='100%' align='start'>
                        Genres: <Box as='span'>
                            {detailsGenres.map((genre) => (
                                <Link to={`/genre/${genre}/1`}>

                                    <Badge m='5px' bg='gray.700'>
                                        {genre}
                                    </Badge>
                                </Link>
                            ))}

                        </Box>
                    </Text>

                </VStack>
            </Flex>

        </Box>
    )
}

export default DetailsContainer