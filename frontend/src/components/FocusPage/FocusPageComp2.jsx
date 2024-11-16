import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

let FocusPageComp2 = ({ selectedAnime, moreInfoAnime, animeEpisodes }) => {
    return (
        <Box>
            <Flex w='100%' align='center' justify='space-between' flexDirection={{ lg: 'row', base: 'column' }}>
                <Box
                    p='10px'
                    border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
                    h='200px'
                    w={{ lg: '800px', base: '100%' }}
                    borderRadius='lg'>
                    <Text align='start' pl='2%' fontWeight='bold' fontSize='xl' color='white'>Details :</Text>

                    <VStack align='start' p='2%'>
                        <Text fontWeight="bold" color='white'>
                            Name: <Text as="span" fontWeight="normal" color='white'>{selectedAnime.name}</Text>
                        </Text>
                        <Text fontWeight="bold" color='white'>
                            Japanese Name: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.japanese}</Text>
                        </Text>
                        <Text fontWeight="bold" color='white'>
                            Duration: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.duration}</Text>
                        </Text>
                        <Text fontWeight="bold" color='white'>
                            Status: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.status}</Text>
                        </Text>


                    </VStack>
                </Box>

                <Box
                    p='10px'
                    h='200px'
                    w={{ lg: '400px', base: '100%' }}
                    borderRadius='lg'
                    border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
                    overflow='auto'
                >
                    <Text align='start' pl='2%' fontWeight='bold' fontSize='xl' color='white'>Episodes :</Text>

                    <Box
                        display="flex"
                        flexDirection="row"
                        align='start'
                        justify='start'
                        overflowY="auto"
                        flexWrap="wrap"
                        gap="3px"
                        border={{base :'1px rgba(255, 255, 255, 0.16) solid', lg:'none'}}
                        borderRadius='lg'
                    >

                        {animeEpisodes.map((episode) => (
                            <Link to={`/watch/${selectedAnime.id}/${episode.number}`} key={episode.number} >
                                <Flex color='white' w='50px' height='50px' bg='gray.700' borderRadius='lg' justify='center' align='center' flexShrink='0' fontWeight='bold'>{episode.number}</Flex>
                            </Link>
                        ))}

                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default FocusPageComp2