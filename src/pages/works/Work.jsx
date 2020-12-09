import React from 'react';
import Tilt from 'react-tilt';

export default function Work() {
  return (
    <Tilt
      options={{
        reverse: false,
        max: 8,
        perspective: 1000,
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
      }}
    ></Tilt>
  );
}
