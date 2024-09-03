import { MainButton,LinkButton,GroupButton,QuickButton,ListButton } from './Button';
import SvgIconList from '../../constants/SvgIconList';
import { useTranslation } from 'react-i18next';
import { AccountActionDark, Home } from '../../constants/SvgLocations';
import { useTheme } from '../../constants/Theme/ThemeProvider';

export const MainButtonComponentStory = (args) =>{ 
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  args.label=t('initialLang:action')
  return(<MainButton {...args} />)
};
 MainButtonComponentStory.args = {
  backgroundColor:"#db0011",
  enablePrimaryBtn:false,
  enableSecondaryBtn:true,
  type:"large",//large/small
  enableLeftIcon:false,
  enableRightIcon:false,
  disablePrimaryBtn:false,
  disableSecondaryBtn:false,
  onPress:null,
  themeStatus:"light"
};
MainButtonComponentStory.argTypes = {
  backgroundColor: {control: 'color'},
  type: {
    control: 'select',
    options: ['large', 'small'],
  },
  themeStatus: {
    control: 'select',
    options: ['light', 'dark'],
  },
}

export const LinkButtonComponentStory = (args) =>{
  const { t } = useTranslation();
  args.label=t('initialLang:linkButton')
  return( <LinkButton {...args} />)
};
  LinkButtonComponentStory.args = {
  type:"large",//large/small
  enableLeftIcon:true,
  enableRightIcon:true,
  onPress:null,
};
LinkButtonComponentStory.argTypes = {
  type: {
    control: 'select',
    options: ['large', 'small'],
  },
}


export const GroupButtonComponentStory = (args) =>{
  const { t } = useTranslation();
  args.primaryLabel=t('initialLang:action')
  args.secondaryLabel=t('initialLang:action')
  args.tertiaryLabel=t('initialLang:action')
  return(<GroupButton {...args} />)
};
  GroupButtonComponentStory.args = {
  backgroundColor:"#db0011",
  buttonType:"stacked",//stacked/inline
  linktype:"large",
  enableprimary:true,
  enableSecondary:false,
  enableTertiary:false,
  enableLeftIcon:true,
  enableRightIcon:true,
  onPressPrimary:null,
  onPressSecondary:null,
  onPressTertiary:null,
  disablePrimary:true,
  disableSecondary:false,
  };
GroupButtonComponentStory.argTypes = {
  backgroundColor: {control: 'color'},
  buttonType: {
    control: 'select',
    options: ['stacked', 'inline'],
  },
  linktype: {
    control: 'select',
    options: ['large', 'small'],
  },
  
}

export const QuickButtonComponentStory = (args) => {
  const { t } = useTranslation();
  args.label=t('initialLang:action')
  args.quickActionButtonLabel=t('initialLang:action')
  return(<QuickButton {...args} />)
};
QuickButtonComponentStory.args = {
 Icon:<SvgIconList
 icon="AccountAction"
 width={24}
 height={24}
/>,
quickActionButtonType:"Vertical",//Vertical/Horizontal/Vertical-Small
badge:true,
quickNotificationCount:"2",
onPress:null
};
QuickButtonComponentStory.argTypes = {
  quickActionButtonType: {
    control: 'select',
    options: ['Vertical', 'Horizontal','Vertical-Small'],
  },
}

export const ListButtonComponentStory = (args) =>{
  const { t } = useTranslation();
  args.label=t('initialLang:action')
  args.listHeadlLine=t('initialLang:headline')
  return(<ListButton {...args} />)
};
ListButtonComponentStory.args = {
 showIcon:true,
 Icon:<SvgIconList
 icon="Home"
 width={24}
 height={24}
/>,
 listButtonType:"Big",//Big/Small/Right/Center
 listDescription:"Lorem IPsum",
 showBadge:true,
 listBadgeText:"Active",
onPress:null
};
ListButtonComponentStory.argTypes = {
  listButtonType: {
    control: 'select',
    options: ['Big', 'Small','Right','Center'],
  },
}

export default {
  title: 'components/ButtonComponent',
};
