
import TabsComponent from './TabsComponent';
import i18n from '../../locales/i18n';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { store } from '../../redux/store/Store';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import CommonHelper from '../../constants/CommonHelper'




export default {
  title: 'components/TabsComponent',
};
let initiallanguage = store.getState().commonReducer.LanginitialValue


export const MainTab = (args) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { toggleTheme, isDarkMode } = useTheme();
  const handleChange = (newLang, setLanguage, i18n) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    CommonHelper.changeLanguage(newLang, setLanguage);
  };
  args.mainTabs = [
    { key: 0, title: t('initialLang:All') },
    { key: 1, title: t('initialLang:Mobile') },
    { key: 2, title: t('initialLang:International') },
    { key: 3, title: t('initialLang:Transfer') },
    { key: 4, title: t('initialLang:Payment') },
    { key: 5, title: t('initialLang:Beneficary') },
  ]
  args.subTabs = [
    { title: t('initialLang:All'), key: 0 },
    { title: t('initialLang:Payment'), key: 1 },
    { title: t('initialLang:Mobile'), key: 2 },
    { title: t('initialLang:Transfer'), key: 3 },
    { title: t('initialLang:International'), key: 4 },
    { title: t('initialLang:Beneficary'), key: 5 },

  ];
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

  return (<TabsComponent {...args}

  />)
}
MainTab.args = {
  type: "mainTab",
  numberOfTabs: 2,
  numOfSubTabs: 4,
  lang: 'en',
  enableDarktheme: false,

};
MainTab.argTypes = {
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
};
export const SubTab = (args) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { toggleTheme, isDarkMode } = useTheme();
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
  args.mainTabs = [
    { key: 0, title: t('initialLang:All') },
    { key: 1, title: t('initialLang:Mobile') },
    { key: 2, title: t('initialLang:International') },
    { key: 3, title: t('initialLang:Transfer') },
    { key: 4, title: t('initialLang:Payment') },
    { key: 5, title: t('initialLang:Beneficary') },
  ]
  args.subTabs = [
    { title: t('initialLang:All'), key: 0 },
    { title: t('initialLang:Payment'), key: 1 },
    { title: t('initialLang:Mobile'), key: 2 },
    { title: t('initialLang:Transfer'), key: 3 },
    { title: t('initialLang:International'), key: 4 },
    { title: t('initialLang:Beneficary'), key: 5 },
  ];

  return (<TabsComponent {...args}
  />)
}

SubTab.args = {
  type: "subTab",
  numberOfTabs: 2,
  numOfSubTabs: 4,
  lang: 'en',
  enableDarktheme: false,
};

SubTab.argTypes = {
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
};