import { Routes, Route } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

import Navbar from "./components/Navbar"
import ScrollToTop from './components/ScrollTop'
import Footer from './components/Footer.jsx'

import SearchPage from './pages/SearchPage.jsx'
import WatchPage from './pages/WatchPage.jsx'
import MainPage from './pages/MainPage.jsx'
import GenrePage from './pages/GenrePage.jsx'
import FocusPage from './pages/FocusPage.jsx'

function App() {
  return (
    <Box minH="100vh" align='center' bg='gray.900'>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/genre/:genre/:page" element={<GenrePage />} />
        <Route path="/watch/:episode/:episodeId" element={<WatchPage />} />
        <Route path="/anime/:animeId" element={<FocusPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default App
