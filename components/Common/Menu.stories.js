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
  showDivider: true,
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
  stackedListItemDefaultBadge: true,
  stackedListItemDefaultAction: true,
  listtemAddonType: 'Icon',
  stackedListItemBodyType: 'Headline+Body',
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
  stackedListItemBodyType: {
    control: 'select',
    options: ['Headline+Body', 'Label+Value', 'Extra Content'],
    // if: {arg: 'stackedListItemDefaultBadge'},
  },
  stackedListItemBodyShowContent: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Headline+Body' },
  },
  stackedListItemBodyShowLabel: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
  },
  stackedListItemBodyShowSubTitle: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
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

  args.Headline = t('initialLang:Headline');
  args.Description = t('initialLang:SunTextDivider');
  args.viewall = t('initialLang:viewall');
  args.label = t('initialLang:linkButton');

  return <TextDivider {...args} />;
};

TextDividerComponentStory.args = {
  Type: "promotional",
  Subtitle: true,
  Link: true,
  enableLeftIcon: I18nManager.isRTL ? false : false,
  enableRightIcon: I18nManager.isRTL ? true : true,
  type: "small",
  eyeicon: true,
  lang: 'en',
  enableDarktheme: true,

}

TextDividerComponentStory.argTypes = {
  Type: { control: 'select', options: ['promotional', 'pagetitle', 'bottomsheet', 'inpage',] },
  lang: {
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
  }, [args.lang, language]);
   
  
  useEffect(() => {
        if (args.enableDarkTheme !== isDarkMode) {
      toggleTheme();
    }     
  }, [args.enableDarkTheme, isDarkMode, toggleTheme]);

  
return (<TextComponent {...args}/>)
}  
TextComponentStory.args = {
  children: 'text1',
  headlineText:'Headline',
  textColor: 'black',
  fontSize: 16,
  fontFamily: 'Regular',
  fontWeight: '600',
  onPress: null,
  numberOfLines: 1,
  textTransform: 'none',
  enableSecondary:false,
  editable:false,
  copyable:false,
  bulletPoint:'false',
  badgeIcon:false,
  textInfoIcon:false,
  enableDarkTheme:false,
  isHeadline:true,
  lang:'en',
};

TextComponentStory.argTypes = {
  children: {control: 'text'},
  headlineText: {control: 'text'},
  textColor: {control: 'color'},
  fontSize: {control: 'number'},
  enableSecondary:{control:'boolean'},
  editable:{control:'boolean'},
  copyable:{control:'boolean'},
  badgeIcon:{control:'boolean'},
  textInfoIcon:{control:'boolean'},
  enableDarkTheme:{control:'boolean'},
  isHeadline:{control:'boolean'},
  bulletPoint:{
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
  onPress: {action: 'pressed'},
  lang: {
    control: 'select',
    options: ['en', 'ar'],
  },
  numberOfLines: {control: 'number'},
  textTransform: {
    control: 'select',
    options: ['none', 'capitalize', 'uppercase', 'lowercase'],
  },
};

export const SearchInputComponentStory = args => <SearchInput {...args} />;
SearchInputComponentStory.args = {


  placeHolder: 'Search By'

};

export const DarkThemeBlockStory = (args) => {
  const [language, setLanguage] = useState(args.lang || 'en');
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  args.themeText = 'Dark Theme';
  args.themeChangeText = 'Change from Light to Dark Mode';

  const handleChange = (newLang, setLanguage, i18n) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    CommonHelper.changeLanguage(newLang, setLanguage);
  };

  useEffect(() => {
    CommonHelper.initLanguage(setLanguage);
  }, []);

  // useEffect(() => {
  //   if (language !== args.lang) {
  //     handleChange(args.lang, setLanguage, i18n);
  //   }
  // }, [args.lang, language]);

  // Fix: Check before toggling to avoid infinite loop
  useEffect(() => {
    if (args.enableDarktheme !== isDarkMode) {
      toggleTheme();
    }
  }, [args.enableDarktheme, isDarkMode, toggleTheme]);

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
  enableDarktheme: false,
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
  stackedListItemBodyType: 'Headline+Body',
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
  enableDarktheme: {
    control: 'boolean',
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
  stackedListItemBodyType: {
    control: 'select',
    options: ['Headline+Body', 'Label+Value', 'Extra Content'],
    // if: {arg: 'stackedListItemDefaultBadge'},
  },
  stackedListItemBodyShowContent: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Headline+Body' },
  },
  stackedListItemBodyShowLabel: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
  },
  stackedListItemBodyShowSubTitle: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
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


