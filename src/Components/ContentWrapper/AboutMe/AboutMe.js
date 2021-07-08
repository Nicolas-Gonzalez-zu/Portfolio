/* eslint-disable react/no-array-index-key */
import React from 'react';
import Rating from '@material-ui/lab/Rating';
// CSS import
import { Title } from '../../../Style-Components/GeneralCSS';
import {
  Layout,
  InnerCnt,
  TechnicalSkills,
  WorkExperienceCnt,
  WorkExperienceTitle,
  WorkExperience,
  SoftSkillsCnt,
  SoftSkillsTitle,
  SoftSkills,
  DetailInfoCnt,
  DetailInfo,
  TechnicalSkillsTitle,
  TechnicalSkillsCnt,
} from '../../../Style-Components/AboutMeCSS';

const skills = [
  {
    name: 'React',
    level: 4,
  },
  {
    name: 'Javascript',
    level: 4,
  },
  {
    name: 'HTML',
    level: 4,
  },
  {
    name: 'CSS',
    level: 4,
  },

  {
    name: 'Material UI',
    level: 4,
  },
  {
    name: 'Express Js',
    level: 4,
  },
  {
    name: 'Git - GitHub',
    level: 4,
  },
  {
    name: 'Redux',
    level: 4,
  },
  {
    name: 'SQL - NoSQL',
    level: 3,
  },
  {
    name: 'Node',
    level: 3,
  },
  {
    name: 'JSON',
    level: 3,
  },
  {
    name: 'Figma',
    level: 3,
  },
  {
    name: 'Heroku',
    level: 3,
  },
  {
    name: 'Typescript',
    level: 2,
  },
];

const softSkills = [
  'Leadership',
  'Teamwork',
  'Organized',
  'Flexibility',
  'Negotiation and Conflict Resolution',
];

const AboutMe = () => {
  console.log('rendered AboutMe component');

  return (
    <Layout>
      <Title>About Me</Title>
      <DetailInfoCnt>
        <DetailInfo>
          Hi there, my name is Nicolas, I am from Uruguay and I am 20 years old. In 2021 I started
          to study in &#34;Soy Henry&#34;. There I discovered what i want to do in the future... be
          a fullstack developer. Currently my intention is to continue studying this that I like so
          much and I am searching for a job that allows me that.
        </DetailInfo>
      </DetailInfoCnt>
      <InnerCnt>
        <TechnicalSkillsCnt>
          <TechnicalSkillsTitle>Hard Skills</TechnicalSkillsTitle>
          <TechnicalSkills class="skill-container">
            {skills.map((e) => (
              <div className="skill-container">
                <p>{e.name}</p>
                <Rating style={{ color: '#f57c00' }} name="read-only" value={e.level} readOnly />
              </div>
            ))}
          </TechnicalSkills>
        </TechnicalSkillsCnt>
        {/* <WorkExperienceCnt>
          <WorkExperienceTitle>Experiencia laboral</WorkExperienceTitle>
          <WorkExperience>{}</WorkExperience>
        </WorkExperienceCnt> */}
        <SoftSkillsCnt>
          <SoftSkillsTitle>Soft skills</SoftSkillsTitle>
          <SoftSkills>
            {softSkills.map((e) => (
              <div className="skill-container">
                <p>{e}</p>
              </div>
            ))}
          </SoftSkills>
        </SoftSkillsCnt>
      </InnerCnt>
    </Layout>
  );
};

export default AboutMe;
