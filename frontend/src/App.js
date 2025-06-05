import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Services from './components/Services'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}