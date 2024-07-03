import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PrimaryBgComponent from './PrimaryBgComponent';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import {globalStyles} from '../../constants/GlobalStyles';

const ButtonComponent = ({  enablePrimary,
  enableSecondary,
  textColor,
  icon,
  disabled,
  PrimaryButtonBgClr,
  SecondaryButtonBgClr,
  secondaryTextColor,
  label}) => {
  let enableButton = false;
  return (
    <View style={globalStyles.inititalStyle}>
      {enablePrimary ? (
        <PrimaryButton
          disabled={disabled || enableButton}
          label={label}
          textColor={textColor}
          icon={icon}
          PrimaryButtonBgClr={PrimaryButtonBgClr}
        />
      ) : null}
      {enableSecondary ? (
        <SecondaryButton
          label={'Register'}
          onPress={''}
          secondaryTextColor={secondaryTextColor}
          SecondaryButtonBgClr={SecondaryButtonBgClr}
        />
      ) : null}
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
