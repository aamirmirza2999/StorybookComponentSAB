import {
  I18nManager,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { actuatedNormalize } from '../../constants/PixelScaling';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
import { useTheme } from '../../constants/Theme/ThemeProvider';

const SecondaryButton = props => {

  const { theme, toggleTheme } = useTheme();
  console.log("theme33333", props)


  let Component = props.requiredNativeTouchableOpacity
    ? NativeTouchable
    : TouchableOpacity;
  return (
    <Component
      testID={props.testID ? props.testID : 'SecondaryInvert'}
      accessibilityLabel={
        props.accessibilityLabel ? props.accessibilityLabel : 'SecondaryInvert'
      }
      style={[
        styles.secondaryButtonContainerInvert,

        {
          backgroundColor: props.SecondaryButtonBgClr,
          borderColor: props.disabled
            ? Colors.secondaryButtonBorderDisabled
            : theme.secondaryButtonBorder,
        },
        props.secondaryButtonContainerInvert,
      ]}
      onPress={() => {
        props.debounceEvent(props.onPress);
      }}
      disabled={props.disabled}>
      <TextComponent
        onPress={
          props.disabled
            ? () => { }
            : () => {
              props.debounceEvent(props.onPress);
            }
        }
        style={[
          styles.secondaryButtonInvert,
          { color: props.secondaryTextColor ? props.secondaryTextColor : theme.primaryTextColor, opacity: props.disabled ? 0.5 : 1 },
          I18nManager.isRTL
            ? {
              bottom:
                Platform.OS === 'ios'
                  ? actuatedNormalize(3)
                  : actuatedNormalize(2),
            }
            : {},
          props.secondaryButtonInvert,
        ]}>
        {props.label}
      </TextComponent>
    </Component>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  secondaryButtonContainerInvert: {
    borderWidth: 1,
    marginTop: actuatedNormalize(12),
    borderRadius: actuatedNormalize(8),
    borderColor: "#ffffff",
    width: "100%",
    alignItems: "center",
    height: actuatedNormalize(48),
    justifyContent: "center",
  },
  secondaryButtonInvert: {
    fontSize: actuatedNormalize(16),
    color: "#ffffff",

    fontFamily: Fonts.Regular,
  },
});
