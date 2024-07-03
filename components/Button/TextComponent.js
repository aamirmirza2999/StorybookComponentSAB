import React from "react";
//import {Text,I18nManager } from 'react-native'
import { View, Text, I18nManager, Platform } from "react-native";
import Fonts from "../../constants/Fonts";
import { actuatedNormalize } from "../../constants/PixelScaling";

const TextComponent = (props) => {
  let textLabel = props.children
  // console.log("Text label>>>>>>>>",textLabel, " - ", typeof textLabel)
  // console.log("Text props>>>>>>>>",props?.style?.textTransform)

  const isUpperCase = () => {
    if (typeof textLabel === "string" && textLabel?.includes(' ')) {
      // console.log("ISSTRING>>>>>>>",textLabel == textLabel.toUpperCase(),textLabel)
      return (textLabel == textLabel.toUpperCase());
    }
    return false

  }

  return (
    <Text
      testID={props.testID}
      accessibilityLabel={props.accessibilityLabel}
      style={[
        styles.defaultTextStyle,    
        {  
          fontSize:props.fontSize,
          fontFamily: props.fontWeight ==="Bold" ?
          Fonts.Bold_En :
          props.fontWeight ==="Regular"?
          Fonts.Regular_En:
          props.fontWeight ==="Light"?
          Fonts.Light_En:
          Fonts.Regular_En
        },
        props.style
      ]}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      textTransform={props.textTransform}
      selectable={false}
      suppressHighlighting={true} //iOS highlight issue fix 
    >
      {props.children}
    </Text>
  );
};

const styles = {
  defaultTextStyle: {
    // fontFamily:props.fontWeight ,
    textAlign: "left",
    fontWeight: Platform.OS === "ios" ? null : '600',
    // textTransform: "capitalize",
    //fontFamily: I18nManager.isRTL ? Fonts.universArabicforHSBClight : Fonts.universLTStd,
  },
};

export default TextComponent;
