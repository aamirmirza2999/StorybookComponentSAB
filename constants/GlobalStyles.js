import { I18nManager, Dimensions, Platform } from "react-native";
import Fonts from "./Fonts";
import { actuatedNormalize } from "./PixelScaling";
import {
  spacingXXS, spacingXS, spacingS, spacingM, spacingL, spacingXL, fontXSmall, fontSmall, fontSmallMedium, fontMedium, fontMediumLarge, fontLarge, fontXLarge, fontXXLG, lineHeightXSmall, lineHeightSmall, lineHeightSmallMedium,
  radiusXS, radiusS, radiusL, avatarHeight, avatarRightandLeft, lineHeightXXSmall, fontXXSmall, lineHeightMedium, lineHeightMediumLarge, lineHeightLarge, fontWeightBold, sizeXL,
} from "./Size";


const deviceHeight = Dimensions.get('window').height;

export const globalStyles = {
  svgStyle: {
    width: '80',
    height: '40',
  },
  inputLabelStyle: {
    fontSize: '14px',
    paddingBottom: spacingXS,
    fontFamily: Fonts.HSBC,
    fontSize: actuatedNormalize(14),
  },
  billDetailInputView: {
    width: '100%',
    justifyContent: 'center',
    height: actuatedNormalize(44),
    fontSize: actuatedNormalize(14),
    fontFamily: Fonts.HSBC,
  },
  screenInitialStyle: {


  },
  TextComponentLabelstyle: {
    fontSize: actuatedNormalize(16),
    fontFamily: Fonts.HSBC,
    paddingBottom: spacingXS
  },
  TextComponentDisclaimerstyle: {
    paddingBottom: spacingM,
    fontSize: actuatedNormalize(14),
    fontFamily: Fonts.HSBC,
  },
  TextInputComponenttextstyle: {
    fontWeight: fontWeightBold,
    fontSize: actuatedNormalize(16)
  },
  NoneditableInputstyle: {
    backgroundColor: "rgba(234, 234, 234, 0.6)",
    width: '100%'

  },
  inititalStyle: {
    marginHorizontal: spacingS,
    marginVertical: spacingM
  },
  tncTextStyle: {
    fontFamily: Fonts.HSBC,
    fontSize: actuatedNormalize(14),
  },
  DividerStyle: {
    backgroundColor: "rgba(118, 118, 118, 0.2)",
    height: 1,
    overflow: "hidden",
    alignSelf: "stretch"
  },
  primaryFlexBoxLarge: {
    paddingVertical: spacingXS,
    borderRadius: radiusS,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: spacingS,
    alignItems: "center",
    minWidth: 128,
    height: 48,
  },

  badgeNotification: {
    borderRadius: actuatedNormalize(100),
    backgroundColor: "#ffbb33",
    width: actuatedNormalize(16),
    height: actuatedNormalize(16),
    marginLeft: spacingXS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === "ios" ? actuatedNormalize(0) : actuatedNormalize(3),
  },
  badgeNotification1: {
    top: -75,
    left: 21,
    borderRadius: 100,
    backgroundColor: "#ffbb33",
    width: actuatedNormalize(16),
    height: actuatedNormalize(16),
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === "ios" ? actuatedNormalize(0) : actuatedNormalize(3),
  },
  badgeTxt: {
    fontSize: fontXXSmall,
    lineHeight: lineHeightXXSmall,
    fontFamily: Fonts.HSBC,
    color: "#000",
    textAlign: "center",
    alignSelf: "center"
  },
  primaryFlexBoxSmall: {
    borderRadius: radiusS,
    paddingHorizontal: spacingS,
    paddingVertical: actuatedNormalize(7),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    minWidth: 60
  },
  primaryTextLarge: {
    textAlign: "center",
    fontWeight: fontWeightBold,
    lineHeight: lineHeightLarge,
    fontSize: fontMediumLarge,
    fontFamily: Fonts.HSBC,
  },
  primaryTextSmall: {
    fontSize: fontSmallMedium,
    lineHeight: lineHeightSmallMedium,
    fontFamily: Fonts.HSBC,
    textAlign: "center",
  },
  secondaryFlexBoxLarge: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radiusS,
    borderStyle: "solid",
    borderWidth: 1,
    paddingHorizontal: spacingS,
    paddingVertical: spacingXS,
    minWidth: 128,
    height: 48,
  },
  secondaryFlexBoxSmall: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radiusS,
    borderStyle: "solid",
    borderWidth: 1,
    paddingHorizontal: spacingS,
    paddingVertical: spacingXXS
  },
  preloginRedButton: {
    paddingHorizontal: spacingL,
    paddingVertical: actuatedNormalize(9),
    justifyContent: "center",
    alignItems: "center"
  },
  quickActionButtonBox: {
    borderRadius: radiusS,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacingXXS,
    paddingVertical: spacingXS,
    overflow: "hidden",
    height: 116,
    gap: 8,
  },
  quickActionButtonTxt: {
    alignSelf: "stretch",
    width: actuatedNormalize(110),
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    fontFamily: Fonts.HSBC,
    textAlign: "center",
  },
  quickActionButtonBox1: {
    borderRadius: radiusS,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: spacingS,
    paddingVertical: spacingXS,
    alignItems: "center",
    alignSelf: "center",
  },
  quickActionButtonTxt1: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    textAlign: "left",
    marginLeft: spacingXS,
    fontFamily: Fonts.HSBC,
  },
  quickActionButtonBox2: {
    margin: 8,
    width: 48,
    height: 48,
    borderRadius: radiusS,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: spacingXS,
    paddingVertical: spacingXXS,
    alignItems: "center",
  },
  quickActionButtonTxt2: {

    fontSize: fontSmall,
    lineHeight: lineHeightSmall,
    fontFamily: Fonts.HSBC,
    textAlign: "center"
  },
  quickActionButtonBox3: {
    margin: 8,
    width: 48,
    height: 48,
    borderRadius: radiusS,
    flexDirection: "row",
    borderColor: "#db0011",
    borderWidth: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: spacingXS,
    paddingVertical: spacingXXS,
    alignItems: "center",
  },

  quickActionButtonTxt3: {

    fontSize: fontSmall,
    lineHeight: lineHeightSmall,
    fontFamily: Fonts.HSBC,
    textAlign: "center",
    fontWeight: fontWeightBold,
  },
  linkTextsmall: {
    fontSize: fontMedium,
    lineHeight: lineHeightSmall,
    fontFamily: Fonts.HSBC,
    textAlign: "left"
  },
  linkTextlarge: {
    fontSize: fontLarge,
    lineHeight: lineHeightLarge,
    fontFamily: Fonts.HSBC,
    textAlign: "left"
  },

  activeDot: {
    width: actuatedNormalize(16),
    height: actuatedNormalize(3),
    borderRadius: actuatedNormalize(100),
    paddingHorizontal: spacingXS
  },

  subactiveDot: {
    width: actuatedNormalize(40),
    height: actuatedNormalize(3),
    borderRadius: actuatedNormalize(100),

  },

  inactiveDot: {
    width: actuatedNormalize(16),
    height: actuatedNormalize(3),
    borderRadius: actuatedNormalize(100),
  },
  subinactiveDot: {
    width: actuatedNormalize(16),
    height: actuatedNormalize(3),
    borderRadius: actuatedNormalize(100),

  },

  togglelabel: {
    fontFamily: Fonts.HSBC,
  },

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
    marginTop: spacingXS,
    borderRadius: 5,

    width: "80%",
    borderWidth: 1,
    marginHorizontal: spacingS,



  },
  iconOverflowContainerRadio2: {

    borderRadius: 5,

    width: "80%",
    borderWidth: 1,
    paddingBottom: spacingXS,
    marginHorizontal: spacingS,


  },
  iconOverflowContainerRadio3: {

    marginTop: spacingXS,
    borderRadius: 5,

    width: "45%",
    borderWidth: 1,




  },
  Radiobtnv2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  Radiobtnerrmsg: {
    marginHorizontal: spacingS,
    paddingBottom: spacingXS,

  },
  listButtonSmall: {
    borderRadius: radiusS,

    overflow: "hidden",
    paddingHorizontal: spacingS,
    paddingVertical: spacingXS,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",

  },
  listButtonLarge: {
    borderRadius: radiusS,
    overflow: "hidden",
    paddingHorizontal: spacingS,
    paddingVertical: spacingXS,


  },
  listButtonSecondTxt: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.HSBC,
    color: "#767676",

  },
  listBadgeTxt: {
    lineHeight: 18,
    fontSize: 14,
    textAlign: "left",
    fontFamily: Fonts.HSBC,
  },
  listBadge: {
    marginLeft: spacingXS,
    borderRadius: 4,
    backgroundColor: "#e5f2f2",
    borderStyle: "solid",
    borderColor: "#99cecc",
    borderWidth: 0.5,
    paddingHorizontal: 8,
    alignSelf: "stretch",
    paddingVertical: 2,
    marginTop: 8,
    justifyContent: "center",

    alignItems: "center",
    flexDirection: "row"
  },
  listButtonTxtSmall: {
    width: actuatedNormalize(279),
    justifyContent: "center",

    marginLeft: spacingXS,
    alignSelf: "center",
    fontSize: fontMediumLarge,
    lineHeight: lineHeightLarge,
    textAlign: "left",
    fontFamily: Fonts.HSBC,
  },
  listButtonTxtLarge: {
    width: actuatedNormalize(279),
    justifyContent: "center",

    marginLeft: spacingXS,
    alignSelf: "center",
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    textAlign: "left",
    marginTop: 8,
    fontFamily: Fonts.HSBC,
  },
  listButtonTxtLargeHeadline: {
    width: actuatedNormalize(279),
    alignSelf: "stretch",
    justifyContent: "center",

    marginLeft: spacingXS,
    alignSelf: "center",
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    textAlign: "left",
    fontFamily: Fonts.HSBC,
    fontWeight: fontWeightBold,
  },
  listButtonTxtLargeHeadlineSmall: {
    width: actuatedNormalize(279),
    alignSelf: "stretch",
    justifyContent: "center",

    marginLeft: spacingXS,
    alignSelf: "center",
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    textAlign: "left",
    fontFamily: Fonts.HSBC,
  },
  listButtonDashboard: {
    borderRadius: radiusS,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: spacingS,
    paddingVertical: spacingS,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  listButtonDashboard1: {
    borderRadius: radiusS,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    padding: spacingS,

  },
  listButtonTxt: {
    width: actuatedNormalize(279),
    justifyContent: "center",

    marginLeft: spacingXS,
    alignSelf: "center",
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    textAlign: "left",
    fontFamily: Fonts.HSBC,
  },
  listButtonTxt1: {

    justifyContent: "center",


    alignSelf: "center",
    fontSize: fontMediumLarge,
    lineHeight: lineHeightLarge,
    textAlign: "left",
    fontFamily: Fonts.HSBC,
  },
  floatingButton: {
    borderRadius: radiusS,
    width: actuatedNormalize(56),
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

    top: Platform.OS === "ios" ? actuatedNormalize(3) : actuatedNormalize(3),
    marginRight: actuatedNormalize(6)

  },
  jm: {
    fontSize: fontXLarge,
    lineHeight: spacingM,
    fontWeight: fontWeightBold,
    fontFamily: Fonts.HSBC,

    zIndex: 1,
    alignSelf: "center",
  },

  jm2: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    fontFamily: Fonts.HSBC,

    zIndex: 1,
    bottom: 1,
    alignSelf: "center",
  },
  jm3: {
    fontSize: fontSmall,
    lineHeight: spacingS,
    fontFamily: Fonts.HSBC,
    alignSelf: "center",
    bottom: 1

  },
  typefilledElementsinitials: {
    borderRadius: actuatedNormalize(100),

    width: actuatedNormalize(30),
    height: actuatedNormalize(30),
    alignItems: "center",
    justifyContent: "center",
    marginRight: actuatedNormalize(6),
    top: Platform.OS === "ios" ? actuatedNormalize(4) : actuatedNormalize(4),


  },

  Addbeneavatar: {
    borderRadius: radiusS,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: avatarRightandLeft,
    marginRight: avatarRightandLeft,
    height: avatarHeight,
    top: 10
  },
  splitavatar: {
    borderRadius: radiusS,

    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: avatarRightandLeft,
    marginRight: avatarRightandLeft,
    height: avatarHeight
  },
  boldTextFamily: {
    fontFamily: Fonts.HSBC,
  },
  regularTextFamily: {
    fontFamily: Fonts.HSBC,
  },
  lightTextFamily: {
    fontFamily: Fonts.HSBC,
  },
  imageButton: {
    borderRadius: radiusS,
    borderStyle: "solid",
    borderWidth: 1,
    alignSelf: "center",
    padding: spacingXS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  segmenttabStyle: {
    borderWidth: 0,
  },
  segmentactiveTabStyle: {
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
  segmenttabTextStyle: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    fontFamily: Fonts.HSBC,
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

  },
  tooltipArrowSize: {
    width: spacingS,
    height: spacingXS
  },
  tooltipText: {
    fontSize: actuatedNormalize(14),
    lineHeight: actuatedNormalize(22),
    fontFamily: Fonts.HSBC,
    color: "#000",
    textAlign: "left"
  },
  snackbarContainer: {

    borderStyle: "solid",

    borderWidth: 1,
    margin: actuatedNormalize(10),
    paddingVertical: spacingS,
    flexDirection: "row",
    paddingHorizontal: spacingS,
    borderRadius: radiusS
  },
  snackbarBox: {
    paddingTop: actuatedNormalize(3),
    paddingBottom: spacingXXS,
    marginLeft: spacingS,
    flex: 1
  },
  snackBarLabel: {
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: Fonts.HSBC,
    lineHeight: lineHeightMedium,
    fontSize: fontMedium
  },
  AccordianMenuContainer: {
    borderRadius: radiusS,
    paddingHorizontal: spacingS,
    paddingVertical: spacingXS,
    marginHorizontal: actuatedNormalize(10),
    marginVertical: actuatedNormalize(10)
  },
  AccordianMenuTitleBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  AccordianTitleText: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    fontFamily: Fonts.HSBC,
    textAlign: "left",
    display: "flex",
    marginLeft: spacingXS,
    flex: 1,
    alignItems: "center",

    alignSelf: "center"
  },
  AccordianSubMenuConatiner: {
    paddingLeft: spacingL,
    paddingTop: spacingS,
    paddingRight: spacingXS,
    paddingBottom: spacingS
  },
  AccordianSubTitleText: {
    flex: 1,
    fontSize: fontSmall,
    lineHeight: fontLarge,
    fontFamily: Fonts.HSBC,
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
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 120
  },
  welcomeBack: {
    fontWeight: fontWeightBold,
    lineHeight: actuatedNormalize(21),
    fontSize: spacingS,
    fontFamily: Fonts.HSBC,
    flex: 1,
    marginRight: actuatedNormalize(10)
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
    lineHeight: I18nManager.isRTL ? lineHeightMedium : lineHeightMedium,
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
  tabBarComponent: {
    height: deviceHeight,
  },
  renderTabBarView: {

  },
  tabBarIndicatorStyle: {
    height: 0
  },
  tabBarStyle: {

    elevation: 0,
    shadowOpacity: 0,

  },
  tabBarIndicatorContainerStyle: {
    alignSelf: 'center',
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: "transperent",



  },
  TabBarView: {
    borderRadius: radiusS,
    height: actuatedNormalize(36),
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: spacingS,
    width: "auto",
    paddingVertical: spacingXS,
    minWidth: sizeXL,

  },
  subTabs: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    marginTop: fontXXSmall,
    marginHorizontal: spacingXS,
  },
  activetab: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    borderRadius: spacingXS,
    marginVertical: fontXXSmall,

  },
  inactivetab: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    borderRadius: spacingXS,
    marginHorizontal: spacingXS,
    marginVertical: fontXXSmall,
    height: fontXXLG,
  },
  activetext: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: fontMedium,
    fontFamily: Fonts.HSBC,
    paddingHorizontal: spacingS,
    paddingVertical: spacingXS,
  },
  inactivetext: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: fontMedium,
    fontFamily: Fonts.HSBC,
    paddingHorizontal: spacingS,
    paddingVertical: spacingXS,
  },
  //......................
  pwdbarStyle: {
    width: "31%",
    height: actuatedNormalize(4),
    marginTop: actuatedNormalize(5),
    marginHorizontal: actuatedNormalize(3),
    borderRadius: actuatedNormalize(5)
  },
  pwdpostbarStyle: {
    width: "21.3%",
    height: actuatedNormalize(5),
    marginTop: actuatedNormalize(10),
    right: actuatedNormalize(17),

    marginHorizontal: actuatedNormalize(3)
  },
  pwdtextContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: actuatedNormalize(10),
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
    fontSize: fontSmall,

    lineHeight: lineHeightMedium,
  },
  pwdlabel: {
    fontSize: fontSmall,

    lineHeight: lineHeightMedium,
    letterSpacing: 0
  },
  pwdpostlabel2: {
    fontSize: fontMedium,
    marginLeft: actuatedNormalize(10),

  },
  chipsButtonLarge: {
    borderRadius: radiusXS,
    borderStyle: "solid",
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: spacingXS
  },
  chipsTextLarge: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    fontFamily: Fonts.HSBC,
    textAlign: "left",
    marginLeft: spacingXXS
  },
  chipsButtonSmall: {
    borderRadius: radiusXS,
    borderStyle: "solid",
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacingXS,
    paddingVertical: actuatedNormalize(2)
  },
  chipsTextSmall: {
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
    borderColor: " #00847f",
    borderWidth: 1,
    width: 20,
    height: 20,
    marginHorizontal: 16,
    bottom: -20
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
    bottom: -25,
    left: 16
  },
  wrapper2: {
    borderRadius: 100,
    backgroundColor: " rgba(118, 118, 118, 0.3)",
    borderStyle: "solid",
    borderColor: "#767676",
    borderWidth: 1,
    width: 20,
    height: 20
  },

  // bottom button
  bottombtn: {
    paddingHorizontal: spacingS,
    paddingBottom: actuatedNormalize(27),
    marginTop: actuatedNormalize(15)
  },
  bottombtntext: {
    lineHeight: actuatedNormalize(16),
    fontSize: actuatedNormalize(12),
    fontFamily: Fonts.HSBC,
  },
  textview: {
    flex: 1,
    flexDirection: "row",
    marginTop: actuatedNormalize(10),
    marginLeft: spacingS,
    marginRight: spacingS,

  },
  text: {
    width: "100%",
    height: actuatedNormalize(40),
  },
  divider: {
    marginLeft: actuatedNormalize(16),
    marginRight: actuatedNormalize(16),
    height: 2,
    backgroundColor: "rgba(179,177,179,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  sartext: {
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
    flexDirection: "flex-end",
    marginTop: actuatedNormalize(-19)

  },
  totalamt: {
    fontFamily: Fonts.HSBC,
    fontSize: actuatedNormalize(16),
    lineHeight: actuatedNormalize(24),
    fontWeight: fontWeightBold,
    textAlign: "left",
    marginTop: actuatedNormalize(-20)

  },
  amount: {
    marginLeft: spacingS,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

  },
  totalamount: {
    fontFamily: Fonts.HSBC,
    fontSize: actuatedNormalize(14),
    lineHeight: 18,
    textAlign: "left",
    flexDirection: "flex-start",
    marginTop: actuatedNormalize(-17)

  },
  overview: {
    flex: 1,
    height: actuatedNormalize(25),
    justifyContent: "center",
    alignItems: "flex-start",
  },
  firstview: {
    flex: 1,
    flexDirection: "row",
    marginLeft: spacingS,
    marginRight: spacingS,
  },
  overalldesign: {
    marginTop: actuatedNormalize(20),
    height: actuatedNormalize(30),
    justifyContent: "center",
    alignItems: "center",
  },
  animatedview: {
    height: "auto",
    backgroundColor: "#263a52",
    borderTopLeftRadius: actuatedNormalize(8),
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
    height: actuatedNormalize(2),
    borderRadius: 100,
    // width: "100%"
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
    lineHeight: lineHeightMediumLarge,
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
  BlockText: {
    fontSize: fontLarge,
    lineHeight: lineHeightLarge,
    fontWeight: fontWeightBold,
    fontFamily: Fonts.HSBC,

    textAlign: "left",
    paddingBottom: spacingM,
  },
  Entairebanner: {
    flex: 1,
    width: "100%"
  },
  buttonquickaction: {
    borderRadius: radiusS,

    height: actuatedNormalize(132),
    overflow: "hidden",
    padding: spacingS,
    justifyContent: "space-between",

  },
  buttonquickaction2: {
    borderRadius: radiusS,

    height: actuatedNormalize(130),
    overflow: "hidden",
    padding: spacingS,
    justifyContent: "space-between",
    width: actuatedNormalize(342),
  },
  iconoutlinecard: {
    zIndex: 1,

  },
  patternIcon: {
    position: "absolute",
    top: actuatedNormalize(-66),
    left: actuatedNormalize(0),

    zIndex: 0,

  },
  buttonquickactionInner: {
    alignItems: "flex-end",
    zIndex: 2,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  frameWrapper: {
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

    width: actuatedNormalize(310),
    textAlign: "left",
    height: actuatedNormalize(28)
  },
  linkButton1: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
  },
  typesolid: {
    borderRadius: radiusS,

    width: "40%",
    height: actuatedNormalize(110),
    padding: spacingS,
    justifyContent: "space-between",
    overflow: "hidden"
  },
  container2: {
    position: 'relative',
    width: '40%',

    borderRadius: 8,
    height: actuatedNormalize(115), // Adjust the height as needed

    overflow: 'hidden',
    backgroundColor: "yellow",
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayIcon: {
    position: 'absolute',
    top: actuatedNormalize(15),
    left: actuatedNormalize(10)
  },
  rowContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    position: 'absolute',
    bottom: 15, // Adjust based on your layout
    left: 0,
    right: 0,

  },
  Blocktext2: {

    flexDirection: "row",
    justifyContent: "space-around",
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
    fontWeight: fontWeightBold,
    fontFamily: Fonts.HSBC,

    textAlign: "left",
    display: "flex",
    width: actuatedNormalize(108),
    overflow: "hidden"
  },
  blockname2: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontWeight: fontWeightBold,
    fontFamily: Fonts.HSBC,

    textAlign: "left",

    marginLeft: actuatedNormalize(15),
    width: actuatedNormalize(108),
    overflow: "hidden"
  },
  textFlexBox3: {
    alignItems: "flex-end",
    alignSelf: "stretch"
  },
  blocknameSolid: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontFamily: Fonts.HSBC,

    textAlign: "left",
    display: "flex",
    width: actuatedNormalize(108),
    overflow: "hidden"
  },
  wrapperFlexBoxRow: {
    gap: spacingXS,
    alignItems: "center",
    flexDirection: "row",
  },
  linkTypo: {
    textAlign: "left",

    fontFamily: Fonts.HSBC
  },
  linkTypo1: {
    textAlign: "left",

    fontFamily: Fonts.HSBC
  },
  centerFlexBox: {
    alignItems: "center",
    justifyContent: "center"
  },
  CtcenterFlexBox: {
    alignItems: "center",
    justifyContent: "center"
  },
  labelTypoInactive: {
    lineHeight: lineHeightMedium,
    fontSize: fontMedium,
    textAlign: "left",
    fontFamily: Fonts.HSBC,
  },
  link: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    flex: 1
  },
  categorylink1: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,

  },
  categorylink2: {
    fontSize: fontLarge,
    lineHeight: lineHeightLarge,
    fontWeight: fontWeightBold

  },
  categorylink3: {
    fontSize: fontLarge,
    lineHeight: lineHeightLarge,
    fontWeight: fontWeightBold

  },
  linkSelect: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    flex: 1
  },
  circularViewtext: {
    fontSize: fontSmall,
    lineHeight: lineHeightSmallMedium,
    textAlign: "center",
    width: actuatedNormalize(19),
    height: actuatedNormalize(19),

    fontFamily: Fonts.HSBC
  },
  CtcircularViewtext: {
    fontSize: fontSmall,
    lineHeight: lineHeightSmallMedium,
    textAlign: "center",
    width: actuatedNormalize(19),
    height: actuatedNormalize(19),

    fontFamily: Fonts.HSBC
  },
  cicularView: {
    borderRadius: actuatedNormalize(100),

    width: actuatedNormalize(20),
    height: actuatedNormalize(20)
  },
  dividerStyle: {

    height: actuatedNormalize(2),
    alignSelf: "stretch",
    overflow: "hidden",
    marginTop: spacingS,
  },
  dividerStyle1: {

    height: actuatedNormalize(2),
    alignSelf: "stretch",
    overflow: "hidden",
    marginTop: spacingXS,
  },
  dividerStyle3: {

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

    fontFamily: Fonts.HSBC
  },
  categorylabeltypoHeadline: {
    fontSize: fontLarge,
    lineHeight: lineHeightLarge,
    fontWeight: fontWeightBold,
    alignSelf: "stretch",
    textAlign: "left",

    fontFamily: Fonts.HSBC
  },
  labeltypoBody: {
    alignSelf: "stretch",
    lineHeight: lineHeightMedium,
    fontSize: fontMedium,
    fontFamily: Fonts.HSBC
  },
  categorylabeltypoBody: {
    alignSelf: "stretch",

    textAlign: "left",
    lineHeight: lineHeightMedium,
    fontSize: fontMedium,
    fontFamily: Fonts.HSBC
  },
  stackedlistitembody: {
    marginLeft: spacingXS,

    flex: 1,

  },
  chipsinfoInactive: {
    borderRadius: radiusXS,

    borderStyle: "solid",

    borderWidth: 0.5,
    paddingHorizontal: spacingXS,
    paddingVertical: actuatedNormalize(2),
    flexDirection: "row"
  },
  CtchipsinfoInactive: {
    borderRadius: radiusXS,

    borderStyle: "solid",

    borderWidth: 0.5,

    flexDirection: "row"
  },
  rowFlexBox: {
    flexDirection: "row",
  },
  CtrowFlexBox: {
    flexDirection: "row",
  },
  flexBoxspacingS: {
    paddingVertical: spacingS,
    paddingHorizontal: spacingS,
    alignSelf: "stretch"
  },
  rowFlexBoxSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  labelLightPreviewValue: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    fontFamily: Fonts.HSBC,

    textAlign: "left"
  },
  valueLightPreviewValue: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontWeight: "700",
    fontFamily: Fonts.HSBC,

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

    borderWidth: 1,
    width: actuatedNormalize(20),
    height: actuatedNormalize(20),
  },
  // LastLoginblock
  lastLoginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: actuatedNormalize(16),
    paddingVertical: actuatedNormalize(16),

  },
  userInfoSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarSection: {
    position: 'relative',
    width: actuatedNormalize(40),
    height: actuatedNormalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarSectionDarkTheme: {
    position: 'relative',
    width: actuatedNormalize(48),
    height: actuatedNormalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  categoryavatarSectionDarkTheme: {
    position: 'relative',
    width: actuatedNormalize(48),
    height: actuatedNormalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  editIconWrapper: {
    position: 'absolute',
    bottom: -2,
    right: -2,

    borderRadius: actuatedNormalize(8),
    padding: actuatedNormalize(2),
  },
  categoryeditIconWrapper: {
    position: 'absolute',
    bottom: -2,
    right: -2,

    borderRadius: actuatedNormalize(8),
    padding: actuatedNormalize(2),
  },
  textWrapper: {
    marginLeft: actuatedNormalize(12),
    justifyContent: "center",

  },

  headlineFlexBox: {
    textAlign: "left",
    color: "#000",
    fontFamily: Fonts.HSBC,
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
    fontFamily: Fonts.HSBC,
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
    fontFamily: Fonts.HSBC,
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
  textComponentStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarListItemAddon: {
    borderRadius: actuatedNormalize(100),
    backgroundColor: '#fbe5e7',
    width: spacingXL,
    height: spacingXL,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  categoryavatarListItemAddon: {
    borderRadius: actuatedNormalize(100),
    backgroundColor: '#fbe5e7',
    width: spacingXL,
    height: spacingXL,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  avatarListItemAddonText: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontFamily: Fonts.HSBC,
    textAlign: 'left',
  },
  categoryavatarListItemAddonText: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontFamily: Fonts.HSBC,

    textAlign: 'left',
  },
  categoryavatarListItemAddonText: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontFamily: Fonts.HSBC,

    textAlign: 'left',
  },
  avatarListItemAddon1: {
    borderRadius: actuatedNormalize(100),

    width: spacingXL,
    height: spacingXL,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },
  categoryavatarListItemAddon1: {
    borderRadius: actuatedNormalize(100),

    width: spacingXL,
    height: spacingXL,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },
  wrapperListItemAddon: {
    borderRadius: actuatedNormalize(100),

    width: spacingXL,
    height: spacingXL,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacingS,
    flexDirection: 'row',
  },
  PieGraphListItemAddon: {

    marginLeft: actuatedNormalize(-20),
    top: '50%',
    left: '50%',
    fontSize: fontSmallMedium,
    lineHeight: lineHeightSmallMedium,
    fontFamily: Fonts.HSBC,

    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: actuatedNormalize(40),
    height: actuatedNormalize(40),
    position: 'absolute',
  },
  PieGraphListItemAddon1: {

    top: -35,
    left: 8,
    fontSize: fontSmallMedium,
    lineHeight: lineHeightSmallMedium,
    fontFamily: Fonts.HSBC,

    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: actuatedNormalize(40),
    height: actuatedNormalize(40),
    position: 'absolute',
  },
  CtPieGraphListItemAddon: {

    top: -35,
    left: 8,
    fontSize: fontSmallMedium,
    lineHeight: lineHeightSmallMedium,
    fontFamily: Fonts.HSBC,

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
  CtlabelFlexBox: {
    textAlign: 'left',
    fontFamily: Fonts.HSBC,
    alignSelf: 'stretch',
  },
  labelstackedListItemBodyType: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,

  },
  CtlabelstackedListItemBodyType: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMedium,
    fontWeight: "400"

  },
  valuestackedListItemBodyType: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontWeight: '700',

  },
  CtvaluestackedListItemBodyType: {
    fontSize: fontLarge,
    lineHeight: lineHeightMediumLarge,
    fontWeight: '700',

  },
  labelstackedListItemBodyLabel: {
    fontSize: fontXSmall,
    lineHeight: lineHeightXSmall,

    alignSelf: 'stretch',
  },
  CtlabelstackedListItemBodyLabel: {
    fontSize: fontXSmall,
    lineHeight: lineHeightXSmall,

    alignSelf: 'stretch',
  },
  labelTypo: {
    textAlign: 'left',
    fontFamily: Fonts.HSBC,
  },
  CtlabelTypo: {
    textAlign: 'left',
    fontFamily: Fonts.HSBC,
  },
  stackedListItemBodyheadline: {
    fontSize: fontLarge,
    lineHeight: lineHeightLarge,
    fontWeight: '700',
  },
  CtstackedListItemBodyheadline: {
    fontSize: fontXLarge,
    lineHeight: lineHeightLarge,
    fontWeight: fontWeightBold,
  },
  stackedListItemBodyheadlineFlexBox: {

    textAlign: 'left',
    fontFamily: Fonts.HSBC,
    alignSelf: 'stretch',
  },
  CtstackedListItemBodyheadlineFlexBox: {

    textAlign: 'left',
    fontFamily: Fonts.HSBC,
    alignSelf: 'stretch',
  },

  subTitle: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
  },
  CtsubTitle: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
  },
  bodyCopy: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    color: '#767676',
    alignSelf: 'stretch',
  },
  CtbodyCopy: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    color: '#767676',
    alignSelf: 'stretch',
  },
  status: {
    height: spacingS,
    alignSelf: 'stretch',
  },
  Ctstatus: {

    alignSelf: 'stretch',
  },
  status1: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: fontMedium,
    lineHeight: lineHeightSmallMedium,
    width: '100%',
  },
  wrapperDefaultContainer: {
    gap: spacingXXS,
    alignSelf: "stretch"
  },
  wrapperDefaultContainer1: {
    gap: spacingXXS,
    alignSelf: "stretch",
    width: '100%'
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
  CtbadgenotificationList: {
    borderRadius: actuatedNormalize(100),
    backgroundColor: '#ffbb33',
    width: actuatedNormalize(24),
    height: actuatedNormalize(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: fontSmallMedium,
    lineHeight: lineHeightSmallMedium,
    fontFamily: Fonts.HSBC,

    textAlign: "right"
  },
  CtcontentText: {
    fontSize: fontMedium,
    lineHeight: lineHeightSmallMedium,
    fontFamily: Fonts.HSBC,

    textAlign: "right",
    marginTop: I18nManager.isRTL
      ? actuatedNormalize(-3)
      : actuatedNormalize(5),
  },
  typebalance: {

    gap: spacingXXS,
    alignItems: "flex-end"
  },
  Cttypebalance: {

    gap: spacingXXS,
    alignItems: "flex-end"
  },
  wrapperFlexBoxBadgeStatusBalance: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  CtwrapperFlexBoxBadgeStatusBalance: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  contentTypoRightAligned: {
    textAlign: "right",
    fontFamily: Fonts.HSBC,
  },
  CtcontentTypoRightAligned: {
    textAlign: "right",
    fontFamily: Fonts.HSBC,
  },
  wrapperBalanceSAR: {
    paddingHorizontal: actuatedNormalize(0),
    paddingVertical: actuatedNormalize(1)
  },
  CtwrapperBalanceSAR: {
    paddingHorizontal: actuatedNormalize(0),
    paddingVertical: actuatedNormalize(4)
  },
  sarLabel: {
    fontSize: fontXSmall,
    lineHeight: lineHeightXSmall,
    textAlign: "left",
    color: "#000",
    fontFamily: Fonts.HSBC,
  },
  CtsarLabel: {
    fontSize: fontSmall,
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
  CtcontentBalanceStatusType: {
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
  CtwrapperContentAndSar: {
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
  CtcontentBalanceWithStatus: {
    fontSize: fontXLarge,
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
  CtwrapperSARLabel: {
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
  CtchipsinfoBalanceStatusType: {
    borderRadius: spacingXXS,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: "center",
    gap: spacingXXS,
  },
  labelInactive: {
    fontSize: fontSmallMedium,
    lineHeight: lineHeightSmallMedium,
    textAlign: 'left',
    color: '#000',
    fontFamily: Fonts.HSBC,
  },
  CtlabelInactive: {
    fontSize: fontMedium,
    lineHeight: lineHeightMedium,
    textAlign: 'left',
    color: '#000',
    fontFamily: Fonts.HSBC,
  },

  //....textdividr
  welcomeBackTypo: {
    textAlign: "left",
    fontFamily: Fonts.HSBC,
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
    fontFamily: Fonts.HSBC,
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
    fontFamily: Fonts.HSBC,
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
  },
  wrapperFlexBoxview: {
    paddingVertical: 4,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 8
  },
  textLayout: {
    lineHeight: 18,
    fontSize: 14
  },

  Viewheadlinetext: {
    fontWeight: "700",
    lineHeight: 22,
    fontSize: 17,
    fontFamily: Fonts.HSBC
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
    fontFamily: Fonts.HSBC,
  },
  wrapperview: {
    height: 24
  },
  frameParenttextdivider: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  languageenglish: {
    top: 20
  },


  texttitleactions: {

    height: 124,
    flex: 1
  },
  smallFont: {
    fontSize: fontSmall,
    lineHeight: lineHeightSmall,
  },
  extraSmallFont: {
    fontSize: fontXSmall,
    lineHeight: lineHeightXSmall,
  },
  storyModuleContainer: {

    width: actuatedNormalize(98),
    gap: actuatedNormalize(4),
    alignItems: "center"
  },
  storyStates: {
    borderRadius: 4000,
    flexDirection: "row",
    padding: actuatedNormalize(6),
    justifyContent: "center",
    alignItems: "center"
  },
  iconSabStoreStoryModule: {
    width: actuatedNormalize(86),
    height: actuatedNormalize(86)
  },
  texttextFlexBox: {
    overflow: "hidden",
    justifyContent: "center"
  },
  widgetS: {
    borderRadius: 8,
    backgroundColor: "#730014",
    width: "100%",
    height: 159,
    overflow: "hidden",
    justifyContent: "space-between",
    padding: 16,
    maxWidth: 163.5,
  },
  widgetSName: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Univers Next for HSBC",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    paddingTop: 16,
    alignItems: "flex-end"
  },
  widgetSDescription: {
    fontSize: 13,
    lineHeight: 17, textAlign: "left",
    color: "#fff",
    fontFamily: "Univers Next for HSBC",
    flex: 1
  },
  tagFlexBox: {
    alignItems: "center",
    flexDirection: "row"
  },
  tagContainer: {
    borderRadius: radiusS,

    width: "70%",
    height: actuatedNormalize(70),
    padding: spacingXS,
    gap: spacingXS,
    alignItems: "center",
    flexDirection: "row",
  },
  iconWithoutBg: {
    borderRadius: spacingXXS
  },
  IconStyle: {
    alignItems: "center",
    flexDirection: "row"
  },
  tagTitle: {
    paddingHorizontal: actuatedNormalize(0),
    paddingVertical: actuatedNormalize(10),
    gap: actuatedNormalize(3),
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch"
  },
  businessstyle: {
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },

  category: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMedium,
    fontWeight: fontWeightBold,

    flex: 1,
    textAlign: "left",
    fontFamily: Fonts.HSBC
  },

  transfertext: {
    alignItems: "center",
    flexDirection: "row"
  },
  transactions: {
    fontSize: fontMedium,
    lineHeight: lineHeightSmallMedium,
    textAlign: "left",
    fontFamily: Fonts.HSBC
  },
  expensecontainer: {
    width: '100%',
    height: actuatedNormalize(150), // Adjust based on your design
    borderRadius: actuatedNormalize(10), // Rounded corners
    overflow: 'hidden', // Ensures image respects the rounded corners
  },
  expensebanner: {
    width: '100%',

    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expensetextContainer: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseheading: {
    fontSize: actuatedNormalize(16),
    color: '#000',
    textAlign: 'center',

    fontWeight: '600',
  },
  expenseheadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: actuatedNormalize(10),
  },
  expensedot: {
    fontSize: fontXLarge,
    color: '#000',
    marginHorizontal: actuatedNormalize(10), // Adjust spacing between dot and text
  },
  expenseamount: {
    fontSize: actuatedNormalize(30),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  expenseamountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  expensecurrency: {
    fontSize: actuatedNormalize(14), // Smaller font size for "SAR"
    color: '#000',
    textAlign: 'center',
    marginLeft: spacingXXS,
    marginBottom: spacingXS,
    fontWeight: '600',
  },
  catagroywrapperFlexBox: {

    flexDirection: "row",
  },
  catagroysarTypo: {
    textAlign: "left",
    fontFamily: "Univers Next for HSBC"
  },
  catagroyiconsab360transport: {
    width: actuatedNormalize(24),
    height: actuatedNormalize(24)
  },
  catagroywrapper: {
    borderRadius: actuatedNormalize(100),
    backgroundColor: "rgba(161, 90, 79, 0.1)",
    width: actuatedNormalize(48),
    height: actuatedNormalize(48),
    overflow: "hidden",
    justifyContent: "center",
    padding: actuatedNormalize(14)
  },
  catagroylistitemaddon: {
    flexDirection: "row",
    alignSelf: "center"
  },
  catagroyheadline: {
    color: "#000",
    fontWeight: "700",
    lineHeight: actuatedNormalize(18),
    fontSize: actuatedNormalize(14),
    textAlign: "left",
    alignSelf: "stretch"
  },
  catagroybodyCopy: {
    fontSize: actuatedNormalize(12),
    lineHeight: actuatedNormalize(16),
    color: "#767676",
    alignSelf: "stretch"
  },
  catagroystackedlistitembody: {
    gap: actuatedNormalize(4),
    flex: 1,
    alignSelf: "center"
  },
  catagroycontent: {
    textAlign: "right",
    color: "#000",
    fontFamily: "Univers Next for HSBC",
    fontWeight: "700",
    lineHeight: actuatedNormalize(18),
    fontSize: actuatedNormalize(14)
  },
  catagroysar: {
    fontSize: actuatedNormalize(10),
    lineHeight: actuatedNormalize(13),
    color: "#000"
  },
  catagroywrapper2: {
    paddingHorizontal: actuatedNormalize(0),
    paddingVertical: actuatedNormalize(1),
    alignItems: "flex-end",
    flexDirection: "row"
  },
  catagroywrapper1: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    gap: actuatedNormalize(4),
    flexDirection: "row"
  },
  catagroybadgestatus: {
    alignItems: "flex-end",

    alignSelf: "center"
  },
  catagroylistitemactionsIcon: {
    width: actuatedNormalize(18),
    height: actuatedNormalize(18)
  },
  catagroystackedlistitemdefault: {
    gap: actuatedNormalize(8),
    flex: 1
  },
  catagroystackedlistitem: {
    width: "100%",
    flexDirection: "row",

    alignSelf: "stretch",
  },
  horizontalbar1: {

    right: "20.58%",
    backgroundColor: "#a15a4f",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    borderRadius: actuatedNormalize(100)
  },
  barProgress: {
    height: actuatedNormalize(5),
    alignSelf: "stretch",
    marginTop: actuatedNormalize(10)
  },
  horizontalbarWrapper: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%"
  },
  horizontalbarPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute"
  },
  bar: {
    backgroundColor: "#eee",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    overflow: "hidden",
    borderRadius: actuatedNormalize(100)
  },
}
