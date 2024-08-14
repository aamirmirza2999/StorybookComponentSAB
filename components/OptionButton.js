import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import TextComponent from './Common/TextComponent'
import { actuatedNormalize } from '../constants/PixelScaling'
import SvgIconList from '../constants/SvgIconList'
import { globalStyles } from '../constants/GlobalStyles'
import Fonts from '../constants/Fonts';
import { useTheme } from '../constants/Theme/ThemeProvider';


const OptionButton = (props) => {
  const { theme } = useTheme();
    let Component = TouchableOpacity;
  return (
    <Component
    testID={props.testID ? props.testID : 'primaryCTA'}
    accessibilityLabel={
      props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTA'
    }
    onPress={props.onPress}
    >
    <View
    style={[
            { 
              backgroundColor:theme.optionbg
            },
              props.containerStyle,
            globalStyles.optioncontainer
          ]}
    >
        <View>
          <TextComponent
            style={[
                    { 
                      alignSelf:"center"
                    },
                    props.containertxt,
                    globalStyles.optioncontainertxt,
                  ]}
        
          >
            {props.label}
          </TextComponent>
      </View>
      <View>
      {props.enableArrow?
        <SvgIconList
              icon="Iconright"
              width={actuatedNormalize(25)}
              height={actuatedNormalize(25)}
              //transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
            />:null}
      </View>
    </View>
    </Component>
  )
}
export default OptionButton;