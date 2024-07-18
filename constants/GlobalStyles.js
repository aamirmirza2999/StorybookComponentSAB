import { I18nManager } from "react-native";
// import Colors from "./Colors";
import Fonts from "./Fonts";
import { actuatedNormalize } from "./PixelScaling";
import { spacingXXS,spacingXS,spacingS,spacingM,spacingL,spacingXL ,spacingXXL,
  radiusXS,radiusS,radiusM,radiusL,radiusXL
} from "./Size";

 export const globalStyles ={
  optioncontainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:radiusS,
    padding:spacingXS
  },
  optioncontainertxt:{
    alignSelf:"center",
    fontSize:actuatedNormalize(12),
    lineHeight:actuatedNormalize(16),
    fontFamily:Fonts.Regular_En,
    //paddingBottom:spacingXS
  },
    svgStyle :{
        width: '80',
        height: '40',
    },
    inputLabelStyle:{
        fontSize: '14px',
        paddingBottom:spacingXS,
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
          paddingBottom:spacingXS
      },
      TextComponentDisclaimerstyle:{
        paddingBottom:spacingM,
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
        marginHorizontal:spacingS,
        marginVertical:spacingM
      },
      tncTextStyle:{
        fontFamily: I18nManager.isRTL
        ? Fonts.Bold_Ar
        : Fonts.Bold_En,
        fontSize:actuatedNormalize(14),
      },
      DividerStyle:{
        backgroundColor: "rgba(118, 118, 118, 0.2)",
        height: 1,
        overflow: "hidden",
        alignSelf: "stretch"
      }
      
     
 }
