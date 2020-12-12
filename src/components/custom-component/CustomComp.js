import React, { useState, useEffect } from 'react';
import Reveal from 'react-reveal/Reveal';
import { useResponsiveContext } from 'context';

export default function CustomComp({ children, visible, id, className }) {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 1024);
  });

  const style = { display: 'none', overflow: 'hidden' };

  return (
    <Reveal effect="appearFromDark">
      <section
        className={`${className} ${isMobile ? '' : 'isDesktop'} ${visible ? 'visible' : ''}`}
        style={!isMobile && !visible ? style : { overflow: 'hidden' }}
        id={id}
        role={id === 'home' ? 'none' : 'heading'}
        aria-level={id === 'home' ? '' : 3}
        aria-label={id}
      >
        {children}
      </section>
    </Reveal>
  );
}
