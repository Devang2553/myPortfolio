import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar /> 
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact/>
    </div>
  )
}

export default App
