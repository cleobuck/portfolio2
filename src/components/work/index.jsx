import React, { useState, useEffect } from 'react';
import Description from './Description';
import styles from 'pages/works/style.module.scss';

export default function Work({ children, giveFocus, noneFocused, data, focusOut, close }) {
  return (
    <>
      <figure
        className={`${styles[data.name]} ${
          !noneFocused
            ? !data.focused
              ? styles.discard
              : data.name + '-animate'
            : styles.unfocusedMode
        } ${focusOut ? data.name + '-animate-reverse' : ''}`}
      >
        <data.src />
        <Description
          visible={data.focused}
          title={data.alt}
          href={data.href}
          close={close}
          name={data.name}
          onClick={() => giveFocus(data.focused ? false : data.name)}
        >
          {' '}
          {children}
        </Description>
      </figure>
    </>
  );
}
