import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

export function itemLanguage(language: string) {
    i18next
    .use(initReactI18next) 
    .init({
        lng: language,
        resources: require(`./${language}.json`)
    });
}


