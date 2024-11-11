


import { useEffect, useState } from 'react'

import Navbar from "./components/Navbar"

import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/MainPage"
import WatchPage from './pages/WatchPage'

import { Box } from '@chakra-ui/react'
import FocusPage from "./pages/FocusPage"
import ScrollToTop from './components/ScrollTop'

import { useAnimeStore } from './product/AnimeStore.js'
import Footer from './components/Footer.jsx'

function App() {
  const { page, setFeatAnime, setTodayAnime, setWeeklyAnime, setMonthlyAnime } = useAnimeStore()

  // let [episodes, setEpisodes] = useState([])

  let fetchFeatAnime = async () => {
    let res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`);
    let data = await res.json();


    console.log(`Fetching from : ${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`)

    // Updating Zustand store

    setFeatAnime(data.data.spotlightAnimes);
    setTodayAnime(data.data.top10Animes.today);
    setWeeklyAnime(data.data.top10Animes.week);
    setMonthlyAnime(data.data.top10Animes.month);
  }


  useEffect(() => {
    fetchFeatAnime();
  }, [page]);

  return (

    <Box minH='100vh'>
      <Navbar />
      <ScrollToTop />
      <Routes>

        <Route path='*' element={<MainPage />} />

        <Route path='/anime/:animeId' element={
          <FocusPage />
        } />

        <Route
          path='/watch/:animeId/:episode'
          element={
            <WatchPage />
          }
        />

      </Routes>

      <Footer />
    </Box>
  )
}

export default App
