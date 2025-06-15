import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function Homepage() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden">
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Testimonials/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default Homepage;
