import React from 'react';
import { Platform } from 'react-native';
import {
  View
} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {
    CheckboxUnSelected,
    CheckboxSelected1,
    RadioSelect,
    RadioUnSelect,
    RedSelected,
    RedUnSelected
  } from '../../constants/SvgLocations';


const CheckboxComponent = (props) => {
    const { theme } = props;
  
    const handleChange = () => {
      if (props.disabled === undefined || props.disabled === false) {
        let value;
        if (props.value) {
          value = false;
        } else {
          value = true;
        }
        props.onPress(value);
      } else {
        return null;
      }
    };
  
    return (
      <BouncyCheckbox
        testID={props.testID}
        accessibilityLabel={props.accessibilityLabel}
        isChecked={props.value}
        borderColor={props.fill ? props.fill : "#fbfcfe"}
        fillColor={props.fill ? props.fill : "#fbfcfe"}
        unfillColor={props.fill ? props.fill : "#fbfcfe"}
        borderRadius={8}
        disableText={true}
        iconStyle={[{ borderWidth: 0 }, props.customStyle]}
        onPress={handleChange}
        iconComponent={
          props.icon ? (
            props.value ? (
              props.iconCheck()
            ) : (
              props.iconUnCheck()
            )
          ) : props.value ? (
            props.localAccount ? <RadioSelect /> : (
              props.RedIcon ? <View style={[styles.iconOverflowContainer, Platform.OS == "ios" ? {} : { overflow: 'hidden' , backgroundColor:"#db0011" }]}>
                <RedSelected width={actuatedNormalize(24)} height={actuatedNormalize(24)} />
              </View> :
                <View style={[styles.iconOverflowContainer, Platform.OS == "ios" ? { overflow: 'hidden', backgroundColor:"#00847F" } : { overflow: 'hidden', backgroundColor:"#00847F" }]}>
                  <CheckboxSelected1 width={actuatedNormalize(24)} height={actuatedNormalize(24)} />
                </View>
            )
          ) : (
            props.localAccount ? <RadioUnSelect /> : (
              props.RedIcon ? <RedUnSelected width={actuatedNormalize(24)} height={actuatedNormalize(24)} /> :
                <CheckboxUnSelected width={actuatedNormalize(24)} height={actuatedNormalize(24)} />
            )
          )
        }
      />
  
    );
  };

  const styles = {
    iconOverflowContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      shadowColor: "#40d3d1",
    }
  
  }
  
  export default CheckboxComponent;