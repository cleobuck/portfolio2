import React, { useState, useEffect } from 'react';
import burgerLine from 'assets/images/burger-line.svg';
import styles from './style.module.scss';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useResponsiveContext } from '../../context';

export default function Navigation() {
  const [openMenu, toggleMenu] = useState(false);

  const { state, dispatch } = useResponsiveContext();

  const { isMobile, home, skills, works, contact } = state;

  useEffect(() => {
    setTimeout(() => {
      if (!openMenu && home && !isMobile) {
        toggleMenu(true);
      }
    }, 12000);
  }, []);

  const navAnimate = (id) => {
    if (isMobile) {
      toggleMenu(false);
    } else {
      dispatch({ type: 'scroll', payload: id });
      toggleMenu(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${openMenu ? styles.openNav : ''}`}>
      <button
        htmlFor="menu"
        aria-label="Menu"
        aria-expanded={openMenu}
        className={`${styles.menuToggle} ${openMenu ? styles.isActive : ''}`}
        onClick={() => toggleMenu((openMenu) => !openMenu)}
      >
        <img src={burgerLine} className={styles.firstLine} role="presentation" alt="" />
        <img src={burgerLine} className={styles.secondLine} role="presentation" alt="" />
        <img src={burgerLine} className={styles.thirdLine} role="presentation" alt="" />
      </button>
      <input type="checkbox" id="menu" checked={openMenu} className={styles.menuCheckbox} />{' '}
      <div className={`${styles.menu} ${openMenu ? styles.openMenu : ''}`}>
        <Link
          className={home ? styles.active : ''}
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => navAnimate('home')}
        >
          Home
        </Link>
        <Link
          className={skills ? styles.active : ''}
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => navAnimate('skills')}
        >
          Skills
        </Link>
        <Link
          className={works ? styles.active : ''}
          to="works"
          spy={true}
          smooth={true}
          // offset={-20}
          duration={500}
          onClick={() => navAnimate('works')}
        >
          Works
        </Link>

        <Link
          className={contact ? styles.active : ''}
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => navAnimate('contact')}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
