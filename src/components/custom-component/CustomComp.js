import React, { useState, useEffect } from 'react';
import Reveal from 'react-reveal/Reveal';

export default function CustomComp({ children, visible, id, className }) {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 1024);
  });

  return (
    <Reveal effect="appearFromDark">
      <section
        className={`${className} ${isMobile ? '' : 'isDesktop'} ${visible ? 'visible' : ''}`}
        id={id}
      >
        {children}
      </section>
    </Reveal>
  );
}
