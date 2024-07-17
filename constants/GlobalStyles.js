import { I18nManager } from "react-native";
// import Colors from "./Colors";
import Fonts from "./Fonts";
import { actuatedNormalize } from "./PixelScaling";
import { ComponentBottomPadding, TextInputBottom } from "./Size";

 export const globalStyles ={
  optioncontainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:actuatedNormalize(8),
    padding:actuatedNormalize(8)
  },
  optioncontainertxt:{
    alignSelf:"center",
    fontSize:actuatedNormalize(12),
    lineHeight:actuatedNormalize(16),
    fontFamily:Fonts.Regular_En,
    //paddingBottom:TextInputBottom
  },
    svgStyle :{
        width: '80',
        height: '40',
    },
    inputLabelStyle:{
        fontSize: '14px',
        paddingBottom:TextInputBottom,
        // flexDirection: 'row',
        // justifyContent: 'center',
        fontFamily:Fonts.Regular_En,
        fontSize: actuatedNormalize(14),
        // color: Colors.primaryTextColor,
    },
    billDetailInputView: {
        width: '100%',
        ///height: "100%",
        justifyContent: 'center',
        height: actuatedNormalize(44),
        fontSize: actuatedNormalize(14),
        fontFamily: I18nManager.isRTL
          ? Fonts.Bold_Ar
          : Fonts.Bold_En,
      },
      screenInitialStyle:{
      
        
      },
      TextComponentLabelstyle:{
        fontSize:actuatedNormalize(16),
        fontFamily: I18nManager.isRTL
          ? Fonts.Bold_Ar
          : Fonts.Bold_En,
          // color: Colors.primaryTextColor,
          paddingBottom:TextInputBottom
      },
      TextComponentDisclaimerstyle:{
        paddingBottom:ComponentBottomPadding,
        fontSize:actuatedNormalize(14),
        fontFamily: I18nManager.isRTL
          ? Fonts.Light_Ar
          : Fonts.Light_En,
          // color: Colors.primaryTextColor,
      },
      TextInputComponenttextstyle:{
        fontWeight:'bold',
        fontSize:actuatedNormalize(16)
      },
      NoneditableInputstyle:{
        backgroundColor:"rgba(234, 234, 234, 0.6)",
        width: '100%'

      },
      inititalStyle:{
        marginHorizontal:16,
        marginVertical:24
      },
      tncTextStyle:{
        fontFamily: I18nManager.isRTL
        ? Fonts.Bold_Ar
        : Fonts.Bold_En,
        fontSize:actuatedNormalize(14),
      }
      
     
 }
