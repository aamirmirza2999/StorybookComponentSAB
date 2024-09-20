import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {BlockBanner,BlockGeneric,BlockGenericTxtChange} from './Blocks'
import { useTheme } from '../../constants/Theme/ThemeProvider';
import i18n from '../../locales/i18n';
import CommonHelper from '../../constants/CommonHelper';
import SvgIconList from '../../constants/SvgIconList';


export default {
    title: 'components/MenuComponent',
  };

  export const MenuComponentStory =(args) =>{
    
  }
  
  MenuComponentStory.args={
    
  }

  

  export const BlockBnner = (args) => {
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
  
  args.BlockcardText=t('initialLang:BlockcardText')
  args.LinkButton=t('initialLang:LinkButton')
    return (
      <BlockBanner {...args}/>
    )
  }
  BlockBnner.args={
    BlackCardIcon:<SvgIconList
    icon="BlockCard"
    width={24}
    height={24}
   />,
   Whitecard:<SvgIconList
    icon="Whitecard"
    width={24}
    height={24}
   />,
  //  showIcon:true,
   lang:'en',
   enableDarktheme: false,
  }

  BlockBnner.argTypes = {
    lang: {
      control: 'select',
      options: ['en', 'ar'],
    },
    enableDarktheme: {
      control: 'boolean',
    },
  }

  export const BlockBox =(args) =>{
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
    
    args.SolidText=t('initialLang:SolidText')
    args.PattrenText=t('initialLang:PattrenText')
    return (
      <BlockGeneric {...args}/>
    )
  }

  BlockBox.args={ 
    Blockgenericred:<SvgIconList
    icon="Blockgenericred"BlackRightarrow
    width={24}
    height={24}
   />,
   BlackRightarrow:<SvgIconList
    icon="BlackRightarrow"
    width={24}
    height={24}
   />,
   Whitebox: <SvgIconList
   icon="Lightmyacounts"
   width={24}
   height={24}
   />,
   WhiteArrow: <SvgIconList
   icon="Lightright"
   width={24}
   height={24}
   />,
    //  showIcon:true,
    BlockBoxType:"Solid",
    lang:'en',
    enableDarktheme: false,
  }

  BlockBox.argTypes = {
    BlockBoxType: {
      control: 'select',
      options: ['Solid', 'Pattren'],
    },
    lang: {
      control: 'select',
      options: ['en', 'ar'],
    },
    enableDarktheme: {
      control: 'boolean',
    },
  }



