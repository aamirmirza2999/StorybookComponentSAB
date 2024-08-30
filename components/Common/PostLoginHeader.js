import React from 'react';
import {
  Dimensions,
  I18nManager,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
import { actuatedNormalize } from '../../constants/PixelScaling';
import SvgXml from './SvgXml'
import { BackArrowNew, CloseIconNew } from '../../constants/SvgLocations';
import SvgIconList from '../../constants/SvgIconList';
import TextInputComponent from './TextInputComponent';
import TextComponent from './TextComponent';
import { PrimaryButtonNew } from './ButtonComponent';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { spacingM, spacingS, spacingXS, spacingL } from '../../constants/Size';



// Get device dimensions
const IosSpecific = Platform.OS === 'ios' ? 0 : 0;
const iosMargin = Platform.OS === 'ios' ? 50 : 0; // 90

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height - IosSpecific;
const svgWidth = Number(deviceWidth) + 2;
const svgHeight = Number((deviceheight - iosMargin) / 8);

// SVG DIMENSIONS
const svgHeight2 = Number(((deviceheight - iosMargin) / 5) - getStatusBarHeight())



const styles = StyleSheet.create({

  mainContainer: function (props) {
    return {
      height: svgHeight,
     


    };
  },

  column1: {
    width: "20%",
    paddingLeft: spacingS,
    justifyContent: "flex-end",
    top: actuatedNormalize(16),
    //flexDirection: 'row',
    //alignItems: 'center'

  },
  column2: {
    width: "60%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    top: actuatedNormalize(16)

  },
  column3: {
    flexDirection: 'row',
    width: "20%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: actuatedNormalize(20),
    top: actuatedNormalize(16)

  },
  IconViewStyle1: {
    height: actuatedNormalize(25),
    width: actuatedNormalize(25),
    alignItems: "center",
    justifyContent: "center",

  },
  IconViewStyle2: {
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    height: actuatedNormalize(25),
    width: actuatedNormalize(25),
    alignItems: "center",
    justifyContent: "center",
  },
  HeadlineText: {

    fontSize: 26,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "Univers Next for HSBC",
    color: "#000",
    textAlign: "left",
    marginTop: spacingL,
    paddingHorizontal: spacingS,
  }

});
const xml1 = `<svg width=${Platform.OS == "ios" ? svgWidth + actuatedNormalize(50) : svgWidth + actuatedNormalize(100)} height=${svgHeight2 + 1} preserveAspectRatio="none" viewBox="${I18nManager.isRTL ? 0 : 1} 0 ${Platform.OS == "ios" ? I18nManager.isRTL ? svgWidth - actuatedNormalize(30) : svgWidth + actuatedNormalize(20) : I18nManager.isRTL ? svgWidth - actuatedNormalize(50) : svgWidth + actuatedNormalize(50)} ${svgHeight2}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity=".1" fill-rule="evenodd" clip-rule="evenodd" d="M-319 254.848 468.5 0 206 518.485l-525-263.637z" fill="#F5F5F5" fill-opacity=".5"/>
<path opacity=".08" fill-rule="evenodd" clip-rule="evenodd" d="M-221.5 43.94V536.06h480l-480-492.122z" fill="#F5F5F5" fill-opacity=".5"/>
<path opacity=".12" fill-rule="evenodd" clip-rule="evenodd" d="M-4 395.455 378.5 87.879l315 386.666L-4 395.455z" fill="#F5F5F5" fill-opacity=".5"/>
</svg>`

// export const Background = () => {
//   return (
//       <SvgXml style={{flex:1, width: '100%', backgroundColor: "#263a52"}} xml={xml1} />
//   )
// }
const PostLoginHeader = (props) => {
  // const navigation = useNavigation();
  const { theme, toggleTheme,isDarkMode } = useTheme();
  console.log("props>>>>1111", props)
  return (
    <View
        style={{  
          height: props.HeaderHeight,
            backgroundColor:theme.primaryinvert}}>
      <View style={{
          
        height: getStatusBarHeight() ,
      }}>
        <SafeAreaView>
          <StatusBar
            animated
            backgroundColor={theme.primaryinvert}
            barStyle={isDarkMode?'light-content': 'dark-content'}
            translucent={true}
          />
        </SafeAreaView>
      </View>


      <View style={[styles.mainContainer(props), {
         backgroundColor: theme.primaryinvert,
      }, props.HeaderStyle]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <View style={[styles.column1]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {props.enableBackButton ? (
                <TouchableOpacity
                  style={[styles.IconViewStyle1, props.IconViewStyle1]}
                  onPress={
                    props.BackarrowFun
                      ? () => {
                        (() => props.BackarrowFun());
                      }
                      : () => {
                        (() => goBack());
                      }
                  }
                >
                  <SvgIconList
                    icon="BlackArrow"
                    width={actuatedNormalize(25)}
                    height={actuatedNormalize(25)}
                    transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                  />
                </TouchableOpacity>
              ) : null}
              {props.LanguageSwitchReq ? (
                <TouchableOpacity
                  style={{ marginLeft: spacingXS }}
                  onPress={props.changeLanguage}
                >
                  <SvgIconList
                    icon="ChangeLang"
                    width={actuatedNormalize(25)}
                    height={actuatedNormalize(25)}
                    transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                  />
                </TouchableOpacity>
              ) : null}


            </View>
          </View>
          {props.HeaderTitleReq ?
            <View style={[styles.column2, {
            }, props.column2]}
            >
              <TextComponent
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  color: theme.primarycolor,
                  fontWeight: "700",
                  fontSize: actuatedNormalize(17),
                  // fontFamily: I18nManager.isRTL
                  //   ? Fonts.UniversArabicForHSBC_Regular
                  //   : Fonts.UniversNextforHSBC_Medium,

                }}
              >
                {props.title}
              </TextComponent>


            </View>
            : null}


          <View style={[styles.column3]}>

            {
              props.enableLivechat
                //  currentActiveScreen!=="LiveChatWindow" && currentActiveScreen!=="Initial_LiveChat" &&currentActiveScreen!=="NafathRegisterDevice" && currentActiveScreen!=="NafathAuthentication" && floatCTAStatus && ApiEndpoints.isNewLiveChat === "Y"
                ? (
                  <TouchableOpacity
                    style={styles.IconViewStyle2}
                  // onPress={()=>{
                  //   reduxDispatch(setCallliveChat(true))
                  // }
                  // }
                  >
                    <View style={{
                      right: I18nManager.isRTL ? actuatedNormalize(-5) : actuatedNormalize(5), width: actuatedNormalize(44), height: actuatedNormalize(44), alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <SvgIconList
                        icon="LiveChat"
                        width={actuatedNormalize(25)}
                        height={actuatedNormalize(25)}
                        transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                      />
                    </View>
                  </TouchableOpacity>
                ) : null}

            {props.enableCloseButton ? (
              <TouchableOpacity
                style={styles.IconViewStyle2}
                onPress={
                  props.onClosePress
                    ? () => (() => props.onClosePress())
                    : () => {
                      (() => goBack());
                    }
                }
              >
                <View style={{
                  width: actuatedNormalize(44), height: actuatedNormalize(44), alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <SvgIconList
                    icon="BlackClose"
                    width={actuatedNormalize(25)}
                    height={actuatedNormalize(25)}

                  />
                </View>
              </TouchableOpacity>
            ) : null}

            {props.MenuHeader ? (
              <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity
                  style={styles.IconViewStyle2}
                  onPress={props.Searchfunc}
                >
                  <SvgIconList
                    icon="SearchIcon"
                    width={actuatedNormalize(25)}
                    height={actuatedNormalize(25)}
                    transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                  />
                </TouchableOpacity>



                <TouchableOpacity
                  style={[styles.IconViewStyle2, { marginLeft: spacingXS, marginRight: spacingXS }]}
                  onPress={props.Helpfunc}
                >
                  <SvgIconList
                    icon="HelpIcon"
                    width={actuatedNormalize(25)}
                    height={actuatedNormalize(25)}
                   
                  />
                </TouchableOpacity>



                <TouchableOpacity
                  style={styles.IconViewStyle2}
                  onPress={props.AvatarIconfunc}
                >
                  <SvgIconList
                    icon="AvatarIconblack"
                    width={actuatedNormalize(32)}
                    height={actuatedNormalize(32)}
                    transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                  />
                </TouchableOpacity>

              </View>
            ) : null}


            {props.multiplesvgRequired ? (
              props.multiplesvgUI  //Add your required number of svg icons and its function within your js. 
            ) : null}


          </View>
        </View>
        {props.Headline && !props.HeaderTitleReq ?
          <TextComponent style={[styles.HeadlineText,{
            color: theme.primarycolor,
          }]}>{props.Headline}</TextComponent>
          : null}

      </View>



    </View>

  )
}




export default PostLoginHeader;
