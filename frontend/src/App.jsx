import Navbar from "./components/Navbar"

import { Routes, Route } from 'react-router-dom'
import Page1 from './pages/Page1'

import { Box } from '@chakra-ui/react'

function App() {


  return (


    <Box minH='100vh'>
      <Navbar />
      <Routes>
        <Route path='*' element={<Page1 />} />
        <Route path='/' element={<Page1 />} />
        <Route path='page2' element={<div>page 2</div>} />
      </Routes>
      <Box w='full' p='200px' bg='red'>
        Footer
      </Box>
    </Box>
  )
}

export default App
