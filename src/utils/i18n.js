import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    ns:["Home","Common","About","Form","CustomerSupport","Health","Branches","Footer"],
    defaultNS: 'Home',
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // مسار ملفات الترجمة
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    debug: true, // <<<<<< ضيف دي
  });

  export default i18n;