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
  color: '#ffffff',
  //textColor: 'white',
  backButtonIsRequired: true,
  closeButtonIsRequired: false,
};

export const LogoComponentStory = args => <LogoComponent {...args} />;
LogoComponentStory.args = {
  title: 'Primary Button',
  color: 'blue',
  textColor: 'white',
};

export const PrimaryBgComponentStory = args => <PrimaryBgComponent {...args} />;
PrimaryBgComponentStory.args = {
  title: 'Primary Button',
  color: 'blue',
  textColor: 'white',
  primaryBgColor: '',
  ProgressHeader: true,
  currentStep: 1,
  totalStep: 3,
  currentStepColor: '#db0011',
  RemainingStepColor: '#eeeeee',
};

export const PrimaryButtonStory = args => <PrimaryButtonComponent {...args} />;
PrimaryButtonStory.args = {
  textColor: 'white',
  icon: false,
  disabled: false,
  PrimaryButtonBgClr: '#db0011',
  label: 'submit',
};

export const SecondaryButtonStory = args => (
  <SecondaryButtonComponent {...args} />
);
SecondaryButtonStory.args = {
  title: 'Primary Button',
  color: 'blue',
  textColor: 'white',
};

export const TextComponentStory = args => <TextComponent {...args} />;
TextComponentStory.args = {
  children: 'SAB RMB',
  color: 'blue',
  fontSize: 16,
  fontWeight: 'Regular',
  onPress: null,
  numberOfLines: 1,
  textTransform: 'none',
};

TextComponentStory.argTypes = {
  children: {control: 'text'},
  color: {control: 'color'},
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
  title: 'Primary Button',
  color: 'blue',
  textColor: 'white',
  isTooltiprequired: false,
  label: 'Label',
  sarlabel: '',
  isCurrencySwitch: true,
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

export const ButtonComponentStory = args => <ButtonComponent {...args} />;

ButtonComponentStory.args = {
  enablePrimary: true,
  enableSecondary: true,
  textColor: 'white',
  icon: false,
  disabled: false,
  PrimaryButtonBgClr: '#db0011',
  label: 'submit',
};
ButtonComponentStory.argTypes = {
  enablePrimary: {control: 'boolean'},
  enableSecondary: {control: 'boolean'},
  textColor: {control: 'color'},
  icon: {control: 'boolean'},
  disabled: {control: 'boolean'},
  PrimaryButtonBgClr: {control: 'color'},
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
