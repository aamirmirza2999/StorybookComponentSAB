import React from 'react'
import {
    Dimensions,
    View,
    StatusBar,
    StyleSheet,
    Platform,
    I18nManager,
    TouchableOpacity
} from 'react-native'
import SvgXml from './SvgXml'
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { actuatedNormalize } from '../../constants/PixelScaling';
import LogoComponent from '../../components/Common/LogoComponent';
import SvgIconList from '../../constants/SvgIconList';
import { spacingM, spacingS, spacingXS } from '../../constants/Size';
import TextComponent from './TextComponent';
import Avatarcomponent from './Avatarcomponent';


let IosSpecific = Platform.OS === "ios" ? getStatusBarHeight() : 0
let iosMargin = Platform.OS == "ios" ? 50 : 0

const deviceWidth = Dimensions.get('window').width
const deviceheight = Dimensions.get('window').height - IosSpecific
const svgWidth = Number(deviceWidth) + 2
const svgHeight = Number(((deviceheight - iosMargin) / 5.4) + (deviceheight / 43) + getStatusBarHeight())


const xml1 = `<svg width=${Platform.OS == "ios" ? svgWidth + actuatedNormalize(100) : I18nManager.isRTL ? svgWidth + actuatedNormalize(90) : svgWidth + actuatedNormalize(200)} height=${svgHeight} preserveAspectRatio="none" viewBox="${I18nManager.isRTL ? 1 : 1} 0 ${Platform.OS == "ios" ? I18nManager.isRTL ? svgWidth - actuatedNormalize(90) : svgWidth : I18nManager.isRTL ? svgWidth - actuatedNormalize(20) : svgWidth + actuatedNormalize(175)} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity=".1" fill-rule="evenodd" clip-rule="evenodd" d="M-319 254.848 468.5 0 206 518.485l-525-263.637z" fill="#F5F5F5" fill-opacity=".5"/>
<path opacity=".08" fill-rule="evenodd" clip-rule="evenodd" d="M-221.5 43.94V536.06h480l-480-492.122z" fill="#F5F5F5" fill-opacity=".5"/>
<path opacity=".12" fill-rule="evenodd" clip-rule="evenodd" d="M-4 395.455 378.5 87.879l315 386.666L-4 395.455z" fill="#F5F5F5" fill-opacity=".5"/>
</svg>`

// export const Background = (bgColor) => {
//     return (
//         <SvgXml style={{flex:1, width: '100%', backgroundColor: bgColor.bgColor}} xml={xml1} />
//     )
// }

const MainHeader = (props) => {
    const { theme, toggleTheme,isDarkMode } = useTheme();
    console.log("WHICH THEME????",theme)

    return (

        <View
        style={{  
            height: props.HeaderHeight,
            backgroundColor:theme.primaryinvert}}>
            <View
                style={{
                    height: getStatusBarHeight()+10 ,
                    

                   
                }}
            />
            <StatusBar
      animated
      backgroundColor={theme.primaryinvert}
      barStyle={isDarkMode?'light-content': 'dark-content'}
      translucent={true}
    />
            {/* <View style={[{ ...StyleSheet.absoluteFill, zIndex: -1 },  { overflow: "hidden", }]}>
                <Background
                    bgColor = {props.bgColor}
                    />
                {props.LoginBar ?
                    <View style={{ width: '100%', height: actuatedNormalize(37), flexDirection: 'row', }}>
                        {props.LoginBar}
                    </View>
                    : null}
                <View style={[styles.whiteContainer, { backgroundColor:  "#fbfcfe" }]}>
                </View>
            </View>
            {props.children} */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: spacingS,
                    backgroundColor: theme.primaryinvert,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <LogoComponent enableLogo={props.enableLogo} changeTheme={props.changeTheme} />

                    {props.isAccountTypeReq ?
                        <>
                            <View style={{
                                height: actuatedNormalize(20),
                                width: actuatedNormalize(2),
                                backgroundColor: theme.primarycolor,
                                marginLeft: spacingS
                            }}>
                            </View>

                            <TextComponent style={{
                                marginLeft: spacingXS,
                                color: theme.primarycolor,
                                fontWeight: "700",
                                fontSize: actuatedNormalize(12),
                            }}> {props.AccountType} </TextComponent>
                        </>

                        : null}
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {props.SearchIconReq ?
                        <TouchableOpacity
                            style={{ alignSelf: '' }}
                            onPress={props.Searchfunc}>
                            <SvgIconList
                                icon="SearchIcon"
                                width={actuatedNormalize(25)}
                                height={actuatedNormalize(25)}
                                transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                            />
                        </TouchableOpacity>
                        : null}
                    {props.NotificationIconReq ?
                        <TouchableOpacity
                            style={{ alignSelf: '',marginLeft:spacingXS,marginRight:spacingXS }}
                            onPress={props.NotificationFunc}>
                            <SvgIconList
                                icon="NotificationIcon"
                                width={actuatedNormalize(25)}
                                height={actuatedNormalize(25)}
                                transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                            />
                        </TouchableOpacity>
                        : null}
                    {props.AvatarIconReq ?
                    
                        <TouchableOpacity
                            style={{ alignSelf: '' }}
                            onPress={props.AvatarIconfunc}>
                            <Avatarcomponent
                             avatarblack={props.avatarblack}
                             avatarname={props.avatarname}
                             avatarnamemid={props.avatarnamemid}
                             avatarnamesmall={props.avatarnamesmall}
                    />
                        </TouchableOpacity>
                        : null}
                    {props.LanguageSwitchReq ?
                        <TouchableOpacity
                            style={{ alignSelf: '' }}
                            onPress={props.changeLanguage}>
                            <SvgIconList
                                icon="ChangeLang"
                                width={actuatedNormalize(25)}
                                height={actuatedNormalize(25)}
                                transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                            />
                        </TouchableOpacity>
                        : null}
                </View>
            </View>
            {props.BottomBar && Platform.OS === 'ios' ?
                <View style={{
                    height:
                        getBottomSpace(), width: '100%',
                        // backgroundColor: theme.backgroundColor
                }}>
                    {props.BottomBar ? props.BottomBar : null}
                </View> : null
            }
        </View>

    )
}


const styles = {

    mainContainer: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 50,
    },

    whiteContainer: {
      //  backgroundColor: "black",
        flex: 1,
    },
}
export default MainHeader