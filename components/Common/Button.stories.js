import { MainButton,LinkButton,GroupButton,QuickButton,ListButton } from './Button';
import SvgIconList from '../../constants/SvgIconList';
import { useTranslation } from 'react-i18next';

export const MainButtonComponentStory = (args) =>{ 
  const { t } = useTranslation();
  args.label=t('initialLang:action')
  return(<MainButton {...args} />)
};
 MainButtonComponentStory.args = {
  backgroundColor:"#db0011",
  enablePrimaryBtn:false,
  enableSecondaryBtn:false,
  type:"large",//large/small
  enableLeftIcon:true,
  enableRightIcon:true,
  disabled:false,
  onPress:null
};
MainButtonComponentStory.argTypes = {
  backgroundColor: {control: 'color'},
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
  language:"en" ,//en/ar,
  theme:"light" //light/dark
};

export const GroupButtonComponentStory = (args) =>{
  const { t } = useTranslation();
  args.primaryLabel=t('initialLang:action')
  args.secondaryLabel=t('initialLang:action')
  args.tertiaryLabel=t('initialLang:action')
  return(<GroupButton {...args} />)
};
  GroupButtonComponentStory.args = {
  backgroundColor:"#db0011",
  type:"stacked",//stacked/inline
  enableprimary:false,
  enableSecondary:false,
  enableTertiary:false,
  enableLeftIcon:true,
  enableRightIcon:true,
  onPressPrimary:null,
  onPressSecondary:null,
  onPressTertiary:null
  };
GroupButtonComponentStory.argTypes = {
  backgroundColor: {control: 'color'},
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
quickActionButtonType:1,//1/2/3
badge:true,
quickNotificationCount:"2",
onPress:null
};

export const ListButtonComponentStory = (args) =>{
  const { t } = useTranslation();
  args.label=t('initialLang:action')
  args.listHeadlLine=t('initialLang:headline')
  return(<ListButton {...args} />)
};
ListButtonComponentStory.args = {
 showIcon:true,
 Icon:<SvgIconList
 icon="AccountAction"
 width={24}
 height={24}
/>,
 listButtonType:1,//1/2/3/4
 listDescription:"Lorem IPsum",
 showBadge:true,
 listBadgeText:"Active",
onPress:null
};

export default {
  title: 'components/ButtonComponent',
};
