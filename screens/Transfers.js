import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React, {useState, useReducer} from 'react';
import BgHeader from '../components/Button/BgHeader';
import {
  Colors,
  TextComponent,
  actuatedNormalize,
  Fonts,
} from '../constants/CommonImport';
import PrimaryBgComponent from '../components/Button/PrimaryBgComponent';
import TextInputComponent from '../components/Button/TextInputComponent';
import PrimaryButton from '../components/Button/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import ProgressHeader from '../components/Button/ProgressComponent';
import {globalStyles} from '../constants/GlobalStyles';
import DropdownComponent from '../components/Button/DropdownComponent';
import {useTheme} from '../constants/Theme/ThemeProvider';
import BottomButton from '../components/Button/BottomButton';

const Transfers = props => {
  const {theme, toggleTheme} = useTheme();

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [droperrorMsg, setdropErrorMsg] = useState('');
  const [drope2rrorMsg, setdrop2ErrorMsg] = useState('');
  const [enableButton, setenableButton] = useState(true);

  const TransferTimingData = [
    {
      label: 'Now',
      value: 'Now',
    },
    {
      label: 'Later',
      value: 'Later',
    },
  ];
  const ReasonTransferData = [
    {
      label: 'Investment Purpose',
      value: 'Investment Purpose',
    },
    {
      label: 'Pay Loan',
      value: 'Pay Loan',
    },
  ];
  const initialState = {
    formData: {
      transfertimingOpt: {
        value: '',
        errorMsg: '',
        options: [
          {
            label: 'Now',
            value: 'Now',
          },
          {
            label: 'Later',
            value: 'Later',
          },
        ],
      },
      reasontransferOpt: {
        value: '',
        errorMsg: '',
        options: [
          {
            label: 'Investment Purpose',
            value: 'Investment Purpose',
          },
          {
            label: 'Pay Loan',
            value: 'Pay Loan',
          },
        ],
      },
    },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'commonUpdate':
        return {
          ...state,
          ...action.payload,
        };

      default:
        return {
          ...state,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (value, name) => {
    console.log('value and name>>>>>>>', value, name, state);
    if (value == null) {
      return;
    }
    let tempState = state;
    let tempFormData = tempState['formData'];

    tempFormData[name].value = value;

    tempState['formData'] = tempFormData;

    dispatch({
      type: 'commonUpdate',
      payload: tempFormData,
    });
  };

  const handleUsernameChange = text => {
    setUsername(text);
    if (text.length < 3) {
      setenableButton(true);
      setErrorMsg('Enter The UserName');
      // setErrorMsg('Username must be at least 3 characters long');
    } else {
      setErrorMsg('');
      setenableButton(false);
    }
  };

  const GoToHome = () => {
    if (state.formData.reasontransferOpt.value === '') {
      setdropErrorMsg('Select Value');
    } else if (state.formData.transfertimingOpt.value === '') {
      setdrop2ErrorMsg('Select Value');
    } else {
      navigation.navigate('Home');
    }
    // navigation.navigate('PassWord')
  };
  return (
    <>
      <PrimaryBgComponent
        ProgressHeader={true}
        currentStep={1}
        totalStep={3}
        currentStepColor={'#db0011'}
        RemainingStepColor={'#eeeeee'}
        primaryBgColor={theme.primaryBgColor}
        BottomButton={
          <BottomButton
            show={true}
            onPress={() => GoToHome()}
            label={'proceed'}
            TotalAmount={'10.00'}
            limitamount1={'150,000.00'}
            limitamount2={'150,000.00'}
          />
        }
        BgHeader={
          <BgHeader
            title={'Make a Transfer'}
            customSvg={true}
            backButtonIsRequired={true}
            color={theme.primaryWhiteColor}
          />
        }>
        <View style={globalStyles.ScreenMainContainer}>
          <TextInputComponent
            label="Transfer Amount"
            labelStyle={{
              fontFamily: I18nManager.isRTL ? Fonts.Bold_Ar : Fonts.Bold_En,
              fontSize: actuatedNormalize(16),
            }}
            mandatory={false}
            placeHolder="0.00"
            textstyle={{
              fontFamily: I18nManager.isRTL ? Fonts.Bold_Ar : Fonts.Bold_En,
              fontSize: actuatedNormalize(16),
            }}
            value={username}
            onChangeText={handleUsernameChange}
            errorMsg={errorMsg}
            inputStyle={{width: '65%'}}
            isCurrencySwitch={true}
            switchinitial={0}
            switchtextColor={'grey'}
            switchselectedColor={'black'}
            switchbuttonColor={'#ffffff'}
            switchbackgroundColor={'black'}
            switchOptions={[
              {
                label: 'SAR',

                value: 'SAR',
              },
              {
                label: 'BHD',

                value: 'BHD',
              },
            ]}
          />
          <TextComponent
            style={[
              globalStyles.TextComponentLabelstyle,
              {
                color: theme.primaryTextColor,
              },
            ]}>
            Transfer Details
          </TextComponent>
          <TextComponent
            style={[
              globalStyles.TextComponentDisclaimerstyle,
              {
                color: theme.primaryTextColor,
              },
            ]}>
            Please note all fields marked with * are mandatory
          </TextComponent>
          <TextInputComponent
            inputStyle={{width: '100%'}}
            sarlabel={'SAR'}
            label="Beneficiery Full Name"
            textstyle={globalStyles.TextInputComponenttextstyle}
            mandatory={true}
            placeHolder="JOHNSON"
            value={username}
            onChangeText={handleUsernameChange}
            errorMsg={errorMsg}
          />
          <TextInputComponent
            label="Beneficiery Bank Name"
            textstyle={globalStyles.TextInputComponenttextstyle}
            mandatory={true}
            placeHolder="BARCLAYS BANK PLC"
            editable={false}
            inputStyle={globalStyles.NoneditableInputstyle}
            value={username}
            onChangeText={handleUsernameChange}
            //errorMsg={errorMsg}
            isTooltiprequired={true}
          />
          <DropdownComponent
            header={'Please Select Reason For Transfer'}
            textstyle={globalStyles.TextInputComponenttextstyle}
            data={state.formData.reasontransferOpt.options}
            label="Reason For Transfer"
            placeholdertext="Please Select Reason For Transfer"
            mandatory={true}
            onPress={value => handleChange(value, 'reasontransferOpt')}
            value={state.formData.reasontransferOpt.value}
            errorMsg={droperrorMsg}
          />
          <TextComponent
            style={[
              globalStyles.TextComponentDisclaimerstyle,
              {
                marginTop: actuatedNormalize(-10),
              },
            ]}>
            Choose the reason "other purpose" if you want to add more details to
            Recipient Bank.
          </TextComponent>
          <DropdownComponent
            header={'Please Select Transfer Timing'}
            textstyle={globalStyles.TextInputComponenttextstyle}
            data={state.formData.transfertimingOpt.options}
            label="Transfer Timing"
            placeholdertext="Please Select Transfer Timing"
            mandatory={true}
            onPress={value => handleChange(value, 'transfertimingOpt')}
            value={state.formData.transfertimingOpt.value}
            errorMsg={drope2rrorMsg}
          />

          <TextInputComponent
            inputStyle={{width: '100%'}}
            label="Reference"
            mandatory={false}
            placeHolder="Enter A Reference (Optional)"
            value={username}
            onChangeText={handleUsernameChange}
            errorMsg={errorMsg}
          />
        </View>
      </PrimaryBgComponent>
    </>
  );
};

export default Transfers;

const styles = StyleSheet.create({});
