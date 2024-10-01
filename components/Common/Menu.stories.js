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

export const BlockBnner = args => {
  const { t } = useTranslation();
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

  args.BlockcardText = t('initialLang:BlockcardText');
  args.LinkButton = t('initialLang:LinkButton');
  return <BlockBanner {...args} />;
};
BlockBnner.args = {
  // BlackCardIcon: <SvgIconList icon="BlockCard" width={24} height={24} />,
  // Whitecard: <SvgIconList icon="Whitecard" width={24} height={24} />,
  //  showIcon:true,
  demo: require("../../assets/Path3.png"),
  lang: 'en',
  enableDarktheme: false,
};

BlockBnner.argTypes = {
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
};

export const BlockBox = args => {
  const { t } = useTranslation();
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

  args.SolidText = t('initialLang:SolidText');
  args.PattrenText = t('initialLang:PattrenText');
  return <BlockGeneric {...args} />;
};

BlockBox.args = {
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
  BlockBoxType: 'Solid',
  lang: 'en',
  enableDarktheme: false,
};

BlockBox.argTypes = {
  BlockBoxType: {
    control: 'select',
    options: ['Solid', 'Pattern'],
  },
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
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
    if (args.enableDarktheme !== isDarkMode) {
      toggleTheme();
    }
console.log("menulist", args.enableDarktheme, isDarkMode)
  }, [args.enableDarktheme, isDarkMode]);
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
  iconActionableMenu: true,
  badgeActionableMenu: true,
  badgeActionableMenuType: 'Badge Notification',
  badgeNotificationMenuType: 'Warning',
  badgeNotificationMenuSize: 'Small',
  badgeNotificationMenuNumber: '1',
  linkActionableMenu: true,
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
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
  },
  stackedListItemBodyShowStatus: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
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
  enableDarktheme: {
    control: 'boolean',
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
  const translatedHeadline = t('initialLang:Headline');
  const SunTextDivider = t('initialLang:SunTextDivider');
  const viewall = t('initialLang:viewall');
  const Link = t('initialLang:linkButton');
  args.Headline = args.Headline || translatedHeadline;
  args.text = args.text || SunTextDivider;
  args.viewall =  args.viewall || viewall;
  args.Link = args.Link || Link;
  return <TextDivider 
  changeTheme={toggleTheme}
  changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
  {...args} />;
};

TextDividerComponentStory.args = {
  Type: "promotional",
  Headline:"Headline",
  Subtitle: true,
  text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur",
  Link: true,
  Link:"Link Button",
  Iconleft: I18nManager.isRTL ? false : false,
  Iconright: I18nManager.isRTL ? true : true,
  type: "small",
  Password: true,
  language: 'en',
  enableDarktheme: true,

}

TextDividerComponentStory.argTypes = {
  Type: { control: 'select', options: ['promotional', 'pagetitle', 'bottomsheet', 'inpage',] },
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  enableDarktheme: {
    control: 'boolean',
  },
  type: {
    control: 'select',
    options: ['large', 'small'],

  },
};
export const TextComponentStory =(args) =>{
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
const { theme, toggleTheme,isDarkMode } = useTheme();

  useEffect(() => {   
    const shouldBeDarkMode = args.colorStyles === 'Dark Mode';
    if (shouldBeDarkMode !== isDarkMode) {
      toggleTheme();
    }
  }, [args.colorStyles, isDarkMode, toggleTheme]); 

  
return (<TextComponent {...args}/>)
}  
TextComponentStory.args = {
  children: 'Text Line',
  headlineText:'Headline',
  // textColor: 'black',
  fontSize: 16,
  fontFamily: 'Regular',
  fontWeight: '600',
  onPress: null,
  numberOfLines: 1,
  textTransform: 'none',
  hierarchy:'primary',
  editable:false,
  copyable:false,
  bullet:'false',
  badge:false,
  textInfoIcon:false,
  colorStyles:'Light Mode',
  isHeadline:true,
  // lang:'en',
};

TextComponentStory.argTypes = {
  children: {control: 'text'},
  headlineText: {control: 'text'},
  // textColor: {control: 'color'},
  fontSize: {control: 'number'},
  hierarchy:{
    control:'select',
    options:['primary', 'secondary']
  },
  editable:{control:'boolean'},
  copyable:{control:'boolean'},
  badge:{control:'boolean'},
  textInfoIcon:{control:'boolean'},
  colorStyles: {
    control: 'select',
    options: ['Light Mode', 'Dark Mode'],
  },
  // enableDarkTheme:{control:'boolean'},
  isHeadline:{control:'boolean'},
  bullet:{
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
  language: 'en',
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
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en')}
    />
  );
};

LastLoggedInStory.args = {
  bgColor: 'black',
  lang: 'en',
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


