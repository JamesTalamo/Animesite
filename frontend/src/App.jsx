//CODE BELOW IS WITH LAZY  LOADING.

import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

import Navbar from "./components/Navbar"
import ScrollToTop from './components/ScrollTop'
import Footer from './components/Footer.jsx'

import { useAnimeStore } from './product/AnimeStore.js'

import MainPage from './pages/MainPage.jsx'
import FocusPage from './pages/FocusPage.jsx'
import WatchPage from './pages/WatchPage.jsx'



function App() {
  const { page, setFeatAnime, setTodayAnime, setWeeklyAnime, setMonthlyAnime } = useAnimeStore()

  const fetchFeatAnime = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`)
      const data = await res.json()

      // Updating Zustand store
      setFeatAnime(data.data.spotlightAnimes)
      setTodayAnime(data.data.top10Animes.today)
      setWeeklyAnime(data.data.top10Animes.week)
      setMonthlyAnime(data.data.top10Animes.month)
    } catch (error) {
      console.error("Failed to fetch featured anime:", error)
    }
  }

  useEffect(() => {
    fetchFeatAnime()
  }, [page])

  return (
    <Box minH="100vh">
      <Navbar />
      <ScrollToTop />

        <Routes>
          <Route path="/test" element={<div>Route is Working!</div>} />
          <Route path="/watch/:animeId/:episode" element={<WatchPage />} />
          <Route path="/anime/:animeId" element={<FocusPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>

      <Footer />
    </Box>
  )
}

export default App
