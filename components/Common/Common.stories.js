// stories/MyButton.stories.js
import BgHeaderComponent from './BgHeader';
import PostLoginHeader from './PostLoginHeader';
import ButtonComponent from './ButtonComponent';
import DarkLightToggle from './DarkLightToggle';
import LogoComponent from './LogoComponent';
import PrimaryBgComponent from './PrimaryBgComponent';
import PrimaryButtonComponent from './PrimaryButton';
import SecondaryButtonComponent from './SecondaryButton';
import TextComponent from './TextComponent';
import TextInputComponent from './TextInputComponent';
import BottomButton from './BottomButton';
import DropdownComponent from './DropdownComponent';
import OptionButton from '../OptionButton';
import ProgressHeader from './ProgressComponent';
import CheckboxComponent from './CheckboxComponent';
import Divider from './Divider';
import MainButton from '../NewButton/MainButton';
import SvgIconList from '../../constants/SvgIconList';
import Paginator from './Paginator';
import Toggleswitch from './Toggleswitch';
import RadioButton from '../RadioButton';
import Avatarcomponent from './Avatarcomponent';
import TooltipComponent from './TooltipComponent';
import SnackBar from '../SnackBar/SnackBar';
import AccordianMenu from '../Accordian/AccordianMenu';
import TabsComponent from './TabsComponent';
import ProgressBar from '../ProgressBar/ProgressBar';

import { Close,Success,GreyInfo} from '../../constants/SvgLocations';
import { actuatedNormalize } from '../../constants/PixelScaling';
import PasswordStrength from '../PasswordStrength/PasswordStrength';
import EmptystateNote from './EmptystateNote';
import MainHeader from './MainHeader';

const data = [
  { title: 'Item 1', text: 'Text 1' },
  { title: 'Item 2', text: 'Text 2' },
  { title: 'Item 3', text: 'Text 3' },
  { title: 'Item 4', text: 'Text 4' },
  { title: 'Item 5', text: 'Text 5' },
];

const subdata = [
    { title: 'Item 1', text: 'Text 1' },
    { title: 'Item 2', text: 'Text 2' },
    { title: 'Item 3', text: 'Text 3' },
   
  ];

  
  
export default {
  title: 'components/EntireComponents',
};

// export const ToggleThemeStory = args => <DarkLightToggle {...args} />;
// ToggleThemeStory.args = {
//   title: 'Primary Button',
//   color: 'blue',
//   textColor: 'white',
// };
// export const BgHeaderStory = args => <BgHeaderComponent {...args} />;
// BgHeaderStory.args = {
//   title: 'Primary Button',
//   // color: 'white',
//   textColor: 'red',
//   enableBackButton: true,
//   enableCloseButton: false,
// };
// BgHeaderStory.argTypes = {
//   textColor: {control: 'color'},
// };
export const PostLoginHeaderStory = args => <PostLoginHeader {...args} />;
PostLoginHeaderStory.args = {
  title: 'Primary Button',
  TextColor: 'white',
  enableBackButton: true,
  enableCloseButton: false,
  hideHeader:false,
  enableLivechat:true
};
PostLoginHeaderStory.argTypes = {
  textColor: {control: 'color'},
};


export const TextComponentStory = args => <TextComponent {...args} />;
TextComponentStory.args = {
  children: 'SAB RMB',
  textColor: 'blue',
  fontSize: 16,
  fontFamily: 'Regular',
  fontWeight: '600',
  onPress: null,
  numberOfLines: 1,
  textTransform: 'none',
};

TextComponentStory.argTypes = {
  children: {control: 'text'},
  textColor: {control: 'color'},
  fontSize: {control: 'number'},
  fontFamily: {
    control: 'select',
    options: ['Bold', 'Regular', 'Light'],
  },
  fontWeight: {
    control: 'select',
    options: ["null",'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  onPress: {action: 'pressed'},
  numberOfLines: {control: 'number'},
  textTransform: {
    control: 'select',
    options: ['none', 'capitalize', 'uppercase', 'lowercase'],
  },
};

export const TextInputComponentStory = args => <TextInputComponent {...args} />;
TextInputComponentStory.args = {
  //title: 'Primary Button',
  //color: 'blue',
  textColor: 'blue',
  isTooltiprequired: false,
  label: '',
  sarlabel: '',
  secureTextEntry:false,
  isPassInput:false,
  //editable: false,
  isCurrencySwitch: true,
  //placeHolder: 'Currency',
  switchOnPress: null,
  SwitchStyle: null,
  switchinitial: 0,
  switchtextColor: 'grey',
  switchselectedColor: 'black',
  switchbuttonColor: '#ffffff',
  switchbackgroundColor: 'black',
  switchOptions: [
    {
      label: 'SAR',

      value: 'SAR',
    },
    {
      label: 'BHD',

      value: 'BHD',
    },
  ],
};

export const LogoComponentStory = args => <LogoComponent {...args} />;
LogoComponentStory.args = {
  enableLogo: true,
};

export const PrimaryBgComponentStory = args => <PrimaryBgComponent {...args} />;
PrimaryBgComponentStory.args = {
  title: 'Primary Button',
  primaryBgColor: 'red',
};

// export const PrimaryButtonStory = args => <PrimaryButtonComponent {...args} />;
// PrimaryButtonStory.args = {
//   textColor: 'white',
//   icon:false,
//   disabled:false,
//   PrimaryButtonBgClr:"#db0011",
//   label:"submit"
// };

// export const SecondaryButtonStory = args => <SecondaryButtonComponent {...args} />;
// SecondaryButtonStory.args = {
//   title: 'Primary Button',
//   color: 'blue',
//   textColor: 'white',
// };

export const ButtonComponentStory = args => <ButtonComponent {...args} />;

ButtonComponentStory.args = {
  enablefirstPrimary:true,
  enablePrimary: true,
  enableSecondary: true,
  // textColor: "yellow",
  textColor: '#1d262c',
  secondaryTextColor: 'red',
  // secondaryTextColor: '#1d262c',
  icon: false,
  disabled: false,
  PrimaryButtonBgClr: '#db0011',
  // SecondaryButtonBgClr: 'pink',
  SecondaryButtonBgClr: 'ivory',
  label: 'submit',
};
ButtonComponentStory.argTypes = {
  enablePrimary: {control: 'boolean'},
  enableSecondary: {control: 'boolean'},
  textColor: {control: 'color'},
  secondaryTextColor: {control: 'color'},
  disabled: {control: 'boolean'},
  PrimaryButtonBgClr: {control: 'color'},
  SecondaryButtonBgClr: {control: 'color'},
  label: {control: 'text'},
};

export const DropdownComponentStory = args => <DropdownComponent {...args} />;
DropdownComponentStory.args = {
  header: 'Header',
  label: 'Label',
  onPress: null,
  placeholdertext: 'Placeholdertext',
  mandatory: true,
  errorMsg: 'Please Select',
  data: [
    {
      label: 'SAR',

      value: 'SAR',
    },
    {
      label: 'BHD',

      value: 'BHD',
    },
  ],
};

export const BottomButtonStory = args => <BottomButton {...args} />;
BottomButtonStory.args = {
  show: true,
  TotalAmount: '10,000',
  limitamount1: '150,000.00',
  limitamount2: '150,000.00',
  onPress: null,
  label: 'submit',
};

export const ProgressHeaderStory = args => <ProgressHeader {...args} />;
ProgressHeaderStory.args = {
  ProgressHeader: true,
  currentStep: 1,
  totalStep: 3,
  currentStepColor: '#db0011',
  RemainingStepColor: '#eeeeee',
};

export const CheckboxComponentStory = args => <CheckboxComponent {...args} />;
CheckboxComponentStory.args = {
  value: true,
  onPress: null,
};
export const OptionButtonComponentStory = args => <OptionButton {...args} />;
OptionButtonComponentStory.args = {
 BgColor:"#eeeeee",
 enableArrow:true,
 // BgColor={"#eeeeee"}
  label:"View Virtual card"

};
export const DividerComponentStory = args => <Divider {...args} />;
DividerComponentStory.args = {
  backgroundColor: "blue",
  height: 5,
};
export const PaginatorComponentStory = args => <Paginator {...args} />;
PaginatorComponentStory.args = {
  value: true,
  data:data,
  subdata:subdata,
  onPress: null,
 
 
};
export const ToggleComponentStory = args => <Toggleswitch {...args} />;
ToggleComponentStory.args = {
  value: true,
};

export const RadioComponentStory = args => <RadioButton {...args} />;
RadioComponentStory.args = {
  value: true,
   onPress:null,
   errorMsg:"Please select a value to continue",
   textlabel:"Yes",
   textlabel2:"No"

};
export const AvatarComponentStory = args => <Avatarcomponent {...args} />;
AvatarComponentStory.args = {
  value: true,
  onPress:null,
  avatarblack:true,
  avatarwhite:true,
  avatarsplit:true,
  avatarassbene:true,
  avataredit:true,
  avatarname:true

};
export const EmptyStateComponentStory = args => <EmptystateNote {...args} />;
EmptyStateComponentStory.args = {
  value: true,
  onPress:null,
  Headtext:"Header",
  SubText:"Content to come here in as many lines as required",
  Action:"Action"
  

};
export const MainButtonComponentStory = args => <MainButton {...args} />;
MainButtonComponentStory.args = {
 backgroundColor:"#db0011",
 label:"Action",
 enablePrimaryLarge:true, 
 enablePrimarySmall:false,
// enablePrimaryLargeBlack:false,
 //enablePrimaryLargeSmall:false,
 enableSecondaryBorderBlack:false,
// enableSecondaryBorderRed:false,
// preloginRedButton:false,
 //preloginBlackButton:false,
 disabled:false,
 quickActionButton:false,
  Icon:<SvgIconList
                         icon="AccountAction"
                         width={24}
                         height={24}
                      />,
// Icon:	<GreyInfo
// width={actuatedNormalize(16)}
// height={actuatedNormalize(16)}
// />,
  quickActionButtonLabel:"Button",
  quickActionButtonType:1,
  linkButton:false,
  linkType:"large", // small/large
  listButton:false,
  listButtonType:1,
  listHeadlLine:"HeadLine",
  listDescription:"Lorem IPsum",
  listNotificationCount:1,
 // floatingButton:false,
  enableprimary:false,
  enableSecondary:false,
  enableImageButton:false,
  //segmentButton:false,
 // data:["First", "Second", "Third"],
  chips:false,
  chipsBackgroudColor:"#e5f2f2",
  chipsBorderColor:"#99cecc",
  chipsType:"small",//small/large/icon
  onPress:null
};
MainButtonComponentStory.argTypes = {
  backgroundColor: {control: 'color'},
}

export const AccordianStory = args => <AccordianMenu {...args} />;
AccordianStory.args = {
 HeaderText:"Home",
 subData:[
  {
    title: 'Transfer',
    key: 0,
  },
  {
    title: 'Umlaty',
    key: 2,
  },
  {
    title: 'PFM',
    key:3
  },
]
};

export const SnackBarStory = args => <SnackBar {...args} />;
SnackBarStory.args = {
  label:"Tag created successfully",
  backgroundColor:"#f9f2f3",
  borderColor:"#e5b2b5",
  Icon:<Success
  width={actuatedNormalize(24)}
  height={actuatedNormalize(24)}
  ></Success>,
  onPress:null
};

SnackBarStory.argTypes = {
  backgroundColor: {control: 'color'},
  borderColor:{control:'color'},
}

export const PasswordStrengthStory = args => <PasswordStrength {...args} />;
PasswordStrengthStory.args = {
  password:"hsbc1234",
  module:'Prelogin',
  label:"Password Strength"
};


export const TooltipComponentStory = args => <TooltipComponent {...args} />;
TooltipComponentStory.args = {
  // children: 'prompt text',
  textColor: 'black',
  backgroundColor: "white",
  tooltipColor: "#fbfcfe",
  // fontSize: 16,
  arrowMarginLeft: 0,
  arrowMarginTop: 0,
  fontFamily: 'Regular',
  placement: 'bottom',
  // onPress: null,
  // numberOfLines: 1,
  textTransform: 'none',
};

TooltipComponentStory.argTypes = {
  // children: {control: 'text'},
  textColor: {control: 'color'},
  backgroundColor: {control: 'color'},
  tooltipColor: {control: 'color'},
  // fontSize: {control: 'number'},
  arrowMarginLeft: {control: 'number'},
  arrowMarginTop: {control: 'number'},
  fontFamily: {
    control: 'select',
    options: ['Bold', 'Regular', 'Light'],
  },
  placement: {
    control: 'select',
    options: ["bottom" , "top" , "left" , "right" ]
  },
  // onPress: {action: 'pressed'},
  // numberOfLines: {control: 'number'},
  textTransform: {
    control: 'select',
    options: ['none', 'capitalize', 'uppercase', 'lowercase'],
  },
};

export const TabsComponentStory = args => <TabsComponent {...args} />;
TabsComponentStory.args = {
  // children: 'prompt text',
  numberOfTabs: 2,
  scrollEnabled: true,
  tabWidth: 90,
  textColor: 'black',
  fontFamily: 'Regular',
  fontWeight: '600',
  textTransform: 'none',
};

TabsComponentStory.argTypes = {
  // children: {control: 'text'},
  numberOfTabs: {control: 'number'},
  tabWidth: {control: 'number'},
  textColor: {control: 'color'},
  fontFamily: {
    control: 'select',
    options: ['Bold', 'Regular', 'Light'],
  },
  fontWeight: {
    control: 'select',
    options: ["null",'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  textTransform: {
    control: 'select',
    options: ['none', 'capitalize', 'uppercase', 'lowercase'],
  },
};

export const MainHeaderStory = args => <MainHeader {...args} />;
MainHeaderStory.args = {
  bgColor:"#263a52",
  enableLogo:true,
  isAccountTypeReq:true,
  SearchIconReq:true,
  NotificationIconReq:true,
  AvatarIconReq:true,
  LanguageSwitchReq:false,
  AccountType:'Premier'

};
MainHeaderStory.argTypes = {
  bgColor: {control: 'color'},
};

export const ProgressBarStory = args => <ProgressBar {...args} />;
ProgressBarStory.args = {
  unfilledColor:"#eee",
  color:"#db0011",
  progress:0.6,
  testID:"transferhis_progressbar",
  accessibilityLabel:"transferhis_progressbar"
};
ProgressBarStory.argTypes = {
  color:{control: 'color'},
  unfilledColor:{control: 'color'},
  progress: {control: 'number'},
};