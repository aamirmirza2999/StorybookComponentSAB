import React from 'react';
import { View, Text, I18nManager, Platform } from 'react-native';
import Fonts from '../../constants/Fonts';
import { actuatedNormalize } from '../../constants/PixelScaling';

const TextComponent = (props) => {
  console.log('propsnewwww', props);
  let textLabel = props.children;

  const isUpperCase = () => {
    if (typeof textLabel === 'string' && textLabel?.includes(' ')) {
      return textLabel === textLabel.toUpperCase();
    }
    return false;
  };

  return (
    <Text
      testID={props.testID}
      accessibilityLabel={props.accessibilityLabel}
      style={[
        styles.defaultTextStyle,
        {
          color: props.textColor, // Changed from props.color to props.textColor
          fontSize: props.fontSize,
          fontFamily:
            props.fontFamily === 'Bold'
              ? Fonts.Bold
              : props.fontFamily === 'Regular'
              ? Fonts.Regular
              : props.fontFamily === 'Light'
              ? Fonts.Light
              : Fonts.Regular,
          fontWeight : props.fontWeight === "null"? null : props.fontWeight
        },
        props.style,
      ]}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      textTransform={props.textTransform}
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
