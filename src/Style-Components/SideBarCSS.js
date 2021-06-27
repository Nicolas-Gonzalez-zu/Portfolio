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
`;

export const Me = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.p`
  color: #fffaff;
`;
export const Title = styled(Link)`
  color: #fffaff !important;
  font-size: 2em;
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
`;

export const Li = styled.li``;

export const LinkStyled = styled(Link)``;

export const Footer = styled.div`
  color: #fffaff;
  align-content: flex-end;
`;

export const TextFooter = styled.p``;
