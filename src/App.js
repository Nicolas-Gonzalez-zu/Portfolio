import { HashRouter, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
// Components import
import SideBar from './Components/SideBar/SideBar';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';

// Global Style import
import GlobalStyle, { Layout } from './Style-Components/GeneralCSS';
import globales from './translations/es/global.json';
import globalen from './translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: globales,
    },
    en: {
      global: globalen,
    },
  },
});

function App() {
  return (
    <>
      <I18nextProvider i18n={i18next}>
        <GlobalStyle />
        <HashRouter>
          <Route path="/">
            <Layout>
              <SideBar />
              <ContentWrapper />
            </Layout>
          </Route>
        </HashRouter>
      </I18nextProvider>
    </>
  );
}

export default App;
