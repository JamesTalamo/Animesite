import { Spinner, Flex, Heading, Text } from "@chakra-ui/react";

let LoadingPage = () => {
    return (
        <Flex
            zIndex='500'
            h="100vh"  
            align="center" 
            justify="center"  
            bg='gray.800'
            flexDirection='column'
            gap='20px'
        >
            <Heading
                color='white'
            >
                Anime <Text as='span' color='#E53E3E'>WEEB</Text>
            </Heading>
            <Spinner color="red.500" size="xl" />
        </Flex>
    );
};

export default LoadingPage;
