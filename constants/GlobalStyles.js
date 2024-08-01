import { I18nManager, Dimensions, Platform } from "react-native";
// import Colors from "./Colors";
import Fonts from "./Fonts";
import { actuatedNormalize } from "./PixelScaling";
import { spacingXXS,spacingXS,spacingS,spacingM,spacingL,spacingXL ,spacingXXL,
  radiusXS,radiusS,radiusM,radiusL,radiusXL,avatarHeight,avatarRightandLeft, S2, S10, S3, S18, S14, S12, S17, S4, S5, S25, S8
} from "./Size";


const deviceHeight = Dimensions.get('window').height;

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
  },
  //Radio button
  iconOverflowContainerRadio1: {
    backgroundColor: '#FFFFFF',
    marginTop:spacingXS,
    borderRadius: 5,
    shadowColor: "#40d3d1",
    borderColor:"green",
    width:"80%",
    borderWidth:1,
    marginHorizontal: spacingS,
    //  paddingBottom:ComponentBottomPadding,

    
  },
  iconOverflowContainerRadio2: {
    backgroundColor: '#FFFFFF',
    // marginTop:20,
    borderRadius: 5,
    shadowColor: "#40d3d1",
    borderColor:"green",
    width:"80%",
    borderWidth:1,
   paddingBottom:spacingXS,
   marginHorizontal: spacingS,

    
  },
  iconOverflowContainerRadio3: {
    backgroundColor: '#FFFFFF',
    marginTop:spacingXS,
     borderRadius: 5,
    shadowColor: "#40d3d1",
    borderColor:"green",
    width:"45%",
    borderWidth:1,
    // marginHorizontal: inputVertical,
    
    
    
  },
  Radiobtnv2:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  Radiobtnerrmsg:{
    marginHorizontal: spacingS,
    paddingBottom:spacingXS,
     color: 'red'
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
    },
    //Avathar
    path3Icon: {
      position: "absolute",
      top: -6,
      left: -41,
      width: 172,
      height: 134,
      display: "none",
      opacity: 0.03,
      zIndex: 0
  },
  avatar: {
    width: 32,
    height: 32,
    paddingHorizontal:spacingS,
},
  jm: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: I18nManager.isRTL
          ? Fonts.Bold_Ar
          : Fonts.Bold_En,
    color: "#db0011",
    textAlign: "left",
    zIndex: 1
},

jm2:{
  fontSize: 14,
  lineHeight: 18,
  fontFamily: I18nManager.isRTL
          ? Fonts.Bold_Ar
          : Fonts.Bold_En,
  color: "#db0011",
  textAlign: "left",
  zIndex: 1
},
jm3:{
  fontSize: 12,
lineHeight: 16,
fontFamily: I18nManager.isRTL
          ? Fonts.Bold_Ar
          : Fonts.Bold_En,
color: "#db0011",
textAlign: "left"
},
typefilledElementsinitials: {
  borderRadius: 100,
  backgroundColor: "#fbe5e7",
  flex: 1,
  padding: 16,
 position: "absolute",
 
},

  Addbeneavatar: {
  borderRadius: 8,
  backgroundColor: "#DB0011",
  overflow: "hidden",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginLeft:avatarRightandLeft,
  marginRight:avatarRightandLeft,
  height:avatarHeight,
  top:10
  },
  splitavatar:{
    borderRadius: 8,
  borderColor: "#000000",
  borderWidth:1,
  overflow: "hidden",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginLeft:avatarRightandLeft,
  marginRight:avatarRightandLeft,
  height:avatarHeight
  },
    boldTextFamily:{
      fontFamily: I18nManager.isRTL
      ? Fonts.Bold_Ar
      : Fonts.Bold_En,
    },
    regularTextFamily:{
      fontFamily: I18nManager.isRTL
      ? Fonts.Regular_Ar
      : Fonts.Regular_En,
    },
    lightTextFamily:{
      fontFamily: I18nManager.isRTL
      ? Fonts.Light_Ar
      : Fonts.Light_En,
    },
    imageButton:{
      borderRadius: radiusS,
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        alignSelf:"center",
      
        //width: "100%",
        //height: 48,
        padding:spacingXS,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        //minWidth: 48
      },
       segmenttabStyle:{
            borderWidth:0,
            backgroundColor: "rgba(118, 118, 118, 0.2)",
          },
          segmentactiveTabStyle:{
            shadowColor: "rgba(0, 0, 0, 0.15)",
            shadowOffset: {
            width: 0,
            height: S2
            },
            shadowRadius: 6,
            elevation: 6,
            shadowOpacity: 1,
            borderRadius: radiusS,
            backgroundColor: "#fff",
            paddingVertical: spacingXS,
            paddingHorizontal: spacingS,
            alignItems: "center",
            justifyContent: "center",
          },
          segmenttabTextStyle:{
            fontSize: actuatedNormalize(14),
            lineHeight: actuatedNormalize(18),
            fontFamily: I18nManager.isRTL
            ? Fonts.Regular_Ar
            : Fonts.Regular_En,
            color: "#000",
            textAlign: "center"
          },
          tooltipContainerStyle: {
            borderRadius: actuatedNormalize(2),
            padding: spacingXS,
            backgroundColor: "#fbfcfe",
            shadowColor: "rgba(0, 0, 0, 0.15)",
            shadowOffset: {
                width: actuatedNormalize(0),
                height: actuatedNormalize(2)
            },
            shadowRadius: radiusS,
            elevation: spacingXS,
            shadowOpacity: actuatedNormalize(1),
            // marginHorizontal:16
        },        
        tooltipText: {
          fontSize: actuatedNormalize(14),
          lineHeight: actuatedNormalize(22),
          fontFamily: "Roboto-Regular",
          color: "#000",
          textAlign: "left"
      },
      snackbarContainer:{
      backgroundColor: "#e5f2f2",
      borderStyle: "solid",
      borderColor: "#99cecc",
      borderWidth: 1,
      margin:S10,
      paddingVertical: spacingS,
      flexDirection: "row", 
      paddingHorizontal: spacingS,
      borderRadius: radiusS
      },
      snackbarBox:{
        paddingTop: S3,
        paddingBottom: spacingXXS,
        marginLeft: spacingS,
        flex: 1
      },
      snackBarLabel:{
        alignSelf: "stretch",
        color: "#000",
        textAlign: "left",
        fontFamily: I18nManager.isRTL
        ? Fonts.Regular_Ar
        : Fonts.Regular_En,
        lineHeight: S18,
        fontSize:S14
      },
      AccordianMenuContainer:{
        borderRadius: radiusS,
        backgroundColor: "#f2f3f4",
       // width: "100%",
        paddingHorizontal: spacingS,
        paddingVertical: spacingXS,
        marginHorizontal:S10,
        marginVertical:S10
      },
      AccordianMenuTitleBox:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      },
      AccordianTitleText:{
        fontSize: S14,
        lineHeight:S18,
        fontFamily: I18nManager.isRTL
        ? Fonts.Regular_Ar
        : Fonts.Regular_En,
        color: "#000",
        textAlign: "left",
        display: "flex",
        marginLeft: spacingXS,
        flex: 1,
        alignItems: "center",
        //alignItems: "center",
        alignSelf: "center"
      },
      AccordianSubMenuConatiner:{
        backgroundColor: "#f2f3f4",
        paddingLeft: spacingL,
        paddingTop: spacingS,
        paddingRight: spacingXS,
        paddingBottom: spacingS
      },
      AccordianSubTitleText:{
        flex: 1,
        fontSize:S12,
        lineHeight: S17,
        fontFamily: I18nManager.isRTL
        ? Fonts.Regular_Ar
        : Fonts.Regular_En,
        color: "#000",
        textAlign: "left"

      },
      tabBarLabel: {
        alignSelf: "center",
        lineHeight: I18nManager.isRTL? actuatedNormalize(20) : actuatedNormalize(18), 
        fontSize: actuatedNormalize(14),
      },
      tabBarContainer: {
        flex: 1,
        backgroundColor: '#fbfcfe',
      },
      tabBarComponent:{
        height: deviceHeight,
        backgroundColor: '#fbfcfe',
        marginHorizontal: spacingS
      },
      renderTabBarView: {
        marginLeft: spacingXS,
        marginRight: spacingXS,
      },
      tabBarIndicatorStyle: {
        backgroundColor: "#eeeeee",
        height: "75%",
        borderRadius: radiusS,
        justifyContent: "center",
        bottom: spacingXS,
        ...(Platform.OS === "web" && {
        height: actuatedNormalize(24), // Using height for consistent sizing
        position: "absolute",
        top: actuatedNormalize(-12), // Adjust top to ensure borderRadius is not cut off
        })
      },
      tabBarStyle: {
        backgroundColor: '#fbfcfe',
        elevation: 0,
        // borderColor: "rgba(179,177,179,0.25)",
        shadowOpacity: 0
      },
      tabBarIndicatorContainerStyle: {
        alignSelf: 'center',
        bottom: -1
      },
      pwdbarStyle:{
        width: "31%",
        height: S4,
        marginTop:S5,
        backgroundColor: "#FFFFFF80",
        marginHorizontal:S3,
        borderRadius:S5
      },
      pwdpostbarStyle: {
        width: "21.3%",
        height: S5,
        marginTop: S10,
        right: S17,
        backgroundColor: "#DFDFDE",
        marginHorizontal: S3
      },
      pwdtextContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop:S10,
        paddingRight: S25,
      },
      pwdmeterContainer: {
        alignItems: 'center',
        height: S5,
        flexDirection: 'row',
        width: '100%',
        marginTop: S8,
      },
      pwdlabel2: {
        fontSize:S12,
        color: "#626469",
         lineHeight:S18,
      },
      pwdlabel: {
        fontSize:S12,
        color: '#000000',
        lineHeight:S18,
        letterSpacing: 0
      },
      pwdpostlabel2: {
        fontSize: S14,
        marginLeft: S10,
        color: "#5C6F7C"
      },
      
     
 }
