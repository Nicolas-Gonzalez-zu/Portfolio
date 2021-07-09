import React, { useEffect, useState } from 'react';

import i18next from 'i18next';

const Language = () => {
  const [storedLang, setStoredLang] = useState(false);
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
  }
  function onClickEs() {
    i18next.changeLanguage('es');
    localStorage.setItem('localLang', 'es');
  }
  return (
    <div>
      <button onClick={onClickEs} style={{ margin: '1em' }} type="button">
        ES
      </button>
      <button onClick={onClickEn} type="button">
        EN
      </button>
    </div>
  );
};

export default Language;
