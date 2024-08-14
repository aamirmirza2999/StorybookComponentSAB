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
import {actuatedNormalize} from '../../constants/PixelScaling';
import SvgXml from './SvgXml'
import {BackArrowNew, CloseIconNew} from '../../constants/SvgLocations';
import SvgIconList from '../../constants/SvgIconList';
import TextInputComponent from './TextInputComponent';
import TextComponent from './TextComponent';
import {PrimaryButtonNew} from './ButtonComponent';
import { useNavigation} from "@react-navigation/native";
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { getStatusBarHeight } from "react-native-iphone-x-helper";



// Get device dimensions
const IosSpecific = Platform.OS === 'ios' ? 0 : 0;
const iosMargin = Platform.OS === 'ios' ? 50 : 0; // 90

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height - IosSpecific;
const svgWidth = Number(deviceWidth) + 2;
const svgHeight = Number((deviceheight - iosMargin) / 12 - 0);

// SVG DIMENSIONS
const svgHeight2 = Number(((deviceheight-iosMargin) / 5 ) - getStatusBarHeight())



const styles = StyleSheet.create({

  mainContainer: function (props) {
    return {
      height: props.hideHeaderOpacity ? 0 : svgHeight ,
      flexDirection: 'row',
     
    };
  },
 
  column1: {
    width: "20%",
    paddingLeft: actuatedNormalize(20),
    justifyContent: "flex-end",
    top:actuatedNormalize(16)
    
  },
  column2: {
    width: "60%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection:"row",
    top:actuatedNormalize(16)
   
  },
  column3: {
    flexDirection:'row',
    width: "20%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: actuatedNormalize(20),
    top:actuatedNormalize(16)
  
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
  
});
const xml1 = `<svg width=${Platform.OS== "ios" ? svgWidth+actuatedNormalize(50) : svgWidth + actuatedNormalize(100)} height=${svgHeight2+1} preserveAspectRatio="none" viewBox="${I18nManager.isRTL? 0 : 1} 0 ${Platform.OS== "ios" ? I18nManager.isRTL? svgWidth-actuatedNormalize(30):svgWidth+actuatedNormalize(20) : I18nManager.isRTL?svgWidth-actuatedNormalize(50):svgWidth+actuatedNormalize(50)} ${svgHeight2}" fill="none" xmlns="http://www.w3.org/2000/svg">
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
 const { colors, isDark } = useTheme();
  console.log("props>>>>1111",props)
  return (
    <>
    <View style={{
      backgroundColor: props.bgColor ? props.bgColor : "#263a52",     
      //height: Platform.OS === "android" ? 0 : 0,
    }}>
       <SafeAreaView>
    <StatusBar
      animated
      backgroundColor={'transparent'}
      barStyle={'default'}
      translucent={true}
    />
    </SafeAreaView>
    </View>

    {!props.hideHeader ? (
      <View style={[styles.mainContainer(props),{
      }, props.HeaderStyle]}>
        <View
          style={{
            ...StyleSheet.absoluteFill,
          }}
        >
            {/* <Background
            bgColor = {props.bgColor ? props.bgColor : "#263a52"}
          /> */}
         
        </View>

       
        <View style={[styles.column1, {width:"20%"}]}>
          {props.enableBackButton ? (
            <TouchableOpacity
              style={[styles.IconViewStyle1,props.IconViewStyle1]}
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
            transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
          />
            </TouchableOpacity>
          ) : null}
         
          
        </View>
        
          <View style={[styles.column2,{
          }, props.column2]}
          >
            <TextComponent
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: "#000",
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
              <View style={{right:I18nManager.isRTL?actuatedNormalize(-5): actuatedNormalize(5), width:actuatedNormalize(44),height:actuatedNormalize(44), alignItems:'center',
              justifyContent:'center',
              }}>
              <SvgIconList
            icon="LiveChat"
            width={actuatedNormalize(25)}
            height={actuatedNormalize(25)}
            transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
          />
              </View>
            </TouchableOpacity>
               ): null} 
        
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
              <View style={{width:actuatedNormalize(44),height:actuatedNormalize(44), alignItems:'center',
              justifyContent:'center',
              }}>
              <SvgIconList
               icon="BlackClose"
               width={actuatedNormalize(25)}
               height={actuatedNormalize(25)}
           
          />
              </View>
            </TouchableOpacity>
          ) : null}
          
          {props.multiplesvgRequired ? (
            props.multiplesvgUI  //Add your required number of svg icons and its function within your js. 
          ) : null}
         
                                 
        </View>
       
      </View>
    ) : null}
    </>

  )
}




export default PostLoginHeader;
