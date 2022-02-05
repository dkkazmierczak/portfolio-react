import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
        <About />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
