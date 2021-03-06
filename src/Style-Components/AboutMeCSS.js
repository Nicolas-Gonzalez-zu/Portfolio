import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  color: #fffaff;
  background: rgba(48, 48, 54);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding-left: 4em;
  padding-right: 4em;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const DetailInfoCnt = styled.div`
  margin-bottom: 5em;
`;

export const DetailInfo = styled.p`
  font-family: Poppins, sans-serif;
`;

export const InnerCnt = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;

  width: 100%;
`;

export const TechnicalSkillsCnt = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TechnicalSkills = styled.div`
  overflow: auto;
  display: block;
  height: 18em;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #30bced;
  }
  &::-webkit-scrollbar-track {
    background: #1d1d21;
  }
`;

export const TechnicalSkillsTitle = styled.p`
  align-self: center;
`;

export const WorkExperienceCnt = styled(TechnicalSkillsCnt)``;

export const WorkExperienceTitle = styled(TechnicalSkillsTitle)``;

export const WorkExperience = styled.div`
  overflow: auto;
  display: block;
  flex: 1;
`;

export const SoftSkillsCnt = styled(TechnicalSkillsCnt)`
  flex: 1;
`;

export const SoftSkillsTitle = styled(TechnicalSkillsTitle)``;

export const SoftSkills = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;
