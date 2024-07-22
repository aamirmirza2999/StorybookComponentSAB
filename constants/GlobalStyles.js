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
      },
      primaryFlexBoxLarge: {
    		paddingBottom:actuatedNormalize(13),
    		paddingTop:actuatedNormalize(11),
    		borderRadius: radiusS,
    		justifyContent: "center",
    		flexDirection: "row",
    		paddingHorizontal:spacingS,
    		alignItems: "center",
    		//flex: 1
  	},
    primaryFlexBoxSmall: {
      borderRadius:radiusS,
      paddingHorizontal:spacingS,
      paddingVertical:actuatedNormalize(7),
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",

  },
    primaryTextLarge: {
      textAlign: "center",
      lineHeight:actuatedNormalize(21),
      fontSize:actuatedNormalize(16),
      fontFamily: I18nManager.isRTL
      ? Fonts.Regular_Ar
      : Fonts.Regular_En,
  },
  primaryTextSmall: {
    fontSize:actuatedNormalize(14),
    lineHeight:actuatedNormalize(18),
    fontFamily: I18nManager.isRTL
    ? Fonts.Regular_Ar
    : Fonts.Regular_En,
    textAlign: "center",
},
secondaryFlexBoxLarge: {
  borderRadius:radiusS,
  borderStyle:"solid",
  borderWidth: 1,
  paddingHorizontal:spacingS,
  paddingTop:actuatedNormalize(11),
  paddingBottom:actuatedNormalize(13),
},
preloginRedButton:{
  paddingHorizontal:spacingL,
  paddingVertical:actuatedNormalize(9),
  justifyContent: "center",
  alignItems: "center"
},
quickActionButtonBox:{
  borderRadius:radiusS,
  alignSelf:"center",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal:spacingXXS,
  paddingVertical:actuatedNormalize(12),
  overflow: "hidden"
},
quickActionButtonTxt:{
    alignSelf: "stretch",
    width:actuatedNormalize(110),
    fontSize:actuatedNormalize(12),
    paddingBottom:spacingXS,
    lineHeight:actuatedNormalize(16),
    fontFamily: I18nManager.isRTL
      ? Fonts.Regular_Ar
      : Fonts.Regular_En,
    textAlign: "center",
    marginTop:spacingXS
},
quickActionButtonBox1:{
  borderRadius:radiusS,
  overflow: "hidden",
  flexDirection: "row",
  paddingHorizontal:spacingS,
  paddingVertical:spacingXS,
  alignItems: "center",
  alignSelf:"center",
},
quickActionButtonTxt1:{
  fontSize: actuatedNormalize(14),
  lineHeight: actuatedNormalize(18),
  textAlign: "left",
  marginLeft:spacingXS,
  fontFamily: I18nManager.isRTL
  ? Fonts.Regular_Ar
  : Fonts.Regular_En,
},
quickActionButtonBox2:{
  borderRadius: radiusS,
  flexDirection: "row",
  alignItems: "flex-start",
  //justifyContent: "center",
  padding:actuatedNormalize(12),
  //alignItems:"flex-start"
},
quickActionButtonTxt2:{
 // alignSelf: "stretch",
fontSize:actuatedNormalize(12),
lineHeight:actuatedNormalize(16),
fontFamily: I18nManager.isRTL
? Fonts.Regular_Ar
: Fonts.Regular_En,
//textAlign: "left"
},
linkTextsmall:{
  fontSize:actuatedNormalize(12),
lineHeight:actuatedNormalize(16),
fontFamily: I18nManager.isRTL
? Fonts.Regular_Ar
: Fonts.Regular_En,
textAlign: "left"
},
linkTextlarge:{
  fontSize:actuatedNormalize(14),
lineHeight:actuatedNormalize(18),
fontFamily: I18nManager.isRTL
? Fonts.Regular_Ar
: Fonts.Regular_En,
textAlign: "left"
},
   //Paginator
   activeDot: {
    width:actuatedNormalize(16),
    height: actuatedNormalize(3),
    borderRadius: actuatedNormalize(100),
    paddingHorizontal:spacingXS
  },
    
  subactiveDot: {
    width:actuatedNormalize(40),
    height: actuatedNormalize(3),
    borderRadius: actuatedNormalize(100),
    backgroundColor: '#db0011',
  }, 

  inactiveDot: {
    width:actuatedNormalize(16),
    height:actuatedNormalize (3),
    borderRadius: actuatedNormalize(100),
  },
  subinactiveDot: {
    width:actuatedNormalize(16),
    height: actuatedNormalize(3),
    borderRadius: actuatedNormalize(100),
    backgroundColor: '#000000',
  },
  // paginationContainer: {
//   paddingVertical: 10,
// }, 
//Toggle
togglelabel:{
  fontFamily: I18nManager.isRTL
? Fonts.Regular_Ar
: Fonts.Regular_En,
} ,
 
  badgestatus: {
    flex: 1,
    width: "100%"
  },
  badgenotification: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
    notificationbadgetext: {
      lineHeight: 17,
      fontFamily: "Univers Next for HSBC",
      textAlign: "center",
      fontSize: 12,
      padding:actuatedNormalize(spacingXXS)
  },
  listButtonSmall:{
    borderRadius: radiusS,
    //width: "100%",
    overflow: "hidden",
    paddingHorizontal:spacingS,
    paddingVertical: spacingXS,
    alignItems: "center",
    alignSelf:"center",
    flexDirection: "row",
    //flex: 1
  },
  listButtonLarge:{
    borderRadius: radiusS,
    //width: "100%",
    overflow: "hidden",
    paddingHorizontal:spacingS,
    paddingVertical: spacingS,
    alignItems: "center",
    alignSelf:"center",
    flexDirection: "row",
    //flex: 1
  },
  listButtonTxtSmall:{
    width: actuatedNormalize(279),
    justifyContent: "center",
    //alignItems: "flex-end",
    marginLeft: spacingXS,
    alignSelf: "center",
    fontSize: actuatedNormalize(14),
    lineHeight: actuatedNormalize(18),
    textAlign: "left",
    fontFamily: I18nManager.isRTL
    ? Fonts.Regular_Ar
    : Fonts.Regular_En,
  },
  listButtonTxtLarge:{
    width: actuatedNormalize(279),
    justifyContent: "center",
    //alignItems: "flex-end",
    marginLeft: spacingXS,
      alignSelf: "center",
      fontSize: actuatedNormalize(16),
      lineHeight: actuatedNormalize(21),
      textAlign: "left",
      fontFamily: I18nManager.isRTL
      ? Fonts.Regular_Ar
      : Fonts.Regular_En,
  },
  listButtonDashboard:{
    borderRadius: radiusS,
    //width: "100%",
    overflow: "hidden",
    paddingHorizontal:spacingS,
    paddingVertical: spacingS,
    alignItems: "center",
    justifyContent:"center",
    alignSelf:"center",
    flexDirection: "row",
  },
  listButtonDashboard1:{
    borderRadius: radiusS,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    padding:spacingS,
    //alignSelf:"flex-start",
  },
  listButtonTxt:{
    width: actuatedNormalize(279),
    justifyContent: "center",
    //alignItems: "flex-end",
    marginLeft: spacingXS,
      alignSelf: "center",
      fontSize: actuatedNormalize(14),
      lineHeight: actuatedNormalize(15),
      textAlign: "left",
      fontFamily: I18nManager.isRTL
      ? Fonts.Regular_Ar
      : Fonts.Regular_En,
  },
  listButtonTxt1:{
  
    justifyContent: "center",
    //alignItems: "flex-end",
  
      alignSelf: "center",
      fontSize: actuatedNormalize(14),
      lineHeight: actuatedNormalize(15),
      textAlign: "left",
      fontFamily: I18nManager.isRTL
      ? Fonts.Regular_Ar
      : Fonts.Regular_En,
    },
    floatingButton:{
      borderRadius: radiusS,
      backgroundColor: "#db0011",
      //alignSelf:"center",
     // marginTop:7,
      width:actuatedNormalize(56),
      height: actuatedNormalize(56),
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
        
      
     
 }
