import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SabLogo,SabLogoDark} from '../../constants/SvgLocations';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {globalStyles} from '../../constants/GlobalStyles';
import { useTheme } from "../../constants/Theme/ThemeProvider";
// import Colors from '../../constants/Colors';

const LogoComponent = props => {
  console.log('props>>>1111', props);
  const { theme, toggleTheme,isDarkMode } = useTheme();
  return (
    <>
      {props.enableLogo ? (
        <TouchableOpacity onPress={props.changeTheme}>
          {isDarkMode?
           <SabLogoDark
          width={actuatedNormalize(60)}
          height={actuatedNormalize(19)}
          // fill={"blue"}
           // transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
         />
         :
          <SabLogo
           width={actuatedNormalize(60)}
           height={actuatedNormalize(19)}
            //fill={"blue"}
            // transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
          />
}
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({});
