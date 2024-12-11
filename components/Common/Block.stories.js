import { MainButton, LinkButton, GroupButton, QuickButton, ListButton } from './Button';
import SvgIconList from '../../constants/SvgIconList';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import CommonHelper from '../../constants/CommonHelper';
import { useState, useEffect } from 'react';
import i18n from '../../locales/i18n';
import * as SvgIcons from '../../constants/SvgLocations'; // Import all SVGs
import { BlockComponent } from './BlockComponent';

export default {
    title: 'components/BlockComponent',
  };

export const BlockComponentStory = (args) => {
  const [language, setLanguage] = useState('en');
  const { theme, toggleTheme, isDarkMode } = useTheme();
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
  return (<BlockComponent {...args} />)
};
BlockComponentStory.args = {
  type: "Solid",//large/small
  labelText:'Sab Bank Account',
  lableSubText:'Unpaid Bill',
  onPress: null,
  lang: 'en',
  enableDarktheme: false,
  blockIcon:'Blockcard',
};
BlockComponentStory.argTypes = {
  backgroundColor: { control: 'color' },
  type: {
    control: 'select',
    options: ['Pattern', 'Solid'],
  },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
  labelText: {
    control: 'text',
  },
  lableSubText: {
    control: 'text',
  },
  blockIcon : {
    control: 'text',
  }

}