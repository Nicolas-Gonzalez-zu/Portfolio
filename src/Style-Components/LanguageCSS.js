import styled from 'styled-components';

export const P = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  flex: 1;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #30bced;
`;

export const InnerCnt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
`;

export const Button = styled.button`
  color: white;
  background: #303036;
  width: 10em;
  height: 5em;
  margin: 5em;
`;

export const ButtonCnt = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
