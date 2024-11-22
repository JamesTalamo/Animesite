import { Flex } from "@chakra-ui/react"

import { useAnimeStore } from '../../product/AnimeStore'


import EpisodeContainer from "../SharedComponents/EpisodeContainer"
import DetailsContainer from "../SharedComponents/DetailsContainer"


let FocusPageComp2 = () => {

    let { selectedAnime, moreInfoAnime, animeEpisodes, detailsGenres } = useAnimeStore()
    console.log(moreInfoAnime)
    return (

        <Flex
            w='100%'
            h={{ lg: '250px', base: '500px' }}
            align='center' justify='space-between'
            flexDirection={{ lg: 'row', base: 'column' }}
        >


            <DetailsContainer selectedAnime={selectedAnime} moreInfoAnime={moreInfoAnime} detailsGenres={detailsGenres}/>

            <EpisodeContainer animeEpisodes={animeEpisodes} />

        </Flex>

    )
}

export default FocusPageComp2