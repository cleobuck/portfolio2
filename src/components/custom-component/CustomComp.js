import React, { useState, useEffect } from 'react';
import Reveal from 'react-reveal/Reveal';

export default function CustomComp({ children, visible, id, className }) {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 1024);
  });

  const style = { display: 'none' };

  return (
    <Reveal effect="appearFromDark">
      <section
        className={`${className} ${isMobile ? '' : 'isDesktop'} ${visible ? 'visible' : ''}`}
        style={!isMobile && !visible ? style : ''}
        id={id}
      >
        {children}
      </section>
    </Reveal>
  );
}
