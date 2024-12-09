import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
  Platform,
} from 'react-native'
import React, { useState } from "react";
import { actuatedNormalize } from '../../constants/PixelScaling'
import { ifIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import { useTheme } from '../../constants/Theme/ThemeProvider';
import DeviceInfo from 'react-native-device-info';
import Fonts from '../../constants/Fonts';
import { I18nManager } from "react-native";
import { useTranslation } from "react-i18next";

import { HomeActive, PaymentActive, Transfer, Payment_Icon, HomeTab, Iconfilledmenu, IconOutlineMenu, Pfm360, PfmActive } from '../../constants/SvgLocations';

const Tab = ({
  state,
  descriptors,
  navigation,
  dashboardMenuExpanded,
  currentActiveScreen,
  props,
}) => {
  const { routes, index: activeRouteIndex } = state;
  const tabWidth = Dimensions.get("window").width / routes.length;
  const [translateValue] = useState(new Animated.Value(0));
  const { colors } = useTheme();
  const { t, i18n } = useTranslation();
  const updatePositioning = (route, routeIndex) => {

    onTabPress(route.route, routeIndex);
    Animated.spring(translateValue, {
      toValue: I18nManager.isRTL
        ? -routeIndex * tabWidth
        : routeIndex * tabWidth,
      velocity: 10,
      useNativeDriver: true,
      extrapolate: "clamp",
    }).start();
  };

  const onTabPress = (route, routeIndex) => {
    const isFocused = state.index === routeIndex;
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    console.log("Route name ... 11", route);
    // if (!isFocused && !event.defaultPrevented) {
    if (!event.defaultPrevented) {
      //if (routeIndex != 2) {
      if (!dashboardMenuExpanded) {
        switch (route.name) {
          case "Home":
            HomeNavigation(route.name, route.params?.params?.fromScreen || "");
            break;
          case "Payment":
            PaymentNavigation(route.name, route.params?.params?.fromScreen || "");
            break;
          case "New_Transfer":
            TransferNavigation(route.name, route.params?.params?.fromScreen || "");
            break;
          default:
            navigation.navigate(route.name, route.params?.params?.fromScreen || "");
        }
      } else {
        return null;
      }
      //}
    }
  };

  const HomeNavigation = (screen, routeScreen) => {

    navigation.navigate("Home");
  };

  const PaymentNavigation = (screen, routeScreen) => {

    navigation.navigate("Payment");
  };
  const TransferNavigation = (screen, routeScreen) => {

    navigation.navigate("New_Transfer");
  };


  return (
    <View style={{ flexDirection: "column" }}>

      <View
        style={
          ([styles.container],
          {
            flex: 1,
            flexDirection: "row",
            height:
              Platform.OS === "ios" ?
                DeviceInfo.hasDynamicIsland() ?
                  actuatedNormalize(75) : actuatedNormalize(55) : actuatedNormalize(55),
            borderTopWidth: actuatedNormalize(1),
            borderTopColor: "#E8E8E8",
            //borderTopLeftRadius: actuatedNormalize(15),
            // borderTopRightRadius: actuatedNormalize(15),
            position: "absolute",
            zIndex: 10,
            left: 0,
            bottom: getBottomSpace(),
            right: 0,
            borderTopWidth: 0,
            backgroundColor: "#ffffff",

            //Drop shadow
            shadowRadius: 4,
            shadowOffset: {
              width: 0,
              height: -3,
            },
            shadowOpacity: 0.1,
            shadowColor: "#000000",
            elevation: 5,
          })
        }
      >
        <View>
          <View style={StyleSheet.absoluteFillObject}>
            <Animated.View
              style={[
                styles.activeTab,
                {
                  width: tabWidth,
                  transform: [{ translateX: translateValue }],
                },
              ]}
            >
              {!dashboardMenuExpanded && currentActiveScreen !== "NewLogin" ? (
                <View
                  style={[
                    styles.slider,
                    {
                      width: tabWidth - actuatedNormalize(20),
                    },
                  ]}
                />
              ) : null}
            </Animated.View>
          </View>
        </View>



        {routes.map((route, routeIndex) => {
          //reduxDispatch(setTabMenuChanged(routeIndex));
          const options = descriptors[route.key];
          const isRouteActive = routeIndex === activeRouteIndex;
          // console.log("isRouteActive...", isRouteActive, "routeIndex1", routeIndex, "routeIndex2", activeRouteIndex);
          const screenName = route?.params?.screen;
          const tintColor = isRouteActive ? "red" : "black";
          const tintIconColor = isRouteActive ? "red" : "black";

          const HomeIcon = isRouteActive ? HomeActive : HomeTab
          const PaymentIcon = isRouteActive ? PaymentActive : Payment_Icon
          const TransferIcon = isRouteActive ? Transfer : Transfer
          const MenuIcon = isRouteActive ? Iconfilledmenu : IconOutlineMenu
          const ActiveFontEn = isRouteActive ? Fonts.HSBC : Fonts.HSBC;
          const PfmIcon = isRouteActive ? PfmActive : Pfm360

          let IconName;
          let Name;



          return (
            <TouchableOpacity
              key={routeIndex}
              style={styles.tabButton}
              //hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
              onPress={() => {
                updatePositioning({ route }, routeIndex);
                //console.log("tabbar pressed "+route.name)
              }}
              onLongPress={() => {
                updatePositioning({ route }, routeIndex);
              }}
              accessibilityLabel={"Pretabbar pressed " + route.name}
              testID={"Pretabbar pressed" + route.name}
            >
              {!dashboardMenuExpanded ? (
                route.name === "Add" ? (
                  <AddButton navigation={navigation} {...props} />
                ) : (
                  <>
                    {route.name === "Home" ? (
                      <HomeIcon
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                        fill={tintIconColor}
                      />
                    )

                      : route.name === "Payment" ? (
                        <PaymentIcon
                          width={actuatedNormalize(24)}
                          height={actuatedNormalize(24)}
                          fill={tintIconColor}
                        // stroke={tintColor}
                        // stroke={colors.menuView2BackgroundColor}
                        />
                      ) : route.name === "New_Transfer" ? (
                        <TransferIcon
                          width={actuatedNormalize(24)}
                          height={actuatedNormalize(24)}
                          fill={tintIconColor}
                        />
                      )
                        :
                        route.name === "Menu" ? (
                          <MenuIcon
                            width={actuatedNormalize(25)}
                            height={actuatedNormalize(25)}
                            fill={tintIconColor}
                          />
                        ) :
                          route.name === "PFM" ? (
                            <PfmIcon
                              width={actuatedNormalize(25)}
                              height={actuatedNormalize(25)}
                              fill={tintIconColor}
                            />
                          )
                            : null}

                    <Text
                      style={{
                        marginTop: actuatedNormalize(4),
                        fontSize: actuatedNormalize(12),
                        //fontFamily: Fonts.universlTStd,
                        fontFamily: Fonts.HSBC,
                        top: I18nManager.isRTL ? actuatedNormalize(-3) : actuatedNormalize(0),
                        color: tintColor,
                        textAlign: "center",
                      }}
                    >
                      {route.name === "Home"
                        ? t('initialLang:home')
                        : route.name === "Payment"
                          ? t('initialLang:payments')
                          : route.name === "New_Transfer"
                            ? t('initialLang:transfer')
                            : route.name === "Menu"
                              ? t('initialLang:menu')
                              : route.name === "PFM"
                                ? t('initialLang:pfm')
                                : Name
                      }
                    </Text>
                  </>
                )
              ) : dashboardMenuExpanded ? (
                route.name === "Add" ? (
                  <AddButton navigation={navigation} />
                ) : null
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>

      {Platform.OS === "ios" && ifIphoneX ? (
        <View style={[styles.bottomsafeAreaView, { backgroundColor: "#ffffff", }]}></View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    borderTopWidth: actuatedNormalize(1),
    borderTopColor: "#E8E8E8",
    borderTopLeftRadius: actuatedNormalize(15),
    borderTopRightRadius: actuatedNormalize(15),
    bottom: getBottomSpace(),
    borderTopWidth: 0,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Platform.OS === "ios" ?
      DeviceInfo.hasDynamicIsland() ? actuatedNormalize(12) : null
      : null

  },
  activeTab: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabInner: {
    width: actuatedNormalize(48),
    height: actuatedNormalize(48),
    backgroundColor: "#E1F5FE",
    borderRadius: actuatedNormalize(24),
  },
  slider: {
    height: Platform.OS === "ios" ? actuatedNormalize(2) : actuatedNormalize(3),
    //height: actuatedNormalize(2),
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: actuatedNormalize(10),
    backgroundColor: "red",
    borderRadius: actuatedNormalize(10),
  },
  bottomsafeAreaView: {
    width: "100%",
    height: getBottomSpace(),
    backgroundColor: "#ffffff",
    bottom: 0,
  },
});
export default Tab;