import { View } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../../constants/PixelScaling';
import { spacingXS } from '../../constants/Size';

const Space=(props)=> {
  return (
    <View
    style={{
      paddingHorizontal:props.paddingHorizontal?props.paddingHorizontal:spacingXS,
      paddingVertical:props.paddingVertical?props.paddingVertical:spacingXS
    }}
    >
    </View>
  )
}

export default Space;