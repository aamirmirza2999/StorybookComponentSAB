import { StyleSheet, TouchableOpacity, } from 'react-native';
import React from 'react';
import { SabLogo, SabLogoDark } from '../../constants/SvgLocations';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { useTheme } from "../../constants/Theme/ThemeProvider";

const LogoComponent = props => {
  console.log('props>>>1111', props);
  const { theme, toggleTheme, isDarkMode } = useTheme();
  return (
    <>
      {props.enableLogo ? (
        <TouchableOpacity onPress={props.changeTheme}>
          {isDarkMode ?
            <SabLogoDark
              width={actuatedNormalize(60)}
              height={actuatedNormalize(19)}
            />
            :
            <SabLogo
              width={actuatedNormalize(60)}
              height={actuatedNormalize(19)}
            />
          }
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({});
