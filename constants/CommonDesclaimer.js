import { I18nManager, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {actuatedNormalize} from "../constants/PixelScaling"
import {Exclamatorylogin} from "../constants/SvgLocations"
import { useTheme } from '../theme/ThemeProvider'
import TextComponent from '../components/common/TextComponent'
import Fonts from './Fonts'
import { spacingS } from './Size'

const CommonDesclaimer = (props) => {
  const { t } = props;
  const { colors } = useTheme();
  let theme = colors;
  return (
    <View
    style={{
      // alignItems: "center",
      marginTop: spacingS,
      paddingHorizontal: actuatedNormalize(14),
      paddingVertical: actuatedNormalize(12),
      // marginLeft: actuatedNormalize(15),
      width: "100%",
      // paddingRight: I18nManager.isRTL ? actuatedNormalize(55) : null,
      backgroundColor: "#fff8ea",
      borderRadius: actuatedNormalize(8),
      borderWidth: actuatedNormalize(2),
      borderColor: "#ffcf70",
      marginBottom: spacingS
    }}
  >
    <View style={{ flexDirection: "row" }}>
      <View style={{ }}>
        <Exclamatorylogin
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
        />
      </View>
      <View
        style={{
          marginLeft: actuatedNormalize(11),
          width: "89%",
          // backgroundColor: "red"
        }}
      >
        <TextComponent
          style={{
            color:theme.blackClr,
            fontSize: actuatedNormalize(14),
            lineHeight: actuatedNormalize(20),
            fontFamily: Fonts.Regular,
          }}
        >
         { props.disclaimerTitle}
        </TextComponent>

      </View>
    </View>
  </View>
  )
}

export default CommonDesclaimer

const styles = StyleSheet.create({})