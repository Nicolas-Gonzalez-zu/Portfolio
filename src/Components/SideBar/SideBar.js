import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const [t] = useTranslation('global');
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
          <LinkStyled to="aboutMe">{t('nav.about')}</LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="projects">{t('nav.projects')}</LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="ContactMe">{t('nav.contact')}</LinkStyled>
        </Li>
      </Ol>
      <Footer>
        <hr />
        <TextFooter>This portfolio is under construction</TextFooter>
      </Footer>
    </Layout>
  );
};

export default SideBar;
