import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}

export default App;
