
import i18n from '../../locales/i18n';
import { useTranslation } from 'react-i18next';
import React, { useState ,useEffect} from 'react';
import { store } from '../../redux/store/Store';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import CommonHelper from '../../constants/CommonHelper'
import BudgetCard from './BudgetCard';
import { I18nManager } from 'react-native';



export default {
  title: 'components/Sab360BudgetCard',
};
let initiallanguage = store.getState().commonReducer.LanginitialValue


export const BudgetCardComponentStory =(args) =>{ 
     const [fillPercentage, setFillPercentage] = useState(parseInt(args.BudgetCardTypePiechart));
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(args.language || 'en');
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

    return <BudgetCard
    changeTheme={toggleTheme}
    changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    {...args} />;
};
BudgetCardComponentStory.args = {
    Month: "This Month",
    BudgetCardDaystogo: true,
    Daystogo: "7 days to go",
    chipsInfoState: "Info",
    chipsInfoShowIcon: true,
    BudgetCardstatusType:"On Track",
    onTrack:"On Track",
    Overspent:"Overspent",
    Becareful:"Be careful",
    chipsInfoSize:"small",
    BudgetCardTypePiechart:"85%",
    language: I18nManager.isRTL ? 'ar' : 'en',
    colorStyles: "LightMode",
  
  }

  BudgetCardComponentStory.argTypes = {
    chipsInfoState: { control: 'select', options: ['Error', 'Warning', 'Info', 'Neutral','Success'] },
    BudgetCardstatusType: { control: 'select', options: ['On Track', 'Overspent', 'Be careful'] },
    BudgetCardTypePiechart: { control: 'select', options: ['25%', '50%', '75%','85%','95%','100%'] },

    language: {
      control: 'select',
      options: ['en', 'ar'],
    },
    colorStyles: {
      control: 'select',
      options: ['LightMode', 'DarkMode'],
    },
    chipsInfoSize: {
      control: 'select',
      options: ['large', 'small'],
  
    },
  };


