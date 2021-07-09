import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel';
import Project from './Project';
// CSS import
import { Layout } from '../../../Style-Components/ProjectsCSS';
import { Title } from '../../../Style-Components/GeneralCSS';
import economy from '../../../assets/img/economy.png';
import oldrecipes from '../../../assets/img/oldrecipes.png';

const Projects = () => {
  const [t] = useTranslation('global');
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  const ProjectsList = [
    {
      Name: 'E-Conomy',
      Github: 'https://github.com/Nicolas-Gonzalez-zu/GroupProject-Henry',
      Deploy: 'https://finance.app.yilmer.work/',
      Description: `${t('projects.economy')}`,
      img: oldrecipes,
    },
    {
      Name: 'OldRecipes',
      Github: 'https://github.com/Nicolas-Gonzalez-zu/OldRecipes-FrontEnd',
      Deploy: 'https://old-recipes-frontend.herokuapp.com/',
      Description: `${t('projects.oldrecipes')}`,
      img: economy,
    },
  ];

  return (
    <Layout>
      <Title>{t('projects.title')}</Title>
      <div style={{ paddingLeft: '2em', paddingRight: '2em' }}>
        <Carousel breakPoints={breakPoints}>
          {ProjectsList.map((p, index) => (
            <Project
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              name={p.Name}
              github={p.Github}
              deploy={p.Deploy}
              description={p.Description}
              img={p.img}
            />
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};

export default Projects;
