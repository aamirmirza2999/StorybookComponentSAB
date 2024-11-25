import { View, } from 'react-native'
import React from 'react'
import { spacingXXS, spacingS } from '../constants/Size';
import { MainButton } from '../components/Common/Button';
import Space from '../components/Common/Space';
import { useNavigation } from '@react-navigation/native';
const Bills = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        padding: spacingS,
        backgroundColor: "#ffffff"
      }}
    >

      <Space paddingVertical={spacingXXS} />
      <MainButton
        backgroundColor={"#db0011"}
        label={"Action"}
        type={"large"}//large/small/stacked/inline
        enableLeftIcon={false}
        enableRightIcon={true}
        enableSecondaryBtn={true}
        onPress={() => navigation.navigate('SuccessScreen')}
      ></MainButton>
    </View>
  )
}
export default Bills;