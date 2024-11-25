import { StyleSheet, View } from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { globalStyles } from '../../constants/GlobalStyles';

const ButtonComponent = ({ enablePrimary,
  enablefirstPrimary,
  enableSecondary,
  textColor,
  icon,
  disabled,
  PrimaryButtonBgClr,
  SecondaryButtonBgClr,
  secondaryTextColor,
  label }) => {
  let enableButton = false;
  return (

    <View style={globalStyles.inititalStyle}>
      {enablefirstPrimary ?
        <View>
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
        </View> :
        <View>
          {enableSecondary ? (
            <SecondaryButton
              label={'Register'}
              onPress={''}
              secondaryTextColor={secondaryTextColor}
              SecondaryButtonBgClr={SecondaryButtonBgClr}
            />
          ) : null}
          {enablePrimary ? (
            <PrimaryButton
              disabled={disabled || enableButton}
              label={label}
              textColor={textColor}
              icon={icon}
              PrimaryButtonBgClr={PrimaryButtonBgClr}
            />
          ) : null}
        </View>
      }
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
