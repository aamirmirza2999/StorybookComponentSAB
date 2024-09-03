import CardsComponent from './CardsComponent';
import CommonHelper from '../../constants/CommonHelper';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';

export default {
    title: 'components/CardComponent',
  };

  const deviceheight = Dimensions.get('window').height;

export const CardsComponentStory = (args) => {
    const [language, setLanguage] = useState(args.lang || 'en');
  const { t, i18n } = useTranslation();
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

  return (
    <CardsComponent
      {...args}
      HeaderHeight={deviceheight}
    />
  );

};

CardsComponentStory.args = {
  CardImage:require("../../assets/cardColorDarkBlue.png"),
  CardName:"SAB Signature Visa Credit Card",
  chipsinfo:true,
  isFinanceProduct:false,
  isAccount:false,
  isCards:true,
  Balance:"84,900.00",
  statusBgColor:"#f9f2f3",
  statusborderColor:"#e5b2b5",
  CardStatus:"Active",
  CardNumber:"4272-2201-0114-9091",
  currency:"SAR",
  AvailableLimit:"81,986.90",
  CreditLimit:"84,900.00",
  progress:"0.8",
  lang: 'en',
  enableDarktheme: false,
};

CardsComponentStory.argTypes = {
    lang: {
      control: 'select',
      options: ['en', 'ar'],
    },
    enableDarktheme: {
      control: 'boolean',
    },
  };