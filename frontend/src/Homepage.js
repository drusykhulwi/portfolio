import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Services from "./components/Services";

function Homepage() {
  return (
    <div className="min-h-screen bg-primary">
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Contacts/>
    </div>
  );
}

export default Homepage;
