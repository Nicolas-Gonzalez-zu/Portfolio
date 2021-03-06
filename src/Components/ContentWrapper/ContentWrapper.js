import React from 'react';
import { Route } from 'react-router-dom';
// Components import
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

// CSS import
import { Layout } from '../../Style-Components/ContentWrapperCSS';

const ContentWrapper = () => {
  console.log('rendered ContentWrapper component');
  return (
    <>
      <Layout>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/ContactMe">
          <ContactMe />
        </Route>
      </Layout>
    </>
  );
};

export default ContentWrapper;
