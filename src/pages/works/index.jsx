import React, { useState } from 'react';
import styles from './style.module.scss';

import Lola from 'assets/images/lola.png';
import Octopus from 'assets/images/octopus.jpg';
import Aubonmarche from 'assets/images/aubonmarche.jpg';
import background from 'assets/images/cleo-chair.png';
import Reveal from 'react-reveal/Reveal';
import Work from './Work';
import Description from './Description';

const Projects = () => {
  const [focusedProject, setFocus] = useState({ lola: false, octopus: false, aubonmarche: false });

  const giveFocus = (focus) => {
    setFocus({ [focus]: true });
  };

  const data = {
    lola: {
      name: 'lola',
      src: Lola,
      alt: "Lola Buck's portfolio",
    },
    octopus: {
      name: 'octopus',
      src: Octopus,
      alt: "NGO Octopus's website",
    },
    aubonmarche: {
      name: 'aubonmarche',
      src: Aubonmarche,
      alt: "App for 'Au Bon Marché', a social shop",
    },
  };

  return (
    <>
      <h3>And some of my projects...</h3>

      <figure className={styles.background}>
        <img src={background} alt="" />
      </figure>

      <Work focusedProject={focusedProject} giveFocus={giveFocus} data={data.lola}></Work>

      <Work focusedProject={focusedProject} giveFocus={giveFocus} data={data.octopus}></Work>

      <Work focusedProject={focusedProject} giveFocus={giveFocus} data={data.aubonmarche}></Work>
    </>
  );
};

export default Projects;
