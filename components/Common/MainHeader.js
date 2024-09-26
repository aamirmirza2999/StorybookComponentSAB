import React from 'react'
import {
    Dimensions,
    View,
    StatusBar,
    StyleSheet,
    Platform,
    I18nManager,
    TouchableOpacity
} from 'react-native'
import SvgXml from './SvgXml'
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { actuatedNormalize } from '../../constants/PixelScaling';
import LogoComponent from '../../components/Common/LogoComponent';
import SvgIconList from '../../constants/SvgIconList';
import { spacingM, spacingS, spacingXS,fontXXSmall,spacingL } from '../../constants/Size';
import TextComponent from './TextComponent';
import Avatarcomponent from './Avatarcomponent';
import { useNavigation } from "@react-navigation/native";
import { LinkButton } from './Button';
import Fonts from '../../constants/Fonts';

let IosSpecific = Platform.OS === "ios" ? getStatusBarHeight() : 0
let iosMargin = Platform.OS == "ios" ? 50 : 0

const deviceWidth = Dimensions.get('window').width
const deviceheight = Dimensions.get('window').height - IosSpecific
const svgWidth = Number(deviceWidth) + 2
const svgHeight = Number(((deviceheight - iosMargin) / 5.4) + (deviceheight / 43) + getStatusBarHeight())


const xml1 = `<svg width=${Platform.OS == "ios" ? svgWidth + actuatedNormalize(100) : I18nManager.isRTL ? svgWidth + actuatedNormalize(90) : svgWidth + actuatedNormalize(200)} height=${svgHeight} preserveAspectRatio="none" viewBox="${I18nManager.isRTL ? 1 : 1} 0 ${Platform.OS == "ios" ? I18nManager.isRTL ? svgWidth - actuatedNormalize(90) : svgWidth : I18nManager.isRTL ? svgWidth - actuatedNormalize(20) : svgWidth + actuatedNormalize(175)} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity=".1" fill-rule="evenodd" clip-rule="evenodd" d="M-319 254.848 468.5 0 206 518.485l-525-263.637z" fill="#F5F5F5" fill-opacity=".5"/>
<path opacity=".08" fill-rule="evenodd" clip-rule="evenodd" d="M-221.5 43.94V536.06h480l-480-492.122z" fill="#F5F5F5" fill-opacity=".5"/>
<path opacity=".12" fill-rule="evenodd" clip-rule="evenodd" d="M-4 395.455 378.5 87.879l315 386.666L-4 395.455z" fill="#F5F5F5" fill-opacity=".5"/>
</svg>`

// export const Background = (bgColor) => {
//     return (
//         <SvgXml style={{flex:1, width: '100%', backgroundColor: bgColor.bgColor}} xml={xml1} />
//     )
// }

const MainHeader = (props) => {
    const { theme, toggleTheme,isDarkMode } = useTheme();
    const navigation = useNavigation();
    console.log("WHICH THEME????",theme)

    return (

        <View
        style={[styles.mainContainer,{
             backgroundColor:theme.primaryinvert,
            }]}
        
            >
            <View
                style={{
                    backgroundColor:theme.primaryinvert,
                    

                   
                }}
            />
            <StatusBar
      animated
      backgroundColor={theme.primaryinvert}
      barStyle={isDarkMode?'light-content': 'dark-content'}
      translucent={true}
    />
           
             {props.type === 'level0'?
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: spacingS,
                    backgroundColor: theme.primaryinvert,
                }}>
                   
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      
                    <LogoComponent enableLogo={props.type=='level0'||props.state === 'prelogin'?true:false} />

                    {props.state ==='postlogin' ?
                        <>
                            <View style={{
                                height: actuatedNormalize(20),
                                width: actuatedNormalize(2),
                                backgroundColor: theme.primarycolor,
                                marginLeft: spacingS
                            }}>
                            </View>

                            <TextComponent style={{
                                marginLeft: spacingXS,
                                color: theme.primarycolor,
                                fontWeight: "700",
                                fontSize: actuatedNormalize(12),
                                fontFamily:Fonts.HSBC
                            }}> {props.AccountType} </TextComponent>
                        </>

                        : null}
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                {props.state === "postlogin" ? (
    <>
        <TouchableOpacity
            style={ [styles.IconViewStyle2,{}]}
            onPress={props.Searchfunc}
        >
         
            <SvgIconList
                icon="SearchIcon"
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
                transform={[
                  { scaleX: I18nManager.isRTL ? -1 : 1 }        
                ]}
            />
           
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.IconViewStyle2, { flexDirection:I18nManager.isRTL? 'row-reverse':'row', 
            marginLeft: spacingXS, marginRight: spacingXS,
            transform:[{ scaleX: I18nManager.isRTL ? 1 : 1 } ]  ,
           
            alignItems: "flex-start",
            justifyContent: "flex-start",    
            // marginLeft: spacingS, 
            // marginRight:!props.showbadge?spacingS:0, 
            // top: actuatedNormalize(3)
          }]}
            onPress={props.NotificationFunc}
        >
            <SvgIconList
                icon="NotificationIcon"
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
                fill={isDarkMode ? "white" : "black"}
               
            />
            {props.showbadge?
            <View style={[styles.badgenotification,]}>
                <TextComponent style={[styles.TextComponent]}>2</TextComponent>
            </View>:null}
        </TouchableOpacity>

        <TouchableOpacity
            style={{paddingBottom:actuatedNormalize(5)}}
            onPress={props.AvatarIconfunc}
        >
            <Avatarcomponent
                avatarinitial={props.avatarinitial}
                avatarblack={props.avatarElements==='Icons' && props.avatarType==='Filled'?true:false}
                avatarname={props.avatarElements==='Initials' &&props.avatarSize==='Large' ?true:false}
                avatarnamemid={props.avatarElements==='Initials' &&props.avatarSize==='Medium' ?true:false}
                avatarnamesmall={props.avatarElements==='Initials' &&props.avatarSize==='Small' ?true:false}
                avatarwhite={props.avatarElements==='Icons' && props.avatarType==='Outline'?true:false}
            />
        </TouchableOpacity>
    </>
) : (
    props.LanguageIcon ? (
        <TouchableOpacity
            style={{ top: actuatedNormalize(3), marginLeft: spacingXS }}
            onPress={props.changeLanguage}
        >
            <SvgIconList
                icon="ChangeLang"
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
                transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
            />
        </TouchableOpacity>
    ) : null
)}

                        
                </View>
            </View>
            :
            <>
          
          <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <View style={[styles.column1]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {props.type !== 'level0'&& props.type !=='level1-menu' && props.back ? (
                <TouchableOpacity
                  style={[styles.IconViewStyle1, props.IconViewStyle1]}
                  onPress={ props.BackarrowFun?
                    ()=>props.BackarrowFun() : ()=>navigation.goBack()}
                  
                >
                  <SvgIconList
                    icon="BlackArrow"
                    width={actuatedNormalize(25)}
                    height={actuatedNormalize(25)}
                    transform={[
                      { scaleX: I18nManager.isRTL ? -1 : 1 }           
                    ]}
                   
                  />
                </TouchableOpacity>
              ) : null}
              {props.type === 'level1-menu' ? (
                <TouchableOpacity
                  style={{ }}
                  onPress={props.changeLanguage}
                >
                  <SvgIconList
                    icon="ChangeLang"
                    width={actuatedNormalize(24)}
                    height={actuatedNormalize(24)}
                    transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                  />
                </TouchableOpacity>
              ) : null}


            </View>
          </View>
          {(props.type==='level2' && props.Headline)|| props.type==='search'?
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
                  bottom:actuatedNormalize(3),
                  fontFamily:Fonts.HSBC

                }}
              >
                {props.type==='search'?'Search':props.HeadlineText}
              </TextComponent>


            </View>
            : null}


          <View style={[styles.column3]}>

            

            {props.type==='level2'&& props.CloseIcon? (
              <TouchableOpacity
                style={styles.IconViewStyle2}
                onPress={ props.onClosePress?
                   ()=>props.onClosePress() : ()=>navigation.goBack()}
               
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

            {props.type==='level1-menu' ? (
              <View style={{ flexDirection: 'row' , alignItems: 'center'}}>

                <TouchableOpacity
                  style={styles.IconViewStyle2}
                  onPress={props.Searchfunc}
                >
                  <SvgIconList
                    icon="SearchIcon"
                    width={actuatedNormalize(24)}
                    height={actuatedNormalize(24)}
                    transform={[
                      { scaleX: I18nManager.isRTL ? -1 : 1 }    
                    ]}
                  
                  />
                </TouchableOpacity>



                <TouchableOpacity
                  style={[styles.IconViewStyle2, { marginLeft: spacingXS, marginRight: spacingXS }]}
                  onPress={props.Helpfunc}
                >
                  <SvgIconList
                    icon="HelpIcon"
                    width={actuatedNormalize(24)}
                    height={actuatedNormalize(24)}
                     transform={[
                  { scaleX: I18nManager.isRTL ? -1 : 1 }        
                ]}
                                                           
                  />
                </TouchableOpacity>

                <TouchableOpacity
            style={{paddingBottom:actuatedNormalize(5)}}
            onPress={props.AvatarIconfunc}
        >
            <Avatarcomponent
                avatarinitial={props.avatarinitial}
                avatarblack={props.avatarElements==='Icons' && props.avatarType==='Filled'?true:false}
                avatarname={props.avatarElements==='Initials' &&props.avatarSize==='Large' ?true:false}
                avatarnamemid={props.avatarElements==='Initials' &&props.avatarSize==='Medium' ?true:false}
                avatarnamesmall={props.avatarElements==='Initials' &&props.avatarSize==='Small' ?true:false}
                avatarwhite={props.avatarElements==='Icons' && props.avatarType==='Outline'?true:false}
            />
        </TouchableOpacity>

              </View>
            ) : null}


            {props.multiplesvgRequired ? (
              props.multiplesvgUI  //Add your required number of svg icons and its function within your js. 
            ) : null}


          </View>
        </View>
        </>
        }
     
{(props.type === 'level1' || props.type === 'level1-menu' || props.type === 'level1-foryou') && (
  <View style={{ flexDirection: 'row', marginTop: spacingL, justifyContent: 'space-between' }}>
    <TextComponent style={[styles.HeadlineText, { color: theme.primarycolor }]}>
      {props.HeadlineText}
    </TextComponent>

    {props.type === 'level1' && props.showLinkButton ? (
      <View style={{ marginTop: actuatedNormalize(5), paddingRight: actuatedNormalize(16) }}>
        <LinkButton
          label={props.link}
          type={props.linkButtonsize}
          enableRightIcon={props.IconRight === true}
          enableLeftIcon={props.IconLeft === true}
          // onPress={{}}
        />
      </View>
    ) : props.type === 'level1-foryou' && props.Search ? (
      <TouchableOpacity
      style={{ marginTop: actuatedNormalize(5), paddingRight: actuatedNormalize(16) }}
        onPress={props.Searchfunc}
      >
        <SvgIconList
          icon="SearchIcon"
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
          transform={[
            { scaleX: I18nManager.isRTL ? 1 : 1 }    
          ]}
        />
      </TouchableOpacity>
    ) : null}
  </View>
)}




            {props.BottomBar && Platform.OS === 'ios' ?
                <View style={{
                    height:
                        getBottomSpace(), width: '100%',
                        // backgroundColor: theme.backgroundColor
                }}>
                    {props.BottomBar ? props.BottomBar : null}
                </View> : null
            }
        </View>

    )
}


const styles = {

    mainContainer: {
        
        paddingTop:Platform.OS=='ios'? getStatusBarHeight() + 40:getStatusBarHeight() + 25 ,
    },

    whiteContainer: {
      //  backgroundColor: "black",
        flex: 1,
    },
    textFlexBox: {
        justifyContent: "center",
        alignItems: "center"
        },
        TextComponent: {
        fontSize: actuatedNormalize(9),
        fontFamily: Fonts.HSBC,
        color: "#fff",
        textAlign: "center",
        display: "flex",
        },
        badgenotification: {
        borderRadius: 100,
        backgroundColor: "#ffbb33",
        width: 13,
        height: 13,
        right:actuatedNormalize(10),
        alignItems:'center',
        justifyContent:'center'
        },
        column1: {
            width: "20%",
            paddingLeft: spacingS,
            justifyContent: "flex-end",
            //top: actuatedNormalize(16),
            //flexDirection: 'row',
            //alignItems: 'center'
        
          },
          column2: {
            width: "60%",
            alignItems: "flex-end",
            justifyContent: "center",
            flexDirection: "row",
           // top: actuatedNormalize(16)
        
          },
          column3: {
            flexDirection: 'row',
            width: "20%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingRight: actuatedNormalize(20),
            //top: actuatedNormalize(16)
        
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
            fontFamily:Fonts.HSBC,
            color: "#000",
            paddingHorizontal: spacingS,
              }
}
export default MainHeader