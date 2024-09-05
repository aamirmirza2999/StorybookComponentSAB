import { View, Text } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../constants/PixelScaling';
import PostLoginHeader from '../components/Common/PostLoginHeader';
import { QuickButton } from '../components/Common/Button';
import SvgIconList from '../constants/SvgIconList';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
const New_Transfer=()=> {
  const navigation = useNavigation();
  const { t } = useTranslation();
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
       quickActionButtonType={"Vertical"}
      onPress={()=>navigation.navigate('Bills')}
      ></QuickButton>
        <QuickButton
       Icon={<SvgIconList
                              icon="AccountAction"
                              width={24}
                              height={24}
                           />}
       quickActionButtonLabel={t('initialLang:action')}
       quickActionButtonType={"Vertical"}
       onPress={()=>alert("Button")}
      
      ></QuickButton>
         <QuickButton
       Icon={<SvgIconList
                              icon="AccountAction"
                              width={24}
                              height={24}
                           />}
       quickActionButtonLabel={t('initialLang:action')}
       quickActionButtonType={"Vertical"}
       onPress={()=>alert("Button1")}
      ></QuickButton>
      </View>
    </View>
    </>
  )
}
export default New_Transfer;