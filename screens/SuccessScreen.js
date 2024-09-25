import { View, Text,Platform } from 'react-native'
import React from 'react'
import TextComponent from '../components/Common/TextComponent'
import { fontXLG ,lineHeightXLG,fontWeightBold,spacingXS, spacingXXL,spacingXXS, spacingS, fontSmall, fontMedium} from '../constants/Size';
import Fonts from '../constants/Fonts';
import { GroupButton } from '../components/Common/Button';
import { actuatedNormalize } from '../constants/PixelScaling';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen=()=> {
  const navigation = useNavigation();

  const goScreen=()=>{
    navigation.reset({
      index: 0,
      routes: [{
        name: "Home",
        params: {
          screen: "Home",
          params: {
            fromScreen: "Success"
          }
        },
      }],
    })
  }
  return (
    <View
    style={{
      flex:1,
      backgroundColor:"#ffffff",
   
    }}
    >
     {/* <TextComponent
       style={{
        alignSelf:"center",
        fontSize: fontMedium,
        lineHeight: lineHeightXLG,
        fontWeight: fontWeightBold,
        fontFamily:Fonts.HSBC,
        color: "#000",
        textAlign: "left",
      }}
      >Success Screen</TextComponent> */}
      <View
      style={{
      flex:1,
      justifyContent:"flex-end",
      paddingBottom:Platform.OS === 'ios'?actuatedNormalize(10):actuatedNormalize(0)
      }}
      >
      <GroupButton
       backgroundColor={"#db0011"}
       primaryLabel={"Go to Dashboard"}
       secondaryLabel={"Cancel"}
       enableButtonGroup={true}
       enableprimary={true}
       enableSecondary={true}
       buttonType={"stacked"}
       onPressPrimary={()=>goScreen()}
       onPressSecondary={()=>goScreen() }
      ></GroupButton>
      
      </View>
    </View>
  )
}
export default SuccessScreen;