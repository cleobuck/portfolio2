import React, { useState, useEffect, useRef } from 'react';
import Description from './Description';
import styles from 'pages/works/style.module.scss';

export default function Work({ children, giveFocus, noneFocused, data }) {
  const [isFocusingOut, FocusOut] = useState();
  const [ref, setRef] = useState();

  const setClickException = (ref) => {
    setRef(ref);
  };

  const unFocusAll = () => {
    giveFocus(false);
    FocusOut(true);
  };

  const toggleFocus = () => {
    if (data.focused) {
      unFocusAll();
    } else {
      giveFocus(data.name);
    }
  };

  useEffect(() => {
    // resets reverse animation so it will work again when triggered
    setTimeout(() => FocusOut(false), 2000);
  }, [data.focused]);

  return (
    <>
      <figure
        className={`${styles[data.name]} ${
          !noneFocused
            ? !data.focused
              ? styles.discard
              : data.name + '-animate'
            : styles.unfocusedMode
        } ${isFocusingOut ? data.name + '-animate-reverse' : ''}`}
      >
        <data.src />
        <Description
          visible={data.focused}
          title={data.alt}
          href={data.href}
          onClick={toggleFocus}
          setRef={setClickException}
        >
          {' '}
          {children}
        </Description>
      </figure>
    </>
  );
}
