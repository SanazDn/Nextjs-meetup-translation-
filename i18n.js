import i18n from "i18next";
//import { reactI18nextModule } from "react-i18next";

import { initReactI18next } from 'react-i18next';

import translationEN from './public/locales/en/common.json';
import translationFR from './public/locales/fr/common.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //defaultNS: 'common',
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;