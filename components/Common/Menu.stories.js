import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BlockBanner, BlockGeneric, BlockGenericTxtChange } from './Blocks';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import NewListComponent from './NewListComponent';
import TextDivider from './TextDivider';
import CommonHelper from '../../constants/CommonHelper';
import i18n from '../../locales/i18n';
import SearchInput from './SearchInput';
import DarkThemeBlock from './DarkThemeBlock';
import LastLoggedIn from './LastLoggedIn';
import { I18nManager } from 'react-native';
import TextComponent from './TextComponent';
export default {
  title: 'components/MenuComponent',    // Uncomment for development purpose.Don't uncomment and commit.
};

export const MenuComponentStory = args => { };

MenuComponentStory.args = {};

export const BlockBannerComponentStory = args => {

  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

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
        const headerthemedark = args.VariablemodesColorStyles !== 'LightMode'; 
        if (headerthemedark !== isDarkMode) {
          console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
          toggleTheme();
        }
      }, [args.VariablemodesColorStyles, isDarkMode, toggleTheme]);

  args.BlockcardText = t('initialLang:BlockcardText');
  args.LinkButton = t('initialLang:LinkButton');
  return <BlockBanner changeTheme={toggleTheme}
  changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}    
  {...args} />;
};
BlockBannerComponentStory.args = {
  // BlackCardIcon: <SvgIconList icon="BlockCard" width={24} height={24} />,
  // Whitecard: <SvgIconList icon="Whitecard" width={24} height={24} />,
  //  showIcon:true,
  // demo: require("../../assets/Path3.png"),
  language: I18nManager.isRTL ? 'ar' : 'en',
  VariablemodesColorStyles:"LightMode",
};

BlockBannerComponentStory.argTypes = {
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  VariablemodesColorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
};

export const BlockGenericComponentStory = args => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

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
        const headerthemedark = args.VariablemodesColorStyles !== 'LightMode'; 
        if (headerthemedark !== isDarkMode) {
          console.log("THEME TRIGGERED>>>", headerthemedark, isDarkMode);
          toggleTheme();
        }
      }, [args.VariablemodesColorStyles, isDarkMode, toggleTheme]);

  args.SolidText = t('initialLang:SolidText');
  args.PattrenText = t('initialLang:PattrenText');
  return <BlockGeneric 
    changeTheme={toggleTheme}
    changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}    
  {...args} />;
};

BlockGenericComponentStory.args = {
  // BlockGenericred:true,
  // Blockgenericred: (
  //   <SvgIconList
  //     icon="Blockgenericred"
  //     BlackRightarrow
  //     width={24}
  //     height={24}
  //   />
  // ),
  // BlackRightarrow: (
  //   <SvgIconList icon="BlackRightarrow" width={24} height={24} />
  // ),
  // Whitebox: <SvgIconList icon="Lightmyacounts" width={24} height={24} />,
  // WhiteArrow: <SvgIconList icon="Lightright" width={24} height={24} />,
  //  showIcon:true,
  blockgenericType: 'Solid',
  language: I18nManager.isRTL ? 'ar' : 'en',
  // enableDarktheme: false,
  VariablemodesColorStyles:"LightMode",

};

BlockGenericComponentStory.argTypes = {
  blockgenericType: {
    control: 'select',
    options: ['Solid', 'Pattern'],
  },
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  // enableDarktheme: {
  //   control: 'boolean',
  // },
  VariablemodesColorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
};

export const NewListComponentStory = args => {
  // const {t} = useTranslation();
  // const [language, setLanguage] = useState('en');
  const {toggleTheme, isDarkMode} = useTheme();
  // const handleChange = (newLang, setLanguage, i18n) => {
  //   setLanguage(newLang);
  //   i18n.changeLanguage(newLang);
  //   CommonHelper.changeLanguage(newLang, setLanguage);
  // };

  // useEffect(() => {
  //   CommonHelper.initLanguage(setLanguage);
  // }, []);
  // useEffect(() => {
  //   if (language !== args.lang) {
  //     handleChange(args.lang, setLanguage, i18n);
  //   }
  // }, [args.lang]);

  useEffect(() => {
    const headerthemedark = args.colorStyles !== 'Light Mode'; 
    if (headerthemedark !== isDarkMode) {
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]); 
  return (
    <NewListComponent
      {...args}
      changeTheme={toggleTheme}
    />
  )
};

NewListComponentStory.args = {
  listType: 'Inline',
  inlineListItemType: 'Actionable',
  listItemActionableType: 'Menu',
  listItemActionableSelectType: 'Check Box',
  Divider: true,
  linkActionableMenuText: "Link",
  inlineListItemMenuIcon: true,
  inlineListItemMenuBadge: true,
  badgeActionableMenuType: 'Badge Notification',
  badgeNotificationMenuType: 'Warning',
  badgeNotificationMenuSize: 'Small',
  badgeNotificationMenuNumber: '1',
  inlineListItemMenuLink: true,
  listItemPreviewType: 'Value',
  iconPreview: false,
  inlineListItemLabel: 'Label',
  inlineListItemValue: 'Value',
  stackedListItemType: 'Default',
  stackedListItemDefaultIcon: true,
  stackedListItemDefaultBadge: true,
  stackedListItemDefaultAction: true,
  listtemAddonType: 'Icon',
  stackedListItemBody: 'Headline+Body',
  stackedListItemBodyShowContent: true,
  stackedListItemBodyShowLabel: true,
  stackedListItemBodyShowSubTitle: true,
  stackedListItemBodyShowBodyCopy: true,
  stackedListItemBodyShowStatus: true,
  stackedListItemBodyStatusState: 'Success',
  badgeStatusType: 'Chips Info',
  badgeNotificationType: 'Primary',
  badgeNotificationSize: 'Small',
  badgeNotificationNumber: '1',
  listItemActionType: 'Chevron',
  stackedListItemPreviewSecondValue: false,
  // lang: 'en',
  colorStyles:'Light Mode',
};

NewListComponentStory.argTypes = {
  listType: {
    control: 'select',
    options: ['Inline', 'Stacked'],
  },
  inlineListItemType: {
    control: 'select',
    options: ['Actionable', 'Preview'],
    if: { arg: 'listType', eq: 'Inline' },
  },
  listItemPreviewType: {
    control: 'select',
    options: ['Value', 'Bullet Point'],
    if: { arg: 'inlineListItemType', eq: 'Preview' },
  },
  iconPreview: {
    control: 'boolean',
    if: { arg: 'inlineListItemType', eq: 'Preview' },
  },
  inlineListItemLabel: {
    control: 'text',
    if: { arg: 'inlineListItemType', eq: 'Preview' },
  },
  inlineListItemValue: {
    control: 'text',
    if: { arg: 'inlineListItemType', eq: 'Preview' },
  },
  Divider: {
    control: 'boolean',
  },
  listItemActionableType: {
    control: 'select',
    options: ['Menu', 'Select'],
    if: { arg: 'listType', eq: 'Inline' },
  },
  listItemActionableSelectType: {
    control: 'select',
    options: ['Check Box', 'Radio Button'],
    // if: { arg: 'inlineListItemType', neq: 'Preview' },
    if: { arg: 'listItemActionableType', eq: 'Select' },
  },
  linkActionableMenuText: {
    control: 'text',
    if: { arg: 'listType', eq: 'Inline' },
    // if: { arg: 'listItemActionableType', eq: 'Menu' }
  },
  inlineListItemMenuIcon: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Inline' },
    // if: { arg: 'listItemActionableType', eq: 'Menu' }
  },
  inlineListItemMenuBadge: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Inline' },
    // if: { arg: 'listItemActionableType', eq: 'Menu' }
  },
  badgeActionableMenuType: {
    control: 'select',
    options: [
      'Badge Notification',
      'Chips Info',
      'Text',
      'Balance',
      'Balance with Status',
    ],
    if: { arg: 'listType', eq: 'Inline' }
  },
  badgeNotificationMenuType: {
    control: 'select',
    options: ['Primary', 'Warning', 'Success', 'Neutral', 'Reverse'],
    if: { arg: 'badgeActionableMenuType', eq: 'Badge Notification' },
  },
  badgeNotificationMenuSize: {
    control: 'select',
    options: ['Small', 'Large', 'XS'],
    if: { arg: 'badgeActionableMenuType', eq: 'Badge Notification' },
  },
  badgeNotificationMenuNumber: {
    control: 'select',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '99+'],
    if: { arg: 'badgeActionableMenuType', eq: 'Badge Notification' },
  },
  inlineListItemMenuLink: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Inline' },
    // if: { arg: 'listItemActionableType', eq: 'Menu' }
  },
  stackedListItemType: {
    control: 'select',
    options: ['Default', 'Preview'],
    if: { arg: 'listType', eq: 'Stacked' },
  },
  stackedListItemDefaultIcon: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Stacked' },
  },
  stackedListItemDefaultBadge: {
    control: 'boolean',
    // if: {arg: 'listType', eq: 'Stacked'},
  },
  stackedListItemDefaultAction: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Stacked' },
  },
  listtemAddonType: {
    control: 'select',
    options: [
      'Avatar',
      'Icon',
      'Logo',
      'Icon with BG',
      'Avatar With Bank',
      'Pie Graph',
    ],
    if: { arg: 'stackedListItemDefaultIcon' },
  },
  stackedListItemBody: {
    control: 'select',
    options: ['Headline+Body', 'Label+Value', 'Extra Content'],
    // if: {arg: 'stackedListItemDefaultBadge'},
  },
  stackedListItemBodyShowContent: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Headline+Body' },
  },
  stackedListItemBodyShowLabel: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Extra Content' },
  },
  stackedListItemBodyShowSubTitle: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Extra Content' },
  },
  stackedListItemBodyShowBodyCopy: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Extra Content' },
  },
  stackedListItemBodyShowStatus: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Extra Content' },
  },
  stackedListItemBodyStatusState: {
    control: 'select',
    options: ['Success', 'Error', 'Warning', 'Neutral'],
    if: { arg: 'stackedListItemBodyShowStatus' },
  },
  badgeStatusType: {
    control: 'select',
    options: [
      'Badge Notification',
      'Chips Info',
      'Text',
      'Balance',
      'Balance with Status',
    ],
    // if: { arg: 'stackedListItemBodyShowStatus'}
  },
  badgeNotificationType: {
    control: 'select',
    options: ['Primary', 'Warning', 'Success', 'Neutral', 'Reverse'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  badgeNotificationSize: {
    control: 'select',
    options: ['Small', 'Large', 'XS'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  badgeNotificationNumber: {
    control: 'select',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '99+'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  listItemActionType: {
    control: 'select',
    options: [
      'Toggle',
      'Check Box',
      'Chevron',
      'Radio Button',
      'Edit',
      'Delete',
    ],
    if: { arg: 'stackedListItemDefaultAction' }
  },
  stackedListItemPreviewSecondValue: {
    control: 'boolean',
    if: { arg: 'stackedListItemType', eq: 'Preview' },
  },
  // lang: {
  //   control: 'select',
  //   options: ['en', 'ar'],
  // },
  colorStyles: {
    control: 'select',
    options: ['Light Mode', 'Dark Mode'],
  },
};

export const TextDividerComponentStory = args => {
  const { t ,i18n} = useTranslation();
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
  // const translatedHeadline = t('initialLang:Headline');
  // const SunTextDivider = t('initialLang:SunTextDivider');
  // const viewall = t('initialLang:viewall');
  // const Link = t('initialLang:linkButton');
  // args.Headline = args.Headline || translatedHeadline;
  args.Headline = t('initialLang:Headline');
  args.text = t('initialLang:SunTextDivider');
  args.viewall = t('initialLang:viewall');
  args.Link = t('initialLang:linkButton');
  return <TextDivider 
  changeTheme={toggleTheme}
  changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
  {...args} />;
};

TextDividerComponentStory.args = {
  textDividerType: "promotional",
  textDividerHeadline:"Headline",
  textDividerSubtitle: true,
  textDividerText:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur",
  textDividerLink: true,
  linkbuttonLink:"Link Button",
  linkbuttonIconleft: I18nManager.isRTL ? false : false,
  linkbuttonIconright: I18nManager.isRTL ? true : true,
  linkbuttonsize: "small",
  texttitleactionPassword: true,
  language: I18nManager.isRTL ? 'ar' : 'en',
  colorStyles:"LightMode",

}

TextDividerComponentStory.argTypes = {
  textDividerType: { control: 'select', options: ['promotional', 'pagetitle', 'bottomsheet', 'inpage',] },
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  },
  linkbuttonsize: {
    control: 'select',
    options: ['large', 'small'],

  },
};
export const TextComponentStory =(args) =>{
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
const { theme, toggleTheme,isDarkMode } = useTheme();

  useEffect(() => {   
    const shouldBeDarkMode = args.variableModecolorStyles === 'Dark Mode';
    if (shouldBeDarkMode !== isDarkMode) {
      toggleTheme();
    }
  }, [args.variableModecolorStyles, isDarkMode, toggleTheme]); 

return (<TextComponent {...args}/>)
}  
TextComponentStory.args = {
  // children:'Text Line',
  textText: 'Text Line',
  textTitleText:'Headline',
  // textColor: 'black',
  fontSize: 16,
  fontFamily: 'Regular',
  fontWeight: '600',
  onPress: null,
  numberOfLines: 1,
  textTransform: 'none',
  textHierarchy:'primary',
  textEditable:false,
  textCopyable:false,
  textBullet:'false',
  textTitleBadge:false,
  textTitleIcon:false,
  variableModecolorStyles:'Light Mode',
  isHeadline:true,
  // lang:'en',
};

TextComponentStory.argTypes = {
  textText: {control: 'text'},
  textTitleText: {control: 'text'},
  // textColor: {control: 'color'},
  fontSize: {control: 'number'},
  textHierarchy:{
    control:'select',
    options:['primary', 'secondary']
  },
  textEditable:{control:'boolean'},
  textCopyable:{control:'boolean'},
  textTitleBadge:{control:'boolean'},
  textTitleIcon:{control:'boolean'},
  variableModecolorStyles: {
    control: 'select',
    options: ['Light Mode', 'Dark Mode'],
  },
  // enableDarkTheme:{control:'boolean'},
  isHeadline:{control:'boolean'},
  textBullet:{
    control:'select',
    options:['true', 'false', 'true.success']
  },
  fontFamily: {
    control: 'select',
    options: ['Bold', 'Regular', 'Light'],
  },
  fontWeight: {
    control: 'select',
    options: ["null",'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  // onPress: {action: 'pressed'},
  // lang: {
  //   control: 'select',
  //   options: ['en', 'ar'],
  // },
  numberOfLines: {control: 'number'},
  textTransform: {
    control: 'select',
    options: ['none', 'capitalize', 'uppercase', 'lowercase'],
  },
};

export const SearchInputComponentStory = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme,isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();
 // args.Input = t('initialLang:searchby');


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
  return(
    <SearchInput 
    changeTheme={toggleTheme}
    changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    {...args}/>
  )
};
SearchInputComponentStory.args = {

  State:"Default",
  language: I18nManager.isRTL ? 'ar' : 'en',
  Input: 'Search By',
  showIcon:false,
  colorStyles:"LightMode",
};

SearchInputComponentStory.argTypes={
  State:{control:'select',options:['Default','Filled']},
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  Input:{
    control:'text'
   },
  showIcon:{
    control: 'boolean',
  },
  colorStyles:{
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
}


export const DarkThemeBlockStory = (args) => {
  const [language, setLanguage] = useState(args.lang || 'en');
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.themeText = 'Dark Theme';
  args.themeChangeText = 'Change from Light to Dark Mode';

  // const handleChange = (newLang, setLanguage, i18n) => {
  //   setLanguage(newLang);
  //   i18n.changeLanguage(newLang);
  //   CommonHelper.changeLanguage(newLang, setLanguage);
  // };

  // useEffect(() => {
  //   CommonHelper.initLanguage(setLanguage);
  // }, []);

  // useEffect(() => {
  //   if (language !== args.lang) {
  //     handleChange(args.lang, setLanguage, i18n);
  //   }
  // }, [args.lang, language]);

  // Fix: Check before toggling to avoid infinite loop
  // useEffect(() => {
  //   if (args.enableDarktheme !== isDarkMode) {
  //     toggleTheme();
  //   }
  // }, [args.enableDarktheme, isDarkMode, toggleTheme]);

  useEffect(() => {
    // Check if current mode matches the selected colorStyles
    const shouldBeDarkMode = args.colorStyles === 'Dark Mode';
    if (shouldBeDarkMode !== isDarkMode) {
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]);

  return (
    <DarkThemeBlock
      {...args}
      changeTheme={toggleTheme}
    // changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
  );
};

DarkThemeBlockStory.args = {
  listType: 'Stacked',
  inlineListItemType: 'Actionable',
  listItemActionableType: 'Menu',
  listItemActionableSelectType: 'Check Box',
  showDivider: true,
  // enableDarktheme: false,
  colorStyles: 'Light Mode',
  iconActionableMenu: true,
  badgeActionableMenu: true,
  badgeActionableMenuType: 'Badge Notification',
  badgeNotificationMenuType: 'Warning',
  badgeNotificationMenuSize: 'Small',
  badgeNotificationMenuNumber: '1',
  linkActionableMenu: true,
  listItemPreviewType: 'Value',
  iconPreview: false,
  stackedListItemType: 'Default',
  stackedListItemDefaultIcon: true,
  stackedListItemDefaultBadge: false,
  stackedListItemDefaultAction: true,
  listtemAddonType: 'Icon',
  stackedListItemBody: 'Headline+Body',
  stackedListItemBodyShowContent: true,
  stackedListItemBodyHeadline:'Dark Theme',
  stackedListItemBodyContent:'Change from Light to Dark Mode',
  stackedListItemBodyShowLabel: true,
  stackedListItemBodyShowSubTitle: true,
  stackedListItemBodyShowBodyCopy: true,
  stackedListItemBodyShowStatus: true,
  stackedListItemBodyStatusState: 'Success',
  badgeStatusType: 'Chips Info',
  badgeNotificationType: 'Primary',
  badgeNotificationSize: 'Small',
  badgeNotificationNumber: '1',
  listItemActionType: 'Toggle',
  stackedListItemPreviewSecondValue: false,
};

DarkThemeBlockStory.argTypes = {
  // enableDarktheme: {
  //   control: 'boolean',
  // },
  colorStyles: {
    control: 'select',
    options: ['Light Mode', 'Dark Mode'],
  },
  stackedListItemBodyHeadline:{
    control:'text'
  },
  stackedListItemBodyContent:{
    control:'text'
  },
  listType: {
    control: 'select',
    options: ['Inline', 'Stacked'],
  },
  inlineListItemType: {
    control: 'select',
    options: ['Actionable', 'Preview'],
    if: { arg: 'listType', eq: 'Inline' },
  },
  listItemPreviewType: {
    control: 'select',
    options: ['Value', 'Bullet Point'],
    if: { arg: 'inlineListItemType', eq: 'Preview' },
  },
  iconPreview: {
    control: 'boolean',
    if: { arg: 'inlineListItemType', eq: 'Preview' },
  },
  showDivider: {
    control: 'boolean',
  },
  listItemActionableType: {
    control: 'select',
    options: ['Menu', 'Select'],
    if: { arg: 'listType', eq: 'Inline' },
  },
  listItemActionableSelectType: {
    control: 'select',
    options: ['Check Box', 'Radio Button'],
    // if: { arg: 'inlineListItemType', neq: 'Preview' },
    if: { arg: 'listItemActionableType', eq: 'Select' },
  },
  iconActionableMenu: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Inline' },
    // if: { arg: 'listItemActionableType', eq: 'Menu' }
  },
  badgeActionableMenu: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Inline' },
    // if: { arg: 'listItemActionableType', eq: 'Menu' }
  },
  badgeActionableMenuType: {
    control: 'select',
    options: [
      'Badge Notification',
      'Chips Info',
      'Text',
      'Balance',
      'Balance with Status',
    ],
    if: { arg: 'listType', eq: 'Inline' }
  },
  badgeNotificationMenuType: {
    control: 'select',
    options: ['Primary', 'Warning', 'Success', 'Neutral', 'Reverse'],
    if: { arg: 'badgeActionableMenuType', eq: 'Badge Notification' },
  },
  badgeNotificationMenuSize: {
    control: 'select',
    options: ['Small', 'Large', 'XS'],
    if: { arg: 'badgeActionableMenuType', eq: 'Badge Notification' },
  },
  badgeNotificationMenuNumber: {
    control: 'select',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '99+'],
    if: { arg: 'badgeActionableMenuType', eq: 'Badge Notification' },
  },
  linkActionableMenu: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Inline' },
    // if: { arg: 'listItemActionableType', eq: 'Menu' }
  },
  stackedListItemType: {
    control: 'select',
    options: ['Default', 'Preview'],
    if: { arg: 'listType', eq: 'Stacked' },
  },
  stackedListItemDefaultIcon: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Stacked' },
  },
  stackedListItemDefaultBadge: {
    control: 'boolean',
    // if: {arg: 'listType', eq: 'Stacked'},
  },
  stackedListItemDefaultAction: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Stacked' },
  },
  listtemAddonType: {
    control: 'select',
    options: [
      'Avatar',
      'Icon',
      'Logo',
      'Icon with BG',
      'Avatar With Bank',
      'Pie Graph',
    ],
    if: { arg: 'stackedListItemDefaultIcon' },
  },
  stackedListItemBody: {
    control: 'select',
    options: ['Headline+Body', 'Label+Value', 'Extra Content'],
    // if: {arg: 'stackedListItemDefaultBadge'},
  },
  stackedListItemBodyShowContent: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Headline+Body' },
  },
  stackedListItemBodyShowLabel: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Extra Content' },
  },
  stackedListItemBodyShowSubTitle: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Extra Content' },
  },
  stackedListItemBodyShowBodyCopy: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Extra Content' },
  },
  stackedListItemBodyShowStatus: {
    control: 'boolean',
    if: { arg: 'stackedListItemBody', eq: 'Extra Content' },
  },
  stackedListItemBodyStatusState: {
    control: 'select',
    options: ['Success', 'Error', 'Warning', 'Neutral'],
    if: { arg: 'stackedListItemBodyShowStatus' },
  },
  badgeStatusType: {
    control: 'select',
    options: [
      'Badge Notification',
      'Chips Info',
      'Text',
      'Balance',
      'Balance with Status',
    ],
    // if: { arg: 'stackedListItemBodyShowStatus'}
  },
  badgeNotificationType: {
    control: 'select',
    options: ['Primary', 'Warning', 'Success', 'Neutral', 'Reverse'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  badgeNotificationSize: {
    control: 'select',
    options: ['Small', 'Large', 'XS'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  badgeNotificationNumber: {
    control: 'select',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '99+'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  listItemActionType: {
    control: 'select',
    options: [
      'Toggle',
      'Check Box',
      'Chevron',
      'Radio Button',
      'Edit',
      'Delete',
      'Tick'
    ],
    if: { arg: 'stackedListItemDefaultAction' }
  },
  stackedListItemPreviewSecondValue: {
    control: 'boolean',
    if: { arg: 'stackedListItemType', eq: 'Preview' },
  },
};

export const LastLoggedInStory = (args) => {
  const [language, setLanguage] = useState(args.lang || 'en');
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.name = t('initialLang:userNamelastLogin');
  args.status = t('initialLang:status');

  const handleChange = (newLang) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    CommonHelper.changeLanguage(newLang);
  };

  useEffect(() => {
    CommonHelper.initLanguage(setLanguage);
  }, []);

  useEffect(() => {
    if (args.lang && args.lang !== language) {
      handleChange(args.lang);
    }
  }, [args.lang]);

  useEffect(() => {
    if (args.enableDarktheme !== isDarkMode) {
      toggleTheme();
    }
  }, [args.enableDarktheme, isDarkMode, toggleTheme]);

  return (
    <LastLoggedIn
      {...args}
      changeTheme={toggleTheme}
       changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
    />
  );
};

LastLoggedInStory.args = {
  bgColor: 'black',
  lang: I18nManager.isRTL ? 'ar' : 'en',
  enableDarktheme: false,
  powerButton: true,
};

LastLoggedInStory.argTypes = {
  bgColor: { control: 'color' },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
  powerButton: {
    control: 'boolean',
  },
};


