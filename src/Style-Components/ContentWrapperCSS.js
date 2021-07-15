import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10;
  justify-content: center;
  align-items: center;

  background-color: #30bced;
  padding: 4em;
  width: 25vw;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 80vh;
    margin: 0;
  }
`;

export const P = styled.p``;
