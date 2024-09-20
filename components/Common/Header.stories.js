import MainHeader from './MainHeader';
import PostLoginHeader from './PostLoginHeader';
import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import CommonHelper from '../../constants/CommonHelper';
import { useTranslation } from 'react-i18next';
import { mockUseNavigation } from './MockNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default {
  title: 'components/HeaderComponent',
};
mockUseNavigation();

const deviceheight = Dimensions.get('window').height;

const handleChange = (newLang, setLanguage, i18n) => {
  setLanguage(newLang);
  i18n.changeLanguage(newLang); 
  CommonHelper.changeLanguage(newLang, setLanguage); 
};

export const PostLoginHeaderStory = (args) => {
  const [language, setLanguage] = useState(args.lang || 'en');
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme,isDarkMode } = useTheme();

  args.Headline = t('initialLang:headline');
  args.title = t('initialLang:PostloginHeader');

  useEffect(() => {
    CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
    if (language !== args.lang) {
      handleChange(args.lang, setLanguage, i18n);
    }
  }, [args.lang]);
  useEffect(() => {
   
    if (args.enableDarktheme !== isDarkMode) {
      toggleTheme();
    }
  }, [args.enableDarktheme, isDarkMode]);

  return (
    <NavigationContainer>
    <PostLoginHeader
      {...args}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
      //HeaderHeight={deviceheight}
      
    />
    </NavigationContainer>
  );
};

export const MainHeaderStory = (args) => {
  const [language, setLanguage] = useState(args.lang || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.AccountType = t('initialLang:Premier');

  useEffect(() => {
    CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
    if (language !== args.lang) {
      handleChange(args.lang, setLanguage, i18n);
    }
  }, [args.lang]);

  useEffect(() => {
   
    if (args.enableDarktheme !== isDarkMode) {
      console.log("THEME TRIGGERED>>>",args.enableDarktheme,isDarkMode)
      toggleTheme();
    }
  }, [args.enableDarktheme, isDarkMode]);

  return (
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
     // HeaderHeight={deviceheight}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
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
  avatarblack: true,
  avatarname: false,
  avatarnamemid:false,
  avatarnamesmall:false,
  avatarwhite:false,
  lang: 'en',
  enableDarktheme: false,
};

MainHeaderStory.argTypes = {
  bgColor: { control: 'color' },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
};

PostLoginHeaderStory.args = {
  TextColor: 'white',
  enableBackButton: true,
  enableCloseButton: false,
  LanguageSwitchReq: false,
  MenuHeader: false,
  // LinkButtonReq:false,
  HeaderTitleReq: true,
  lang: 'en',
  enableDarktheme: false,
};

PostLoginHeaderStory.argTypes = {
  textColor: { control: 'color' },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
};
