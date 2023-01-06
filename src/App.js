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
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />}> </Route>
          <Route path="/projects" element={<Projects />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App