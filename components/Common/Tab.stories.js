
import TabsComponent from './TabsComponent';
import i18n from '../../locales/i18n';
import { useTranslation } from 'react-i18next';
import React, { useState ,useEffect} from 'react';
import { store } from '../../redux/store/Store';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import CommonHelper from '../../constants/CommonHelper'




export default {
  title: 'components/TabsComponent',
};
let initiallanguage = store.getState().commonReducer.LanginitialValue


export const MainTab =(args) =>{ 
  const { t } = useTranslation();
  const [language, setlanguage] = useState('en');
  const { theme, toggleTheme } = useTheme();
  args.mainTabs = [
  {key: 0, title:t('initialLang:All')},
  {key: 1, title: t('initialLang:Mobile')},
  {key: 2, title: t('initialLang:International')},
  {key: 3, title: t('initialLang:Transfer')},
  {key: 4, title: t('initialLang:Payment')},
  {key: 5, title:t('initialLang:Beneficary')},
]
  args.subTabs = [
  {title: t('initialLang:All'), key: 0},
  {title: t('initialLang:Payment'), key: 1},
  {title: t('initialLang:Mobile'), key: 2},
  {title: t('initialLang:Transfer'), key: 3},
  {title: t('initialLang:International'), key: 4},
  {title: t('initialLang:Beneficary'), key: 5},
  // Add more sub-tabs here if needed
];
useEffect(() => {
  CommonHelper.initLanguage(setlanguage);
}, []);

  return(<TabsComponent {...args}
    changeTheme={toggleTheme}
    changeLanguage={() => CommonHelper.changeLanguage(language == 'en' ? 'ar' : 'en',setlanguage)}
     />)}
MainTab.args = {
  type:"mainTab",
  numberOfTabs: 2,
  numOfSubTabs: 4,
  //mainTabs:mainTabs,
  // subTabs:subTabs,
};

export const SubTab =(args) => {
  const { t } = useTranslation();
  const [language, setlanguage] = useState('en');
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    CommonHelper.initLanguage(setlanguage);
  }, []);

  args.mainTabs = [
  {key: 0, title:t('initialLang:All')},
  {key: 1, title: t('initialLang:Mobile')},
  {key: 2, title: t('initialLang:International')},
  {key: 3, title: t('initialLang:Transfer')},
  {key: 4, title: t('initialLang:Payment')},
  {key: 5, title:t('initialLang:Beneficary')},
]
  args.subTabs = [
  {title: t('initialLang:All'), key: 0},
  {title: t('initialLang:Payment'), key: 1},
  {title: t('initialLang:Mobile'), key: 2},
  {title: t('initialLang:Transfer'), key: 3},
  {title: t('initialLang:International'), key: 4},
  {title: t('initialLang:Beneficary'), key: 5},
];
 
  return(<TabsComponent {...args} 
    changeTheme={toggleTheme}
    changeLanguage={() => CommonHelper.changeLanguage(language == 'en' ? 'ar' : 'en',setlanguage)}
  />)}

SubTab.args = {
  type:"subTab",
  numberOfTabs: 2,
  numOfSubTabs: 4,
};