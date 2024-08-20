import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import Home from '../Home';
import PassWord from '../PassWord';
import Transfers
 from '../Transfers';
 import Tab from './Tab';

const TabSetting=createBottomTabNavigator();

const TabBar=()=> {
  return (
 <TabSetting.Navigator
 tabBarOptions={{
  activeTintColor: "red",
  inactiveTintColor: "blue",
  showLabel: true,
  tabBarHideOnKeyboard: true,
}}
backBehavior="none"
style={{
  position: "absolute",
  left: 0,
  bottom: 0,
  right: 0,
  borderTopWidth: 0,
  elevation: 0,
}}
tabBar={(props) => <Tab {...props} />}
screenOptions={{tabBarHideOnKeyboard: true}}
 >
    <TabSetting.Screen
          name="Home"
          component={Home}
        />
    <TabSetting.Screen
          name="PassWord"
          component={PassWord}
        />
  <TabSetting.Screen
          name="Transfers"
          component={Transfers}
        />

 </TabSetting.Navigator>
  )
}
export default TabBar;