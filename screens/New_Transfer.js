import { View, Text } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../constants/PixelScaling';
import PostLoginHeader from '../components/Common/PostLoginHeader';
import TextComponent from '../components/Common/TextComponent'
import { fontXLG ,lineHeightXLG,fontWeightBold,spacingXS} from '../constants/Size';
import Fonts from '../constants/Fonts';
import MainButton from '../components/NewButton/MainButton';
import SvgIconList from '../constants/SvgIconList';
import { useNavigation } from '@react-navigation/native';
const New_Transfer=()=> {
  const navigation = useNavigation();
  return (
    <>
    <PostLoginHeader
      Headline={'Headline'}
    ></PostLoginHeader>
    <View style={{flex:1,backgroundColor:"#ffffff"}}>
      <View
      style={{
        flexDirection:"row",
        justifyContent:"space-evenly"
      }}
      >
      <MainButton
       quickActionButton={true}
       Icon={<SvgIconList
                              icon="AccountAction"
                              width={24}
                              height={24}
                           />}
       quickActionButtonLabel={"Unpaid Bills"}
       quickActionButtonType={1}
      onPress={()=>navigation.navigate('Bills')}
      ></MainButton>
        <MainButton
       quickActionButton={true}
       Icon={<SvgIconList
                              icon="AccountAction"
                              width={24}
                              height={24}
                           />}
       quickActionButtonLabel={"Button"}
       quickActionButtonType={1}
       onPress={()=>alert("Button")}
      
      ></MainButton>
         <MainButton
       quickActionButton={true}
       Icon={<SvgIconList
                              icon="AccountAction"
                              width={24}
                              height={24}
                           />}
       quickActionButtonLabel={"Button"}
       quickActionButtonType={1}
       onPress={()=>alert("Button1")}
      ></MainButton>
      </View>
    </View>
    </>
  )
}
export default New_Transfer;