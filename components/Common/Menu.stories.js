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

// export const MenuComponentStory = args => { };

// MenuComponentStory.args = {};

export const BlockBannerComponentStory = args => {

  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme, isDarkMode } = useTheme();
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
  const { theme, toggleTheme, isDarkMode } = useTheme();
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
  const { toggleTheme, isDarkMode } = useTheme();
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
  colorStyles: 'Light Mode',
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
export const TextComponentStory = (args) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { theme, toggleTheme, isDarkMode } = useTheme();

  useEffect(() => {
    const shouldBeDarkMode = args.variableModecolorStyles === 'Dark Mode';
    if (shouldBeDarkMode !== isDarkMode) {
      toggleTheme();
    }
  }, [args.variableModecolorStyles, isDarkMode, toggleTheme]);

  return (<TextComponent {...args} />)
}
TextComponentStory.args = {
  // children:'Text Line',
  textText: 'Text Line',
  textTitleText: 'Headline',
  // textColor: 'black',
  fontSize: 16,
  fontFamily: 'Regular',
  fontWeight: '600',
  onPress: null,
  numberOfLines: 1,
  textTransform: 'none',
  textHierarchy: 'primary',
  textEditable: false,
  textCopyable: false,
  textBullet: 'false',
  textTitleBadge: false,
  textTitleIcon: false,
  variableModecolorStyles: 'Light Mode',
  isHeadline: true,
  // lang:'en',
};

TextComponentStory.argTypes = {
  textText: { control: 'text' },
  textTitleText: { control: 'text' },
  // textColor: {control: 'color'},
  fontSize: { control: 'number' },
  textHierarchy: {
    control: 'select',
    options: ['primary', 'secondary']
  },
  textEditable: { control: 'boolean' },
  textCopyable: { control: 'boolean' },
  textTitleBadge: { control: 'boolean' },
  textTitleIcon: { control: 'boolean' },
  variableModecolorStyles: {
    control: 'select',
    options: ['Light Mode', 'Dark Mode'],
  },
  // enableDarkTheme:{control:'boolean'},
  isHeadline: { control: 'boolean' },
  textBullet: {
    control: 'select',
    options: ['true', 'false', 'true.success']
  },
  fontFamily: {
    control: 'select',
    options: ['Bold', 'Regular', 'Light'],
  },
  fontWeight: {
    control: 'select',
    options: ["null", 'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  // onPress: {action: 'pressed'},
  // lang: {
  //   control: 'select',
  //   options: ['en', 'ar'],
  // },
  numberOfLines: { control: 'number' },
  textTransform: {
    control: 'select',
    options: ['none', 'capitalize', 'uppercase', 'lowercase'],
  },
};

export const SearchInputComponentStory = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  const { theme, toggleTheme, isDarkMode } = useTheme();
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
  return (
    <SearchInput
      changeTheme={toggleTheme}
      changeLanguage={() => handleChange(language === 'en' ? 'ar' : 'en', setLanguage, i18n)}
      {...args} />
  )
};
SearchInputComponentStory.args = {

  State:"Default",
  language: I18nManager.isRTL ? 'ar' : 'en',
  Input: 'Search By',
  showIcon: false,
  colorStyles: "LightMode",
};

SearchInputComponentStory.argTypes = {
  State: { control: 'select', options: ['Default', 'Filled'] },
  language: {
    control: 'select',
    options: ['en', 'ar'],
  },
  Input: {
    control: 'text'
  },
  showIcon: {
    control: 'boolean',
  },
  colorStyles: {
    control: 'select',
    options: ['LightMode', 'DarkMode'],
  }
}


export const DarkThemeBlockStory = (args) => {
  const [language, setLanguage] = useState(args.lang || 'en');
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();
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

  useEffect(() => {
    // Check if current mode matches the selected colorStyles
    const shouldBeDarkMode = args.variableModecolorStyles === 'Dark Mode';
    if (shouldBeDarkMode !== isDarkMode) {
      toggleTheme();
    }
  }, [args.variableModecolorStyles, isDarkMode, toggleTheme]);

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
  stackedListItemType: 'Default',
  // when stackedListItemType is preview
  stackedListItemPreviewDivider: true,
  stackedListItemPreviewLabel: 'Label',
  stackedListItemPreviewValue: 'Value',
  stackedListItemPreviewSecondValue: false,
  stackedListItemPreviewSecondValueText: 'Second Value',
  // when stackedListItemType is preview  -end
  stackedListItemDefaultIcon: true,
  stackedListItemDefaultBadge: false,
  // badge sub content
  badgeStatusType: 'Chips Info',
  badgeStatusMenuType: 'Badge Notification',
  // if badgestatustype is 'chips info'
  chipsInfoLanguage: 'English',
  chipsInfoLabelArabic: 'غير نشط',
  chipsInfoState: 'Error',
  chipsInfoSize: 'Small',
  chipsInfoType: 'Default',
  chipsInfoLabel: 'Inactive',
  chipsInfoShowIcon: false,
  // if badge status type is 'Badge Notification'
  badgeNotificationType: 'Warning',
  badgeNotificationMenuType: 'Warning',
  badgeNotificationSize: 'Small',
  badgeNotificationMenuSize: 'Small',
  badgeNotificationNumber: 1,
  badgeNotificationMenuNumber: 1,
  // if badgestatustype is 'Text'
  badgeStatusText: 'Content',
  badgeStatusMenuText: 'Content',
  //  if badge status type is Balance
  badgeStatusFirstValue: 'Content',
  badgeStatusMenuFirstValue: 'Content',
  badgeStatusSecondValue: 'Content',
  badgeStatusMenuSecondValue: 'Content',
  badgeStatusShowFirstValue: true,
  badgeStatusMenuShowFirstValue: true,
  badgeStatusShowSecondValue: true,
  badgeStatusMenuShowSecondValue: true,
  badgeStatusBalanceWithStatusFirstValue: 'Content',
  badgeStatusMenuBalanceWithStatusFirstValue: 'Content',
  badgeStatusBalanceWithStatusShowFirstValue: true,
  badgeStatusMenuBalanceWithStatusShowFirstValue: true,
  // /////
  stackedListItemDefaultAction: true,
  listItemAddonType: 'Icon',
  // listitemaddon subtyps
  listItemAddonAvatarType: 'Filled',
  listItemAddonAvatarElements: 'Initials',
  listItemAddonAvatarSize: 'Medium',
  listItemAddonAvatarInitials: 'JM',
  listItemAddonAvatarEdit: false,
  // listitemaddon subtyps -- end
  // Stackedlist item body
  stackedListItemBodyType: 'Headline+Body',
  stackedListItemBodyHeadline: 'Dark Theme',
  stackedListItemBodyShowContent: true,
  stackedListItemBodyContent: 'Change from Light to Dark Mode',
  stackedListItemBodyLabel: 'Label',
  stackedListItemBodyValue: 'Value',
  stackedListItemBodyShowLabel: true,
  stackedListItemBodyShowSubTitle: true,
  stackedListItemBodySubTitle: 'Sub Title',
  stackedListItemBodyShowStatus: true,
  stackedListItemBodyStatusState: 'Success',
  stackedListItemBodyStatus: 'Status',
  // listitemactions
  listItemActionType: 'Toggle',
  listItemActionToggleState: 'Unselected',
  listItemActionCheckboxIcon: 'Unchecked',
  listItemActionRadioButton: 'Unchecked',
  variableModecolorStyles: 'Light Mode',
  // if listtype is inline
  inlineListItemType: 'Actionable',
  inlineListItemActionableType: 'Menu',
  inlineListItemMenuText: 'Link',
  inlineListItemMenuDivider: true,
  inlineListItemMenuIcon: true,
  inlineListItemMenuBadge: true,
  inlineListItemMenuLink: true,
  inlineListItemSelectType: 'Check Box',
  inlineListItemSelectDivider: true,
  inlineListItemSelectLabel: 'Label',
  inlineListItemSelectIcon: true,
  inlineListItemPreviewType: 'Value',
  inlineListItemValueDivider: true,
  inlineListItemValueIcon: false,
  inlineListItemLabel: 'Label',
  inlineListItemValue: 'Value',
  inlineListItemBulletPointDivider: true,
  inlineListItemBulletPointLabel: 'label',
};

DarkThemeBlockStory.argTypes = {
  listType: {
    control: 'select',
    options: ['Inline', 'Stacked'],
  },
  stackedListItemType: {
    control: 'select',
    options: ['Default', 'Preview'],
    if: { arg: 'listType', eq: 'Stacked' },
  },
  stackedListItemPreviewDivider: {
    control: 'boolean',
    if: { arg: 'stackedListItemType', eq: 'Preview' },
  },
  stackedListItemPreviewLabel: {
    control: 'text',
    if: { arg: 'stackedListItemType', eq: 'Preview' },
  },
  stackedListItemPreviewValue: {
    control: 'text',
    if: { arg: 'stackedListItemType', eq: 'Preview' },
  },
  stackedListItemPreviewSecondValue: {
    control: 'boolean',
    if: { arg: 'stackedListItemType', eq: 'Preview' },
  },
  stackedListItemPreviewSecondValueText: {
    control: 'text',
    if: { arg: 'stackedListItemPreviewSecondValue' },
  },
  stackedListItemDefaultIcon: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Stacked' },
  },
  stackedListItemDefaultBadge: {
    control: 'boolean',
    // if: {arg: 'listType', eq: 'Stacked'},
  },
  // sub content of badge
  badgeStatusType: {
    control: 'select',
    options: [
      'Badge Notification',
      'Chips Info',
      'Text',
      'Balance',
      'Balance with Status',
    ],
    if: { arg: 'stackedListItemDefaultBadge', truthy: true }
  },
  badgeStatusMenuType: {
    control: 'select',
    options: [
      'Badge Notification',
      'Chips Info',
      'Text',
      'Balance',
      'Balance with Status',
    ],
    // if: { arg: 'stackedListItemDefaultBadge', truthy: true }
  },
  // if badgestatustype is 'chips info'
  chipsInfoLanguage: {
    control: 'select',
    options: ['English', 'Arabic'],
    // if: { arg: 'badgeStatusType', eq: 'Chips Info' },
  },
  chipsInfoLabelArabic: {
    control: 'text',
    if: { arg: 'chipsInfoLanguage', eq: 'Arabic' },

  },
  chipsInfoState: {
    control: 'select',
    options: ['Neutral', 'Success', 'Error', 'Warning', 'Info'],
    // if: { arg: 'badgeStatusType', eq: 'Chips Info' },
  },
  chipsInfoSize: {
    control: 'select',
    options: ['Small', 'Large'],
    // if: { arg: 'badgeStatusType', eq: 'Chips Info' },
  },
  chipsInfoType: {
    control: 'select',
    options: ['Default', 'Text with Icon'],
    // if: { arg: 'badgeStatusType', eq: 'Chips Info' },
  },
  chipsInfoLabel: {
    control: 'text',
    // if: { arg: 'badgeStatusType', eq: 'Chips Info' },
  },
  chipsInfoShowIcon: {
    control: 'boolean',
    // if: { arg: 'badgeStatusType', eq: 'Chips Info' },
  },
  // end of chips info type
  // if badge status type is 'Badge Notification'
  badgeNotificationType: {
    control: 'select',
    options: ['Primary', 'Warning', 'Success', 'Neutral', 'Reverse'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  badgeNotificationMenuType: {
    control: 'select',
    options: ['Primary', 'Warning', 'Success', 'Neutral', 'Reverse'],
    if: { arg: 'badgeStatusMenuType', eq: 'Badge Notification' },
  },
  badgeNotificationSize: {
    control: 'select',
    options: ['Small', 'Large', 'XS'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  badgeNotificationMenuSize: {
    control: 'select',
    options: ['Small', 'Large', 'XS'],
    if: { arg: 'badgeStatusMenuType', eq: 'Badge Notification' },
  },
  badgeNotificationNumber: {
    control: 'select',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '99+'],
    if: { arg: 'badgeStatusType', eq: 'Badge Notification' },
  },
  badgeNotificationMenuNumber: {
    control: 'select',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '99+'],
    if: { arg: 'badgeStatusMenuType', eq: 'Badge Notification' },
  },
  // if badgestatustype is 'Text'
  badgeStatusText: {
    control: 'text',
    if: { arg: 'badgeStatusType', eq: 'Text' },
  },
  badgeStatusMenuText: {
    control: 'text',
    if: { arg: 'badgeStatusMenuType', eq: 'Text' },
  },
  //  if badge status type is Balance
  badgeStatusFirstValue: {
    control: 'text',
    if: { arg: 'badgeStatusType', eq: 'Balance' },
  },
  badgeStatusMenuFirstValue: {
    control: 'text',
    if: { arg: 'badgeStatusMenuType', eq: 'Balance' },
  },
  badgeStatusSecondValue: {
    control: 'text',
    if: { arg: 'badgeStatusType', eq: 'Balance' },
  },
  badgeStatusMenuSecondValue: {
    control: 'text',
    if: { arg: 'badgeStatusMenuType', eq: 'Balance' },
  },
  badgeStatusShowFirstValue: {
    control: 'boolean',
    if: { arg: 'badgeStatusType', eq: 'Balance' },
  },
  badgeStatusMenuShowFirstValue: {
    control: 'boolean',
    if: { arg: 'badgeStatusMenuType', eq: 'Balance' },
  },
  badgeStatusShowSecondValue: {
    control: 'boolean',
    if: { arg: 'badgeStatusType', eq: 'Balance' },
  },
  badgeStatusMenuShowSecondValue: {
    control: 'boolean',
    if: { arg: 'badgeStatusMenuType', eq: 'Balance' },
  },
  badgeStatusBalanceWithStatusFirstValue: {
    control: 'text',
    if: { arg: 'badgeStatusType', eq: 'Balance with Status' },
  },
  badgeStatusMenuBalanceWithStatusFirstValue: {
    control: 'text',
    if: { arg: 'badgeStatusMenuType', eq: 'Balance with Status' },
  },
  badgeStatusBalanceWithStatusShowFirstValue: {
    control: 'text',
    if: { arg: 'badgeStatusType', eq: 'Balance with Status' },
  },
  badgeStatusMenuBalanceWithStatusShowFirstValue: {
    control: 'text',
    if: { arg: 'badgeStatusMenuType', eq: 'Balance with Status' },
  },
  // end of badge notification
  stackedListItemDefaultAction: {
    control: 'boolean',
    if: { arg: 'listType', eq: 'Stacked' },
  },
  listItemAddonType: {
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
  // listitemaddone sub types
  listItemAddonAvatarType: {
    control: 'select',
    options: ['Filled', 'Outline'],
    if: { arg: 'listItemAddonType', eq: 'Avatar' },
  },
  listItemAddonAvatarElements: {
    control: 'select',
    options: ['Initials', 'Icon'],
    if: { arg: 'listItemAddonType', eq: 'Avatar' },
  },
  listItemAddonAvatarSize: {
    control: 'select',
    options: ['Small', 'Medium', 'Large'],
    if: { arg: 'listItemAddonType', eq: 'Avatar' },
  },
  listItemAddonAvatarEdit: {
    control: 'boolean',
    if: { arg: 'listItemAddonAvatarElements', eq: 'Icon' },
  },
  listItemAddonAvatarInitials: {
    control: 'text',
    if: { arg: 'listItemAddonAvatarElements', eq: 'Initials' },
  },
  // listitemaddone sub types ---end
  // stackedlist item body subtypes
  stackedListItemBodyType: {
    control: 'select',
    options: ['Headline+Body', 'Label+Value', 'Extra Content'],
  },
  stackedListItemBodyHeadline: {
    if: { arg: 'stackedListItemBodyType' },
    // if: { arg: 'stackedListItemBodyType', eq: 'Headline+Body' },
    // if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
  },
  stackedListItemBodyShowContent: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType' },
    // if: { arg: 'stackedListItemBodyType', eq: 'Headline+Body' },
  },
  stackedListItemBodyContent: {
    control: 'text',
    if: { arg: 'stackedListItemBodyShowContent', truthy: true },
  },
  stackedListItemBodyLabel: {
    control: 'text',
    if: { arg: 'stackedListItemBodyType' },
    // if: { arg: 'stackedListItemBodyType', eq: 'Label+Value' },
  },
  stackedListItemBodyValue: {
    control: 'text',
    if: { arg: 'stackedListItemBodyType' },
    // if: { arg: 'stackedListItemBodyType', eq: 'Label+Value' },
  },
  stackedListItemBodyShowLabel: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
  },

  stackedListItemBodyShowSubTitle: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
  },
  stackedListItemBodySubTitle: {
    control: 'text',
    if: { arg: 'stackedListItemBodyShowSubTitle', truthy: true },
  },
  stackedListItemBodyShowStatus: {
    control: 'boolean',
    if: { arg: 'stackedListItemBodyType', eq: 'Extra Content' },
  },
  stackedListItemBodyStatusState: {
    control: 'select',
    options: ['Success', 'Error', 'Warning', 'Neutral'],
    if: { arg: 'stackedListItemBodyShowStatus', truthy: true },
  },
  stackedListItemBodyStatus: {
    control: 'text',
    if: { arg: 'stackedListItemBodyShowStatus', truthy: true },
  },
  // stackedlist item body subtypes --end
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
  listItemActionToggleState: {
    control: 'select',
    options: ['Unselected', 'Selected'],
    if: { arg: 'listItemActionType', eq: 'Toggle' }
  },
  listItemActionCheckboxIcon: {
    control: 'select',
    options: ['Unchecked', 'Checked', 'Disabled'],
    // if: { arg: 'listItemActionType', eq: 'Check Box' }
  },
  listItemActionRadioButton: {
    control: 'select',
    options: ['Unchecked', 'Checked', 'Disabled'],
    // if: { arg: 'listItemActionType', eq: 'Radio Button' }
  },
  variableModecolorStyles: {
    control: 'select',
    options: ['Light Mode', 'Dark Mode'],
  },

  // listtype is inline
  inlineListItemType: {
    control: 'select',
    options: ['Actionable', 'Preview'],
    if: { arg: 'listType', eq: 'Inline' },
  },

  inlineListItemActionableType: {
    control: 'select',
    options: ['Menu', 'Select'],
    if: { arg: 'inlineListItemType', eq: 'Actionable' },
  },
  // if inlinelistitemactionabletype is menu
  inlineListxItemMenuText: {
    control: 'text',
    if: { arg: 'inlineListItemActionableType', eq: 'Menu' },
  },
  inlineListxItemMenuDivider: {
    control: 'boolean',
    if: { arg: 'inlineListItemActionableType', eq: 'Menu' },
  },
  inlineListItemMenuIcon: {
    control: 'boolean',
    if: { arg: 'inlineListItemActionableType', eq: 'Menu' },
  },
  inlineListItemMenuBadge: {
    control: 'boolean',
    if: { arg: 'inlineListItemActionableType', eq: 'Menu' },
  },
  inlineListItemMenuLink: {
    control: 'boolean',
    if: { arg: 'inlineListItemActionableType', eq: 'Menu' },
  },
  inlineListItemSelectType: {
    control: 'select',
    options: ['Check Box', 'Radio Button'],
    if: { arg: 'inlineListItemActionableType', eq: 'Select' },
  },
  inlineListItemSelectDivider: {
    control: 'boolean',
    if: { arg: 'inlineListItemActionableType', eq: 'Select' },
  },
  inlineListItemSelectLabel: {
    control: 'text',
    if: { arg: 'inlineListItemActionableType', eq: 'Select' },
  },
  inlineListItemSelectIcon: {
    control: 'boolean',
    if: { arg: 'inlineListItemActionableType', eq: 'Select' },
  },
  checkboxIcon: {
    control: 'select',
    options: ['Unchecked', 'Checked', 'Disabled'],
    if: { arg: 'inlineListItemSelectIcon' },
  },
  radioButtonIcon: {
    control: 'select',
    options: ['Unchecked', 'Checked', 'Disabled'],
    if: { arg: 'inlineListItemSelectIcon' },
  },
  inlineListItemPreviewType: {
    control: 'select',
    options: ['Value', 'Bullet Point'],
    if: { arg: 'inlineListItemType', eq: 'Preview' },
  },
  inlineListItemValueDivider: {
    control: 'boolean',
    if: { arg: 'inlineListItemPreviewType', eq: 'Value' }
  },
  inlineListItemValueIcon: {
    control: 'boolean',
    if: { arg: 'inlineListItemPreviewType', eq: 'Value' }
  },
  inlineListitemLabel: {
    control: 'text',
    if: { arg: 'inlineListItemPreviewType', eq: 'Value' }
  },
  inlineListitemValue: {
    control: 'text',
    if: { arg: 'inlineListItemPreviewType', eq: 'Value' }
  },
  inlineListItemBulletPointDivider: {
    control: 'boolean',
    // if: { arg: 'inlineListItemPreviewType', eq: 'Bullet Point' }
  },
  inlineListItemBulletPointText: {
    control: 'boolean',
    if: { arg: 'inlineListItemPreviewType', eq: 'Bullet Point' }
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


