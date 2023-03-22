import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <div className='whiteBox'>
        <Aboutme />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
