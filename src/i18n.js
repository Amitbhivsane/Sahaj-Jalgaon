import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../public/locales/en/translation.json";
import hiTranslation from "../public/locales/hi/translation.json";
import maTranslation from "../public/locales/ma/translation.json";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const availableLanguages = ["en", "hi", "ma"];
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const option = {
  order: ["navigator", "htmlTag", "path", "link"],
};
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    whitelist: availableLanguages,
    detection: option,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

/////////////////////////
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import userData from "./data/userData"; // Import user data

// // Import text translations
// import enTranslation from "../public/locales/en/translation.json";
// import hiTranslation from "../public/locales/hi/translation.json";
// import maTranslation from "../public/locales/ma/translation.json";

// // Get saved language or default to English
// const savedLanguage = localStorage.getItem("i18nextLng") || "en";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: { ...enTranslation, details: userData.en } },
//       hi: { translation: { ...hiTranslation, details: userData.hi } },
//       ma: { translation: { ...maTranslation, details: userData.ma } },
//     },
//     lng: savedLanguage,
//     fallbackLng: "en",
//     interpolation: { escapeValue: false },
//     detection: {
//       order: ["localStorage", "navigator"],
//       caches: ["localStorage"],
//     },
//   });

// export default i18n;
