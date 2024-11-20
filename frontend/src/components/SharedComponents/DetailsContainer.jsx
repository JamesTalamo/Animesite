import { Box, Text, VStack } from "@chakra-ui/react"

let DetailsContainer = ({ selectedAnime, moreInfoAnime }) => {
    return (
        <Box
            bg='gray.800'
            p='10px'
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
            h='100%'
            w={{ lg: '70%', base: '100%' }}
            borderRadius='lg'>
            <Text align='start' pl='2%' fontWeight='bold' fontSize='xl' color='white'><span style={{ color: '#E53E3E' }}>D</span>etails :</Text>

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


            </VStack>
        </Box>
    )
}

export default DetailsContainer