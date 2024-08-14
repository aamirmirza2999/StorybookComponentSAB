import React from 'react'
import {
    View,
    Text,
    I18nManager,
    Platform,
    StatusBar,
    Dimensions
} from 'react-native'

import Fonts from "../../constants/Fonts";
// import CommonHelper from '../constants/CommonHelper'
import { actuatedNormalize, isTab } from '../../constants/PixelScaling';
//import {useTheme} from "../theme/ThemeProvider";
// import DeviceInfo from 'react-native-device-info';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper';


const STATUSBAR_HEIGHT = StatusBar.currentHeight
  
let deviceWidth = Dimensions.get("window").width;
let IosSpecific = 0
let iosMargin = Platform.OS=="ios"? 50 : 0 //90

const deviceheight = Dimensions.get('window').height-IosSpecific
const svgWidth = Number(deviceWidth) + 2
const svgHeight = Number(((deviceheight-iosMargin) / 7 ))
console.log("Heigh ..........", svgHeight , "mdbcsd",STATUSBAR_HEIGHT);
const uniqueIdGenerator = () => {
    //  return Math.floor(Math.random() * 1000).toString()
    return Math.floor(100000000 + Math.random() * 900000000).toString();
  }
const ProgressHeader = (props) => {
    //const {colors} = useTheme();

    

    let currentStep = props.currentStep
    let totalStep = props.totalStep

    let arrTotal = []
    let i
    for (i = 0; i < totalStep; i++) {
        let tempObj = {
            value: i,
            key: uniqueIdGenerator()
        }
        arrTotal.push(tempObj)
    }

   




    return (
        <View style={[styles.ProcessStepContainer, props.ProcessStepContainer]}>
            <View style={[styles.headerTextContainer, props.headerTextContainer]}>
              
            </View>
            {props.ProgressHeader?
            <View style={[styles.headerBarContainer, props.headerBarContainer]}>
                {arrTotal.map((item, index) => {
                    return (
                        <View key={item.key} style={[styles.barline, props.barline, {
                            marginLeft: index === 0 ? 0 : 5,
                            backgroundColor: index + 1 <= currentStep ? props.currentStepColor: props.RemainingStepColor
                        }]} />
                    )
                })}
            </View>
            :null}
        </View>
    )
}


const styles = {
    ProcessStepContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerLabel: {
        width: '70%',


    }, headerTextContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: actuatedNormalize(5),
        marginBottom: isTab() ? actuatedNormalize(10) : actuatedNormalize(10),
        // height: actuatedNormalize(24)
    },
    headerTxt: {
        fontSize: actuatedNormalize(20),
        fontFamily:Fonts.Bold,
        color: "#F8F8F8",
        textAlign:I18nManager.isRTL? 'left' : "left",
        lineHeight:actuatedNormalize(24),
    },
    headerstep: {
        fontSize: actuatedNormalize(14),
        color: "#D1D1C8",
        fontFamily: Fonts.Regular,
        position: 'absolute',
        
    },
    headerBarContainer: {
        marginTop: actuatedNormalize(5),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    barline: {
        backgroundColor: "#EC8A27",
        flex: 1,
        marginLeft: actuatedNormalize(5),
       borderRadius: actuatedNormalize(8),
        height: 4
    }, headerStepContainer: {
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    }, iconContainerStep: {
        alignItems: 'center',
        justifyContent: 'center',
    },

}

ProgressHeader.defaultProps = {

    ProcessStepContainer: {

    },
    headerLabel: {

    },
    headerTextContainer: {

    },
    headerTxt: {

    },
    headerStepContainer: {

    },
    headerBarContainer: {

    },
    barline: {

    },
    iconContainerStep: {

    }


}

export default ProgressHeader