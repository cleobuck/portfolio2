import React from 'react';

import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Cleo Buck - a Javascript Web developer who loves design'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Cleo Buck - Web developer'} />
        <meta http-equiv="Cache-control" content="public"></meta>
      </Helmet>
    </>
  );
};

export default Head;
