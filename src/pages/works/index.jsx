import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

import Lola from 'components/images/lola';
import Octopus from 'components/images/octopus';
import Aubonmarche from 'components/images/aubonmarche';
import CPAS from 'components/images/cpas';

import Work from '../../components/work';

import { useResponsiveContext } from 'context';
import CleoChair from '../../components/images/cleo-chair';

import CleoTop from '../../components/images/cleo-top';
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
      href: 'https://lolabuck.com/',
      focused: focusedProject === 'lola',
    },
    octopus: {
      name: 'octopus',
      src: Octopus,
      alt: "NGO Octopus's website",
      href: 'http://octopus.cleobuck.com/',
      focused: focusedProject === 'octopus',
    },
    cpas: {
      name: 'cpas',
      src: CPAS,
      alt: 'A social shop management app',
      href: 'https://aubonmarchelbv.com',
      focused: focusedProject === 'cpas',
    },
    aubonmarche: {
      name: 'aubonmarche',
      src: Aubonmarche,
      alt: 'Au Bon Marche - A social shop',
      href: 'https://appli.aubonmarchelbv.com/',
      focused: focusedProject === 'aubonmarche',
    },
  };

  return (
    <>
      <div className={`${styles.veilBackground} ${focusedProject ? styles.focusedBackground : ''}`}>
        <h3 className={focusedProject ? styles.hidden : ''}>And some of my projects...</h3>
        <CleoTop className={styles.backgroundTop} />
        <CleoChair className={styles.background} />
      </div>
      <Work
        giveFocus={(focus) => setFocus(focus)}
        data={data.aubonmarche}
        noneFocused={!focusedProject}
      >
        <p>
          A progressive web app made with React and a Python API to avoid food wastes by preordering
          fruit and vegetable baskets. (this is a private app. The link points to a mock version. To
          test it, ask me for user credentials)
        </p>
      </Work>

      <Work giveFocus={(focus) => setFocus(focus)} data={data.lola} noneFocused={!focusedProject}>
        <p>
          A home-made bilingual wordpress theme that was customized to fit the needs of my sister:
          an intuitive admin platform to choose image size and spacing for four different screen
          sizes.
        </p>
      </Work>

      <Work giveFocus={(focus) => setFocus(focus)} data={data.cpas} noneFocused={!focusedProject}>
        <p>
          Made with pure PHP, Mysql and AJAX in collaboration with Daniel Lechantre. (this is a
          private app. The link points to a mock version. To test it, ask me for user credentials)
        </p>
      </Work>

      <Work
        giveFocus={(focus) => setFocus(focus)}
        data={data.octopus}
        noneFocused={!focusedProject}
      >
        <p>
          A custom wordpress theme in progress for an awesome NGO that offers opportunities to
          protect the marine world through citizen actions and low tech methods
        </p>
      </Work>
    </>
  );
};

export default Projects;
