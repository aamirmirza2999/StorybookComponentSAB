import { I18nManager } from "react-native";
import RNRestart from 'react-native-restart';
import i18n from "../locales/i18n";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CommonHelper = {
  changeLanguage: async (language,setlanguage) => {
    
    if (language === 'ar') {
      RNRestart.Restart();
      I18nManager.forceRTL(true);
    } else {
      RNRestart.Restart();
      I18nManager.forceRTL(false);
    }
    i18n.changeLanguage(language);
    await AsyncStorage.setItem('currentLang', language);
    setlanguage(language);
  },

  initLanguage: async (setlanguage) => {
    let lang='en'
    let currentLang = await AsyncStorage.getItem('currentLang') ;
    if(currentLang == 'ar'){
      lang = 'ar'
    }
    i18n.changeLanguage(lang);
    setlanguage(lang)
  }
};

export default CommonHelper;

