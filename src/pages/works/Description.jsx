import React from 'react';
import styles from './style.module.scss';
import CloseIcon from 'assets/images/close.svg';

export default function Description({ visible, title, children, href, close, name }) {
  return (
    <div className={`${styles.description} ${visible ? styles.visible : ''} `}>
      <h4> {title} </h4>{' '}
      <button>
        <img src={CloseIcon} aria-label="close" alt="" onClick={() => close(name)} />
      </button>
      {children}
      <a href={href} target="_blank">
        View project
      </a>
    </div>
  );
}
