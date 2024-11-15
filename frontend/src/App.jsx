//CODE BELOW IS WITH LAZY  LOADING.

import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

import Navbar from "./components/Navbar"
import ScrollToTop from './components/ScrollTop'
import Footer from './components/Footer.jsx'

import MainPage from './pages/MainPage.jsx'
import FocusPage from './pages/FocusPage.jsx'
import WatchPage from './pages/WatchPage.jsx'



function App() {

  return (
    <Box minH="100vh" align='center' bg='gray.800'>
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
