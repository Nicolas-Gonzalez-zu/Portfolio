import React from 'react';

import img from '../../assets/img/me.png';

import {
  Layout,
  Name,
  Img,
  Ol,
  Li,
  Footer,
  LinkStyled,
  TextFooter,
  Title,
  Span,
  Me,
} from '../../Style-Components/SideBarCSS';

const SideBar = () => {
  console.log('Rendered SideBar component');
  return (
    <Layout>
      <Title to="/">
        <Span>&#60;</Span> Portfolio <Span>/&#62;</Span>
      </Title>
      <Me>
        <Img alt="imgProfile" src={img} />
        <Name>Nicolás González Sanabria</Name>
      </Me>
      <Ol>
        <Li>
          <LinkStyled to="/aboutMe">About me</LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="/projects">Projects</LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="/ContactMe">Contact me</LinkStyled>
        </Li>
      </Ol>
      <Footer>
        <hr />
        <TextFooter>Last update: 14/06/2021</TextFooter>
      </Footer>
    </Layout>
  );
};

export default SideBar;
