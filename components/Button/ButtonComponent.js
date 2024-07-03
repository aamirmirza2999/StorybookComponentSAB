import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryBgComponent from './PrimaryBgComponent';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { globalStyles } from '../../constants/GlobalStyles';

const ButtonComponent = props => {
  let enableButton = false;
  return (
    <View style={globalStyles.inititalStyle}>
      {props.enablePrimary ? (
        <PrimaryButton
          disabled={props.disabled || enableButton}
          label={props.label}
          textColor={props.textColor}
          icon={props.icon}
          PrimaryButtonBgClr={props.PrimaryButtonBgClr}
        />
      ) : null}
      {props.enableSecondary ? <SecondaryButton label={'Register'} onPress={''} /> : null}
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
