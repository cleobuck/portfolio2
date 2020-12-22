import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

import Lola from 'components/images/lola';
import Octopus from 'components/images/octopus';
import Aubonmarche from 'components/images/aubonmarche';

import Work from 'components/work';

import { useResponsiveContext } from 'context';
import CleoChair from '../../components/images/cleo-chair';

const Projects = () => {
  const [focusedProject, setFocus] = useState(false);
  const [focusOut, setFocusOut] = useState('');
  const { state } = useResponsiveContext();
  const giveFocus = (focus) => {
    setFocus(focus);
  };

  const resetFocus = (currentFocus = false) => {
    if (currentFocus) {
      setFocusOut(currentFocus);
      setTimeout(() => setFocusOut(''), 2000);
    } else {
      setFocusOut('');
    }

    setFocus(false);
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
      focused: focusedProject === 'lola',
    },
    octopus: {
      name: 'octopus',
      src: Octopus,
      alt: "NGO Octopus's website",
      href: 'http://octopus.cleobuck.com/',
      focused: focusedProject === 'octopus',
    },
    aubonmarche: {
      name: 'aubonmarche',
      src: Aubonmarche,
      alt: 'Au Bon Marche - A social shop',
      href: 'https://aubonmarchelbv.pythonanywhere.com/',
      focused: focusedProject === 'aubonmarche',
    },
  };

  return (
    <>
      <h3 className={!focusedProject ? styles.hidden : ''}>And some of my projects...</h3>
      <CleoChair className={styles.background} />

      <Work
        giveFocus={(focus) => setFocus(focus)}
        data={data.aubonmarche}
        focusOut={focusOut === 'aubonmarche'}
        close={resetFocus}
        noneFocused={!focusedProject}
      >
        <p>
          I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
          consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
          Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra succulents
          intelligentsia.
        </p>
      </Work>

      <Work
        giveFocus={giveFocus}
        data={data.lola}
        focusOut={focusOut === 'lola'}
        close={resetFocus}
        noneFocused={!focusedProject}
      >
        <p>
          I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
          consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
          Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra succulents
          intelligentsia.
        </p>
      </Work>

      <Work
        giveFocus={giveFocus}
        focusOut={focusOut === 'octopus'}
        data={data.octopus}
        close={resetFocus}
        noneFocused={!focusedProject}
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
