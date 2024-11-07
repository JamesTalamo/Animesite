import './styles/mainStyles.css'

import Navbar from "./components/Navbar"

import { Routes, Route } from 'react-router-dom'
import Page1 from './pages/Page1'

function App() {


  return (
    <div className="main-page">
      <Navbar />
      <Routes>
        <Route path='*' element={<Page1 />} />
        <Route path='/' element={<Page1 />} />
        <Route path='page2' element={<div>page 2</div>} />
      </Routes>
    </div>


  )
}

export default App
