import React from 'react';
import Carousel from 'react-elastic-carousel';
import Project from './Project';
// CSS import
import { Layout } from '../../../Style-Components/ProjectsCSS';
import { Title } from '../../../Style-Components/GeneralCSS';
import economy from '../../../assets/img/economy.png';
import oldrecipes from '../../../assets/img/oldrecipes.png';

const ProjectsList = [
  {
    Name: 'E-Conomy',
    Github: 'https://github.com/Nicolas-Gonzalez-zu/GroupProject-Henry',
    Deploy: 'https://finance.app.yilmer.work/',
    Description: 'An app where you can orginze your finances or hire accountants to do it for you.',
    img: oldrecipes,
  },
  {
    Name: 'OldRecipes',
    Github: 'https://github.com/Nicolas-Gonzalez-zu/OldRecipes-FrontEnd',
    Deploy: 'https://old-recipes-frontend.herokuapp.com/',
    Description:
      'A recetary in the palm of your hand. In this app you can share recipies or find new recipes already published',
    img: economy,
  },
];

const Projects = () => {
  console.log('Rendered Projects component');

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  return (
    <Layout>
      <Title>Projects</Title>
      <div>
        <Carousel breakPoints={breakPoints}>
          {ProjectsList.map((p) => (
            <Project
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
