import React from 'react';
import { View, Text, I18nManager, Platform } from 'react-native';
import Fonts from '../../constants/Fonts';
import { globalStyles } from '../../constants/GlobalStyles';

const TextComponent = (props) => {

  const fontsFamily = (fontFamily) => {
    switch (fontFamily){
      case "Bold" :{
        return globalStyles.boldTextFamily
      }
      case "Regular" :{
        return globalStyles.regularTextFamily
      }
      case "Light" :{
        return globalStyles.lightTextFamily
      }
      default :{
        return globalStyles.regularTextFamily
      }
    }
  }


  return (
    <Text
      testID={props.testID}
      accessibilityLabel={props.accessibilityLabel}
      style={[
        styles.defaultTextStyle,
        {
          color: props.textColor, // Changed from props.color to props.textColor
          fontSize: props.fontSize,
          fontWeight : props.fontWeight === "null"? null : props.fontWeight,
          textTransform : props.textTransform || "none"
        },
        fontsFamily(props.fontFamily),//added a function thatwill take fonts from global style based on props.fontFamily
        props.style,
      ]}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      selectable={false}
      suppressHighlighting={true} // iOS highlight issue fix
    >
      {props.children}
    </Text>
  );
};

const styles = {
  defaultTextStyle: {
    textAlign: 'left',
  },
};

export default TextComponent;
