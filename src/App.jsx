import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {


  return (
    <div>
      <Navbar /> 
      <Home />
      <SocialLinks />
      <About />
      <Experience />
      <Contact/>
    </div>
  )
}

export default App
