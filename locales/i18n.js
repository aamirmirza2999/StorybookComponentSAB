import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intital_ar from "../locales/ar/intital_ar.json";
import intital_en from "../locales/en/intital_en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      initialLang: intital_en,
      
    },
    ar: {
      initialLang: intital_ar,
    },
  },

  fallbackLng: "en",
  ns: [
    "initialLang",
  ],
  defaultNS: "common",
  fallbackNS: ["common"],
  debug: process.env.NODE_ENV !== "production",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    useSuspense: false,
    wait: false,
  },
});
export default i18n;
