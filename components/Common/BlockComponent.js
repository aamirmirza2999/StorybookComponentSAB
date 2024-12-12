import React, {useMemo} from 'react';
import {StyleSheet, View, TouchableOpacity, I18nManager, useColorScheme} from 'react-native';
import {globalStyles} from '../../constants/GlobalStyles';
import TextComponent from '../Common/TextComponent';
import {useTheme} from '../../constants/Theme/ThemeProvider';
import {actuatedNormalize} from '../../constants/PixelScaling';
import { spacingS, spacingXS} from '../../constants/Size';
import {NewSvgIcons} from '../../constants/NewSvgLocation'; // Import all SVGs
import {GlobalStyleComponentLevel} from '../GlobalStyleComponentLevel';

export const BlockComponent = props => {
  const {theme, isDarkMode} = useTheme();
  
  // Determine the background style based on the `type` prop
  const backgroundStyle = useMemo(() => {
    if (props.type === 'Pattern') {
      return {backgroundColor: theme.complimentaryprimarycolor3_1}; // Use the appropriate pattern background color
    }
    return {backgroundColor: theme.stylesblockbg}; // Default to solid background color
  }, [props.type, theme]);

  const BlockIcon = useMemo(() => {
    return NewSvgIcons[props.blockIcon] || null;
  }, [props.blockIcon]);

  const rightArrowColor = useMemo(() => 
    props.type === 'Pattern' ? theme.primarycolor4static : theme.primarycolor, 
    [props.type, theme]
  );

  let Component = TouchableOpacity;

  return (
    <Component
      testID={props.testID ? props.testID : 'blockActionButton'}
      accessibilityLabel={
        props.accessibilityLabel
          ? props.accessibilityLabel
          : 'blockActionButton'
      }
      accessibilityRole="button"
      accessibilityState={{ disabled: props.isDisable ?? false }}
      onPress={props.onPress}>
      <View
        style={[
          {
            flexDirection: 'column',
            padding: spacingS,
            width:actuatedNormalize(167),
            height: actuatedNormalize(108),
            borderRadius: spacingXS,
            justifyContent: 'space-between',
          },
          {...backgroundStyle},
        ]}>
        <BlockIcon
        style={{color:theme.primarycolor3}}
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
        />

        <View
          style={styleCurrent.BlockBox}>
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

          <NewSvgIcons.RightArrow
        style={{color:rightArrowColor}}
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
        />
          </View>
        </View>
      </View>
    </Component>
  );
};

export const styleCurrent= {
  BlockBox : {display: 'flex',
  height: actuatedNormalize(42),
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  flexShrink: 0,
  flexDirection:'row',
  alignSelf: 'stretch',}
};
