import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

import Lola from 'assets/images/lola.png';
import Octopus from 'assets/images/octopus.jpg';
import Aubonmarche from 'assets/images/aubonmarche.jpg';
import background from 'assets/images/cleo-chair.png';

import Work from './Work';

import { useResponsiveContext } from 'context';

const Projects = () => {
  const [focusedProject, setFocus] = useState({ lola: false, octopus: false, aubonmarche: false });
  const [focusOut, setFocusOut] = useState('');
  const { state } = useResponsiveContext();
  const giveFocus = (focus) => {
    setFocus({ [focus]: true });
  };

  const resetFocus = (currentFocus = false) => {
    if (currentFocus) {
      setFocusOut(currentFocus);
      setTimeout(() => setFocusOut(''), 2000);
    } else {
      setFocusOut('');
    }

    setFocus({ lola: false, octopus: false, aubonmarche: false });
  };

  useEffect(() => {
    resetFocus();
    setFocusOut();
  }, [state]);

  const data = {
    lola: {
      name: 'lola',
      src: Lola,
      alt: "Lola Buck's portfolio",
      href: 'https://dev.lolabuck.com/',
    },
    octopus: {
      name: 'octopus',
      src: Octopus,
      alt: "NGO Octopus's website",
      href: 'http://octopus.cleobuck.com/',
    },
    aubonmarche: {
      name: 'aubonmarche',
      src: Aubonmarche,
      alt: 'Au Bon Marche - A social shop',
      href: 'https://aubonmarchelbv.pythonanywhere.com/',
    },
  };

  return (
    <>
      <h3 className={Object.values(focusedProject).indexOf(true) !== -1 ? styles.hidden : ''}>
        And some of my projects...
      </h3>
      <figure className={styles.background}>
        <img src={background} alt="" />
      </figure>

      <Work
        focusedProject={focusedProject}
        giveFocus={giveFocus}
        data={data.aubonmarche}
        focusOut={focusOut === 'aubonmarche'}
        close={resetFocus}
      >
        <p>
          I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
          consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
          Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra succulents
          intelligentsia.
        </p>
      </Work>

      <Work
        focusedProject={focusedProject}
        giveFocus={giveFocus}
        data={data.lola}
        focusOut={focusOut === 'lola'}
        close={resetFocus}
      >
        <p>
          I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
          consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
          Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra succulents
          intelligentsia.
        </p>
      </Work>

      <Work
        focusedProject={focusedProject}
        giveFocus={giveFocus}
        focusOut={focusOut === 'octopus'}
        data={data.octopus}
        close={resetFocus}
      >
        <p>
          I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
          consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
          Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra succulents
          intelligentsia.
        </p>
      </Work>
    </>
  );
};

export default Projects;
