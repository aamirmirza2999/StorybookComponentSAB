import React from 'react'
import {
    View,
} from 'react-native'
import { globalStyles } from '../../constants/GlobalStyles'
import { actuatedNormalize } from "../../constants/PixelScaling";

const Divider = (props)=>{

    return(
        <View style={[globalStyles.DividerStyle,{
            backgroundColor:props.backgroundColor?props.backgroundColor: "rgba(118, 118, 118, 0.2)",
            height:props.height?props.height:actuatedNormalize(2)
        }]} />
    )

}

export default Divider