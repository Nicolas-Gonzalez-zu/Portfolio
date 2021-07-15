import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import i18next from 'i18next';

import { Layout, Button, ButtonCnt, InnerCnt, P } from '../../../Style-Components/LanguageCSS';

const Language = () => {
  const [, setStoredLang] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const store = localStorage.getItem('localLang');
    if (store) {
      setStoredLang(true);
      i18next.changeLanguage(store);
    }
  }, []);

  function onClickEn() {
    i18next.changeLanguage('en');
    localStorage.setItem('localLang', 'en');
    history.push('/aboutMe');
  }
  function onClickEs() {
    i18next.changeLanguage('es');
    localStorage.setItem('localLang', 'es');
    history.push('/aboutMe');
  }
  return (
    <Layout>
      <InnerCnt>
        <P>Select a language:</P>
        <ButtonCnt>
          <Button onClick={onClickEs} type="button">
            Español
          </Button>
          <Button onClick={onClickEn} type="button">
            English
          </Button>
        </ButtonCnt>
      </InnerCnt>
    </Layout>
  );
};

export default Language;
