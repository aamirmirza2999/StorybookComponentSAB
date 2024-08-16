import { I18nManager, Dimensions, Platform } from "react-native";
// import Colors from "./Colors";
import Fonts from "./Fonts";
import { actuatedNormalize } from "./PixelScaling";
import { spacingXXS,spacingXS,spacingS,spacingM,spacingL,spacingXL ,spacingXXL,fontXSmall,fontSmall,fontSmallMedium,fontMedium,fontMediumLarge,fontLarge,fontXLarge,fontXXLarge,fontXLG,fontXXLG,lineHeightXSmall,lineHeightSmall,lineHeightSmallMedium,
  radiusXS,radiusS,radiusM,radiusL,radiusXL,avatarHeight,avatarRightandLeft, lineHeightXXSmall, fontXXSmall,lineHeightMedium,lineHeightMediumLarge,lineHeightLarge,lineHeightXLarge,lineHeightXXLarge,lineHeightXLG,lineHeightXXLG,
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
    fontFamily:Fonts.Regular,
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
        fontFamily:Fonts.Regular,
        fontSize: actuatedNormalize(14),
        // color: Colors.primaryTextColor,
    },
    billDetailInputView: {
        width: '100%',
        ///height: "100%",
        justifyContent: 'center',
        height: actuatedNormalize(44),
        fontSize: actuatedNormalize(14),
        fontFamily: Fonts.Bold,
      },
      screenInitialStyle:{
      
        
      },
      TextComponentLabelstyle:{
        fontSize:actuatedNormalize(16),
        fontFamily: Fonts.Bold,
          // color: Colors.primaryTextColor,
          paddingBottom:spacingXS
      },
      TextComponentDisclaimerstyle:{
        paddingBottom:spacingM,
        fontSize:actuatedNormalize(14),
        fontFamily: Fonts.Light,
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
        fontFamily: Fonts.Bold,
        fontSize:actuatedNormalize(14),
      },
      DividerStyle:{
        backgroundColor: "rgba(118, 118, 118, 0.2)",
        height: 1,
        overflow: "hidden",
        alignSelf: "stretch"
      },
      primaryFlexBoxLarge: {
    		paddingVertical:spacingXS,
    		borderRadius: radiusS,
    		justifyContent: "center",
    		flexDirection: "row",
    		paddingHorizontal:spacingS,
    		alignItems: "center",
    		//flex: 1
  	},
    badgeNotification:{
      borderRadius: actuatedNormalize(100),
      backgroundColor: "#ffbb33",
      //flex: 1,
      width: actuatedNormalize(15),
      height: actuatedNormalize(15),
      marginLeft:spacingXS
    },
    badgeNotification1:{
      top: -55,
      left: 21,
      borderRadius: 100,
      backgroundColor: "#ffbb33",
      width: 16,
      height: 16,
      zIndex: 2
    },
    badgeTxt:{
      fontSize: fontXXSmall,
      lineHeight: lineHeightXXSmall,
      fontFamily: "Univers Next for HSBC",
      color: "#000",
      textAlign: "center",
      alignSelf:"center"
    },
    primaryFlexBoxSmall: {
      borderRadius:radiusS,
      paddingHorizontal:spacingS,
      paddingVertical:spacingXXS,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
  },
    primaryTextLarge: {
      textAlign: "center",
      fontWeight: "700",
      lineHeight:lineHeightLarge,
      fontSize:fontMediumLarge,
      fontFamily:Fonts.Bold,
  },
  primaryTextSmall: {
    fontSize:fontSmallMedium,
    lineHeight:lineHeightSmallMedium,
    fontFamily:Fonts.Regular,
    textAlign: "center",
},
secondaryFlexBoxLarge: {
  borderRadius:radiusS,
  borderStyle:"solid",
  borderWidth: 1,
  paddingHorizontal:spacingS,
 paddingVertical:spacingXS
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
  paddingVertical:spacingXS,
  overflow: "hidden"
},
quickActionButtonTxt:{
    alignSelf: "stretch",
    width:actuatedNormalize(110),
    fontSize:fontMedium,
    paddingBottom:spacingXS,
    lineHeight:lineHeightMedium,
    fontFamily:Fonts.Regular,
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
  fontSize:fontMedium,
  lineHeight: lineHeightMedium,
  textAlign: "left",
  marginLeft:spacingXS,
  fontFamily:Fonts.Regular,
},
quickActionButtonBox2:{
  borderRadius: radiusS,
  flexDirection: "row",
  alignItems: "flex-start",
  //justifyContent: "center",
 paddingHorizontal:spacingXS,
 paddingVertical:spacingXXS
  //alignItems:"flex-start"
},
quickActionButtonTxt2:{
 // alignSelf: "stretch",
fontSize:fontSmall,
lineHeight:lineHeightSmall,
fontFamily:Fonts.Regular,
textAlign: "center"
},
linkTextsmall:{
  fontSize:fontSmall,
lineHeight:lineHeightSmall,
fontFamily:Fonts.Regular,
textAlign: "left"
},
linkTextlarge:{
  fontSize:fontLarge,
lineHeight:lineHeightLarge,
fontFamily:Fonts.Regular,
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
    // backgroundColor: '#db0011',
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
    // backgroundColor: '#000000',
  },
  // paginationContainer: {
//   paddingVertical: 10,
// }, 
//Toggle
togglelabel:{
  fontFamily:Fonts.Regular,
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
      fontFamily: Fonts.Regular,
      textAlign: "center",
      fontSize: 12,
  },
  //Radio button
  iconOverflowContainerRadio1: {
    marginTop:spacingXS,
    borderRadius: 5,
    // shadowColor: "#40d3d1",
    width:"80%",
    borderWidth:1,
    marginHorizontal: spacingS,
    //  paddingBottom:ComponentBottomPadding,

    
  },
  iconOverflowContainerRadio2: {
    // marginTop:20,
    borderRadius: 5,
    // shadowColor: "#40d3d1",
    width:"80%",
    borderWidth:1,
   paddingBottom:spacingXS,
   marginHorizontal: spacingS,

    
  },
  iconOverflowContainerRadio3: {
    // backgroundColor: '#FFFFFF',
    marginTop:spacingXS,
     borderRadius: 5,
    // shadowColor: "#40d3d1",
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
    //  color: 'red'
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
    paddingVertical: spacingXS,
    alignItems: "center",
    alignSelf:"center",
    flexDirection: "row",
    //flex: 1
  },
  listButtonSecondTxt:{
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Univers Next for HSBC",
    color: "#767676",
   // textAlign: "left",
  },
  listButtonTxtSmall:{
    width: actuatedNormalize(279),
    justifyContent: "center",
    //alignItems: "flex-end",
    marginLeft: spacingXS,
    alignSelf: "center",
    fontSize: fontMediumLarge,
    lineHeight: lineHeightLarge,
    textAlign: "left",
    fontFamily:Fonts.Regular,
  },
  listButtonTxtLarge:{
    width: actuatedNormalize(279),
    justifyContent: "center",
    //alignItems: "flex-end",
    marginLeft: spacingXS,
      alignSelf: "center",
      fontSize: fontLarge,
      lineHeight: lineHeightLarge,
      textAlign: "left",
      fontFamily:Fonts.Regular,
  },
  listButtonTxtLargeHeadline:{
    width: actuatedNormalize(279),
    justifyContent: "center",
    //alignItems: "flex-end",
    marginLeft: spacingXS,
      alignSelf: "center",
      fontSize: fontMediumLarge,
      lineHeight: lineHeightMediumLarge,
      textAlign: "left",
      fontFamily:Fonts.Bold,
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
      fontSize: fontMediumLarge,
      lineHeight:lineHeightMediumLarge,
      textAlign: "left",
      fontFamily:Fonts.Regular,
  },
  listButtonTxt1:{
  
    justifyContent: "center",
    //alignItems: "flex-end",
  
      alignSelf: "center",
      fontSize: fontMediumLarge,
      lineHeight: lineHeightLarge,
      textAlign: "left",
      fontFamily:Fonts.Regular,
    },
    floatingButton:{
      borderRadius: radiusS,
      width:actuatedNormalize(56),
      height:actuatedNormalize(56),
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
    width: actuatedNormalize(32),
    height: actuatedNormalize(32),
    paddingHorizontal:spacingS,
},
  jm: {
    fontSize: fontXLarge,
    lineHeight: spacingM,
    fontWeight: actuatedNormalize(700),
    fontFamily: Fonts.Bold,
    textAlign: "left",
    zIndex: 1
},

jm2:{
  fontSize: fontMedium,
  lineHeight: lineHeightMedium,
  fontFamily: Fonts.Bold,
  textAlign: "left",
  zIndex: 1
},
jm3:{
  fontSize: fontSmall,
lineHeight: spacingS,
fontFamily: Fonts.Bold,
textAlign: "left"
},
typefilledElementsinitials: {
  borderRadius: actuatedNormalize(100),
  flex: 1,
  padding: spacingS,
 position: "absolute",
 
},

  Addbeneavatar: {
  borderRadius: radiusS,
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
    borderRadius: radiusS,
  // borderColor: "#000000",
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
      fontFamily: Fonts.Bold,
    },
    regularTextFamily:{
      fontFamily:Fonts.Regular,
    },
    lightTextFamily:{
      fontFamily: Fonts.Light,
    },
    imageButton:{
      borderRadius: radiusS,
        borderStyle: "solid",
        borderWidth: 1,
        alignSelf:"center",
        padding:spacingXS,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
       segmenttabStyle:{
            borderWidth:0,
          },
          segmentactiveTabStyle:{
            shadowOffset: {
            width: 0,
            height: 2
            },
            shadowRadius: 6,
            elevation: 6,
            shadowOpacity: 1,
            borderRadius: radiusS,
            paddingVertical: spacingXS,
            paddingHorizontal: spacingS,
            alignItems: "center",
            justifyContent: "center",
          },
          segmenttabTextStyle:{
            fontSize:fontMedium,
            lineHeight: lineHeightMedium,
            fontFamily:Fonts.Regular,
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
        tooltipArrowSize:{
          width: spacingS, 
          height: spacingXS
        },     
        tooltipText: {
          fontSize: actuatedNormalize(14),
          lineHeight: actuatedNormalize(22),
          fontFamily: "Roboto-Regular",
          color: "#000",
          textAlign: "left"
      },
      snackbarContainer:{
     // backgroundColor: "#e5f2f2",
      borderStyle: "solid",
     // borderColor: "#99cecc",
      borderWidth: 1,
      margin:actuatedNormalize(10),
      paddingVertical: spacingS,
      flexDirection: "row", 
      paddingHorizontal: spacingS,
      borderRadius: radiusS
      },
      snackbarBox:{
        paddingTop: actuatedNormalize(3),
        paddingBottom: spacingXXS,
        marginLeft: spacingS,
        flex: 1
      },
      snackBarLabel:{
        alignSelf: "stretch",
        textAlign: "left",
        fontFamily:Fonts.Regular,
        lineHeight: lineHeightMedium,
        fontSize:fontMedium
      },
      AccordianMenuContainer:{
        borderRadius: radiusS,
        paddingHorizontal: spacingS,
        paddingVertical: spacingXS,
        marginHorizontal:actuatedNormalize(10),
        marginVertical:actuatedNormalize(10)
      },
      AccordianMenuTitleBox:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      },
      AccordianTitleText:{
        fontSize: fontMedium,
        lineHeight:lineHeightMedium,
        fontFamily:Fonts.Regular,
        textAlign: "left",
        display: "flex",
        marginLeft: spacingXS,
        flex: 1,
        alignItems: "center",
        //alignItems: "center",
        alignSelf: "center"
      },
      AccordianSubMenuConatiner:{
        paddingLeft: spacingL,
        paddingTop: spacingS,
        paddingRight: spacingXS,
        paddingBottom: spacingS
      },
      AccordianSubTitleText:{
        flex: 1,
        fontSize:fontSmall,
        lineHeight: fontLarge,
        fontFamily:Fonts.Regular,
        textAlign: "left"

      },
    
     //EmptyStateNote
     
  wrapperFlexBox: {
      justifyContent: "center",
      alignItems: "center"
  },
  actionTypo: {
      textAlign: "center",
      fontFamily: Fonts.Regular
  },
  ragIcon: {
      width: actuatedNormalize(68),
      height: actuatedNormalize(68),
   justifyContent:"center",
   alignItems:"center",
   marginHorizontal:120
  },
  welcomeBack: {
      fontWeight: actuatedNormalize(700),
      lineHeight: actuatedNormalize(21),
      fontSize: spacingS,
      fontFamily: Fonts.Regular,
      flex: 1,
      marginRight:actuatedNormalize(10)
  },
  title: {
      flexDirection: "row",
  },
  enterYourUsername: {
      fontSize: fontMedium,
      lineHeight: lineHeightMedium,
      marginTop: spacingXS,
      alignSelf: "stretch",
      fontFamily: Fonts.Regular,
      textAlign: "center"
  },
  content: {
      marginTop: spacingS,
      alignSelf: "stretch",
  },
  action: {
      lineHeight: actuatedNormalize(21),
      fontSize: actuatedNormalize(16),
      fontFamily: Fonts.Regular,
  },
  wrapper1: {
      // height: 24,
      // flexDirection: "row"
  },
  wrapper: {
      flexDirection: "row"
  },
  primary: {
      paddingTop: actuatedNormalize(11),
      paddingBottom: actuatedNormalize(13),
      flexDirection: "row",
      borderRadius: spacingXS,
      flex: 1,
      justifyContent: "center"
  },
  mainbutton: {
      maxWidth: actuatedNormalize(300),
      flexDirection: "row",
      marginTop: spacingS,
  },
  emptystate: {
      paddingVertical: spacingM,
      alignItems: "center",
      paddingHorizontal: spacingS,
      width: "100%",
      borderRadius: spacingXS,
      paddingHorizontal: spacingS,
      borderRadius: spacingXS,
      flex: 1
  },
  //emptystate end
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
        height: actuatedNormalize(4),
        marginTop:actuatedNormalize(5),
        marginHorizontal:actuatedNormalize(3),
        borderRadius:actuatedNormalize(5)
      },
      pwdpostbarStyle: {
        width: "21.3%",
        height: actuatedNormalize(5),
        marginTop: actuatedNormalize(10),
        right: actuatedNormalize(17),
        //backgroundColor: "#DFDFDE",
        marginHorizontal: actuatedNormalize(3)
      },
      pwdtextContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop:actuatedNormalize(10),
        paddingRight: actuatedNormalize(25),
      },
      pwdmeterContainer: {
        alignItems: 'center',
        height: actuatedNormalize(5),
        flexDirection: 'row',
        width: '100%',
        marginTop: spacingXS,
      },
      pwdlabel2: {
        fontSize:fontSmall,
       // color: "#626469",
         lineHeight:lineHeightMedium,
      },
      pwdlabel: {
        fontSize:fontSmall,
        //color: '#000000',
        lineHeight:lineHeightMedium,
        letterSpacing: 0
      },
      pwdpostlabel2: {
        fontSize: fontMedium,
        marginLeft: actuatedNormalize(10),
        //color: "#5C6F7C"
      },
      chipsButtonLarge:{
        borderRadius: radiusXS,
        borderStyle: "solid",
        borderWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: spacingXS
      },
      chipsTextLarge:{
        fontSize: fontMedium,
        lineHeight: lineHeightMedium,
        fontFamily: Fonts.Regular,
        textAlign: "left",
        marginLeft: spacingXXS
      },
      chipsButtonSmall:{
        borderRadius: radiusXS,
        borderStyle: "solid",
        borderWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: spacingXS,
        paddingVertical: actuatedNormalize(2)
      },
      chipsTextSmall:{
        fontSize: fontSmall,
        lineHeight: lineHeightSmall,
        fontFamily: Fonts.Regular,
        textAlign: "left",
        marginLeft: spacingXXS
      },
//............
wrapper: {
  borderRadius: 100,
  borderStyle: "solid",
  borderColor:" #00847f",
  borderWidth: 1,
  width: 20,
  height: 20,
  marginHorizontal:16,
  bottom:-20
  },
  wrapper1: {
    backgroundColor: "#00847f",
    width: 14,
    height: 14,
    borderRadius: 100
    },
    wrappers: {
    borderStyle: "solid",
    borderColor: "#00847f",
    borderWidth: 1,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    flexDirection: "row"
    },
    statechecked: {
   bottom:-25,
   left:16
    },
    wrapper2: {
      borderRadius: 100,
      backgroundColor:" rgba(118, 118, 118, 0.3)",
      borderStyle: "solid",
      borderColor: "#767676",
      borderWidth: 1,
      width: 20,
      height: 20
      },
      
// bottom button
  bottombtn:{
    paddingHorizontal: spacingS, 
    paddingBottom: actuatedNormalize(27) ,
     marginTop:actuatedNormalize(15)
  }  ,
  bottombtntext:{
    lineHeight: actuatedNormalize(16),
    fontSize: actuatedNormalize(12),
    fontFamily: Fonts.Regular,
  } ,
  textview:{
    flex: 1,
    flexDirection: "row",
    marginTop: actuatedNormalize(10),
    marginLeft: spacingS,
    marginRight: spacingS,

  },
  text:{
    width: "100%",
    height: actuatedNormalize(40),
  },
  divider:{
    marginLeft: actuatedNormalize(16),
    marginRight: actuatedNormalize(16),
    height: 2,
    backgroundColor: "rgba(179,177,179,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  sartext:{
    ...Platform.select({
      ios: {
        top: I18nManager.isRTL
          ? actuatedNormalize(1)
          : actuatedNormalize(2),
      },
      android: {
        top: I18nManager.isRTL
          ? actuatedNormalize(4)
          : actuatedNormalize(2),
      },
    }),
     marginLeft: actuatedNormalize(3.5),
    fontFamily: Fonts.Regular,
    fontSize: actuatedNormalize(12),
    lineHeight: 16,
    textAlign: "left",
    flexDirection:"flex-end",
    marginTop:actuatedNormalize(-19)

  },
  totalamt:{
    fontFamily:Fonts.Bold,
    fontSize: actuatedNormalize(16),
    lineHeight:actuatedNormalize(24),
    fontWeight: "700",
    textAlign: "left",
    marginTop:actuatedNormalize(-20)

  },
  amount:{
    marginLeft: spacingS,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

  },
  totalamount:{
    fontFamily: Fonts.Regular,
    fontSize: actuatedNormalize(14),
   lineHeight: 18,
   textAlign: "left",
   flexDirection:"flex-start",
   marginTop:actuatedNormalize(-17)

  },
  overview:{
    flex: 1,
    height: actuatedNormalize(25),
    justifyContent: "center",
    alignItems: "flex-start",
  },
  firstview:{
    flex: 1,
    flexDirection: "row",
    marginLeft: spacingS,
    marginRight: spacingS,
  },
  overalldesign:{
    marginTop: actuatedNormalize(20),
    height: actuatedNormalize(30),
    justifyContent: "center",
    alignItems: "center",
  },
  animatedview:{
    height: "auto",
    backgroundColor: "#263a52",
    borderTopLeftRadius:actuatedNormalize(8),
    borderTopRightRadius: actuatedNormalize(8),
 
  },   
 }
