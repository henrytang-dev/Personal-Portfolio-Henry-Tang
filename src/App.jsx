import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './pages/About.jsx'
import { Am } from './pages/Am.jsx'
import { NavBar } from './components'
import { Projects } from './pages/Projects.jsx'
import ScrollToTop from './ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Am />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App