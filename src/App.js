import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 700,
      easing: 'zoom-in-up',
    })
  },[]);
  return (
    <>
    <Navbar/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </>
  );
}

export default App;
