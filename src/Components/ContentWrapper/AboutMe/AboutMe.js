/* eslint-disable react/no-array-index-key */
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { useTranslation } from 'react-i18next';

// CSS import
import { Title } from '../../../Style-Components/GeneralCSS';
import {
  Layout,
  InnerCnt,
  TechnicalSkills,
  // WorkExperienceCnt,
  // WorkExperienceTitle,
  // WorkExperience,
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

const AboutMe = () => {
  const [t] = useTranslation('global');
  const softSkillsEn = [
    `${t('aboutMe.skills.leadership')}`,
    `${t('aboutMe.skills.teamwork')}`,
    `${t('aboutMe.skills.organized')}`,
    `${t('aboutMe.skills.flexibility')}`,
    `${t('aboutMe.skills.negotiation')}`,
  ];
  return (
    <Layout>
      <Title>{t('aboutMe.title')}</Title>
      <DetailInfoCnt>
        <DetailInfo>{t('aboutMe.info')}</DetailInfo>
      </DetailInfoCnt>
      <InnerCnt>
        <TechnicalSkillsCnt>
          <TechnicalSkillsTitle>{t('aboutMe.skills.hard')}</TechnicalSkillsTitle>
          <TechnicalSkills className="skill-container">
            {skills.map((e, index) => (
              <div key={`${index}skillsDiv`} className="skill-container">
                <p key={`${index}skillsP`}>{e.name}</p>
                <Rating
                  key={`${index}skillsRating`}
                  style={{ color: '#f57c00' }}
                  name="read-only"
                  value={e.level}
                  readOnly
                />
              </div>
            ))}
          </TechnicalSkills>
        </TechnicalSkillsCnt>
        {/* <WorkExperienceCnt>
          <WorkExperienceTitle>Experiencia laboral</WorkExperienceTitle>
          <WorkExperience>{}</WorkExperience>
        </WorkExperienceCnt> */}
        <SoftSkillsCnt>
          <SoftSkillsTitle>{t('aboutMe.skills.soft')}</SoftSkillsTitle>
          <SoftSkills>
            {softSkillsEn.map((e, index) => (
              <div
                key={`${index}softSkillsDiv`}
                style={{ minWidth: '100px' }}
                className="skill-container"
              >
                <p key={`${index}softSkillsP`}>{e}</p>
              </div>
            ))}
          </SoftSkills>
        </SoftSkillsCnt>
      </InnerCnt>
    </Layout>
  );
};

export default AboutMe;
