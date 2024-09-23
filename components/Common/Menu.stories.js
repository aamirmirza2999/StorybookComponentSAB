import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {BlockBanner,BlockGeneric,BlockGenericTxtChange} from './Blocks'
import { useTheme } from '../../constants/Theme/ThemeProvider';
import i18n from '../../locales/i18n';
import CommonHelper from '../../constants/CommonHelper';
import SvgIconList from '../../constants/SvgIconList';

import NewListComponent from './NewListComponent';
import TextDivider from './TextDivider';
import CommonHelper from '../../constants/CommonHelper';
import i18n from '../../locales/i18n';
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



  

  export const NewListComponentStory = (args) => {
    return <NewListComponent {...args} />;
  };
  
  NewListComponentStory.args = {
    listType: 'Inline',
    inlineListItemType: 'Actionable',
    listItemPreviewType: 'Value',
    iconPreview: false,
    showDivider: true,
    listItemActionableType: 'Menu',
    listItemActionableSelectType: 'Check Box',
    iconActionableMenu: true,
    badgeActionableMenu: true,
    linkActionableMenu: true,
    stackedListItemType: 'Default',
    stackedListItemDefaultIcon: true,
    stackedListItemDefaultBadge: true,
    stackedListItemDefaultAction: true,
    listtemAddonType : 'Icon',
    stackedListItemBodyType: 'Headline+Body',
    stackedListItemBodyShowContent: true,
    stackedListItemBodyShowLabel: true,
    stackedListItemBodyShowSubTitle: true,
    stackedListItemBodyShowBodyCopy: true,
    stackedListItemBodyShowStatus: true,
    stackedListItemBodyStatusState: 'Success',
    lang: 'en',
    enableDarktheme: false,
  };
  
  NewListComponentStory.argTypes = {
    listType: {
      control: 'select',
      options: ['Inline', 'Stacked'],
    },
    inlineListItemType: { 
      control: 'select',
      options: ['Actionable', 'Preview'], 
      if: { arg: 'listType', eq: 'Inline' } 
    },
    listItemPreviewType: { 
      control: 'select',
      options: ['Value', 'Bullet Point'], 
    },
    iconPreview: {
      control: 'boolean',
      if: { arg: 'inlineListItemType', eq: 'Preview' } 
    },
    showDivider: {
      control: 'boolean',
    },
    listItemActionableType: { 
      control: 'select',
      options: ['Menu', 'Select'], 
    },
    listItemActionableSelectType: { 
      control: 'select',
      options: ['Check Box', 'Radio Button'], 
    },
    iconActionableMenu: {
      control: 'boolean',
    },
    badgeActionableMenu: {
      control: 'boolean',
    },
    linkActionableMenu: {
      control: 'boolean',
    },
    stackedListItemType: { 
      control: 'select',
      options: ['Default', 'Preview'], 
    },
    stackedListItemDefaultIcon: {
      control: 'boolean',
    },
    stackedListItemDefaultBadge: {
      control: 'boolean',
    },
    stackedListItemDefaultAction: {
      control: 'boolean',
    },
    listtemAddonType: {
      control: 'select',
      options: ['Avatar', 'Icon', 'Logo', 'Icon with BG', 'Avatar With Bank', 'Pie Graph'], 
    },
    stackedListItemBodyType: {
      control: 'select',
      options: ['Headline+Body', 'Label+Value', 'Extra Content'], 
    },
    stackedListItemBodyShowContent: {
      control: 'boolean',
    },
    stackedListItemBodyShowLabel: {
      control: 'boolean',
    },
    stackedListItemBodyShowSubTitle: {
      control: 'boolean',
    },
    stackedListItemBodyShowBodyCopy: {
      control: 'boolean',
    },
    stackedListItemBodyShowStatus: {
      control: 'boolean',
    },
    stackedListItemBodyStatusState: {
      control: 'select',
      options: ['Success', 'Error', 'Warning', 'Neutral'], 
    },
    lang: {
      control: 'select',
      options: ['en', 'ar'],
    },
    enableDarktheme: {
      control: 'boolean',
    },
  };
  

  export const TextDividerComponentStory = (args) => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState('en');
    const {  toggleTheme,isDarkMode } = useTheme();
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

    args.Headline=t('initialLang:Headline')
    args.Description=t('initialLang:SunTextDivider')

    return <TextDivider {...args} />;
  };

  TextDividerComponentStory.args={
    promotional:true,
    pagetitle:true,
    bottomsheet:true,
    inpage:true,
    lang:'en',
    enableDarktheme: true,
  }

  TextDividerComponentStory.argTypes = {
   
    lang: {
      control: 'select',
      options: ['en', 'ar'],
    },
    enableDarktheme: {
      control: 'boolean',
    },
  }
   
  
