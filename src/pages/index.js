import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/scss/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Cleo Buck - a Javascript Web developer who loves design'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Cleo Buck - Web developer'} />
      </Helmet>
      <App />
    </>
  );
};
