import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  justify-content: space-between;

  background-color: #303036;
  box-shadow: 5px -5px 15px rgba(0, 0, 0, 0.25);

  padding-top: 4em;
  padding-bottom: 4em;
  width: 25vw;
  height: 100vh;

  font-size: 1vw;
  z-index: 1;
  min-width: 11.875rem;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    flex: 1;
    width: 100vw;
    padding: 0 6em 0 6em;
  }
`;

export const Me = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Name = styled.p`
  color: #fffaff;
  font-size: 1.5em;
  align-self: center;
  justify-self: center;
  @media (min-width: 1047px) {
    font-size: 1em;
  } ;
`;
export const Title = styled(Link)`
  color: #fffaff !important;
  font-size: 3em;
  @media (min-width: 1047px) {
    font-size: 2em;
  } ;
`;
export const Span = styled.span`
  color: #fc5130;
  font-size: 0.9em;
  font-weight: bolder;
`;

export const Img = styled.img`
  width: 90%;
  height: auto;
  padding-bottom: 1em;

  border-radius: 60em;
`;

export const Ol = styled.ol`
  list-style-type: none;
  color: #fffaff;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 50em;
    justify-content: space-around;
  }
`;

export const Li = styled.li`
  font-size: 1.5em;
  @media (min-width: 1047px) {
    font-size: 1em;
  } ;
`;

export const LinkStyled = styled(Link)``;

export const Footer = styled.div`
  color: #fffaff;
  align-content: flex-end;
  font-size: 1.5em;
  @media (min-width: 1047px) {
    font-size: 1em;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextFooter = styled.p``;
