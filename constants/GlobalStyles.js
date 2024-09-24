import { I18nManager, Dimensions, Platform } from "react-native";
// import Colors from "./Colors";
import Fonts from "./Fonts";
import { actuatedNormalize } from "./PixelScaling";
import { spacingXXS,spacingXS,spacingS,spacingM,spacingL,spacingXL ,spacingXXL,fontXSmall,fontSmall,fontSmallMedium,fontMedium,fontMediumLarge,fontLarge,fontXLarge,fontXXLarge,fontXLG,fontXXLG,lineHeightXSmall,lineHeightSmall,lineHeightSmallMedium,
  radiusXS,radiusS,radiusM,radiusL,radiusXL,avatarHeight,avatarRightandLeft, lineHeightXXSmall, fontXXSmall,lineHeightMedium,lineHeightMediumLarge,lineHeightLarge,lineHeightXLarge,lineHeightXXLarge,lineHeightXLG,lineHeightXXLG, fontWeightBold, sizeXL,
} from "./Size";


const deviceHeight = Dimensions.get('window').height;

 export const globalStyles ={
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
        fontFamily: Fonts.HSBC,
      },
      screenInitialStyle:{
      
        
      },
      TextComponentLabelstyle:{
        fontSize:actuatedNormalize(16),
        fontFamily: Fonts.HSBC,
          // color: Colors.primaryTextColor,
          paddingBottom:spacingXS
      },
      TextComponentDisclaimerstyle:{
        paddingBottom:spacingM,
        fontSize:actuatedNormalize(14),
        fontFamily: Fonts.HSBC,
          // color: Colors.primaryTextColor,
      },
      TextInputComponenttextstyle:{
        fontWeight:fontWeightBold,
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
        fontFamily: Fonts.HSBC,
        fontSize:actuatedNormalize(14),
      },
      DividerStyle:{
        backgroundColor: "rgba(118, 118, 118, 0.2)",
        height: 1,
        overflow: "hidden",
        alignSelf: "stretch"
      },
      primaryFlexBoxLarge: {
        // margin:8,
          paddingVertical:spacingXS,
          borderRadius:radiusS,
          justifyContent: "center",
          flexDirection: "row",
          paddingHorizontal:spacingS,
          alignItems: "center",
          minWidth: 128,
          height: 48,
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
      top: -75,
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
      fontFamily: Fonts.HSBC,
      color: "#000",
      textAlign: "center",
      alignSelf:"center"
    },
    primaryFlexBoxSmall: {
      borderRadius:radiusS,
      paddingHorizontal:spacingS,
      paddingVertical:actuatedNormalize(7),
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      minWidth: 60
  },
    primaryTextLarge: {
      textAlign: "center",
      fontWeight: fontWeightBold,
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
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:radiusS,
  borderStyle:"solid",
  borderWidth: 1,
  paddingHorizontal:spacingS,
  paddingVertical:spacingXS,
  minWidth: 128,
  height: 48,
},
secondaryFlexBoxSmall: {
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:radiusS,
  borderStyle:"solid",
  borderWidth: 1,
  paddingHorizontal:spacingS,
 paddingVertical:spacingXXS
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
  overflow: "hidden",
  height: 116,
  gap: 8,
},
quickActionButtonTxt:{
    alignSelf: "stretch",
    width:actuatedNormalize(110),
    fontSize:fontMedium,
    //paddingBottom:spacingXS,
    lineHeight:lineHeightMedium,
    fontFamily:Fonts.Regular,
    textAlign: "center",
    //marginTop:spacingXS
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
  margin:8,
  width: 48,
  height: 48,
  borderRadius: radiusS,
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingHorizontal:spacingXS,
  paddingVertical:spacingXXS,
  alignItems:"center",
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
      fontFamily: Fonts.HSBC,
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
   // width: "100%",
    overflow: "hidden",
    paddingHorizontal:spacingS,
    paddingVertical: spacingXS,
 
   // flexDirection: "row",
    //flex: 1
  },
  listButtonSecondTxt:{
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.HSBC,
    color: "#767676",
   // textAlign: "left",
  },
  listBadgeTxt:{
    lineHeight: 18,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Univers Next for HSBC"
  },
  listBadge:{
    marginLeft: spacingXS,
    borderRadius: 4,
    backgroundColor: "#e5f2f2",
    borderStyle: "solid",
    borderColor: "#99cecc",
    borderWidth: 0.5,
    paddingHorizontal: 8,
    alignSelf:"stretch",
    paddingVertical: 2,
    marginTop: 8,
    justifyContent: "center",
    //display: "none",
    alignItems: "center",
    flexDirection: "row"
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
      fontSize: fontMedium,
      lineHeight: lineHeightMedium,
      textAlign: "left",
      marginTop:8,
      fontFamily:Fonts.Regular,
  },
  listButtonTxtLargeHeadline:{
    width: actuatedNormalize(279),
    alignSelf: "stretch",
    justifyContent: "center",
    //alignItems: "flex-end",
    marginLeft: spacingXS,
      alignSelf: "center",
      fontSize: fontMediumLarge,
      lineHeight: lineHeightMediumLarge,
      textAlign: "left",
      fontFamily:Fonts.HSBC,
      fontWeight:fontWeightBold,
  },
  listButtonTxtLargeHeadlineSmall:{
    width: actuatedNormalize(279),
    alignSelf: "stretch",
    justifyContent: "center",
    //alignItems: "flex-end",
    marginLeft: spacingXS,
      alignSelf: "center",
      fontSize: fontMediumLarge,
      lineHeight: lineHeightMediumLarge,
      textAlign: "left",
      fontFamily:Fonts.HSBC,
  },
  listButtonDashboard:{
    borderRadius: radiusS,
    width: "100%",
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
    // width: actuatedNormalize(30),
    // height: actuatedNormalize(30),
    top:  Platform.OS ==="ios" ?actuatedNormalize(3):actuatedNormalize(3),
    marginRight: actuatedNormalize(6)

},
  jm: {
    fontSize: fontXLarge,
    lineHeight: spacingM,
    fontWeight: fontWeightBold,
    fontFamily: Fonts.HSBC,
    textAlign: "left",
    zIndex: 1
},

jm2:{
  fontSize: fontMedium,
  lineHeight: lineHeightMedium,
  fontFamily: Fonts.HSBC,
  textAlign: "left",
  zIndex: 1
},
jm3:{
  fontSize: fontSmall,
lineHeight: spacingS,
fontFamily: Fonts.HSBC,
 textAlign: "left",
 bottom:1
},
typefilledElementsinitials: {
  borderRadius: actuatedNormalize(100),
    padding: spacingXS,
   justifyContent:"space-around" ,
    marginRight:actuatedNormalize(6),
    top:  Platform.OS ==="ios" ?actuatedNormalize(4): actuatedNormalize(4),

 
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
      fontFamily: Fonts.HSBC,
    },
    regularTextFamily:{
      fontFamily:Fonts.HSBC,
    },
    lightTextFamily:{
      fontFamily: Fonts.HSBC,
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
      fontFamily: Fonts.HSBC
  },
  ragIcon: {
      width: actuatedNormalize(68),
      height: actuatedNormalize(68),
   justifyContent:"center",
   alignItems:"center",
   marginHorizontal:120
  },
  welcomeBack: {
      fontWeight:fontWeightBold,
      lineHeight: actuatedNormalize(21),
      fontSize: spacingS,
      fontFamily: Fonts.HSBC,
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
      fontFamily: Fonts.HSBC,
      textAlign: "center"
  },
  content: {
      marginTop: spacingS,
      alignSelf: "stretch",
  },
  action: {
      lineHeight: actuatedNormalize(21),
      fontSize: actuatedNormalize(16),
      fontFamily: Fonts.HSBC,
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
        lineHeight: I18nManager.isRTL? lineHeightMedium : lineHeightMedium, 
        fontSize: fontMedium,
        
      },
      container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: spacingS,
      },
      tabBarContainer: {
        flex: 1,
      },
      tabBarComponent:{
        height: deviceHeight,
      },
      renderTabBarView: {
        // marginLeft: spacingXS,
        // marginRight: spacingXS,
        // gap:60,
      },
      tabBarIndicatorStyle: {
        height:0
      },
      tabBarStyle: {
        //  backgroundColor: '#fbfcfe',
elevation: 0,
        shadowOpacity: 0,

      },
      tabBarIndicatorContainerStyle: {
         alignSelf: 'center',
         elevation: 0,
         shadowOpacity: 0,
         shadowColor:"transperent",
         
        // bottom: -1
        
      },
      TabBarView:{
        borderRadius: radiusS,
        height: actuatedNormalize(36),
        alignItems: "center",
        justifyContent:"space-evenly",
     paddingHorizontal: spacingS,
        width: "auto",
        paddingVertical:spacingXS,
        minWidth:sizeXL,
        // gap:8
      },
      subTabs:{
        flexDirection: "row-reverse",
        justifyContent: "flex-end", 
        marginTop: fontXXSmall, 
         marginHorizontal: spacingXS,
      },
      activetab:{
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        borderRadius: spacingXS,
        marginVertical: fontXXSmall,

      },
      inactivetab:{
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        borderRadius:spacingXS,
        marginHorizontal: spacingXS,
        marginVertical: fontXXSmall,
        height: fontXXLG,
      },
      activetext:{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: fontMedium,
        fontFamily: I18nManager.isRTL
                     ? Fonts.UniversArabicForHSBC_Regular
                     : Fonts.UniversNextforHSBC_Regular,
        paddingHorizontal: spacingS,
        paddingVertical: spacingXS,
      },
      inactivetext:{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: fontMedium,
        fontFamily: I18nManager.isRTL
            ? Fonts.UniversArabicForHSBC_Regular
            : Fonts.UniversNextforHSBC_Regular,
        paddingHorizontal:spacingS,
        paddingVertical: spacingXS,
      },
      //......................
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
        fontFamily: Fonts.HSBC,
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
        fontFamily: Fonts.HSBC,
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
    fontFamily: Fonts.HSBC,
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
    fontFamily: Fonts.HSBC,
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
    fontWeight: fontWeightBold,
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
    fontFamily: Fonts.HSBC,
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

  //Card Component style:

  sarTypo: {
    textAlign: "left",
    fontFamily: Fonts.HSBC
},
wrapperFlexBox1: {
    alignSelf: "stretch",
    marginTop: spacingXS
},
wrapper1FlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch"
},
wrapperFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row"
},

parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch"
},
textTypo1: {
    fontFamily: Fonts.HSBC,
    lineHeight: lineHeightMediumLarge,
    fontSize: fontMedium,
    textAlign: "left",
    color: "#fff"
},
textTypo: {
    textAlign: "right",
    lineHeight: lineHeightLarge,
    fontFamily: Fonts.HSBC,
    color: "#fff",
    fontSize: fontMediumLarge
},

welcomeBack: {
    lineHeight: lineHeightMediumLarge,
    width: actuatedNormalize(221),
    height: actuatedNormalize(42),
    color: "#fff",
    textAlign: "left",
    fontFamily: Fonts.HSBC,
    fontWeight: "700",
    fontSize: fontMediumLarge
},

label: {
    fontSize: fontSmall,
    lineHeight: fontMediumLarge,
    color: "#000",
    textAlign: "left",
    fontFamily: Fonts.HSBC
},

chipsinfo: {
    borderRadius: radiusXS,
    backgroundColor: "#f9f2f3",
    borderStyle: "solid",
    borderColor: "#e5b2b5",
    borderWidth: 0.5,
    width: actuatedNormalize(70),
    height: actuatedNormalize(20),
    justifyContent: "center",
    paddingHorizontal: spacingXS,
    paddingVertical: actuatedNormalize(2),
    alignItems: "center",
    flexDirection: "row"
},

wrapper: {
    marginTop: spacingXS,
    flexDirection: "row"
},

sar: {
    fontSize: fontXXSmall,
    lineHeight: lineHeightXXSmall,
    color: "#fff",
    textAlign: "left",
    fontFamily: Fonts.HSBC,
},

wrapper2: {
    paddingHorizontal: 0,
    paddingVertical: actuatedNormalize(1),
    marginLeft: spacingXXS
},

wrapper1: {
    justifyContent: "flex-end",
    alignSelf: "stretch"
},


barParent: {
    height: actuatedNormalize(4),
   // width: actuatedNormalize(310)
},
creditLimit95: {
    display: "flex",
    width: actuatedNormalize(118),
    height: actuatedNormalize(19),
    alignItems: "center"
},
text2: {
    fontWeight: "700"
},
creditLimit95Parent: {
    height: actuatedNormalize(19),
    marginTop: spacingXS
},
groupParent: {
    height: actuatedNormalize(31),
    marginTop: spacingXS
},
frameParent: {
    marginTop: spacingXS,
    flex: 1,
    justifyContent: "flex-end"
},
typecardsLanguagearabic: {
    borderRadius: radiusL,
    height: actuatedNormalize(178),
    padding: spacingS,
    backgroundColor: "transparent",
    overflow: "hidden",
    //flex: 1,
    alignSelf: "stretch"
},
mainAccount: {
    top: "0%",
    left: "0%",
    position: "absolute",
    lineHeight: lineHeightMediumLarge,
    fontSize: fontMedium,
    textAlign: "left",
    width: "100%"
},
mainAccountParent: {
    height: actuatedNormalize(44),
   // width: 128,
    marginTop: spacingXS
},
text1Layout: {
    lineHeight: lineHeightMediumLarge,
    letterSpacing: 0,
    color: "#fff",
    fontFamily: Fonts.HSBC
},
sarParentPosition: {
    left: 0,
    position: "absolute",
    width: actuatedNormalize(128)
},
frameWrapper: {
    top: spacingM,
    height: actuatedNormalize(20)
},
sarParent: {
    top: 0,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row"
},
text1: {
    fontSize: fontXLarge,
    lineHeight:lineHeightMediumLarge,
    fontWeight: "700",
    textAlign: "left"
},
accountNameAccount: {
    overflow: "hidden",
    flex: 1
    },
accountTypo: {
    lineHeight: lineHeightMedium,
    fontSize: fontMedium,
    textAlign: "left",
    color: "#fff",
    fontFamily: Fonts.HSBC
    },
BlockText : {
  fontSize: fontLarge,
  lineHeight: lineHeightLarge,
  fontWeight: fontWeightBold,
  fontFamily: Fonts.HSBC,
  // color: "#000",
  textAlign: "left",
  paddingBottom:spacingM,
},
Entairebanner: {
  flex: 1,
  width: "100%"
},
buttonquickaction: {
  borderRadius: radiusS,
  // backgroundColor: stylesbgshades,
  height: actuatedNormalize(132),
  overflow: "hidden",
  padding: spacingS,
  justifyContent: "space-between",
  width: actuatedNormalize(343)
},
buttonquickactionInner: {
  alignItems: "flex-end",
  zIndex: 2,
  flexDirection: "row",
  alignSelf: "stretch",
  justifyContent: "space-between"
},
frameWrapper : {
  alignSelf: "stretch",
  flex: 1
},
frameContainer: {
  alignSelf: "stretch"
},
checkOutYour: {
  fontSize: fontMediumLarge,
  lineHeight: lineHeightMediumLarge,
  fontFamily: Fonts.HSBC,
  // color: "#000",
  width: actuatedNormalize(310),
  textAlign: "left",
  height: actuatedNormalize(24)
},
linkButton1: {
  fontSize: fontMedium,
  lineHeight: lineHeightMedium,
  },
typesolid : {
  borderRadius: radiusS,
  // backgroundColor: stylesblockbg,
  // flex: 1,
  width: "40%",
  height: actuatedNormalize(110),
  padding: spacingS,
  justifyContent: "space-between",
  overflow: "hidden"
}, 
Blocktext2: {
  // height: actuatedNormalize(42),
  flexDirection: "row",
  justifyContent: "space-between"
},
textFlexBox2: {
  alignItems: "flex-end",
  alignSelf: "stretch"
},
nameWrapper: {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  alignSelf: "stretch"
},
blockname: {
  fontSize: fontMediumLarge,
  lineHeight: lineHeightMediumLarge,
  fontFamily: Fonts.HSBC,
  // color: "#000",
  textAlign: "left",
  display: "flex",
  width: actuatedNormalize(108),
  overflow: "hidden"
},
textFlexBox3: {
  alignItems: "flex-end",
  alignSelf: "stretch"
},
  wrapperFlexBoxRow: {
    gap: spacingXS,
    alignItems: "center",
    flexDirection: "row"
  },
  linkTypo: {
    textAlign: "left",
    // color: "#000",
    fontFamily: Fonts.HSBC
  },
  centerFlexBox: {
    alignItems: "center",
    justifyContent: "center"
  },
  labelTypoInactive: {
    lineHeight: lineHeightMedium,
    fontSize: fontMedium,
    textAlign: "left",
    fontFamily: Fonts.HSBC,
    color: "#000"
  },
  link: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    flex: 1
  },
  circularViewtext: {
    fontSize: fontSmall,
    lineHeight: lineHeightSmallMedium,
    textAlign: "center",
    width: actuatedNormalize(19),
    height: actuatedNormalize(19),
    // color: "#000",
    fontFamily:Fonts.HSBC
  },
  cicularView: {
    borderRadius: actuatedNormalize(100),
    // backgroundColor: "#ffbb33",
    width: actuatedNormalize(20),
    height: actuatedNormalize(20)
  },
  dividerStyle: {
    // backgroundColor: "rgba(118, 118, 118, 0.2)",
    height: actuatedNormalize(2),
    alignSelf: "stretch",
    overflow: "hidden",
    marginTop: spacingS,
  },
  inlinelistitemmenu: {
    justifyContent: "center",
    alignSelf: "stretch"
  },
  labeltypoHeadline: {
    fontSize: fontLarge,
    lineHeight: lineHeightLarge,
    fontWeight: fontWeightBold,
    alignSelf: "stretch",
    textAlign: "left",
    // color: "#000",
    fontFamily: Fonts.HSBC
  },
  labeltypoBody: {
    color: "#767676",
    alignSelf: "stretch",
    lineHeight: lineHeightMedium,
    fontSize: fontMedium,
    textAlign: "left",
    fontFamily: Fonts.HSBC
  },
  stackedlistitembody: {
    gap: spacingXXS,
    flex: 1
  },
  chipsinfoInactive: {
    borderRadius: radiusXS,
    // backgroundColor: "#f9f2f3",
    borderStyle: "solid",
    // borderColor: "#e5b2b5",
    borderWidth: 0.5,
    paddingHorizontal: spacingXS,
    paddingVertical: actuatedNormalize(2),
    flexDirection: "row"
  },
  rowFlexBox: {
    flexDirection: "row"
  },
  flexBoxspacingS: {
    paddingTop: spacingS,
    paddingHorizontal: spacingS,
    alignSelf: "stretch"
  },
  rowFlexBoxSpaceBetween: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%'
  },
  labelLightPreviewValue: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    fontFamily: Fonts.HSBC,
    // color: "#767676",
    textAlign: "left"
  },
  valueLightPreviewValue: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontWeight: "700",
    fontFamily: Fonts.HSBC,
    // color: "#000",
    textAlign: "left",
  },
  labelBulletPoint: {
    flex: 1,
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontFamily: Fonts.HSBC,
    color: "#000",
    textAlign: "left"
  },
  listItemActionableSelectType: {
     borderStyle: 'solid',
    //  borderColor: '#00847f',
     borderWidth: 1,
     width: actuatedNormalize(20),
     height: actuatedNormalize(20),
   },


//TextDivider
headlineFlexBox: {
  textAlign: "left",
  color: "#000",
  fontFamily: "Univers Next for HSBC",
  alignSelf: "stretch",
},
headline: {
  fontSize: 34,
  lineHeight: 41,
  fontWeight: "700",

},
nequePorroQuisquam: {
  fontSize: 17,
  lineHeight: 22
},
typepromotionalLanguageeng: {
  flex: 1,
  width: "100%",
  paddingHorizontal: 16,
  paddingVertical: 24,
  gap: 8,
},

//.......

welcomeBackFlexBox: {
  textAlign: "left",
  fontFamily: "Univers Next for HSBC",
  alignSelf: "stretch"
  },
  welcomeBackText: {
  fontSize: 26,
  lineHeight: 32,
  fontWeight: "700"
  },
  nametext: {
  fontSize: 17,
  lineHeight: 22
  },
  typepageTitleLanguageengl: {
  flex: 1,
  width: "100%",
  paddingHorizontal: 16,
  paddingVertical: 24,
  gap: 8
  },

  //..........
  FlexBox: {
    textAlign: "left",
    fontFamily: "Univers Next for HSBC",
    alignSelf: "stretch",

    },
    bottomsheettext: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
    },
    textcontent: {
    fontSize: 15,
    lineHeight: 20
    },
    typebottomsheetLanguageeng: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 8
    },
  textComponentStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  avatarListItemAddon: {
    borderRadius: actuatedNormalize(100),
    backgroundColor: '#fbe5e7',
    width: spacingXL,
    height: spacingXL,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacingS,
    flexDirection: 'row',
  },
  avatarListItemAddonText: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontFamily: Fonts.HSBC,
    // color: '#db0011',
    textAlign: 'left',
  },
  wrapperListItemAddon: {
    borderRadius: actuatedNormalize(100),
    // backgroundColor: 'rgba(118, 118, 118, 0.1)',
    width: spacingXL,
    height: spacingXL,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacingS,
    flexDirection: 'row',
  },
  PieGraphListItemAddon: {
    marginTop: actuatedNormalize(-10),
    marginLeft: actuatedNormalize(-20),
    top: '50%',
    left: '50%',
    fontSize: fontSmallMedium,
    lineHeight: lineHeightSmallMedium,
    fontFamily: Fonts.HSBC,
    // color: '#db0011',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: actuatedNormalize(40),
    height: actuatedNormalize(40),
    position: 'absolute',
  },
  labelFlexBox: {
    textAlign: 'left',
    fontFamily: Fonts.HSBC,
    alignSelf: 'stretch',
  },
  labelstackedListItemBodyType: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    // color: '#767676',
  },
  valuestackedListItemBodyType: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontWeight: '700',
    // color: '#000',
  },
  labelstackedListItemBodyLabel: {
    fontSize: fontXSmall,
    lineHeight: lineHeightXSmall,
    // color: '#b2b2b2',
    alignSelf: 'stretch',
  },
  labelTypo: {
    textAlign: 'left',
    fontFamily: Fonts.HSBC,
  },
  stackedListItemBodyheadline: {
    fontSize: fontLarge,
    lineHeight: lineHeightLarge,
    fontWeight: '700',
  },
  stackedListItemBodyheadlineFlexBox: {
    // color: '#000',
    textAlign: 'left',
    fontFamily: Fonts.HSBC,
    alignSelf: 'stretch',
  },
  subTitle: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
  },
  bodyCopy: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    color: '#767676',
    alignSelf: 'stretch',
  },
  status: {
    height: spacingS,
    alignSelf: 'stretch',
  },
  status1: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: fontSmallMedium,
    lineHeight: lineHeightSmallMedium,
    width: '100%',
  },
  wrapperDefaultContainer: {
    gap: spacingXXS,
    alignSelf: "stretch"
    },
    labelDefaultContainer: {
      lineHeight: lineHeightMedium,
      color: "#767676",
      fontSize: fontMedium,
      textAlign: "left",
      fontFamily: Fonts.HSBC,
      },
      valueDefaultContainer: {
      fontSize: fontMediumLarge,
      lineHeight: lineHeightMediumLarge,
      fontWeight: "700",
      // color: "#000",
      textAlign: "left",
      fontFamily: Fonts.HSBC,
      },
      valueFlexBox: {
        textAlign: "left",
        fontFamily: Fonts.HSBC,
        alignSelf: "stretch"
      },
      secondValueDefaultContainer: {
        lineHeight: lineHeightMedium,
        fontWeight: "500",
        // display: "none",
        color: "#767676",
        fontSize: fontMedium,
        textAlign: "left",
        fontFamily: Fonts.HSBC,
      },
      badgenotificationList: {
        borderRadius: actuatedNormalize(100),
        backgroundColor: '#ffbb33',
        width: actuatedNormalize(20),
        height: actuatedNormalize(20),
        alignItems: 'center',
        justifyContent: 'center',
      },
      contentText: {
        fontSize: fontSmallMedium,
        lineHeight: lineHeightSmallMedium,
        fontFamily: Fonts.HSBC,
        color: "#767676",
        textAlign: "right"
        },
        typebalance: {
          // flex: 1,
          // width: "100%",
          gap: spacingXXS,
          alignItems: "flex-end"
        },
        wrapperFlexBoxBadgeStatusBalance: {
          flexDirection: "row",
          alignItems: "flex-end"
        },
        contentTypoRightAligned: {
          textAlign: "right",
          fontFamily: Fonts.HSBC,
        },
        wrapperBalanceSAR: {
          paddingHorizontal: actuatedNormalize(0),
          paddingVertical: actuatedNormalize(1)
        },
        sarLabel: {
          fontSize: fontXSmall,
          lineHeight: lineHeightXSmall,
          textAlign: "left",
          color: "#000",
          fontFamily: Fonts.HSBC,
        },
        contentBalanceStatusType: {
          fontSize: fontSmallMedium,
          lineHeight: lineHeightSmallMedium,
          color: "#767676"
        },
        wrapperContentAndSar: {
          justifyContent: 'flex-end',
          flexDirection: 'row',
          gap: spacingXXS,
          alignItems: 'flex-end',
        },
        contentBalanceWithStatus: {
          fontSize: fontLarge,
          lineHeight: lineHeightLarge,
          fontWeight: '700',
          textAlign: 'right',
          color: '#000',
          fontFamily: Fonts.HSBC,
        },
        wrapperSARLabel: {
          paddingHorizontal: actuatedNormalize(0),
          paddingVertical: actuatedNormalize(1),
          flexDirection: 'row',
          alignItems: 'flex-end',
        },
        chipsinfoBalanceStatusType: {
          borderRadius: spacingXXS,
          alignItems: 'center',
          flexDirection: 'row',
          gap: spacingXXS,
        },
        labelInactive: {
          fontSize: fontSmallMedium,
          lineHeight: lineHeightSmallMedium,
          textAlign: 'left',
          color: '#000',
          fontFamily: Fonts.HSBC,
        },

    //....textdividr
    welcomeBackTypo: {
      textAlign: "left",
      fontFamily: "Univers Next for HSBC"
      },
      linkFlexBox: {
      justifyContent: "center",
      alignItems: "center",
      height: 24,
      flexDirection: "row"
      },
      Linktext: {
      fontSize: 17,
      lineHeight: 22,
      fontWeight: "700",
      textAlign: "left",
      fontFamily: "Univers Next for HSBC",
      flex: 1
      },
      welcomeBackParent: {
      flexDirection: "row",
      alignSelf: "stretch",
      gap: 8
      },
      sublinktext: {
      fontSize: 15,
      lineHeight: 20,
      textAlign: "left",
      fontFamily: "Univers Next for HSBC",
      alignSelf: "stretch"
      },
      typeinPageLanguageenglish: {
      width: "100%",
      paddingHorizontal: 16,
      paddingVertical: 24,
      gap: 8,
      flex: 1
      },
    
      //Text View all textdivider
      languagearabicPosition: {
        width: 344,
        left: 20,
        position: "absolute"
        },
        viewall: {
        textAlign: "left",
        color: "#000",
        fontFamily: "Univers Next for HSBC"
        },
        wrapperFlexBoxview: {
        paddingVertical: 4,
        paddingHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
        },
        textLayout: {
        lineHeight: 18,
        fontSize: 14
        },
        linkFlexBox: {
        justifyContent: "center",
        height: 24,
        alignItems: "center",
        flexDirection: "row"
        },
        textTypo: {
        fontFamily: "Univers Arabic forHSBC",
        textAlign: "left",
        color: "#000"
        },
        Viewheadlinetext: {
        fontWeight: "700",
        lineHeight: 22,
        fontSize: 17
        },
        iconoutlinepassword: {
        width: 24,
        height: 24
        },
        Vewallheader: {
        gap: 8,
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "stretch"
        },
        viewalltextdivi: {
        textAlign: "left",
        color: "#000",
        fontFamily: "Univers Next for HSBC"
        },
        wrapperview: {
        height: 24
        },
        frameParenttextdivider: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch"
        },
        languageenglish: {
        top: 20
        },
        // text: {
        // display: "flex",
        // alignItems: "flex-end",
        // height: 22,
        // lineHeight: 18,
        // fontSize: 14,
        // flex: 1
        // },
       
        texttitleactions: {
       
        height: 124,
        flex: 1
        }
}
