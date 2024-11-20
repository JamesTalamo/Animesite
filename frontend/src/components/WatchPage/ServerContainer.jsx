import { Box, Button, Text } from "@chakra-ui/react";

import { useAnimeStore } from "../../product/AnimeStore";

let ServerContainer = ({ changeServer }) => {

    let { sub, dub } = useAnimeStore()

    return (
        <Box
            borderRadius='xl'
            border='1px rgba(255, 255, 255, 0.16) solid'
            w='100%'
            // h='150px' // auto

            bg='gray.800'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            p='25px'
            flexDirection={{ lg: 'row', base: 'column' }}
        >
            <Box w={{ lg: '20%', base: '90%' }} h='100%' bg='gray.800' display='flex' alignItems='center' justifyContent='center' >
                <Text color='white' fontWeight='bold'>If current server doesn't work please try other servers.</Text>
            </Box>

            <Box w={{ lg: '79%', base: '100%' }} h='100%' bg='gray.800' display='flex' alignItems='start' justifyContent='space-around' flexDirection='column' p='10px' borderRadius='lg'>

                <Box w='100%' h='50%' display='flex' alignItems='center' justifyContent='start'>
                    <Text  color='white' fontWeight='bold'>
                        Sub
                    </Text>
                    <Box w='100%' h='100%' ml='25px' display='flex' alignItems='center' justifyContent='start' gap='2px'>
                        {sub.map((server, index) => (
                            <Button
                                key={index}
                                w='auto'
                                bg='gray.800'
                                p='20px'
                                border='1px rgba(255, 255, 255, 0.16) solid'
                                onClick={() => changeServer(server.serverName, 'sub')}
                                color='white'
                            >
                                {server.serverName}
                            </Button>
                        ))}
                    </Box>
                </Box>

                <Box w='100%' h='50%' display='flex' alignItems='center' justifyContent='start'>
                    <Text  color='white' fontWeight='bold'>
                        Dub
                    </Text>
                    <Box w='100%' h='100%' ml='25px' display='flex' alignItems='center' justifyContent='start' gap='2px'>

                        {dub.map((server, index) => (
                            <Button
                                key={index}
                                w='auto'
                                bg='gray.800'
                                p='20px'
                                border='1px rgba(255, 255, 255, 0.16) solid'
                                onClick={() => changeServer(server.serverName, 'dub')}
                                color='white'
                            >
                                {server.serverName}
                            </Button>
                        ))}

                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default ServerContainer