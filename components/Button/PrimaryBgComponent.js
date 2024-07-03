import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SabLogo} from '../../constants/SvgLocations';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {globalStyles} from '../../constants/GlobalStyles';
// import Colors from '../../constants/Colors';
import BgHeader from './BgHeader';
// import { useTheme } from '../../constants/Theme/ThemeProvider';
import ProgressHeader from './ProgressComponent';

const PrimaryBgComponent = props => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        backgroundColor: props.primaryBgColor,
      }}>
      {props.BgHeader}
      {props.ProgressHeader ? (
        <View
          style={{
            paddingHorizontal: actuatedNormalize(16),
            paddingTop: actuatedNormalize(24),
            paddingBottom: actuatedNormalize(24),
            backgroundColor: 'red',
          }}>
          <ProgressHeader
            currentStep={props.currentStep}
            totalStep={props.totalStep}
            currentStepColor={props.currentStepColor}
            RemainingStepColor={props.RemainingStepColor}
          />
        </View>
      ) : null}
      <ScrollView>
        <View
          style={{
            paddingLeft: actuatedNormalize(16),
            paddingRight: actuatedNormalize(16),
            paddingBottom: actuatedNormalize(24),
            paddingTop: actuatedNormalize(24),
            // backgroundColor: Colors.primaryBgColor,
          }}>
          {/* what  ever component i can add here  */}
          {props.children}
        </View>
      </ScrollView>
      <View
        style={
          props.ButtonContainer
          //   {
          //    paddingLeft: actuatedNormalize(16),
          //    paddingRight: actuatedNormalize(16),
          //    paddingBottom: actuatedNormalize(24),
          //    paddingTop: actuatedNormalize(24),
          // }
        }>
        {props.PrimaryButton}
        {props.SecondaryButton}
        {props.BottomButton}
      </View>
    </View>
  );
};

export default PrimaryBgComponent;

const styles = StyleSheet.create({});
