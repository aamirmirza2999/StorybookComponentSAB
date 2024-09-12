import { MainButton,LinkButton,GroupButton,QuickButton,ListButton } from './Button';
import SvgIconList from '../../constants/SvgIconList';
import { useTranslation } from 'react-i18next';
import { AccountActionDark, Home } from '../../constants/SvgLocations';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import CommonHelper from '../../constants/CommonHelper';
import { useState,useEffect } from 'react';
import i18n from '../../locales/i18n';

export const MainButtonComponentStory = (args) =>{ 
  const [language, setLanguage] = useState('en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const handleChange = (newLang, setLanguage, i18n) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang); 
    CommonHelper.changeLanguage(newLang, setLanguage); 
  };
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
  
  const { t } = useTranslation();
  args.label=t('initialLang:action')
  return(<MainButton {...args} />)
};
 MainButtonComponentStory.args = {
  backgroundColor:"#db0011",
  enablePrimaryBtn:false,
  enableSecondaryBtn:true,
  type:"large",//large/small
  enableLeftIcon:false,
  enableRightIcon:false,
  disablePrimaryBtn:false,
  disableSecondaryBtn:false,
  onPress:null,
  lang:'en',
  enableDarktheme: false,
};
MainButtonComponentStory.argTypes = {
  backgroundColor: {control: 'color'},
  type: {
    control: 'select',
    options: ['large', 'small'],
  },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
}

export const LinkButtonComponentStory = (args) =>{
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const handleChange = (newLang, setLanguage, i18n) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang); 
    CommonHelper.changeLanguage(newLang, setLanguage); 
  };
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
  
  args.label=t('initialLang:linkButton')
  return( <LinkButton {...args} />)
};
  LinkButtonComponentStory.args = {
  type:"large",//large/small
  enableLeftIcon:true,
  enableRightIcon:true,
  onPress:null,
  lang:'en',
  enableDarktheme: false,
};
LinkButtonComponentStory.argTypes = {
  type: {
    control: 'select',
    options: ['large', 'small'],
    
  },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
}


export const GroupButtonComponentStory = (args) =>{
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const handleChange = (newLang, setLanguage, i18n) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang); 
    CommonHelper.changeLanguage(newLang, setLanguage); 
  };
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
  
  args.primaryLabel=t('initialLang:action')
  args.secondaryLabel=t('initialLang:action')
  args.tertiaryLabel=t('initialLang:action')
  return(<GroupButton {...args} />)
};
  GroupButtonComponentStory.args = {
  backgroundColor:"#db0011",
  buttonType:"stacked",//stacked/inline
  inlineSize:"large",
  linktype:"large",
  enableprimary:true,
  enableSecondary:false,
  enableTertiary:false,
  enableLeftIcon:true,
  enableRightIcon:true,
  onPressPrimary:null,
  onPressSecondary:null,
  onPressTertiary:null,
  disablePrimary:true,
  disableSecondary:false,
  lang:'en',
  enableDarktheme: false,
  };
GroupButtonComponentStory.argTypes = {
  backgroundColor: {control: 'color'},
  buttonType: {
    control: 'select',
    options: ['stacked', 'inline'],
  },
  linktype: {
    control: 'select',
    options: ['large', 'small'],
  },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
  inlineSize: {
    control: 'select',
    options: ['small', 'large'],
  },
}

export const QuickButtonComponentStory = (args) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const handleChange = (newLang, setLanguage, i18n) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang); 
    CommonHelper.changeLanguage(newLang, setLanguage); 
  };
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
  
  args.label=t('initialLang:action')
  args.quickActionButtonLabel=t('initialLang:action')
  return(<QuickButton {...args} />)
};
QuickButtonComponentStory.args = {
 Icon:<SvgIconList
 icon="AccountAction"
 width={24}
 height={24}
/>,
quickActionButtonType:"Vertical",//Vertical/Horizontal/Vertical-Small
badge:true,
quickNotificationCount:"2",
onPress:null,
lang:'en',
enableDarktheme: false,
};
QuickButtonComponentStory.argTypes = {
  quickActionButtonType: {
    control: 'select',
    options: ['Vertical', 'Horizontal','Vertical-Small'],
  },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
}

export const ListButtonComponentStory = (args) =>{
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const handleChange = (newLang, setLanguage, i18n) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang); 
    CommonHelper.changeLanguage(newLang, setLanguage); 
  };
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
  
  args.label=t('initialLang:action')
  args.listHeadlLine=t('initialLang:headline')
  return(<ListButton {...args} />)
};
ListButtonComponentStory.args = {
 showIcon:true,
 Icon:<SvgIconList
 icon="Home"
 width={24}
 height={24}
/>,
 listButtonType:"Big",//Big/Small/Right/Center
 listDescription:"Lorem IPsum",
 showBadge:true,
 listBadgeText:"Active",
onPress:null,
lang:'en',
enableDarktheme: false,
};
ListButtonComponentStory.argTypes = {
  listButtonType: {
    control: 'select',
    options: ['Big', 'Small','Right','Center'],
  },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
}

export default {
  title: 'components/ButtonComponent',
};
