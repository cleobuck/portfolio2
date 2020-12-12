import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

import Lola from 'assets/images/lola.png';
import Octopus from 'assets/images/octopus.jpg';
import Aubonmarche from 'assets/images/aubonmarche.jpg';
import background from 'assets/images/cleo-chair.png';
import Reveal from 'react-reveal/Reveal';
import Work from './Work';
import Description from './Description';
import { useResponsiveContext } from 'context';

const Projects = () => {
  const [focusedProject, setFocus] = useState({ lola: false, octopus: false, aubonmarche: false });
  const { state } = useResponsiveContext();
  const giveFocus = (focus) => {
    setFocus({ [focus]: true });
  };

  useEffect(() => {
    setFocus({ lola: false, octopus: false, aubonmarche: false });
  }, [state]);

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

      <Work focusedProject={focusedProject} giveFocus={giveFocus} data={data.lola}>
        <Description
          visible={focusedProject.lola}
          title="Lola Buck's portfolio"
          href="https://dev.lolabuck.com/"
        >
          <p>
            I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
            consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
            Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra
            succulents intelligentsia.
          </p>
        </Description>
      </Work>

      <Work focusedProject={focusedProject} giveFocus={giveFocus} data={data.octopus}>
        <Description
          visible={focusedProject.octopus}
          title="Octopus NGO's website"
          href="http://octopus.cleobuck.com/"
        >
          <p>
            I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
            consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
            Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra
            succulents intelligentsia.
          </p>
        </Description>
      </Work>

      <Work focusedProject={focusedProject} giveFocus={giveFocus} data={data.aubonmarche}>
        <Description
          visible={focusedProject.aubonmarche}
          title="Au Bon Marche - A social shop"
          href="https://aubonmarchelbv.pythonanywhere.com/"
        >
          <p>
            I'm baby copper mug fugiat cardigan deserunt ipsum literally, waistcoat in. Dolore kogi
            consectetur, helvetica single-origin coffee actually selfies kinfolk dreamcatcher.
            Sustainable church-key minim authentic, occaecat YOLO kickstarter pop-up neutra
            succulents intelligentsia.
          </p>
        </Description>
      </Work>
    </>
  );
};

export default Projects;
