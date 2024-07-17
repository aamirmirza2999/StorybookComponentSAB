// stories/MyButton.stories.js
import BgHeaderComponent from './BgHeader';
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

export default {
  title: 'components/EntireComponents',
};

// export const ToggleThemeStory = args => <DarkLightToggle {...args} />;
// ToggleThemeStory.args = {
//   title: 'Primary Button',
//   color: 'blue',
//   textColor: 'white',
// };
export const BgHeaderStory = args => <BgHeaderComponent {...args} />;
BgHeaderStory.args = {
  title: 'Primary Button',
  // color: 'white',
  textColor: 'red',
  backButtonIsRequired: true,
  closeButtonIsRequired: false,
};
BgHeaderStory.argTypes = {
  textColor: {control: 'color'},
};

export const TextComponentStory = args => <TextComponent {...args} />;
TextComponentStory.args = {
  children: 'SAB RMB',
  textColor: 'blue',
  fontSize: 16,
  fontWeight: 'Regular',
  onPress: null,
  numberOfLines: 1,
  textTransform: 'none',
};

TextComponentStory.argTypes = {
  children: {control: 'text'},
  textColor: {control: 'color'},
  fontSize: {control: 'number'},
  fontWeight: {
    control: 'select',
    options: ['Bold', 'Regular', 'Light'],
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
  label: 'Label',
  sarlabel: '',
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
