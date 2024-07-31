import {I18nManager, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SabLogo} from '../../constants/SvgLocations';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {globalStyles} from '../../constants/GlobalStyles';
// import Colors from '../../constants/Colors';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
import { useTheme } from '../../constants/Theme/ThemeProvider';

// const PrimaryButton = () => {
//   return (
//     <View
//       style={
//         {
//           // marginTop: actuatedNormalize(24),
//         }
//       }>
//       <SabLogo
//         width={actuatedNormalize(globalStyles.svgStyle.width)}
//         height={actuatedNormalize(globalStyles.svgStyle.height)}
//         // transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
//       />
//     </View>
//   );
// };

// export default PrimaryButton;

const PrimaryButton = props => {
  console.log("props>>>>",props)
  // const {colors} = useTheme();
  // let theme = colors;
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
        {backgroundColor: props.disabled ? theme.SecondaryColor3 : props.PrimaryButtonBgClr},
        props.PrimaryButtonContainer,
      ]}
      onPress={
        props.disabled
          ? () => {}
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
          {/* <Email
                              width={actuatedNormalize(20)}
                              height={actuatedNormalize(20)}
                              fill={this.props.theme.SABBGreen}
                            /> */}
          {props.icon}
        </View>
      )}
      <TextComponent
        onPress={
          props.disabled
            ? () => {}
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
// export const PrimaryButtonNew = PrimaryNew;
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
    // textTransform: "capitalize",
  },
});
