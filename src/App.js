import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import About from './About';
import Journey from './Journey';
import Resume from './Resume';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        
          <h className="AppTitle">DooOh Kim</h>
          

          <nav className={isMenuOpen ? "App-nav open" : "App-nav"}>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
            <NavLink to="/journey" className={({ isActive }) => isActive ? 'active' : undefined}>Journey</NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : undefined}>Résumé</NavLink>
          </nav>
          {/* <div className="language-selector">
            <NavLink to="/en" className="language-link">EN</NavLink>
            <span>/</span>
            <NavLink to="/kr" className="language-link">KR</NavLink>
          </div> */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
