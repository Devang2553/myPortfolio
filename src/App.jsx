import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar /> 
      <Home />
      <SocialLinks />
      <About />
    </div>
  )
}

export default App
