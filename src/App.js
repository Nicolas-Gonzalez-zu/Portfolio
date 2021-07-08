import { HashRouter, Route } from 'react-router-dom';
// Components import
// import Landing from './Components/Landing';
import SideBar from './Components/SideBar/SideBar';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';

// Global Style import
import GlobalStyle, { Layout } from './Style-Components/GeneralCSS';

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        {/* <Landing /> */}
        <Route path="/">
          <Layout>
            <SideBar />
            <ContentWrapper />
          </Layout>
        </Route>
      </HashRouter>
    </>
  );
}

export default App;
