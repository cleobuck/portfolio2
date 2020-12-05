import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.scss';

import Lola from 'assets/images/lola.png';
import Octopus from 'assets/images/octopus.jpg';
import Aubonmarche from 'assets/images/aubonmarche.jpg';
import background from 'assets/images/cleo-chair.png';

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setLoad] = useState();

  return (
    <section className={styles.works}>
      <h3>And some of my projects...</h3>

      <figure className={styles.background}>
        <img src={background} alt="" />
      </figure>
      <figure className={styles.lola}>
        <img src={Lola} alt="Illustrator Lola Buck's portfolio" />
      </figure>

      <figure className={styles.octopus}>
        <img src={Octopus} alt="NGO Octopus" />
      </figure>

      <figure className={styles.aubonmarche}>
        <img src={Aubonmarche} alt="App for 'Au Bon Marché', a social shop" />
      </figure>
    </section>
  );
};

export default Projects;
