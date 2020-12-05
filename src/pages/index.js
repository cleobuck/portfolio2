import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';

import 'assets/scss/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Cleo Buck - a Javascript Web developer who loves design'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Cleo Buck - Web developer'} />
      </Helmet>
      <App />
    </>
  );
};
