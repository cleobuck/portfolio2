import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import FullBackground from './FullBackground';
import styles from './style.module.scss';
import eye from 'assets/images/eye.png';
import Navigation from 'components/navigation/Navigation';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [isLoaded, setLoad] = useState();

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section className={styles.hero}>
      <FullBackground setLoad={() => setLoad(true)}>
        <Fade left={isDesktop} bottom={isMobile} duration={1500} delay={3000} distance="0px">
          <img src={eye} alt="" className={styles.eye} />
        </Fade>

        <Navigation />
        <div class={styles.content}>
          <div className={styles.titleAndSlogan}>
            <Fade left={isDesktop} bottom={isMobile} duration={1500} delay={1500} distance="0px">
              <span className={styles.hi}>Hi! I'm</span>
            </Fade>
            <div className={styles.title}>
              <h1 className={isLoaded ? styles.appear : ''}>
                <span className={styles.firstName}>CLEO</span>
                BUCK
              </h1>
              <Fade left={isDesktop} bottom={isMobile} duration={1500} delay={1500} distance="0px">
                <h2>a web developer who secretly loves design</h2>
              </Fade>
            </div>
          </div>
          <Fade left={isDesktop} bottom={isMobile} duration={1500} delay={1500} distance="0px">
            <div className={styles.introductionWrapper}>
              <p className={`${styles.introduction}`}>
                After <span>a year and a half of coding </span>, I have already gone through each
                step of building an app (from design to testing) with <span> React </span>
                and an API written in <span> Python</span>. I’ve also been developing several
                websites to help others spread their
                <span className="letter-spacing-animation"> word</span>.
              </p>
            </div>
          </Fade>
        </div>
      </FullBackground>
    </section>
  );
};

export default Header;
