
// import { Box, Wrap } from "@chakra-ui/react";
// import { useAnimeStore } from "../../product/AnimeStore";

// let GenreBox = () => {
//     let { genres } = useAnimeStore();
//     return (
//         <Box
//             w="100%"

//             borderRadius="lg"
//             border="1px rgba(255, 255, 255, 0.16) solid"

//         >
//             <Wrap spacing={0} justify="start">
//                 {genres.map((genre) => (

//                     <Box
//                         w="120px"
//                         h="40px"
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                         backgroundColor="gray.800"
//                         color="white"
//                         fontSize="sm"
//                         fontWeight="bold"
//                         borderRadius="md"
//                         cursor='pointer'
//                         _hover={{
//                             backgroundColor: "rgba(229, 62, 62, 0.2)",
//                             color: "#E53E3E",
//                         }}
//                     >
//                         {genre}
//                     </Box>
//                     // </WrapItem>
//                 ))}
//             </Wrap>
//         </Box>
//     );
// };

// export default GenreBox;

import { Box, Wrap } from "@chakra-ui/react";
import { useAnimeStore } from "../../product/AnimeStore";

let GenreBox = () => {
    let { genres } = useAnimeStore();
    return (
        <Box
            mt={{ lg: '0', base: '25px' }}
            w="100%"
            borderRadius="lg"
            border="1px rgba(255, 255, 255, 0.16) solid"
            p={2}
            bg='gray.800'
        >
            <Wrap spacing={2} justify="center">
                {genres.map((genre, index) => (
                    <Box
                        key={index}
                        flex="0 1 120px" 
                        h="40px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="gray.800"
                        fontSize="sm"
                        fontWeight="bold"
                        borderRadius="md"
                        cursor="pointer"
                        _hover={{
                            backgroundColor: "rgba(229, 62, 62, 0.2)",
                            color: "#E53E3E",
                        }}
                        color='white'
                    >
                        {genre}
                    </Box>
                ))}
            </Wrap>
        </Box>
    );
};

export default GenreBox;
