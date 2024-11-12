


// import { useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'

// import { Box } from '@chakra-ui/react'

// import Navbar from "./components/Navbar"
// import ScrollToTop from './components/ScrollTop'

// import MainPage from "./pages/MainPage"
// import FocusPage from "./pages/FocusPage"
// import WatchPage from './pages/WatchPage'

// import Footer from './components/Footer.jsx'



// import { useAnimeStore } from './product/AnimeStore.js'


// function App() {
//   const { page, setFeatAnime, setTodayAnime, setWeeklyAnime, setMonthlyAnime } = useAnimeStore()


//   let fetchFeatAnime = async () => {
//     let res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`);
//     let data = await res.json();


//     console.log(`Fetching from : ${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`)

//     // Updating Zustand store
//     setFeatAnime(data.data.spotlightAnimes);
//     setTodayAnime(data.data.top10Animes.today);
//     setWeeklyAnime(data.data.top10Animes.week);
//     setMonthlyAnime(data.data.top10Animes.month);
//   }


//   useEffect(() => {
//     fetchFeatAnime();
//   }, [page]);

//   return (

//     <Box minH='100vh'>
//       <Navbar />
//       <ScrollToTop />
//       <Routes>

//         <Route path='*' element={<MainPage />} />

//         <Route path='/anime/:animeId' element={<FocusPage />} />

//         <Route path='/watch/:animeId/:episode' element={<WatchPage />} />

//       </Routes>

//       <Footer />
//     </Box>
//   )
// }

// export default App

//CODE BELOW IS WITH LAZY  LOADING.

import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

import Navbar from "./components/Navbar"
import ScrollToTop from './components/ScrollTop'
import Footer from './components/Footer.jsx'

import { useAnimeStore } from './product/AnimeStore.js'

// Lazy load pages for code-splitting
const MainPage = lazy(() => import("./pages/MainPage"))
const FocusPage = lazy(() => import("./pages/FocusPage"))
// const WatchPage = lazy(() => import("./pages/WatchPage"))

function App() {
  const { page, setFeatAnime, setTodayAnime, setWeeklyAnime, setMonthlyAnime } = useAnimeStore()

  const fetchFeatAnime = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`)
      const data = await res.json()

      console.log(`Fetching from: ${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`)

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

      {/* Use Suspense for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/anime/:animeId" element={<FocusPage />} />
          {/* <Route path="/watch/:animeId/:episode" element={<WatchPage />} /> */}
        </Routes>
      </Suspense>

      <Footer />
    </Box>
  )
}

export default App
