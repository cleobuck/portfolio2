import React, { useState, useEffect } from 'react';
import Description from './Description';
import styles from './style.module.scss';

export default function Work({ children, focusedProject, giveFocus, data, focusOut, close }) {
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
        <Description
          visible={focusedProject[data.name]}
          title={data.title}
          href={data.href}
          close={close}
          name={data.name}
        >
          {' '}
          {children}
        </Description>
      </article>
    </>
  );
}
