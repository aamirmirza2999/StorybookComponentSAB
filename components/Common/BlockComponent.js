import React, {useMemo} from 'react';
import {StyleSheet, View, TouchableOpacity, I18nManager} from 'react-native';
import {globalStyles} from '../../constants/GlobalStyles';
import TextComponent from '../Common/TextComponent';
import {useTheme} from '../../constants/Theme/ThemeProvider';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {spacingL, spacingS} from '../../constants/Size';
import * as SvgIcons from '../../constants/SvgLocations'; // Import all SVGs
import {GlobalStyleComponentLevel} from '../GlobalStyleComponentLevel';

export const BlockComponent = props => {
  const {theme, isDarkMode} = useTheme();
  // Helper to fetch the correct SVG component
  const getSvgIcon = type => {
    if (!type) return null; // Return null if type is invalid or undefined

    // Check if we have a dark mode version of the icon
    const iconLight = SvgIcons[`${type}`]; // Light mode icon
    const iconDark = SvgIcons[`${type}Dark`]; // Dark mode icon

    // Return the dark mode icon if the theme is dark, otherwise the light mode icon
    return isDarkMode && iconDark ? iconDark : iconLight;
  };

  // Determine the background style based on the `type` prop
  const backgroundStyle = useMemo(() => {
    if (props.type === 'Pattern') {
      return {backgroundColor: theme.complimentaryprimarycolor3_1}; // Use the appropriate pattern background color
    }
    return {backgroundColor: theme.stylesblockbg}; // Default to solid background color
  }, [props.type, theme]);

  const BlockIcon = useMemo(
    () => getSvgIcon(props.blockIcon),
    [props.blockIcon, isDarkMode],
  );
  let Component = TouchableOpacity;

  return (
    <Component
      testID={props.testID ? props.testID : 'quickActionButton'}
      accessibilityLabel={
        props.accessibilityLabel
          ? props.accessibilityLabel
          : 'quickActionButton'
      }
      onPress={props.onPress}>
      <View
        style={[
          {
            flex: 1,
            flexDirection: 'column',
            padding: spacingS,
            height: 110,
            borderRadius: 8,
            justifyContent: 'space-between',
          },
          {...backgroundStyle},
        ]}>
        <BlockIcon
          style={{
            marginTop: actuatedNormalize(2),
          }}
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
        />

        <View
          style={{
            flexDirection: 'row',
            height: 42,
            justifyContent: 'space-between',
          }}>
          <View style={{justifyContent: 'flex-end'}}>
            <TextComponent
              style={[
                GlobalStyleComponentLevel.blockname,
                {
                  color:
                    props.type === 'Pattern'
                      ? theme.primarycolor4static
                      : theme.primarytextcolor,
                },
              ]}>
              {`${props.labelText}`}
            </TextComponent>
            {props?.lableSubText ? (
              <TextComponent
                style={[
                  GlobalStyleComponentLevel.blockSubName,
                  {
                    color:
                      props.type === 'Pattern'
                        ? theme.primarycolor4static
                        : theme.primarytextcolor,
                  },
                ]}>
                {`${props?.lableSubText ?? ''}`}
              </TextComponent>
            ) : null}
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            {isDarkMode || props.type === 'Pattern' ? (
              <SvgIcons.Whiterightarrow
                style={{
                  transform: [{rotate: I18nManager.isRTL ? '180deg' : '0deg'}],
                }}
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
              />
            ) : (
              <SvgIcons.RightArrow
                style={{
                  transform: [{rotate: I18nManager.isRTL ? '180deg' : '0deg'}],
                }}
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
              />
            )}
          </View>
        </View>
      </View>
    </Component>
  );
};
