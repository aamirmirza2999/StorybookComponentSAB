import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../components/Common/TextComponent'
import { fontXLG ,lineHeightXLG,fontWeightBold,spacingXS, spacingXXL,spacingXXS, spacingS, fontSmall, fontMedium} from '../constants/Size';
import Fonts from '../constants/Fonts';
import { GroupButton } from '../components/Common/Button';
import { actuatedNormalize } from '../constants/PixelScaling';

const SuccessScreen=()=> {
  return (
    <View
    style={{
      flex:1,
      backgroundColor:"#ffffff",
   
    }}
    >
     <TextComponent
       style={{
        alignSelf:"center",
        fontSize: fontMedium,
        lineHeight: lineHeightXLG,
        fontWeight: fontWeightBold,
        fontFamily:Fonts.HSBC,
        color: "#000",
        textAlign: "left",
      }}
      >Success Screen</TextComponent>
      <View
      style={{
        marginTop:actuatedNormalize(400)
      }}
      >
      <GroupButton
       backgroundColor={"#db0011"}
       label={"Action"}
       enableButtonGroup={true}
       enableprimary={true}
       type={"stacked"}
      ></GroupButton>
      </View>
    </View>
  )
}
export default SuccessScreen;