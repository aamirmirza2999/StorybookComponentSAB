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
import {SvgXml} from 'react-native-svg';
import {BackArrowNew, CloseIconNew} from '../../constants/SvgLocations';
import SvgIconList from '../../constants/SvgIconList';
import TextInputComponent from './TextInputComponent';
import TextComponent from './TextComponent';
import SquareSVG from './SvgHeader';
import {PrimaryButtonNew} from './ButtonComponent';
import { useNavigation} from "@react-navigation/native";
import { useTheme } from "../../constants/Theme/ThemeProvider";



// Get device dimensions
const IosSpecific = Platform.OS === 'ios' ? 0 : 0;
const iosMargin = Platform.OS === 'ios' ? 50 : 0; // 90

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height - IosSpecific;
const svgWidth = Number(deviceWidth) + 2;
const svgHeight = Number((deviceheight - iosMargin) / 8 - 0);



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
   // marginBottom: I18nManager.isRTL ? actuatedNormalize(0) : actuatedNormalize(5)
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
const PostLoginHeader = (props) => {
 // const navigation = useNavigation();
 const { colors, isDark } = useTheme();
  console.log("props>>>>1111",props)
  return (
    <>
    <View style={{
      backgroundColor: props.bgColor ? props.bgColor : "#263a52",     
      height: Platform.OS === "android" ? 0 : 0,
    }}>
       <SafeAreaView>
    <StatusBar
      animated
      backgroundColor={'#263a52'}
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
            <SquareSVG
            bgColor = {props.bgColor ? props.bgColor : "#263a52"}
          />
         
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
            icon="backIcon"
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
                color: props.TextColor,
                fontSize: actuatedNormalize(14),
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
               icon="closeIcon"
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
