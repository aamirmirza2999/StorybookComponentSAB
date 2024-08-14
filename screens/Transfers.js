import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView
} from 'react-native';
import React, {useState, useReducer} from 'react';
import BgHeader from '../components/Common/BgHeader';
import PostLoginHeader from '../components/Common/PostLoginHeader'
import {
  Colors,
  TextComponent,
  actuatedNormalize,
  Fonts,
} from '../constants/CommonImport';
import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
import TextInputComponent from '../components/Common/TextInputComponent';
import OptionButton  from '../components/OptionButton';
import PrimaryButton from '../components/Common/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import ProgressHeader from '../components/Common/ProgressComponent';
import {globalStyles} from '../constants/GlobalStyles';
import DropdownComponent from '../components/Common/DropdownComponent';
import {useTheme} from '../constants/Theme/ThemeProvider';
import BottomButton from '../components/Common/BottomButton';
import CheckboxComponent from '../components/Common/CheckboxComponent';
import { spacingXS } from '../constants/Size';
import BottomSheetComponent from '../components/Common/BottomSheetComponent';
import ListComponent from '../components/Common/ListComponent';
import NotificationBadge from '../components/Common/NotificationBadge';
import SvgIconList from '../constants/SvgIconList';

const Transfers = props => {
  const {theme, toggleTheme} = useTheme();

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [droperrorMsg, setdropErrorMsg] = useState('');
  const [drope2rrorMsg, setdrop2ErrorMsg] = useState('');
  const [enableButton, setenableButton] = useState(true);
  const [check, setCheck] = useState(false);
  const [showpopup ,setPopup] =useState(false)

  const ListData = [
    {
      id:"1",
      Header:'Hello',
      sublabel:"Hi"
    },
    {
      id:"2",
      Header:'Hello',
      sublabel:"Hi"
    },
    {
      id:"3",
      Header:'Hello',
      sublabel:"Hi"
    },
    {
      id:"4",
      Header:'Hello',
      sublabel:"Hi"
    }
  ]
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
  const handletnc = value => {
    setCheck(value);
  };
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

  // const handlechange=()=>{
  //   alert("hello")
  // }

  const GoToHome = () => {
    setPopup(true)
    // if (state.formData.reasontransferOpt.value === '') {
    //   setdropErrorMsg('Select Value');
    // } else if (state.formData.transfertimingOpt.value === '') {
    //   setdrop2ErrorMsg('Select Value');
    // } else {
    //   navigation.navigate('Home');
    // }
    // navigation.navigate('PassWord')
  };
  return (
    <>
      <PrimaryBgComponent
        ProgressHeader={true}
        currentStep={1}
        totalStep={3}
        currentStepColor={theme.primaryredstatic}
        RemainingStepColor={'#eeeeee'}
        BottomButton={
          <BottomButton
            show={true}
            onPress={() => props.navigation.navigate('Paginatorscreendisplay')}    
            // onPress={() => props.navigation.navigate('RadioBtn')}        
            label={'proceed'}
            TotalAmount={'10.00'}
            limitamount1={'150,000.00'}
            limitamount2={'150,000.00'}
          />
        }
        BgHeader={
          <PostLoginHeader
            title={'Make a Transfer'}
            TextColor={'white'}
            customSvg={true}
            enableBackButton={true}
            enableCloseButton={true}
            textColor={theme.primarywhitestatic}
            multiplesvgRequired={false}
           // enableLivechat={true}
           multiplesvgUI={
            <>
              <TouchableOpacity
              testID={"svgRequired"}
              accessibilityLabel={"svgRequired"}
              // style={[styles.IconViewStyle2,{
                
              // }, props.IconViewStyle2]}
              // onPress={
              //  () => {(() => props.svgFunc()) }
                
              // }
              >
              <SvgIconList
              icon="backIcon"
              width={actuatedNormalize(25)}
              height={actuatedNormalize(25)}
              transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
            />
              </TouchableOpacity>
            <SvgIconList
            icon="backIcon"
            width={actuatedNormalize(25)}
            height={actuatedNormalize(25)}
            transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
          />
          
          </>
            }

            // color={theme.primaryWhiteColor}
          />
        }>
          {showpopup?
          <BottomSheetComponent
          Show={showpopup}
          bottomReached={()=>{setPopup(false)}}
          BottomSheetContent={
            <View>
              <TextComponent>This is the bottom sheet content</TextComponent>
            </View>
          }
        />:null}
        <View
          style={{
            // paddingHorizontal:actuatedNormalize(16),
            // paddingTop:actuatedNormalize(24),
            //paddingBottom: actuatedNormalize(24),
          }}>
          <ProgressHeader
            ProgressHeader={true}
            currentStep={1}
            totalStep={3}
            currentStepColor={'#db0011'}
            RemainingStepColor={'#eeeeee'}
          />
          
        </View>
        {/* <View
          style={{
                alignItems:"flex-end"
          }}
        >
            <OptionButton
              testID={"optionHome"}
              accessibilityLabel={"optionHome"}
              onPress={handlechange}
                  containerStyle={{ 
                        width:"45%"
                  }}
                  containertxt={{
                  paddingBottom:actuatedNormalize(3)
                  }}
                  enableArrow={true}
                label={"Change Account"}
            
            ></OptionButton>
        </View> */}

        <View style={globalStyles.ScreenMainContainer}>
          <TextInputComponent
            label="Transfer Amount"
            labelStyle={{
              fontFamily:Fonts.Bold,
              fontSize: actuatedNormalize(16),
            }}
            mandatory={false}
            placeHolder="0.00"
            textstyle={{
              fontFamily:  Fonts.Bold,
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
                color: theme.primaryblack,
                
              },
            ]}>
            Transfer Details
          </TextComponent>
          <TextComponent
            style={[
              globalStyles.TextComponentDisclaimerstyle,
              {
                color: theme.primaryblack,
                marginTop:spacingXS
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
          {/* <TextComponent
            style={[
              globalStyles.TextComponentDisclaimerstyle,
              {
                marginTop: actuatedNormalize(-10),
              },
            ]}>
            Choose the reason "other purpose" if you want to add more details to
            Recipient Bank.
          </TextComponent> */}
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
          {ListData.map((item)=>{
            return(
              <ListComponent
              // onPress={}
              Header={item.Header}
              SubText={item.sublabel}
              IconFirst={"InfoIconRed"}
              IconFirstwidth={actuatedNormalize(24)}
              IconFirstheight={actuatedNormalize(24)}
              IconSecond={"Iconright"}
              IconSecondwidth={actuatedNormalize(18)}
              IconSecondheight={actuatedNormalize(18)}
              SubcomponentItem={
                  <NotificationBadge
                  backgroundColor={"#ffbb33"}
                  width={actuatedNormalize(20)}
                  height={actuatedNormalize(20)}
                  fontSize={actuatedNormalize(12)}
                  color={"#000"}
                  BadgeText={item.id}
                  />
              }
              />
            )

          })}
          
          
          
          <View style={{flexDirection: 'row'}}>
            <CheckboxComponent
              value={check}
              onPress={handletnc}
              // icon={true}
              // iconCheck={()=> <CheckboxSelected />}
              // iconUnCheck={()=> <CheckboxUnSelected1 />}
            />
            <TextComponent
              style={[
                globalStyles.tncTextStyle,
                {
                  marginTop: actuatedNormalize(10),
                  color: theme.primaryblack,
                },
              ]}>
              I Agree To The{' '}
              <TextComponent
                style={[
                  globalStyles.tncTextStyle,
                  {textDecorationLine: 'underline'},
                ]}>
                Terms & Conditions
              </TextComponent>
            </TextComponent>
          </View>
        </View>
        
      

     
      </PrimaryBgComponent>
    </>
  );
};

export default Transfers;

const styles = StyleSheet.create({});
