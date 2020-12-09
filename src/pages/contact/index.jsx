import React from 'react';
import styles from './style.module.scss';
import GitHub from 'assets/images/GitHub.svg';
import Mail from 'assets/images/Email.svg';
import Linkedin from 'assets/images/LinkedIn.svg';
import Reveal from 'react-reveal/Reveal';

const Contact = () => {
  return (
    <Reveal effect="appearFromDark">
      <section className={styles.contact} id="contact">
        <p>
          I like to work with those who want to leave the world as they found it, or maybe even a
          little better...
        </p>

        <div className={styles.socialIcons}>
          <a>
            <img src={GitHub} alt="github" />
          </a>
          <a>
            <img src={Mail} alt="email" />
          </a>
          <a>
            <img src={Linkedin} alt="linked-in" />
          </a>
        </div>
      </section>
    </Reveal>
  );
};

export default Contact;
