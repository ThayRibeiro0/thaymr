
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Work from "./components/Work"



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
