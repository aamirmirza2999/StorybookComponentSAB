import MainHeader from './MainHeader';
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


export const MainHeaderStory = (args) => {
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
     // HeaderHeight={deviceheight}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
    </NavigationContainer>
  );
};

MainHeaderStory.args = {
  
  //Common:

  type:'level0',
  language: 'en',
  state:'postlogin',

  // Level 0 -------------------------------

    //Prelogin:
    LanguageIcon: true,



  //PostLogin:

  
  // Notificationsize:'big',
  showbadge:true,
  NotificationCount:"2",
  avatarType:"Filled",
  avatarElements:"Icons",
  avatarSize:"Small",
  avatarinitial:"JM",

  // Level 1 ---------------------------------
    back:true,
    showLinkButton:true,
    HeadlineText:'Headline',
    linkButtonsize:'small',
    link:"Link Button",
    IconLeft:false,
    IconRight:true,
    Search:true,

    //Level 2--------------------------------------
    Headline:true,
    CloseIcon:true,
  //Common:

  colorStyles:"LightMode",
  
};

MainHeaderStory.argTypes = {

  //Common:

  type:{ control: 'select', options: ['level0', 'level1', 'level1-menu','level1-foryou','level2','search'] },
  
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },

  state:{control:'select',options:['postlogin','prelogin']},
  
    // Level 0 -------------------------------------------------------------------------

     //Prelogin:
     LanguageIcon:{
      control: 'boolean',
      // if:{arg:'type',eq:'level0'},
      // if:{arg:'state',eq:'prelogin'}
    },

    //PostLogin:

    
  // Notificationsize: {
  //   control: 'select',
  //   options: ['big', 'small'],
  //   if: { arg: 'type', eq: 'level0' }, 
  // },

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

   // Level 1 -------------------------------------------------------------------------

   back:{
    control:'boolean'
   },
   showLinkButton:{
    control:'boolean'
   },
   HeadlineText:{
    control:'text'
   },
   linkButtonsize:{
    control:'select',
    options: ['small', 'large'],
   },
   link:{
    control:'text',
   },
   Search:{
    control:'boolean'
   },

   //level 2 ----------------------------------------------------------------------
   Headline:{
    control:'boolean'
   },
   CloseIcon:{
    control:'boolean'
   },

 //Common:

  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
 
};

