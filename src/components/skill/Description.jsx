import React from 'react';
import styles from 'pages/works/style.module.scss';
import CloseIcon from 'assets/images/close.svg';

export default function Description({ visible, title, children, href, close, name }) {
  return (
    <div className={`${styles.description} ${visible ? styles.visible : ''} `}>
      <button>
        <img src={CloseIcon} aria-label="close" alt="" onClick={() => close(name)} />
      </button>
      <h4> {title} </h4> {children}
      <a href={href} rel="noopener" target="_blank">
        View project
      </a>
    </div>
  );
}
