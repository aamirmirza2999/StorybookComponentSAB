import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";
import { Edit, Copy, BulletPoint, TextInfoIcon, Badge, TextInfoIconDark, InfoIconRed, CopyDark, EditDark } from '../../constants/SvgLocations';
import { actuatedNormalize } from "../../constants/PixelScaling";
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { spacingM } from "../../constants/Size";

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
      <View style={[globalStyles.textComponentStyle]}>
        <Text
          testID={props.testID}
          accessibilityLabel={props.accessibilityLabel}
          style={[
            styles.defaultTextStyle,
            {
              color: isDarkMode ? theme.primarycolor2 : theme.primarycolor,
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
          {props.textBullet === 'true' ? <Text>o </Text> : null}
          {props.children}

        </Text>
        {props.textEditable && !props.textCopyable && (
          <View style={{ paddingLeft: actuatedNormalize(8) }}>
            {isDarkMode ?
              <EditDark
                style={{ marginTop: actuatedNormalize(2) }}
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
              /> :

              <Edit
                style={{ marginTop: actuatedNormalize(2) }}
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
              />
            }
          </View>
        )}
        {props.textCopyable && !props.textEditable && (
          <View style={{ paddingLeft: actuatedNormalize(8) }}>
            {isDarkMode ?
              <CopyDark
                style={{ marginTop: actuatedNormalize(2) }}
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
              /> :
              <Copy
                style={{ marginTop: actuatedNormalize(2) }}
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
              />
            }
          </View>
        )}
      </View>

      {/* Secondary Text Component */}
      <View style={[globalStyles.textComponentStyle]}>
        {props.hierarchy === 'secondary' && (
          <>
            {props.textBullet === 'true.success' ?
              <View style={{ paddingRight: actuatedNormalize(8) }}>
                <BulletPoint
                  style={{ marginTop: actuatedNormalize(2) }}
                  width={actuatedNormalize(18)} height={actuatedNormalize(18)}
                />
              </View>
              : props.textBullet === 'true' ? <Text>o </Text> : null
            }
            <Text
              testID={props.testID}
              accessibilityLabel={props.accessibilityLabel}
              style={[
                styles.defaultTextStyle,
                {
                  color: props.colorStyles || isDarkMode ? theme.primarycolor2_100 : null,
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
              {props.children || 'Secondary Text'}
            </Text>
          </>
        )}
        {props.enableSecondary && props.textEditable && !props.textCopyable && (
          <View style={{ paddingLeft: actuatedNormalize(8) }}>
            <Edit
              style={{ marginTop: actuatedNormalize(2) }}
              width={actuatedNormalize(24)}
              height={actuatedNormalize(24)}
            />
          </View>
        )}
        {props.enableSecondary && props.textCopyable && !props.textEditable && (
          <View style={{ marginLeft: actuatedNormalize(5) }}>
            <Copy
              style={{ marginTop: actuatedNormalize(2) }}
              width={actuatedNormalize(24)}
              height={actuatedNormalize(24)}
            />
          </View>
        )}
      </View>

      {/* Headline Text Component */}
      <View style={[globalStyles.textComponentStyle]}>
        {props.isHeadline && (
          <Text
            testID={props.testID}
            accessibilityLabel={props.accessibilityLabel}
            style={[
              styles.defaultTextStyle,
              {
                color: isDarkMode ? theme.primarycolor2 : theme.primarycolor,
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
            {props.headlineText}
          </Text>
        )}

        {props.textTitleIcon && !props.textTitleBadge && (
          <View style={{ paddingLeft: actuatedNormalize(4) }}>
            {isDarkMode ?
              <TextInfoIconDark width={spacingM} height={spacingM} />
              : <InfoIconRed width={spacingM} height={spacingM} />}
          </View>
        )}
        {props.textTitleBadge && !props.textTitleIcon && (
          <View style={{ paddingLeft: actuatedNormalize(4) }}>
            <Badge
              // style={{ marginTop: actuatedNormalize(2) }}
              width={actuatedNormalize(20)}
              height={actuatedNormalize(20)}
            />
          </View>
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
