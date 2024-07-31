import React from 'react'
import {
    Dimensions,
    View,
    StatusBar,
    StyleSheet,
    Platform,
    I18nManager
} from 'react-native'
import  {
    SvgXml
} from 'react-native-svg'
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { getBottomSpace , getStatusBarHeight } from 'react-native-iphone-x-helper-2'
import {actuatedNormalize} from '../../constants/PixelScaling';



let IosSpecific = Platform.OS==="ios"? getStatusBarHeight() : 0
let iosMargin = Platform.OS=="ios"? 50 : 0

const deviceWidth = Dimensions.get('window').width
const deviceheight = Dimensions.get('window').height-IosSpecific
const svgWidth = Number(deviceWidth) + 2
const svgHeight = Number(((deviceheight-iosMargin) / 5.4 )+(deviceheight/43)+getStatusBarHeight())


const xml1 = `<svg width=${Platform.OS== "ios" ? svgWidth + actuatedNormalize(100) :I18nManager.isRTL? svgWidth + actuatedNormalize(90):svgWidth + actuatedNormalize(200)} height=${svgHeight} preserveAspectRatio="none" viewBox="${I18nManager.isRTL? 1 : 1} 0 ${Platform.OS== "ios" ? I18nManager.isRTL?svgWidth-actuatedNormalize(90): svgWidth  : I18nManager.isRTL?svgWidth-actuatedNormalize(20):svgWidth+actuatedNormalize(175)} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity=".1" fill-rule="evenodd" clip-rule="evenodd" d="M-319 254.848 468.5 0 206 518.485l-525-263.637z" fill="#F5F5F5" fill-opacity=".5"/>
<path opacity=".08" fill-rule="evenodd" clip-rule="evenodd" d="M-221.5 43.94V536.06h480l-480-492.122z" fill="#F5F5F5" fill-opacity=".5"/>
<path opacity=".12" fill-rule="evenodd" clip-rule="evenodd" d="M-4 395.455 378.5 87.879l315 386.666L-4 395.455z" fill="#F5F5F5" fill-opacity=".5"/>
</svg>`

export const Background = (bgColor) => {
    return (
        <SvgXml style={{flex:1, width: '100%', backgroundColor: bgColor.bgColor}} xml={xml1} />
    )
}

 const MainHeader = (props) => {
    const { colors } = useTheme()
    let theme = colors

    return (
      
<>
            <View
                style={{
                    height: getStatusBarHeight() + 20
                }}
            />
            <StatusBar
                animated
                backgroundColor={props.bgColor}
                barStyle={'light-content'}
                translucent={true}
            />
            <View style={[{ ...StyleSheet.absoluteFill,zIndex: -1 },props.addOverFlowHidden?{overflow:"hidden" ,}:{}]}>
                    <Background
                    bgColor = {props.bgColor}
                    />
                {props.LoginBar? 
                    <View style={{ width: '100%', height: actuatedNormalize(37), flexDirection: 'row',  }}>
                        {props.LoginBar}
                    </View>
                : null}
                <View style={[styles.whiteContainer, { backgroundColor: props.addOverFlowHidden ? "transparent" : "#fbfcfe" }]}>
                </View>
            </View>
            {props.children}
            {props.BottomBar && Platform.OS === 'ios' ?
                    <View style={{ height:
                    getBottomSpace() , width: '100%',backgroundColor:theme.backgroundColor }}>
                        {props.BottomBar ? props.BottomBar : null}
                    </View> : null
                }
                </>
      
    )
}


const styles = {
     //Layer
     mainContainer: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 50 ,

        
    },

     blueContainer: {
    },
    whiteContainer: {
        backgroundColor: "#FFFFFF",
        flex: 1,

    },
}
export default MainHeader