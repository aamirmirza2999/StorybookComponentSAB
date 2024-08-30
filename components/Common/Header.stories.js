import MainHeader from './MainHeader';
import PostLoginHeader from './PostLoginHeader';
import {
    Dimensions,
    I18nManager
} from 'react-native'
import RNRestart from 'react-native-restart';
import i18n from '../../locales/i18n';
import React, { useState ,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../../redux/store/Store';
import {setlangSwitch} from '../../redux/actions/common/CommonAction'
import { useDispatch } from "react-redux";
import { useTheme } from '../../constants/Theme/ThemeProvider';

export default {
  title: 'components/HeaderComponent',
};

let initiallanguage = store.getState().commonReducer.LanginitialValue
console.log("REDUX VALUE LANG>>>>>>>>>",initiallanguage)
const deviceheight = Dimensions.get('window').height 

const changeLanguage = async (language,setlanguage) => {

  if (language === 'ar') {
    RNRestart.Restart();
    I18nManager.forceRTL(true);
  } else {
    RNRestart.Restart();
    I18nManager.forceRTL(false);
  }
  i18n.changeLanguage(language);
  await AsyncStorage.setItem('currentLang', language); // Enable Disable CR 500 International Swift Validation
  setlanguage(language);

 

//   let newLanguage =''

//   if(initiallanguage === 'en'){
//      newLanguage  = 'ar'
//   }else{
//     newLanguage = 'en'
//   }

//   console.log("NEW LANGUAGE>>>>>>>>>>>",newLanguage)

//   await AsyncStorage.setItem('currentLang', newLanguage);

//   reduxDispatch(setlangSwitch(newLanguage))

//   console.log('Language successfully set to:', newLanguage);

//   setTimeout(() => {
//     setTimeout(() => {
//         RNRestart.Restart();
//     }, 500)
// }, 1000)
  
//   await i18n.changeLanguage(newLanguage);

 
 
//    if (newLanguage === 'ar') {
//     I18nManager.forceRTL(true);
//   } else {
//     I18nManager.forceRTL(false);
//   }


 
};

export const PostLoginHeaderStory = args => {
  const [language, setlanguage] = useState('en');
  useEffect(() => {
    init();
  }, []);
  const reduxDispatch = useDispatch();
  const init = async () => {
    let lang = 'en';
    let currentLang = await AsyncStorage.getItem('currentLang');
    console.log('currentLang', currentLang);
    if (currentLang == 'ar') {
      lang = 'ar';
    }

    i18n.changeLanguage(lang);
    setlanguage(lang);
  };
  return (
    <PostLoginHeader
      {...args}
      changeLanguage={() => changeLanguage(language == 'en' ? 'ar' : 'en',setlanguage)}
      HeaderHeight={deviceheight}
    />
  );
};

export const MainHeaderStory = args => {
  const [language, setlanguage] = useState('en');
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    init();
  }, []);
  const reduxDispatch = useDispatch();
  const init = async () => {
    let lang = 'en';
    let currentLang = await AsyncStorage.getItem('currentLang');
    console.log('currentLang', currentLang);
    if (currentLang == 'ar') {
      lang = 'ar';
    }

    i18n.changeLanguage(lang);
    setlanguage(lang);
  };
  return (
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
      HeaderHeight={deviceheight}
      changeLanguage={() => changeLanguage(language == 'en' ? 'ar' : 'en',setlanguage)}
    />
  );
};

MainHeaderStory.args = {
  enableLogo: true,
  isAccountTypeReq: true,
  SearchIconReq: true,
  NotificationIconReq: true,
  AvatarIconReq: true,
  LanguageSwitchReq: true,
  AccountType: 'Premier',
  avatarblack: true,
  avatarname: false,
};
MainHeaderStory.argTypes = {
  bgColor: { control: 'color' },
};

PostLoginHeaderStory.args = {
  title: 'Primary Button',
  TextColor: 'white',
  enableBackButton: true,
  enableCloseButton: false,
  LanguageSwitchReq:false,
  MenuHeader:false,
  Headline:'Headline',
  HeaderTitleReq:true
  //enableLivechat:true
};
PostLoginHeaderStory.argTypes = {
  textColor: {control: 'color'}
}