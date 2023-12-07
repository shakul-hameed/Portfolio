import "./App.css"
import About from "./components/about/About"
import Home from "./components/home/Home"
import Pricing from "./components/pricing/Pricing"
import Contact from "./components/contact/Contact"
import Blog from "./components/blog/Blog"
import Portfolio from "./components/portfolio/Portfolio"
import Service from "./components/service/Service"
import Resume from "./components/resume/Resume"
import Sidebar from "./components/sidebar/Sidebar"
import Testimonials from "./components/testimonials/Testimonials"

const App = () => {
  return(
    <>
    <Sidebar/>
    <main className="main">
      <Home/>
      <About/>
      <Service/>
      <Resume/>
      <Portfolio/>
      <Pricing/>
      <Testimonials/>
      <Blog/>
      <Contact/>
    </main>
    </>
  )
}
export default App