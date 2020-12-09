import React from 'react';

import App from '../components/App';
import Head from 'components/head';
import { BrowserRouter as Router } from 'react-router-dom';
import 'assets/scss/main.scss';
import { ResponsiveProvider } from '../context';

export default () => {
  return (
    <ResponsiveProvider>
      <Head />
      <App />
    </ResponsiveProvider>
  );
};
