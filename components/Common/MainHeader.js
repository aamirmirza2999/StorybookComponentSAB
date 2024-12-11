import React, {useState,useEffect} from 'react'
import {
  Animated,
  View,
  StatusBar,
  Platform,
  I18nManager,
  TouchableOpacity
} from 'react-native'
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { actuatedNormalize } from '../../constants/PixelScaling';
import LogoComponent from '../../components/Common/LogoComponent';
import SvgIconList from '../../constants/SvgIconList';
import { fontLarge, lineHeightXXLarge, spacingS, spacingXS, spacingXXS } from '../../constants/Size';
import TextComponent from './TextComponent';
import Avatarcomponent from './Avatarcomponent';
import { useNavigation } from "@react-navigation/native";
import { LinkButton } from './Button';
import Fonts from '../../constants/Fonts';
import { ProfileEditIconDark } from '../../constants/SvgLocations';
import { SafeAreaView } from 'react-native-safe-area-context';

const floatCTAStatus = false

const MainHeader = (props) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const navigation = useNavigation();
  console.log("WHICH THEME????", theme)
  const [isFixedHeaderVisible, setFixedHeaderVisible] = useState(false);
  
  // Use provided `scrollY` or fallback to a new animated value
  const animatedScrollY = props?.scrollY || new Animated.Value(0);

  // Monitor scroll position to toggle the visibility of the fixed header
  useEffect(() => {
    if (!props.scrollY) return;

    const scrollListener = animatedScrollY.addListener(({ value }) => {
      setFixedHeaderVisible(value > 50);
    });

    return () => {
      animatedScrollY.removeListener(scrollListener);
    };
  }, [animatedScrollY, props.scrollY]);

  // Interpolated styles for header animations
  const translateY = animatedScrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const opacity = animatedScrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  


  return (
    <View style={{backgroundColor:theme.primaryinvert}}>
    <StatusBar
      animated
      backgroundColor={theme.primaryinvert}
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      translucent={false}
    />
      {console.log("-----------Main header----",props.scroll,"----scrollyy",props.scrollY)}

      {(props?.scroll ?? false) && isFixedHeaderVisible && (
        <View
          style={{
              minHeight: actuatedNormalize(32),
            justifyContent: "space-between",
           backgroundColor: theme.primaryinvert,
            alignItems: 'center',
            flexDirection:'row',
            paddingHorizontal: spacingS,
            flex:1,
            marginTop: isFixedHeaderVisible ?  Platform.OS === 'ios' ? getStatusBarHeight() + actuatedNormalize(30) : getStatusBarHeight() : 0,
 
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', flex:1 }}>
                  {(props.type === 'level1' || props.type === 'level1-foryou') && props.back ? (
                    <TouchableOpacity
                      style={[styles.IconViewStyle1, props.IconViewStyle1]}
                      onPress={props.BackarrowFun ?
                        () => props.BackarrowFun() : () => navigation.goBack()}

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
                
                </View>
                <View style={{ flexDirection: 'row', flex:1, alignItems: 'center' , justifyContent:'center' }}>
                <TextComponent
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      color: theme.primarycolor,
                      fontWeight: "700",
                      fontSize: fontLarge,
                      lineHeight:lineHeightXXLarge,
                      bottom: actuatedNormalize(3),
                      fontFamily: Fonts.HSBC

                    }}
                    onPress={()=>{
                      console.log("-------click-----");
                      toggleTheme();
                    }}
                  >
            {props.HeadlineText || 'Headline'}
          </TextComponent>
                  </View>
         
          <View style={{ flexDirection: 'row', flex:1, alignItems: 'center', justifyContent: 'flex-end' }}>

{floatCTAStatus ? (
  <TouchableOpacity
    style={{ marginLeft: spacingXXS, marginRight: spacingXXS, paddingBottom: props.state === 'postlogin' ? actuatedNormalize(5) : null }}
    onPress={() => {
      reduxDispatch(setCallliveChat(true))
    }
    }
  >
    <SvgIconList
      icon="LiveChat"
      width={actuatedNormalize(26)}
      height={actuatedNormalize(26)}
    />

  </TouchableOpacity>
) : null}
{props.state === "postlogin" ? (
  <>
    <TouchableOpacity
      style={[styles.IconViewStyle2, {}]}
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
   {
    props.type === 'level1' && ( <TouchableOpacity
      style={[styles.IconViewStyle2, {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        marginLeft: spacingXS, marginRight: spacingXS,
        transform: [{ scaleX: I18nManager.isRTL ? 1 : 1 }],
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }]}
      onPress={props.NotificationFunc}
    >
      <SvgIconList
        icon="NotificationIcon"
        width={actuatedNormalize(24)}
        height={actuatedNormalize(24)}

      />
      {props.Notificationshowbadge ?
        <View style={[styles.badgenotification,]}>
          <TextComponent style={[styles.TextComponent]}>{props.NotificationCount}</TextComponent>
        </View> : null}
    </TouchableOpacity>)
   }

   {
    (props.type === 'level1-foryou' && props.state === 'postlogin') && (
      <TouchableOpacity
      style={[styles.IconViewStyle2, {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        marginLeft: spacingXS, marginRight: spacingXS,
        transform: [{ scaleX: I18nManager.isRTL ? 1 : 1 }],
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }]}
      onPress={props.NotificationFunc}
    >
      <SvgIconList
        icon="NotificationIcon"
        width={actuatedNormalize(24)}
        height={actuatedNormalize(24)}

      />
    </TouchableOpacity>
    )
   }
   

    {props.customAvatar ? props.AvatarPicture : <TouchableOpacity
      style={{ paddingBottom: actuatedNormalize(5), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}
      onPress={props.AvatarIconfunc}
    >
      <Avatarcomponent
        avatarinitial={props.avatarinitial}
        avatarSizesmall={props.avatarSize === 'Small' ? true : false}
        avatarSizemedium={props.avatarSize === 'Medium' ? true : false}
        avatarSizelarge={props.avatarSize === 'Large' ? true : false}
        avatarblack={props.avatarElements === 'Icons' && props.avatarType === 'Filled' ? true : false}
        avatarname={props.avatarElements === 'Initials' && props.avatarSize === 'Large' ? true : false}
        avatarnamemid={props.avatarElements === 'Initials' && props.avatarSize === 'Medium' ? true : false}
        avatarnamesmall={props.avatarElements === 'Initials' && props.avatarSize === 'Small' ? true : false}
        avatarwhite={props.avatarElements === 'Icons' && props.avatarType === 'Outline' ? true : false}
      />
      {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Small' ?
        <ProfileEditIconDark
          style={{ right: actuatedNormalize(15), top: actuatedNormalize(3) }}
          width={10}
          height={11}
        />
        : null}
      {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Medium' ?
        <ProfileEditIconDark
          style={{ right: actuatedNormalize(16), top: actuatedNormalize(2) }}
          width={12}
          height={13}
        />
        : null}
      {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Large' ?
        <ProfileEditIconDark
          style={{ right: actuatedNormalize(18), top: actuatedNormalize(2) }}
          width={14}
          height={15}
        />
        : null}
    </TouchableOpacity>}
  </>
) : (
  <>
    {props.SupportedIcon ? (
      <TouchableOpacity
        style={{ top: actuatedNormalize(3), marginLeft: spacingXS }}
        onPress={props.SupportedIconFunc}
      >
        <SvgIconList
          icon={props.SupportIcon}
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
          transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
        />
      </TouchableOpacity>
    ) : <View style={{ width: actuatedNormalize(24), height: actuatedNormalize(24) }}></View>}

    {props.LanguageIcon ? (
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
    ) : null}
  </>
)}

</View>
        </View>
      )}
      <Animated.View
        style={[!isFixedHeaderVisible
          ? styles.mainContainer // Apply mainContainer styles when the header is fixed
          : {},{
          transform: [{ translateY }],
          opacity,
          backgroundColor: theme.primaryinvert,
        }]}
      >

         {
          !isFixedHeaderVisible && (
            <>
             {props.type === 'level0' || props.type === 'level1' ?
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: spacingS,
              paddingVertical: spacingS,
              alignItems: 'center',
            }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <LogoComponent enableLogo={props.type == 'level0' || props.type == 'level1' || props.state === 'prelogin' ? true : false} />

              {props.state === 'postlogin' ?
                <>
                  <View style={{
                    height: actuatedNormalize(18),
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
                    fontFamily: Fonts.HSBC
                  }}> {props.AccountType} </TextComponent>
                </>

                : null}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

              {floatCTAStatus ? (
                <TouchableOpacity
                  style={{ marginLeft: spacingXXS, marginRight: spacingXXS, paddingBottom: props.state === 'postlogin' ? actuatedNormalize(5) : null }}
                  onPress={() => {
                    reduxDispatch(setCallliveChat(true))
                  }
                  }
                >
                  <SvgIconList
                    icon="LiveChat"
                    width={actuatedNormalize(26)}
                    height={actuatedNormalize(26)}
                  />

                </TouchableOpacity>
              ) : null}
              {props.state === "postlogin" ? (
                <>
                  <TouchableOpacity
                    style={[styles.IconViewStyle2, {}]}
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
                    style={[styles.IconViewStyle2, {
                      flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
                      marginLeft: spacingXS, marginRight: spacingXS,
                      transform: [{ scaleX: I18nManager.isRTL ? 1 : 1 }],
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }]}
                    onPress={props.NotificationFunc}
                  >
                    <SvgIconList
                      icon="NotificationIcon"
                      width={actuatedNormalize(24)}
                      height={actuatedNormalize(24)}

                    />
                    {props.Notificationshowbadge ?
                      <View style={[styles.badgenotification,]}>
                        <TextComponent style={[styles.TextComponent]}>{props.NotificationCount}</TextComponent>
                      </View> : null}
                  </TouchableOpacity>

                  {props.customAvatar ? props.AvatarPicture : <TouchableOpacity
                    style={{ paddingBottom: actuatedNormalize(5), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}
                    onPress={props.AvatarIconfunc}
                  >
                    <Avatarcomponent
                      avatarinitial={props.avatarinitial}
                      avatarSizesmall={props.avatarSize === 'Small' ? true : false}
                      avatarSizemedium={props.avatarSize === 'Medium' ? true : false}
                      avatarSizelarge={props.avatarSize === 'Large' ? true : false}
                      avatarblack={props.avatarElements === 'Icons' && props.avatarType === 'Filled' ? true : false}
                      avatarname={props.avatarElements === 'Initials' && props.avatarSize === 'Large' ? true : false}
                      avatarnamemid={props.avatarElements === 'Initials' && props.avatarSize === 'Medium' ? true : false}
                      avatarnamesmall={props.avatarElements === 'Initials' && props.avatarSize === 'Small' ? true : false}
                      avatarwhite={props.avatarElements === 'Icons' && props.avatarType === 'Outline' ? true : false}
                    />
                    {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Small' ?
                      <ProfileEditIconDark
                        style={{ right: actuatedNormalize(15), top: actuatedNormalize(3) }}
                        width={10}
                        height={11}
                      />
                      : null}
                    {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Medium' ?
                      <ProfileEditIconDark
                        style={{ right: actuatedNormalize(16), top: actuatedNormalize(2) }}
                        width={12}
                        height={13}
                      />
                      : null}
                    {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Large' ?
                      <ProfileEditIconDark
                        style={{ right: actuatedNormalize(18), top: actuatedNormalize(2) }}
                        width={14}
                        height={15}
                      />
                      : null}
                  </TouchableOpacity>}
                </>
              ) : (
                <>
                  {props.SupportedIcon ? (
                    <TouchableOpacity
                      style={{ top: actuatedNormalize(3), marginLeft: spacingXS }}
                      onPress={props.SupportedIconFunc}
                    >
                      <SvgIconList
                        icon={props.SupportIcon}
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                        transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                      />
                    </TouchableOpacity>
                  ) : <View style={{ width: actuatedNormalize(24), height: actuatedNormalize(24) }}></View>}

                  {props.LanguageIcon ? (
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
                  ) : null}
                </>
              )}

            </View>
          </View>
          :
          <>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: spacingS,
              paddingBottom: spacingS,
              minHeight: actuatedNormalize(50),
              paddingTop: props.type === 'level2' || props.type === 'search' || props.type === 'authentication' ? spacingS : null,
              alignItems: 'center',
            }}>
              <View style={[styles.column1]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {props.type !== 'level0' && props.type !== 'level1-menu' && props.back ? (
                    <TouchableOpacity
                      style={[styles.IconViewStyle1, props.IconViewStyle1]}
                      onPress={props.BackarrowFun ?
                        () => props.BackarrowFun() : () => navigation.goBack()}

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
                      style={{}}
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
              {(props.type === 'level2' && props.Headline) || props.type === 'search' || props.type === 'authentication' ?
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
                      bottom: actuatedNormalize(3),
                      fontFamily: Fonts.HSBC

                    }}
                  >
                    {props.type === 'search' ? 'Search' : props.HeadlineText}
                  </TextComponent>


                </View>
                : null}


              <View style={[styles.column3, {}]}>

                {floatCTAStatus ? (
                  <TouchableOpacity
                    style={[styles.IconViewStyle2, {
                      paddingBottom: props.type === 'level1-menu' ? actuatedNormalize(5) : null,
                      marginLeft: spacingXS, marginRight: spacingXS
                    }]}

                  >

                    <SvgIconList
                      icon="LiveChat"
                      width={actuatedNormalize(26)}
                      height={actuatedNormalize(26)}
                    />

                  </TouchableOpacity>
                ) : null}

                {props.SupportedIcon && (props.type === 'level2' || props.type === 'search' || props.type === 'authentication') ?
                  <TouchableOpacity
                    style={{ marginLeft: spacingXS }}
                    onPress={props.SupportedIconFunc}
                  >
                    <SvgIconList
                      icon={props.SupportIcon}
                      fill={props.fill}
                      width={actuatedNormalize(24)}
                      height={actuatedNormalize(24)}
                      transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                    />
                  </TouchableOpacity>

                  : null}

                {props.type === 'level2' || props.type === 'authentication' && (
                  props.CloseIcon ? (
                    <TouchableOpacity
                      style={styles.IconViewStyle2}
                      onPress={props.onClosePress ?
                        () => props.onClosePress() : () => navigation.goBack()}
                    >
                      <View style={{
                        width: actuatedNormalize(44),
                        height: actuatedNormalize(44),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <SvgIconList
                          icon="BlackClose"
                          width={actuatedNormalize(25)}
                          height={actuatedNormalize(25)}
                        />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    props.enableTransferCloseButton && (
                      <TouchableOpacity
                        style={styles.IconViewStyle2}

                      >
                        <View style={{
                          width: actuatedNormalize(44),
                          height: actuatedNormalize(44),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <SvgIconList
                            icon="BlackClose"
                            width={actuatedNormalize(25)}
                            height={actuatedNormalize(25)}
                          />
                        </View>
                      </TouchableOpacity>
                    )
                  )
                )}



                {props.type === 'level1-menu' ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

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
                        fill={isDarkMode ? "white" : "black"}
                        transform={[
                          { scaleX: I18nManager.isRTL ? -1 : 1 }
                        ]}

                      />
                    </TouchableOpacity>

                    {props.customAvatar ? props.AvatarPicture : <TouchableOpacity
                      style={{ paddingBottom: actuatedNormalize(5), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}
                      onPress={props.AvatarIconfunc}
                    >
                      <Avatarcomponent
                        avatarinitial={props.avatarinitial}
                        avatarSizesmall={props.avatarSize === 'Small' ? true : false}
                        avatarSizemedium={props.avatarSize === 'Medium' ? true : false}
                        avatarSizelarge={props.avatarSize === 'Large' ? true : false}
                        avatarblack={props.avatarElements === 'Icons' && props.avatarType === 'Filled' ? true : false}
                        avatarname={props.avatarElements === 'Initials' && props.avatarSize === 'Large' ? true : false}
                        avatarnamemid={props.avatarElements === 'Initials' && props.avatarSize === 'Medium' ? true : false}
                        avatarnamesmall={props.avatarElements === 'Initials' && props.avatarSize === 'Small' ? true : false}
                        avatarwhite={props.avatarElements === 'Icons' && props.avatarType === 'Outline' ? true : false}
                      />
                      {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Small' ?
                        <ProfileEditIconDark
                          style={{ right: actuatedNormalize(15), top: actuatedNormalize(3) }}
                          width={10}
                          height={11}
                        />
                        : null}
                      {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Medium' ?
                        <ProfileEditIconDark
                          style={{ right: actuatedNormalize(16), top: actuatedNormalize(2) }}
                          width={12}
                          height={13}
                        />
                        : null}
                      {props.avatarElements === 'Icons' && props.avataredit && props.avatarSize === 'Large' ?
                        <ProfileEditIconDark
                          style={{ right: actuatedNormalize(18), top: actuatedNormalize(2) }}
                          width={14}
                          height={15}
                        />
                        : null}
                    </TouchableOpacity>}

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
          
          <View style={{
            flexDirection: 'row', marginBottom: spacingXS, justifyContent: 'space-between',

          }}>
           
            {props.Headline ?
              <TextComponent style={[styles.HeadlineText, { color: theme.primarycolor }]}>
                {props.HeadlineText}
              </TextComponent>
              : null}

            <View style={{ flexDirection: "row", }}>
              {props.SupportedIcon ?
                <TouchableOpacity
                  style={{ top: actuatedNormalize(4), marginLeft: spacingXS, marginRight: spacingXS }}
                  onPress={props.SupportedIconFunc}
                >
                  <SvgIconList
                    icon={props.SupportIcon}
                    width={actuatedNormalize(24)}
                    height={actuatedNormalize(24)}
                    transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                  />
                </TouchableOpacity>

                : null}
              {props.type === 'level1' && props.showLinkButton ? (
                <View style={{ marginTop: actuatedNormalize(5), paddingRight: actuatedNormalize(16) }}>
                  <LinkButton
                    label={props.link}
                    type={props.linkButtonsize}
                    linkbuttonIconRight={props.IconRight === true}
                    linkbuttoneIconLeft={props.IconLeft === true}
                    onPress={props.onLinkPress}
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
          </View>
        )}


        {props.BottomBar && Platform.OS === 'ios' ?
          <View style={{
            height:
              getBottomSpace(), width: '100%',

          }}>
            {props.BottomBar ? props.BottomBar : null}
          </View> : null
        }
        {props.progressBar ?
          <View>
            {props.progressBar}
          </View>
          : null}
            </>
          )
         }

      </Animated.View>
    </View>
  )
}


const styles = {

  mainContainer: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + actuatedNormalize(30) : null,
  },

  whiteContainer: {

    flex: 1,
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center"
  },
  TextComponent: {
    fontSize: actuatedNormalize(8),
    fontFamily: Fonts.HSBC,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    bottom: I18nManager.isRTL ? actuatedNormalize(3) : actuatedNormalize(1)
  },
  badgenotification: {
    borderRadius: 100,
    backgroundColor: "#ffbb33",
    width: 10,
    height: 10,
    right: actuatedNormalize(11),
    alignItems: 'center',
    justifyContent: 'center',
    top: actuatedNormalize(4)
  },
  column1: {
    width: "20%",

    justifyContent: "flex-end",
  },
  column2: {
    width: "60%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",

  },
  column3: {
    flexDirection: 'row',
    width: "20%",
    alignItems: "flex-end",
    justifyContent: "flex-end",

  },
  IconViewStyle1: {
    height: actuatedNormalize(25),
    width: actuatedNormalize(25),
    alignItems: "center",
    justifyContent: "center",

  },
  IconViewStyle2: {
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    height: actuatedNormalize(24),
    width: actuatedNormalize(24),
    alignItems: "center",
    justifyContent: "center",
  },
  HeadlineText: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: Fonts.HSBC,
    color: "#000",
    paddingHorizontal: spacingS,
  }
}
export default MainHeader