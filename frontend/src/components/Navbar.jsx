
import React from 'react'

import { Box, Button, Container, Flex, Image, Input, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import { Search2Icon, HamburgerIcon } from '@chakra-ui/icons'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box w='full' zIndex='5' position='fixed' align='start' p='50px'>
            <Button colorScheme='purple' onClick={onOpen}  >
                <HamburgerIcon fontSize='20px' />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Flex align='center' justify='center'>
                            <Image
                                src="./assets/navbarAssets/Frame%2072.png"
                            />
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <Input
                            placeholder='Search Anime'
                            focusBorderColor="purple.200"
                            _placeholder={{ color: "white", fontWeight: "bold" }}
                        />
                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </Box>


    )
};

export default Navbar;
