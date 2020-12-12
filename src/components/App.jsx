import React, { useState, useEffect } from 'react';
import Home from '../pages/home';
import Skills from '../pages/skills';
import Works from '../pages/works';
import Contact from 'pages/contact';
import Navigation from './navigation/Navigation';
import { useResponsiveContext } from 'context';
import CustomComp from './custom-component/CustomComp';
import homeStyles from 'pages/home/style.module.scss';
import skillsStyles from 'pages/skills/style.module.scss';
import WorksStyles from 'pages/works/style.module.scss';
import ContactStyles from 'pages/contact/style.module.scss';

export default function App() {
  const { state } = useResponsiveContext();

  const { home, skills, works, contact } = state;

  return (
    <>
      <Navigation />

      <CustomComp visible={home} id={'home'} className={homeStyles.home}>
        <Home />
      </CustomComp>
      <CustomComp visible={skills} id={'skills'} className={skillsStyles.skills}>
        <Skills />
      </CustomComp>
      <CustomComp visible={works} id={'works'} className={WorksStyles.works}>
        <Works />
      </CustomComp>
      <CustomComp visible={contact} id={'contact'} className={ContactStyles.contact}>
        <Contact />
      </CustomComp>
    </>
  );
}
