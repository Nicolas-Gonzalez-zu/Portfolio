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
        <Route exact path="/aboutMe">
          <AboutMe />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/ContactMe">
          <ContactMe />
        </Route>
      </Layout>
    </>
  );
};

export default ContentWrapper;
