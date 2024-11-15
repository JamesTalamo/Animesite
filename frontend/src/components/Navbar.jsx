
import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

const Navbar = () => {



    return (
        <Box w='full' zIndex='5' position='fixed' align='center' h='60px' bg='gray.900'>
            <Box w={{ base: 'full', xl: 'container.xl' }} bg='red' h='100%'>
                <Flex
                    bg='gray.900'
                    justify='space-between'
                    align='center'
                    h='100%'
                >
                    <Link to='/'>
                        <Text
                            pl='25px'
                            color='white'
                            fontWeight='bold'
                            fontSize={{ base: '30px', lg: '40px' }}
                        >Anime WEEB
                        </Text>
                    </Link>
                    <Text>
                        Placeholder to
                    </Text>
                </Flex>
            </Box>
        </Box>


    )
};

export default Navbar;
