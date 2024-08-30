import { MainButton,LinkButton,GroupButton,QuickButton,ListButton } from './Button';
import SvgIconList from '../../constants/SvgIconList';
import i18n from '../../locales/i18n';


export const MainButtonComponentStory = args => <MainButton {...args} />;
MainButtonComponentStory.args = {
 backgroundColor:"#db0011",
 label: i18n.t('initialLang:action'),
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

export const LinkButtonComponentStory = args => <LinkButton {...args} />;
LinkButtonComponentStory.args = {
 label:i18n.t('initialLang:linkButton'),
 type:"large",//large/small
 enableLeftIcon:true,
 enableRightIcon:true,
 onPress:null
};

export const GroupButtonComponentStory = args => <GroupButton {...args} />;
GroupButtonComponentStory.args = {
 backgroundColor:"#db0011",
 primaryLabel:i18n.t('initialLang:action'),
 secondaryLabel:i18n.t('initialLang:action'),
 tertiaryLabel:i18n.t('initialLang:action'),
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

export const QuickButtonComponentStory = args => <QuickButton {...args} />;
QuickButtonComponentStory.args = {
 label:i18n.t('initialLang:action'),
 Icon:<SvgIconList
 icon="AccountAction"
 width={24}
 height={24}
/>,
quickActionButtonLabel:"Button",
quickActionButtonType:1,
badge:true,
quickNotificationCount:"2",
onPress:null
};

export const ListButtonComponentStory = args => <ListButton {...args} />;
ListButtonComponentStory.args = {
 label:"Action",
 showIcon:true,
 Icon:<SvgIconList
 icon="AccountAction"
 width={24}
 height={24}
/>,
 listButtonType:1,
 listHeadlLine:"HeadLine",
 listDescription:"Lorem IPsum",
 showBadge:true,
 listBadgeText:"Active",
onPress:null
};

export default {
  title: 'components/ButtonComponent',
};
