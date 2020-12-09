import React, { useState, useEffect } from 'react';
import Home from '../pages/home';
import Skills from '../pages/skills';
import Works from '../pages/works';
import Contact from 'pages/contact';
import Navigation from './navigation/Navigation';
import { useResponsiveContext } from 'context';

function App() {
  const { state } = useResponsiveContext();

  const { isMobile, home, skills, works, contact } = state;

  return (
    <>
      <Navigation />
      {(home || isMobile) && <Home />}
      {(skills || isMobile) && <Skills />}
      {(works || isMobile) && <Works />}
      {(contact || isMobile) && <Contact />}
    </>
  );
}

export default App;
