import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SabLogo} from '../../constants/SvgLocations';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {globalStyles} from '../../constants/GlobalStyles';
// import Colors from '../../constants/Colors';

const LogoComponent = props => {
  console.log('props>>>1111', props);
  return (
    <>
      {props.enableLogo ? (
        <TouchableOpacity onPress={props.changeTheme}>
          <SabLogo
            width={actuatedNormalize(globalStyles.svgStyle.width)}
            height={actuatedNormalize(globalStyles.svgStyle.height)}
            fill={"blue"}
            // transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
          />
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({});