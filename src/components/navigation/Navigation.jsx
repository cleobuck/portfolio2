import React, { useState } from 'react';
import burgerLine from 'assets/images/burger-line.svg';
import styles from './style.module.scss';

export default function Navigation() {
  const [openMenu, toggleMenu] = useState(false);

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
        <a href="#bla">Home</a>
        <a href="#bla">Skills</a>
        <a href="#bla">Works</a>
        <a href="#bla">Contact</a>
      </div>
    </nav>
  );
}
