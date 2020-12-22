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

  const { state } = useResponsiveContext();

  useEffect(() => {
    // resets focus to false when clicking on new page
    setFocus(false);
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
        noneFocused={!focusedProject}
      >
        <p>
          I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
          consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
          Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra succulents
          intelligentsia.
        </p>
      </Work>

      <Work giveFocus={(focus) => setFocus(focus)} data={data.lola} noneFocused={!focusedProject}>
        <p>
          I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
          consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
          Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra succulents
          intelligentsia.
        </p>
      </Work>

      <Work
        giveFocus={(focus) => setFocus(focus)}
        data={data.octopus}
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
