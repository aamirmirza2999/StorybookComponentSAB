import {
    I18nManager,
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
    TouchableOpacity
  } from 'react-native';
  import React, { useState } from 'react';
  import { actuatedNormalize } from '../../constants/PixelScaling';
  import { globalStyles } from '../../constants/GlobalStyles';
  import LinearGradient from '../../utils/Linear-Gradient'
  import Fonts from '../../constants/Fonts';
  import TextComponent from './TextComponent';
  import { useTheme } from '../../constants/Theme/ThemeProvider';
  import {
    spacingM,
    spacingS,
    spacingXS,
    spacingXXS
  } from '../../constants/Size';
  import SvgIconList from '../../constants/SvgIconList';

  const SearchInput = props => {
    console.log('hhhhh', props);
    const { theme, isDark } = useTheme()
    console.log('theme99999', theme);
  
    const [username, setUsername] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const customStyle = isFocused
      ? ['#ffffff', '#ffffff']
      : ['#ffffff', '#ffffff'];
    const customStyle1 = isFocused
      ? {
        height: actuatedNormalize(44),
        // marginTop: actuatedNormalize(8),
        borderRadius: actuatedNormalize(8),
        borderWidth: 1,
        borderColor: props.errorMsg ? '#d22630' : '#d9d9d9',
      }
      : {
        height: actuatedNormalize(44),
        // marginTop: actuatedNormalize(8),
        borderRadius: actuatedNormalize(8),
        borderColor: props.errorMsg ? '#d22630' : '#d9d9d9',
        backgroundColor: 'transparent',
        borderWidth: 1,
        padding: props.editable === false ? null : 2,
      };
  
    const handleTextChange = text => {
      setUsername(text);
      if (props.onChangeText) {
        props.onChangeText(text);
      }
    };
  
    return (
        <View
          style={{
            paddingBottom: spacingM,
            //marginTop: actuatedNormalize(24),
          }}>
         
    
          <View style={{
            flexDirection: 'row', marginTop: spacingXS, alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LinearGradient
              colors={customStyle}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              editable={false}
              style={[customStyle1, props.inputStyle]}>
              <View
                style={[
                  styles.billDetailInputBorderWhite,
                  {
                    backgroundColor: 'transparent',
                    width: '100%',
                  },
                  props.inputStyle,
                ]}>
                {!username && (
                  <View
                    style={[
                      {
                        flexDirection:'row',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        left: spacingXXS,
                      },
                      props.arabicplaceholdertext,
                    ]}>
                       <TouchableOpacity
      style={{ }}
       // onPress={props.Searchfunc}
      >
        <SvgIconList
          icon="SearchIcon"
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
          transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
        />
      </TouchableOpacity>
                    <TextComponent
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={[
                        styles.defaultTextStyle,
                        props.textstyle,
                        props.placeholderStyleRTL,
                      ]}>
                      {props.placeHolder}
                    </TextComponent>
                  </View>
                )}
                <View style={{ width: '80%' ,}}>
                  <TextInput
                    style={[
                      globalStyles.billDetailInputView,
                      {
                        fontFamily:
                          username === ''
                            ? Fonts.Regular
                            : Fonts.Bold,
                      },
                      props.textstyle,
                    ]}
                    value={username}
                    testID={props.testID}
                    accessibilityLabel={props.accessibilityLabel}
                    keyboardType={props.keyboardType}
                    textAlign={
                      props.isRunLTR
                        ? null
                        : I18nManager.isRTL === true
                          ? 'right'
                          : 'left'
                    }
                    maxLength={props.maxLength}
                    minLength={props.minLength}
                    onChangeText={handleTextChange}
                    editable={props.editable}
                    autoCapitalize={props.autoCapitalize}
                    autoCorrect={props.autoCorrect}
                    ref={props.inputRef}
                    selectTextOnFocus={false}
                    contextMenuHidden={
                      props.contextMenuHidden ? props.contextMenuHidden : false
                    }
                   
                    returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
                    secureTextEntry={props.secureTextEntry}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
    
                </View>
               
              </View>
            </LinearGradient>
            
          </View>
          {props.errorMsg ? (
            <Text style={styles.errorText}>{props.errorMsg}</Text>
          ) : null}
        </View>
      );
  };
  
  export default SearchInput;
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      paddingHorizontal: 10,
      paddingBottom: actuatedNormalize(24),
    },
    defaultTextStyle: {
      left:spacingXS,
      fontSize: 15,
      lineHeight: 20,
      fontFamily: "Univers Next for HSBC",
      color: "#000",
      textAlign: "left"
      // fontFamily: Fonts.universlTStd,
    },
    labelStyle: {
      // textTransform: "capitalize",
    },
    textinput: {
      // color: '#878787',
      fontSize: actuatedNormalize(16),
      textAlign: 'center',
    },
    errorview: {
      marginTop: actuatedNormalize(10),
      marginBottom: actuatedNormalize(10),
    },
  
    buttonContainer: {
      flex: 1.0,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      width: '99%',
      margin: 1,
    },
    buttonText: {
      textAlign: 'center',
      color: '#4C64FF',
      alignSelf: 'center',
    },
  
    billDetailInputBorderWhite: {
      // height: '100%',
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'space-between',
      // flexDirection: 'row',
      // borderRadius: actuatedNormalize(8),
      // paddingHorizontal: actuatedNormalize(10),
      flex: 1,
      borderRadius: actuatedNormalize(8),
      // paddingLeft: 13,
      // paddingRight: 5,
      // overflow: 'hidden',
      flexDirection: 'row',
      paddingLeft: actuatedNormalize(13),
      paddingRight: actuatedNormalize(5),
      
      justifyContent: 'space-between',
    },
    billDetailInputView: {
      width: '80%',
      //justifyContent: 'center',
      //height: actuatedNormalize(44),
      fontSize: actuatedNormalize(14),
      fontFamily: Fonts.Bold,
    },
    billDetailInputStyle: {
      fontSize: actuatedNormalize(18),
      color: 'rgb(193,193,193)',
    },
    errorText: {
      color: '#d22630',
      fontSize: actuatedNormalize(12),
      marginTop: actuatedNormalize(8),
      fontFamily: Fonts.Light,
    },
    billDetailCurrencyStyle: {
      fontSize: actuatedNormalize(11),
      color: 'rgb(29,38,44)',
    },
  });
  