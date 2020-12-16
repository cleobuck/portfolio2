import React from 'react';
import styles from './style.module.scss';
import GitHub from 'assets/images/GitHub.svg';
import Mail from 'assets/images/Email.svg';
import Linkedin from 'assets/images/LinkedIn.svg';
import background from 'assets/images/cleo-chair.png';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <>
      <Fade>
        <p>
          I like to work with those who want to leave the world as they found it, or maybe even a
          little better...
        </p>

        <div className={styles.socialIcons}>
          <a href="https://github.com/cleobuck">
            <img src={GitHub} alt="github" />
          </a>
          <a>
            <img src={Linkedin} alt="linked-in" />
          </a>
          <a href="mailto:cleo.buck@gmail.com">
            <img src={Mail} alt="email" />
          </a>
        </div>
      </Fade>

      <figure className={styles.background}>
        <img src={background} alt="" />
      </figure>
    </>
  );
};

export default Contact;
