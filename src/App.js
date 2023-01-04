import React from 'react'
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Projects />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App