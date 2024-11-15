import { Spinner, Flex, Heading } from "@chakra-ui/react";

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
                Anime WEEB
            </Heading>
            <Spinner color="red.500" size="xl" />
        </Flex>
    );
};

export default LoadingPage;
