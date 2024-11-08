import { useEffect, useState } from 'react'

import Navbar from "./components/Navbar"

import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/MainPage"
import WatchPage from './pages/WatchPage'

import { Box } from '@chakra-ui/react'
import FocusPage from "./pages/FocusPage"
import ScrollToTop from './components/ScrollTop'

function App() {
  let [page, setPage] = useState(0)
  let [featAnime, setfeatAnime] = useState({
    name: "",
    poster: "",
    description: "",
    rank: "",
    animeId: ""
  })

  let [todayAnime, setTodayAnime] = useState([])
  let [weeklyAnime, setWeeklyAnime] = useState([])
  let [monthlyAnime, setMonthlyAnime] = useState([])

  let [selected, setSelected] = useState('') // Select the anime to render in FocusPage

  let [episodes, setEpisodes] = useState([])

  let fetchFeatAnime = async () => {
    let res = await fetch('http://localhost:4000/api/v2/hianime/home')
    let data = await res.json()

    // console.log(data.data)
    // console.log(data.data.spotlightAnimes)

    // console.log(todayAnime, weeklyAnime, monthlyAnime)

    let todayAnimeData = data.data.top10Animes.today
    setTodayAnime(todayAnimeData)

    let weeklyAnimeData = data.data.top10Animes.week
    setWeeklyAnime(weeklyAnimeData)

    let monthlyAnimeData = data.data.top10Animes.month
    setMonthlyAnime(monthlyAnimeData)

    setfeatAnime({
      rank: data.data.spotlightAnimes[page].rank,
      name: data.data.spotlightAnimes[page].name,
      poster: data.data.spotlightAnimes[page].poster,
      description: data.data.spotlightAnimes[page].description,
      animeId: data.data.spotlightAnimes[page].id,
    })
  }

  useEffect(() => {
    fetchFeatAnime();
  }, [page]);

  return (


    <Box minH='100vh'>
      <Navbar />
      <ScrollToTop />
      <Routes>

        <Route path='*' element={
          <MainPage
            page={page}
            setPage={setPage}
            featAnime={featAnime}
            todayAnime={todayAnime}
            weeklyAnime={weeklyAnime}
            monthlyAnime={monthlyAnime}

            setSelected={setSelected}
          />
        } />

        <Route path='/anime/:animeId' element={
          <FocusPage
            anime={selected}
            episodes={episodes}
            setEpisodes={setEpisodes}
          />
        } />

        <Route
          path='/watch/:animeName/:episode' //{/:episodeId'}
          element={
            <WatchPage
              episodes={episodes}
            />
          }
        />

      </Routes>

      <Box w='full' h='250px' bg='gray.900'>

      </Box>
    </Box>
  )
}

export default App
