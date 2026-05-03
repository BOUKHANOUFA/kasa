import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'
import Error from './pages/Error.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
       
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)