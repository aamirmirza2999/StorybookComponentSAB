import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";
import { Edit, Copy, BulletPoint, TextInfoIcon, Badge } from '../../constants/SvgLocations';
import { actuatedNormalize } from "../../constants/PixelScaling";
import { useTheme } from "../../constants/Theme/ThemeProvider";

const TextComponent = (props) => {
  const { theme, isDarkMode } = useTheme();

  const fontsFamily = (fontFamily) => {
    switch (fontFamily) {
      case 'Bold':
        return globalStyles.boldTextFamily;
      case 'Regular':
        return globalStyles.regularTextFamily;
      case 'Light':
        return globalStyles.lightTextFamily;
      default:
        return globalStyles.regularTextFamily;
    }
  };

  return (
    <>
      {/* Primary Text Component */}
      <View style={globalStyles.textComponentStyle}>
        <Text
          testID={props.testID}
          accessibilityLabel={props.accessibilityLabel}
          style={[
            styles.defaultTextStyle,
            {
              color: isDarkMode?theme.primarytextcolor2: theme.primarytextcolor, // Primary text color
              fontSize: props.fontSize,
              fontWeight: props.fontWeight === 'null' ? null : props.fontWeight,
              textTransform: props.textTransform || 'none',
            },
            fontsFamily(props.fontFamily), // Apply font family
            props.style,

          ]}
          onPress={props.onPress}
          numberOfLines={props.numberOfLines}
          selectable={false}
          suppressHighlighting={true} // iOS highlight issue fix
        >
          {props.bulletPoint === 'true' ? <Text>o </Text> : null}
          {props.text}

        </Text>
        {props.editable && !props.copyable && (
          <Edit
            style={{ marginTop: actuatedNormalize(2)}}
            width={actuatedNormalize(24)}
            height={actuatedNormalize(24)}
           />
        )}
        {props.copyable && !props.editable && (
          <Copy
            style={{ marginTop: actuatedNormalize(2) }}
            width={actuatedNormalize(24)}
            height={actuatedNormalize(24)}
          />
        )}
      </View>

      {/* Secondary Text Component */}
      <View style={globalStyles.textComponentStyle}>
        {props.enableSecondary && (
          <>
            {props.bulletPoint === 'true.success' ?
              <Text>
                <BulletPoint
                  style={{ marginTop: actuatedNormalize(2)}}
                  width={actuatedNormalize(18)} height={actuatedNormalize(18)}
                />
              <Text> </Text>
              </Text>
              : props.bulletPoint === 'true' ? <Text>o </Text> : null
            }
            <Text
              testID={props.testID}
              accessibilityLabel={props.accessibilityLabel}
              style={[
                styles.defaultTextStyle,
                {
                  color: props.enableSecondary || isDarkMode ? theme.primarytextcolor2: theme.primarytextcolor,
                  fontSize: props.fontSize,
                  fontWeight: props.fontWeight === 'null' ? null : props.fontWeight,
                  textTransform: props.textTransform || 'none',
                },
                fontsFamily(props.fontFamily),
                props.style,
              ]}
              onPress={props.onPress}
              numberOfLines={props.numberOfLines}
              selectable={false}
              suppressHighlighting={true}
            >
              {props.text || 'Secondary Text'}
            </Text>
          </>
        )}
        {props.enableSecondary && props.editable && !props.copyable && (
          <Edit
            style={{ marginTop: actuatedNormalize(2) }}
            width={actuatedNormalize(24)}
            height={actuatedNormalize(24)}
          />
        )}
        {props.enableSecondary && props.copyable && !props.editable && (
          <Copy
            style={{ marginTop: actuatedNormalize(2) }}
            width={actuatedNormalize(24)}
            height={actuatedNormalize(24)}
          />
        )}
      </View>

      {/* Headline Text Component */}
      <View style={globalStyles.textComponentStyle}>
        {props.isHeadline &&(
   <Text
   testID={props.testID}
   accessibilityLabel={props.accessibilityLabel}
   style={[
     styles.defaultTextStyle,
     {
       color: isDarkMode?theme.primarytextcolor4: theme.primarytextcolor,
       fontSize: 17 || props.fontSize,
       fontWeight: 700 || props.fontWeight,
       textTransform: props.textTransform || 'none',
     },
     fontsFamily(props.fontFamily), // Apply font family
     props.style,

   ]}
   onPress={props.onPress}
   numberOfLines={props.numberOfLines}
   selectable={false}
   suppressHighlighting={true} // iOS highlight issue fix
 >
   {props.headlineText + " "}
 </Text>
        )}
     
        {props.textInfoIcon && !props.badgeIcon && (
          <TextInfoIcon
            // style={{ marginTop: actuatedNormalize(2) }}
            width={actuatedNormalize(24)}
            height={actuatedNormalize(24)}
          />
        )}
        {props.badgeIcon && !props.textInfoIcon && (
          <Badge
            // style={{ marginTop: actuatedNormalize(2) }}
            width={actuatedNormalize(20)}
            height={actuatedNormalize(20)}
          />
        )}
      </View>
    </>
  );
};

const styles = {
  defaultTextStyle: {
    textAlign: 'left',
  },
};

export default TextComponent;
