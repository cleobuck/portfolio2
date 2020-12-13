import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

export default function Work({ children, focusedProject, giveFocus, data, focusOut }) {
  const [inFocusMode, setInFocus] = useState(false);

  const [toDiscard, setDiscard] = useState(false);

  useEffect(() => {
    setInFocus(Object.values(focusedProject).indexOf(true) !== -1);

    setDiscard(focusedProject[data.name] === false || focusedProject[data.name] === undefined);
  }, [focusedProject]);

  return (
    <>
      <article>
        <figure
          className={`${styles[data.name]} ${
            inFocusMode
              ? toDiscard
                ? styles.discard
                : data.name + '-animate'
              : styles.unfocusedMode
          } ${focusOut ? data.name + '-animate-reverse' : ''}`}
          onClick={() => giveFocus(data.name)}
        >
          <img src={data.src} alt={data.alt} />
        </figure>
        {children}
      </article>
    </>
  );
}
