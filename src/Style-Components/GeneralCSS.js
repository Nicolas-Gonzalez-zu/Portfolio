import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, *::after, *::before
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
body{
  width: 100vw;
  font-family: 'Red Hat Display', sans-serif;
  overflow-x: hidden;
}
a {
  color: inherit;
  text-decoration: inherit;
}
a:visited {
  color: inherit;
  text-decoration: inherit;
}
button{
  border: inherit;
}
button:focus{
  outline:none
}
`;

export const Layout = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

export const Title = styled.div`
  align-self: center;
  margin-top: 2em;
  margin-bottom: 2em;
  color: #fffaff;
`;
