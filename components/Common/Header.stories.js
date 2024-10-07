import MainHeader from './MainHeader';
import { Dimensions,I18nManager } from 'react-native';
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

//Level 0------------------------------------------------------
export const HeaderLevelOStory = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.AccountType = t('initialLang:Premier');

  useEffect(() => {
  CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
  if (language !== args.language) {
  handleChange(args.language, setLanguage, i18n);
  }
  }, [args.language]);

  useEffect(() => {
    const headerthemedark = args.colorStyles !== 'LightMode'; 
    if (headerthemedark !== isDarkMode) {
      console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]); 


  return (
    <NavigationContainer>
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
      NotificationCount={"2"}
      SupportIcon={'BlackClose'}
     // HeaderHeight={deviceheight}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
    </NavigationContainer>
  );
};

HeaderLevelOStory.args = {
  
  
  type:'level0',
   language: I18nManager.isRTL ? 'ar' : 'en',
  state:'postlogin',
  SupportedIcon:false,
  LanguageIcon: true,
  showbadge:true,
  avatarType:"Filled",
  avatarElements:"Icons",
  avatarSize:"Small",
  avatarinitial:"JM",
  colorStyles:"LightMode",
  
};

HeaderLevelOStory.argTypes = {

  //Common:

  type:{ control: 'select', options: ['level0', 'level1', 'level1-menu','level1-foryou','level2','search'] },
  
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },

  state:{control:'select',options:['postlogin','prelogin']},
  
     LanguageIcon:{
      control: 'boolean',
      // if:{arg:'type',eq:'level0'},
      // if:{arg:'state',eq:'prelogin'}
    },
    
  showbadge: {
    control: 'boolean',
   // if: { arg: 'type', eq: 'level0' },
  },
  avatarType:{
    control: 'select',
    options: ['Filled', 'Outline'],
    // if: { arg: 'type', eq: 'level0' },
    // if: { arg: 'type', eq: 'level1-menu' },
  },
  avatarElements:{
    control: 'select',
    options: ['Initials', 'Icons'],
    // if: { arg: 'type', eq: 'level0' },
    // if: { arg: 'type', eq: 'level1-menu' },
  },
  avatarSize:{
    control: 'select',
    options: ['Small', 'Medium',"Large"],
    // if: { arg: 'type', eq: 'level0' },
    // if: { arg: 'type', eq: 'level1-menu' },
  },
  avatarinitial:{
    control:'text',
    // if: { arg: 'type', eq: 'level0' },
    // if: { arg: 'type', eq: 'level1-menu' },
    // if: { arg: 'avatarElements', eq: 'Initials' },
    
  },

  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
 
};


//Level1-------------------------------------------------------------

export const HeaderLevel1Story = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.AccountType = t('initialLang:Premier');

  useEffect(() => {
  CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
  if (language !== args.language) {
  handleChange(args.language, setLanguage, i18n);
  }
  }, [args.language]);

  useEffect(() => {
    const headerthemedark = args.colorStyles !== 'LightMode'; 
    if (headerthemedark !== isDarkMode) {
      console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]); 


  return (
    <NavigationContainer>
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
      HeadlineText={t('initialLang:Headline')}
      Headline={true}
      SupportIcon={'BlackClose'}
     // HeaderHeight={deviceheight}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
    </NavigationContainer>
  );
};

HeaderLevel1Story.args = {

  type:'level1',
   language: I18nManager.isRTL ? 'ar' : 'en',
  state:'postlogin',
  SupportedIcon:false,
  back:true,
  showLinkButton:true,
  linkButtonsize:'small',
  link:"Link Button",
  IconLeft:false,
  IconRight:true,
  colorStyles:"LightMode",
  
};

HeaderLevel1Story.argTypes = {
  
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
   back:{
    control:'boolean'
   },
   showLinkButton:{
    control:'boolean'
   },
   linkButtonsize:{
    control:'select',
    options: ['small', 'large'],
   },
   link:{
    control:'text',
   },
  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
 
};


//Level1-Menu---------------------------------------------------------

export const HeaderLevel1MenuStory = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.AccountType = t('initialLang:Premier');

  useEffect(() => {
  CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
  if (language !== args.language) {
  handleChange(args.language, setLanguage, i18n);
  }
  }, [args.language]);

  useEffect(() => {
    const headerthemedark = args.colorStyles !== 'LightMode'; 
    if (headerthemedark !== isDarkMode) {
      console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]); 


  return (
    <NavigationContainer>
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
      HeadlineText={t('initialLang:Headline')}
     // HeaderHeight={deviceheight}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
    </NavigationContainer>
  );
};

HeaderLevel1MenuStory.args = {

  type:'level1-menu',
   language: I18nManager.isRTL ? 'ar' : 'en',
  state:'postlogin',
  Headline:true,
  avatarType:"Filled",
  avatarElements:"Icons",
  avatarSize:"Small",
  avatarinitial:"JM",
  colorStyles:"LightMode",
  
};

HeaderLevel1MenuStory.argTypes = {
  
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  Headline:{
    control:'boolean'
   },
    avatarType:{
    control: 'select',
    options: ['Filled', 'Outline'],
    // if: { arg: 'type', eq: 'level0' },
    // if: { arg: 'type', eq: 'level1-menu' },
  },
  avatarElements:{
    control: 'select',
    options: ['Initials', 'Icons'],
    // if: { arg: 'type', eq: 'level0' },
    // if: { arg: 'type', eq: 'level1-menu' },
  },
  avatarSize:{
    control: 'select',
    options: ['Small', 'Medium',"Large"],
    // if: { arg: 'type', eq: 'level0' },
    // if: { arg: 'type', eq: 'level1-menu' },
  },
  avatarinitial:{
    control:'text',
    // if: { arg: 'type', eq: 'level0' },
    // if: { arg: 'type', eq: 'level1-menu' },
    // if: { arg: 'avatarElements', eq: 'Initials' },
    
  },
  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
 
};


//Level1-For You-----------------------------------------------------------

export const HeaderLevel1ForyouStory = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.AccountType = t('initialLang:Premier');

  useEffect(() => {
  CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
  if (language !== args.language) {
  handleChange(args.language, setLanguage, i18n);
  }
  }, [args.language]);

  useEffect(() => {
    const headerthemedark = args.colorStyles !== 'LightMode'; 
    if (headerthemedark !== isDarkMode) {
      console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]); 


  return (
    <NavigationContainer>
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
      Headline={true}
      HeadlineText={t('initialLang:foryou')}
      SupportIcon={'BlackClose'}
     // HeaderHeight={deviceheight}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
    </NavigationContainer>
  );
};

HeaderLevel1ForyouStory.args = {

  type:'level1-foryou',
   language: I18nManager.isRTL ? 'ar' : 'en',
  state:'postlogin',
  SupportedIcon:false,
  back:true,
  Search:true,
  colorStyles:"LightMode",
  
};

HeaderLevel1ForyouStory.argTypes = {
  
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  back:{
    control:'boolean'
   },
   Search:{
    control:'boolean'
   },
  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
 
};


//Level2----------------------------------------------------------------------
export const HeaderLevel2Story = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.AccountType = t('initialLang:Premier');

  useEffect(() => {
  CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
  if (language !== args.language) {
  handleChange(args.language, setLanguage, i18n);
  }
  }, [args.language]);

  useEffect(() => {
    const headerthemedark = args.colorStyles !== 'LightMode'; 
    if (headerthemedark !== isDarkMode) {
      console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]); 


  return (
    <NavigationContainer>
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
      SupportIcon={'BlackClose'}
     // HeaderHeight={deviceheight}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
    </NavigationContainer>
  );
};

HeaderLevel2Story.args = {

  type:'level2',
   language: I18nManager.isRTL ? 'ar' : 'en',
  state:'postlogin',
  CloseIcon:true,
  SupportedIcon:false,
  back:true,
  Headline:true,
  HeadlineText:'Headline',
  colorStyles:"LightMode",
  
};

HeaderLevel2Story.argTypes = {
  
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  CloseIcon:{
    control:'boolean'
   },
  back:{
    control:'boolean'
   },
   Headline:{
    control:'boolean'
   },
   HeadlineText:{
    control:'text'
   },
  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
 
};


//Search -----------------------------------------------------------------------

export const HeaderSearchStory = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.AccountType = t('initialLang:Premier');

  useEffect(() => {
  CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
  if (language !== args.language) {
  handleChange(args.language, setLanguage, i18n);
  }
  }, [args.language]);

  useEffect(() => {
    const headerthemedark = args.colorStyles !== 'LightMode'; 
    if (headerthemedark !== isDarkMode) {
      console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]); 


  return (
    <NavigationContainer>
    <MainHeader
      {...args}
      changeTheme={toggleTheme}
      back={true}
      Headline={true}
      //HeadlineText={'Headline'}
     // HeaderHeight={deviceheight}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
    </NavigationContainer>
  );
};

HeaderSearchStory.args = {

  type:'search',
   language: I18nManager.isRTL ? 'ar' : 'en',
  state:'postlogin',
  colorStyles:"LightMode",
  
};

HeaderSearchStory.argTypes = {
  
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
 
  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
 
};