import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          "Email or Phone": "Email or Phone",
          "Enter Password": "Password",
          "Sign In": "Sign In",
          "Signing In": "Signing In..",
          "Forgot your password?": "Forgot your password?",
          "Create an account": "Create an account",
          "Select language": "Select language"
          // "Get Help": "Help",
          // "Get Privacy": "Privacy",
          // "Get Terms": "Terms"
        }
      },
      de: {
        translations: {
          "Email or Phone": "E-Mail oder Telefon",
          "Enter Password": "Passwort",
          "Sign In": "Anmelden",
          "Signing In": "Anmelden..",
          "Forgot your password?": "Passwort vergessen?",
          "Create an account": "Erstellen Sie ein Konto",
          "Select language": "Sprache auswählen"
          // "Get Help": "Hilfe",
          // "Get Privacy": "Privatsphäre",
          // "Get Terms": "Bedingungen"
        }
      },
      fr: {
        translations: {
          "Email or Phone": "Courriel ou téléphone",
          "Enter Password": "Mot de passe",
          "Sign In": "Connexion",
          "Signing In": "Connexion..",
          "Forgot your password?": "Vous avez oublié votre mot de passe?",
          "Create an account": "Créer un compte",
          "Select language": "Choisir la langue"
          // "Get Help": "Aider",
          // "Get Privacy": "Intimité",
          // "Get Terms": "Termes"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
