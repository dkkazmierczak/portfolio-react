import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
