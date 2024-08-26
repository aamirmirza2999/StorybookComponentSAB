import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SabLogo} from '../../constants/SvgLocations';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {globalStyles} from '../../constants/GlobalStyles';
// import Colors from '../../constants/Colors';
import BgHeader from './BgHeader';
// import { useTheme } from '../../constants/Theme/ThemeProvider';
import ProgressHeader from './ProgressComponent';
import {spacingS, spacingM, spacingL} from '../../constants/Size';

const PrimaryBgComponent = props => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {props.BgHeader}

      <ScrollView>
        <View
          style={{
            paddingLeft: spacingS,
            paddingRight: spacingS,
            paddingBottom: spacingM,
            paddingTop: spacingL,
          }}>
         
          {props.children}
        </View>
      </ScrollView>
      <View
        style={
          props.ButtonContainer
          
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
