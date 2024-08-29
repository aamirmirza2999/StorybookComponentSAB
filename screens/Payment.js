import { View, Text } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../constants/PixelScaling';
import PostLoginHeader from '../components/Common/PostLoginHeader';
import { QuickButton } from '../components/Common/Button';
import SvgIconList from '../constants/SvgIconList';
import { useNavigation } from '@react-navigation/native';
const Payment=()=> {
  const navigation = useNavigation();
  return (
    <>
  
    <View style={{flex:1,backgroundColor:"#ffffff"}}>
      <View
      style={{
        flexDirection:"row",
        justifyContent:"space-evenly"
      }}
      >
      <QuickButton
       Icon={<SvgIconList
                              icon="AccountAction"
                              width={24}
                              height={24}
                           />}
       quickActionButtonLabel={"Unpaid Bills"}
       quickActionButtonType={1}
      onPress={()=>navigation.navigate('Bills')}
      ></QuickButton>
        <QuickButton
       Icon={<SvgIconList
                              icon="AccountAction"
                              width={24}
                              height={24}
                           />}
       quickActionButtonLabel={"Button"}
       quickActionButtonType={1}
       onPress={()=>alert("Button")}
      
      ></QuickButton>
         <QuickButton
       Icon={<SvgIconList
                              icon="AccountAction"
                              width={24}
                              height={24}
                           />}
       quickActionButtonLabel={"Button"}
       quickActionButtonType={1}
       onPress={()=>alert("Button1")}
      ></QuickButton>
      </View>
    </View>
    </>
  )
}
export default Payment;