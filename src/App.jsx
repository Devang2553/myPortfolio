import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Navbar /> 
      <Home />
      <SocialLinks />
      <Nav />
      {/* <About /> */}
      <Experience /> 
      <Portfolio />
      <Contact/>
    </div>
  )
}

export default App
