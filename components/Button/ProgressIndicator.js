
import React from 'react'
import { View, I18nManager } from 'react-native'
import { actuatedNormalize, isTab } from '../../constants/PixelScaling';
import { progressIndicatorBarHeight, progressIndicatorStep1Width, progressIndicatorStep2Width, progressIndicatorStep3Width } from '../../constants/Size';


const ProgressIndicator = (props) => {  


let barWidth;
let {currentStep, RemainingStepColor, currentStepColor} = props;

if(currentStep == 1) barWidth = progressIndicatorStep1Width;
else if(currentStep == 2) barWidth = progressIndicatorStep2Width;
else if(currentStep == 3) barWidth = progressIndicatorStep3Width;
else if (currentStep > 3) barWidth = "100%"


return (
  <View style={[styles.ProgressMainContainer]}>      
      {props.ProgressIndicator?
      <View style={[styles.ProgressContainer]}>
        <View style={[styles.typeinPageProgress0Lan,{backgroundColor:RemainingStepColor}]}>
          {props.currentStep > 0 ?
          <View style={[styles.bar,{width:barWidth,backgroundColor:currentStepColor,}]}/>
          : null }
        </View>
      </View>    
      :null}
  </View>
)
}


const styles = {

    bar: {
      borderRadius: 8,
      backgroundColor: "#db0011",
      height:"100%",
      width:actuatedNormalize(85),
    },
    typeinPageProgress0Lan: {
          borderRadius: actuatedNormalize(8),
          backgroundColor: "#eee",
          flex: 1,
          width: "100%",
          height: progressIndicatorBarHeight
    },
    ProgressMainContainer: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // paddingHorizontal:actuatedNormalize(5)
  },
   headerTextContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: actuatedNormalize(5),
      marginBottom: isTab() ? actuatedNormalize(10) : actuatedNormalize(10),
  },
  ProgressContainer: {
      marginTop: actuatedNormalize(5),
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      transform: I18nManager.isRTL ? [
        {scaleX: -1},
      ] : 
      [
        {scaleX: 1},
      ] 
  },
}



export default ProgressIndicator






