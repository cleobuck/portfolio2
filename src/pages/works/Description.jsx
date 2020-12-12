import React from 'react';
import styles from './style.module.scss';

export default function Description({ visible, title, children, href }) {
  return (
    <div className={`${styles.description} ${visible ? styles.visible : ''} `}>
      <h4> {title} </h4>
      {children}
      <a href={href} target="_blank">
        View project
      </a>
    </div>
  );
}
