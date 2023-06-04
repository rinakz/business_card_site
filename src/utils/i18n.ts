import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    resources: {
      ...require('./en.json'),
      ...require('./ru.json'),
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;