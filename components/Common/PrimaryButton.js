import { I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { actuatedNormalize } from '../../constants/PixelScaling';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
import { useTheme } from '../../constants/Theme/ThemeProvider';



const PrimaryButton = props => {
  console.log("props>>>>", props)
  const { theme, toggleTheme } = useTheme();

  let Component = TouchableOpacity;
  return (
    <Component
      testID={props.testID ? props.testID : 'primaryCTA'}
      accessibilityLabel={
        props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTA'
      }
      style={[
        styles.PrimaryButtonContainer,
        props.PrimaryButtonContainer,
        { backgroundColor: !props.disabled ? theme.primarycolor3 : props.PrimaryButtonBgClr },
        props.PrimaryButtonContainer,
      ]}
      onPress={
        props.disabled
          ? () => { }
          : () => props.onPress()
      }
      disabled={props.disabled}>
      {props.icon && (
        <View
          style={{
            marginRight: actuatedNormalize(10),
            justifyContent: 'center',
            alignItems: 'center',
          }}>

          {props.icon}
        </View>
      )}
      <TextComponent
        onPress={
          props.disabled
            ? () => { }
            : () => {
              (props.onPress);
            }
        }
        style={[
          styles.PrimaryButtonTxt,
          I18nManager.isRTL
            ? {
              color: props.textColor,
              bottom:
                Platform.OS === 'ios'
                  ? actuatedNormalize(3)
                  : actuatedNormalize(2),
            }
            : {
              color: props.textColor,

            },
          props.PrimaryButtonTxt,

        ]}
        {...props.labelProps}>
        {props.label}
      </TextComponent>
    </Component>
  );
};

export default PrimaryButton;


const styles = StyleSheet.create({
  PrimaryButtonContainer: {
    width: '100%',
    height: actuatedNormalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: actuatedNormalize(10),
  },
  PrimaryButtonTxt: {
    fontSize: actuatedNormalize(16),
    fontFamily: Fonts.Regular,

  },
});
