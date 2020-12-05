import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Background from './Background';
import styles from './style.module.scss';
import CleoKid from 'assets/images/cleo-kid.png';
import Python from 'assets/images/python.svg';
import Wordpress from 'assets/images/WordPress.svg';
import JSHTMLCSS from 'assets/images/js-html-css.svg';
import SASS from 'assets/images/sass.svg';
import Flask from 'assets/images/flask.svg';
import react from 'assets/images/react.svg';
import Skill from './Skill';

const Skills = () => {
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
    <section className={styles.skills}>
      {' '}
      <Background setLoad={() => setLoad(true)}>
        <img src={CleoKid} alt="" className={styles.cleoKid} />
        <p>
          I used to travel a LOT in <strong>search </strong> of what fuelled me. Eventually, I
          realized what I <strong>intuitively</strong> knew as a <strong>kid </strong> : Nothing
          gets my <strong>adrenaline </strong>
          pumping as much as problem solving, especially with <strong>algorithms</strong>. Here are
          my skills:
        </p>

        <section className={styles.skillSet}>
          <div className={styles.skillMain}>
            <Skill image={react} title="React" visible={true} />
          </div>

          <div className={styles.frontendSkills}>
            <Skill image={JSHTMLCSS} title="Js, HTML, and CSS" visible={false} />
            <Skill image={SASS} title="SASS" visible={false} />
          </div>

          <div className={styles.subSkills}>
            <Skill image={Wordpress} title="Wordpress" visible={true} />
            <Skill image={Python} title="Python" visible={true} />
            <Skill image={Flask} title="Flask" visible={true} />
          </div>
        </section>
      </Background>
    </section>
  );
};

export default Skills;
