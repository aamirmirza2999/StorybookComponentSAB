import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {globalStyles} from '../../constants/GlobalStyles';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
import {useTheme} from '../../constants/Theme/ThemeProvider';
import SwitchSelector from 'react-native-switch-selector';

const CurrencySwitch = props => {
  console.log('props>>>>', props);
  const {theme, toggleTheme} = useTheme();
  return (
    <>
      <View
        style={[
          {
            marginLeft: actuatedNormalize(5),
            width: '35%',
            height: actuatedNormalize(45),
            borderRadius: 8,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            marginTop: actuatedNormalize(8),
          },
          props.SwitchStyle,
        ]}>
        <SwitchSelector
          initial={props.initial}
          onPress={props.onPress}
          fontSize={actuatedNormalize(12)}
          textColor={props.textColor}
          selectedColor={props.selectedColor}
          buttonColor={props.buttonColor}
          borderRadius={8}
          buttonMargin={8}
          backgroundColor={props.backgroundColor}
          height={actuatedNormalize(20)}
          imageStyle={{
            width: actuatedNormalize(20),
          }}
          options={props.options}
        />
      </View>
    </>
  );
};
export default CurrencySwitch;
const styles = StyleSheet.create({});
