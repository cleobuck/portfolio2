import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Background from 'components/backgrounds/skills';
import styles from './style.module.scss';
import Python from 'assets/images/python.svg';
import Wordpress from 'assets/images/wordpress.svg';
import Flask from 'assets/images/flask.svg';
import Javascript from 'assets/images/javascript.svg';
import react from 'assets/images/react.svg';
import Skill from 'components/skill';
import PHP from 'assets/images/php.svg';
import CleoKid from 'components/images/cleo-kid';

const Skills = () => {
  const [isLoaded, setLoad] = useState();

  return (
    <Background setLoad={() => setLoad(true)}>
      {isLoaded && <CleoKid />}

      {isLoaded && (
        <>
          <Fade duration={2000} delay={500}>
            <p>
              I used to travel a LOT in <strong>search </strong> of what fuelled me. Eventually, I
              realized what I <strong>intuitively</strong> knew as a <strong>kid </strong> : Nothing
              gets my <strong>adrenaline </strong>
              pumping as much as problem solving, especially with <strong>algorithms</strong>. Here
              are my skills:
            </p>
          </Fade>

          <Fade duration={2000} delay={500}>
            <section className={styles.triangle}>
              <div className={styles.skillsWrapper}>
                <div className={styles.frontend}>
                  <Skill image={react} title="React" visible={true} />
                </div>

                <div className={styles.architectures}>
                  <Skill image={Wordpress} title="WordPress" visible={true} />
                  <Skill image={Flask} title="Flask" visible={true} />
                </div>

                <div className={styles.backend}>
                  <Skill image={Python} title="Python" visible={true} />
                  <Skill image={PHP} title="Php" />
                  <Skill image={Javascript} title="Javascript" visible={true} />
                </div>
              </div>
            </section>
          </Fade>
        </>
      )}
    </Background>
  );
};

export default Skills;
