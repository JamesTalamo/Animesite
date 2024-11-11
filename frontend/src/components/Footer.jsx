import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";

let Footer = () => {
    return (
        <Box w="full" h="250px" bg="gray.900">
            <Container>
                <Text textAlign="center" fontWeight="bold" pt="50px">
                    POWERED BY FOLLOWING TECH STACKS
                </Text>

                <Flex justify="center" align="center" gap='1rem' h="100%" pt='50px'>
                    <Box w="40px" h="40px" display="flex" justifyContent="center" alignItems="center" title='react'>
                        <Image
                            src="https://michaelwashburnjr.com/hubfs/Imported_Blog_Media/react-icon_svg_.png"
                            objectFit="fit"
                        />
                    </Box>
                    <Box w="40px" h="40px" display="flex" justifyContent="center" alignItems="center" title='vite'>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/779px-Vitejs-logo.svg.png"
                            objectFit="fit"
                        />
                    </Box>
                    <Box w="40px" h="40px" display="flex" justifyContent="center" alignItems="center" title='v2 chakra ui'>
                        <Image
                            src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                            objectFit="fit"
                        />
                    </Box>
                    <Box w="40px" h="40px" display="flex" justifyContent="center" alignItems="center" title='ant design'>
                        <Image
                            src="https://www.bookmarks.design/media/image/ant-design.jpg"
                            objectFit="fit"
                        />
                    </Box>
                    <Box w="40px" h="40px" display="flex" justifyContent="center" alignItems="center" title='Zustand'>
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s"
                            objectFit="fit"
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;
