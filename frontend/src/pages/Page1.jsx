import { useEffect, useState } from 'react'

import '../styles/page1.css'
import { Button, Image, position } from '@chakra-ui/react'

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

let Page1 = () => {
    let [page, setPage] = useState(0)
    let [anime, setAnime] = useState({
        name: "",
        poster: "",
        description: "",
        rank: "",
        animeId: ""
    })



    let handleSetPageLeft = () => {

        console.log('i got clicked')
        console.log(page)
        if (page > 0) {
            setPage(page - 1)
        }
    };

    let handleSetPageRight = () => {
        if (page < 9) {
            console.log('i got clicked')
            console.log(page)
            setPage(page + 1);
        }
    };


    let fetchAnime = async () => {
        let res = await fetch('http://localhost:4000/api/v2/hianime/home')
        let data = await res.json()

        console.log(data.data.spotlightAnimes)

        setAnime({
            rank: data.data.spotlightAnimes[page].rank,
            name: data.data.spotlightAnimes[page].name,
            poster: data.data.spotlightAnimes[page].poster,
            description: data.data.spotlightAnimes[page].description,
            animeId: data.data.spotlightAnimes[page].id,
        })
    }

    useEffect(() => {
        console.log(anime)
        fetchAnime();
    }, [page]);

    return (
        <div className="Page1" style={{ position: 'relative' }}>
            <div className='anime-rank'>{`RANK ${anime.rank}!`}</div>
            <Image
                src={anime.poster}
                alt="Anime Poster"
                filter="blur(7px)"
                objectFit="cover"
                width="100%"
                height="100%"
                opacity={0.7}
            />

            <Image
                src={anime.poster}
                w={'700px'}
                h={'400px'}
                style={{ position: 'absolute', right: '5%', top: '25%' }}
                borderRadius="15px"
                boxShadow="lg"
            />


            <div className='anime-title'>{anime.name}</div>
            <div className='anime-description'>{anime.description}</div>

            <div className='watch-now-container'>
                <Button colorScheme='purple' size={'lg'}>Watch Now</Button>
            </div>

            <div className='button-change-container'>
                <Button onClick={() => handleSetPageLeft()} colorScheme='purple'><ArrowBackIcon /></Button>
                <Button onClick={() => handleSetPageRight()} colorScheme='purple' ><ArrowForwardIcon /></Button>
            </div>
        </div>
    )
}

export default Page1