import React, { useRef, useEffect } from 'react';
import styles from 'pages/works/style.module.scss';
import CloseIcon from 'assets/images/close.svg';

export default function Description({ visible, title, children, href, setRef, onClick }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref);
  }, [visible]);

  return (
    <figcaption
      onClick={onClick}
      className={`${styles.description} ${visible ? styles.visible : ''} `}
    >
      <h4> {title} </h4> {children}
      <a
        ref={ref}
        onClick={(e) => !visible && e.preventDefault()}
        href={href}
        rel="noopener"
        target="_blank"
        className={styles.projectLink}
      >
        View project
      </a>
    </figcaption>
  );
}
