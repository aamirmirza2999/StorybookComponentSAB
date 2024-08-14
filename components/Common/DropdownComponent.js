import React, { useState,useImperativeHandle,Component, createRef } from 'react';
import {
  View,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  StyleSheet,
  I18nManager,
  FlatList,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import { connect } from 'react-redux'

//import ThemeHOC from '../../theme/ThemeHOC';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
//import { IconsChevronDownBlue, IconsChevronDownBlackDark,IconsChevronDownBlack,InputIconsVerified,Darkexclamatory , TransferArrow} from '../../constants/SvgLocations'
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from '../../constants/PixelScaling';

// import { withTranslation } from 'react-i18next';

//import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import dropdownPopup from './dropdownPopup';
import { globalStyles } from '../../constants/GlobalStyles';
import {DropdownArrow,ErrorIcon} from '../../constants/SvgLocations'
import {  spacingM, spacingS, spacingXS } from '../../constants/Size';


let IosSpecific = Platform.OS === 'ios' ?0 : 0;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height - IosSpecific;
const firstOff =
  Number(deviceHeight / 2 + deviceHeight / 43) ;
const margin = Number(firstOff / 4.25);
let IosSpecific1 =
  Platform.OS === 'ios' ?70 : 70;
const deviceHeight1 =
  (Dimensions.get('window').height ) * 0.7 - IosSpecific1;

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      placeholder: true
    }
  }

//   componentDidMount(){
//     if(this.props.focusValueOnFirstRender){
// this.setState({
//   placeholder: false
// })
//     }
//   }
//   componentDidUpdate(prevprops) {
//     if (this.props.AutoLogoutPopUpShown !== prevprops.AutoLogoutPopUpShown) {
//       if (this.props.AutoLogoutPopUpShown) {
//         this.setState({ modal: false });
//       }
//     }
//     if(this.props.autoVisible != prevprops.autoVisible){
//       if(this.props.autoVisible){
//         this.handlePopup()
//         this.props.setAutoVisible(false)
//       }
//     }
//   }
  handlePopup = () => {
    if (this.props.disabled !== true) {
      if(this.props.enablecustompopup)
        {
      this.props.handlePopup()
        }
      this.setState({ modal: true });
    }
  }

  handlePopupClose = (value, item) => {
    this.props.onPress(value, item)
    this.setState({ modal: false, placeholder: true });
  }
  handleClose = () => {
    this.setState({ modal: false });
  }

  render() {
    const { t } = this.props;
    let labelValue
    this.props.data && this.props.data.map((item) => {
      if(item.value!=="" && item.value!== null && item.value!== undefined) {
        if (item.value === this.props.value) {
        labelValue = item.label
      }
      else if(item.value.toUpperCase() === this.props.value ){
        labelValue = item.label
      }
      else if(this.props.ForceValue){
        labelValue = this.props.value
      }} else {
        labelValue = this.props.value
      }
    })
  
    const SelectPopupLayout = !!this.props.CustomPopup ? this.props.CustomPopup : dropdownPopup
    const DropIcon = this.props?.icon

    return (
      <>
        <View style={{
        paddingBottom:spacingM
        //marginTop: actuatedNormalize(24),
      }}>
        {this.props.label ? (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
       <TextComponent 
          // style={globalStyles.inputLabelStyle}
          style={[
            {
           // fontSize: '14px',
            // flexDirection: 'row',
            // justifyContent: 'center',
            fontFamily: Fonts.Regular,
            // paddingBottom:spacingXS,
            fontSize: actuatedNormalize(14),
            color: '#000000',
          },
          this.props.labelStyle
        ]}
          >
            {this.props.label}
            {this.props.mandatory ? (
              <TextComponent
                style={[
                  {
                    fontSize: actuatedNormalize(14),
                    fontFamily: Fonts.Regular,
                    color: "red",
                    lineHeight: 15,
                  },
                  this.props.mandatoryStyle,
                ]}
              >
                {' *'}
              </TextComponent>
            ) : null}
          </TextComponent>
        </View>
      ) : null}
          <TouchableOpacity
            onPress={() => this.handlePopup()}
            style={[styles.inputBoxContainer, {
             
              backgroundColor: this.props.disabled ? "rgba(118, 118, 118, 0.25)":"#ffffff",
              borderColor: this.props.errorMsg ? "#d22630"  :"#d9d9d9",
            }, this.props.inputBoxContainer]}
           
            disabled={this.props.disabled}
          >
            {this.state.placeholder === true ?
              <View style={[{
                position: 'absolute',
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
                left: actuatedNormalize(16),
                // opacity: 0.5,
              }, this.props.arabicplaceholdertext]}>

                <TextComponent
                {...this.props.placeholdertextProps}
                style={[styles.defaultTextStyle, {
                  color:"#000000",
                  width: '100%',
                  top: Platform.OS === 'ios' ? 2 : -1
                }, this.props.placeholdertextStyle]}
                numberOfLines={1}
                ellipsizeMode="tail"

                >{this.props.value === ''|| this.props.value === null || this.props.value === undefined?this.props.placeholdertext:null}</TextComponent>

              </View> : null}

            <TextComponent
              testID={this.props.testID}
              accessibilityLabel={this.props.accessibilityLabel}
              disabled={this.props.disabled}
              onPress={() => this.handlePopup()}
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.defaultTextStyle, { color: "#000000",
                 fontSize: actuatedNormalize(14),
                opacity: this.props.disabled === true ? 0.5 : null ,
                fontFamily:this.props.value === ''|| this.props.value === null || this.props.value === undefined  ? Fonts.Regular :
                 Fonts.Bold,
              }, this.props.textInputProps]}>{this.props.customvalue?this.props.customvalue:labelValue}</TextComponent>
           
           {this.props.errorMsg ?
           <ErrorIcon/>
           :
            <DropdownArrow width={actuatedNormalize(25)} height={actuatedNormalize(25)}/>
           }
            
         
          </TouchableOpacity>

          {this.props.errorMsg ?
            <TextComponent style={[styles.errorstyle, this.props.errorStyle,{color : "#d22630"}]}>{(this.props.errorMsg)}</TextComponent>
            : null
          }
        </View>

        {this.state.modal === true ?
          <>
            <SelectPopupLayout
            blurfalse={this.props.blurfalse?true:false}
              modal={this.state.modal}
              options={this.props.data}
              header={this.props.header}
              placeholder={this.props.placeholder}
              placeholdertext={this.props.placeholdertext}
              onPress={this.handlePopupClose}
              handleClose={this.handleClose}
              errorMsg={this.props.errorMsg}
              customOptionContainer={this.props.customOptionContainer} 
              textstyle={this.props.textstyle} 
            />
          </> : null}

      </>
    );
  }
}




const styles = StyleSheet.create({
  defaultTextStyle: {
    fontSize: actuatedNormalize(14),
    width: '80%',
    color: '#1d262c'
  },
  subContainer: {
    flex: 1,
    paddingTop: actuatedNormalize(81),
    marginHorizontal: spacingS,
  },
  optionsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#B8A1A1',
    paddingVertical: actuatedNormalize(10),
  },
  optionsFirst: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsSecond: {
    width: '80%',

    justifyContent: 'center',
  },
  optionsThird: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: actuatedNormalize(10),
  },
  bankNameTxt: {
    fontSize: actuatedNormalize(14),
    color: '#1D262C',
    fontFamily:Fonts.Regular,
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    lineHeight: actuatedNormalize(20),
  },
  inputBoxContainer: {
    marginTop: spacingXS,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacingS,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    height: actuatedNormalize(44),
    borderRadius: actuatedNormalize(8),

  },


  textInput: {
    color: "#878787",
    fontSize: actuatedNormalize(16)
  },
  svgTrans: {
    transform: [
      {
        scaleX: I18nManager.isRTL ? -1 : 1
      }
    ]
  },
  errorstyle: {
    fontSize: actuatedNormalize(12),
    top: I18nManager.isRTL ? actuatedNormalize(5): actuatedNormalize(5),
    marginBottom: I18nManager.isRTL ? actuatedNormalize(5): actuatedNormalize(5),
    letterSpacing: 0,
    fontFamily:Fonts.Regular,
  },
});




export default DropdownComponent;

//export default ThemeHOC(withTranslation()(SelectDropdown));