import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../components/Common/TextComponent'
import { fontXLG ,lineHeightXLG,fontWeightBold,spacingXS, spacingXXL,spacingXXS, spacingS} from '../constants/Size';
import Fonts from '../constants/Fonts';
import MainButton from '../components/NewButton/MainButton';
import Space from '../components/Common/Space';
import { useNavigation } from '@react-navigation/native';
const Bills=()=> {
  const navigation = useNavigation();
  return (
    <View
    style={{
      flex:1,
      padding:spacingS,
      backgroundColor:"#ffffff"
    }}
    >
      <TextComponent
       style={{
        fontSize: fontXLG,
        lineHeight: lineHeightXLG,
        fontWeight: fontWeightBold,
        fontFamily:Fonts.HSBC,
        color: "#000",
        textAlign: "left",
      }}
      >Bills Screen</TextComponent>
      <Space paddingVertical={spacingXXS}/>
      <MainButton
       backgroundColor={"#db0011"}
       label={"Action"}
       type={"large"}//large/small/stacked/inline
       enableLeftIcon={false}
       enableRightIcon={true}
       enableSecondaryBtn={true}
       onPress={()=>navigation.navigate('SuccessScreen')}
      ></MainButton>
    </View>
  )
}
export default Bills;