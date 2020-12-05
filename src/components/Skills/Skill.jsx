import React from 'react';
import styles from './style.module.scss';

export default function Skill({ image, title, visible = null }) {
  return (
    <figure className={styles.individualSkill}>
      <img src={image} alt={title} />
      {visible && <figcaption>{title} </figcaption>}
    </figure>
  );
}
