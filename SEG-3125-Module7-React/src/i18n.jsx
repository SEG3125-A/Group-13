// Code used from https://medium.com/@devpedrodias/how-to-use-i18n-in-your-react-app-1f26deb2a3d8
// and https://dev.to/franklin030601/building-a-multi-language-app-with-react-js-2och
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import Languages
import enJSON from './locales/en.json' // English
import frJSON from './locales/fr.json' // French

i18n.use(initReactI18next)
    .init({
        resources: {
            en: { ...enJSON },
            fr: { ...frJSON },
        },
        lng: "en", // Set the initial language of the App
        fallbackLng: "en", // Fallback language for missing translations
});

export default i18n;