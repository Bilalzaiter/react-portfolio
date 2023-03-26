import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TypingComponent from "./components/Banner/Banner";
import BackgroundImg from './components/BackgroundImg/BackgroundImg';
import Skills  from './components/Skills/Skills';
import "./App.css"
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <div className="App">
      <BackgroundImg />
      <Navbar />
      <TypingComponent sentences={['Hi! I am Bilal Zeaiter from lebanon BackEnd Developper', 'Hi! I am Bilal Zeaiter from lebanon Full Stack Web Developper', 'Hi! I am Bilal Zeaiter from lebanon FrontEnd Developper']} intervalTime="150" />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

