import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import PassWord from '../PassWord';
import Transfers
 from '../Transfers';
 import Paginatorscreendisplay from '../Paginatorscreendisplay';
 import RadioBtn from '../Radiobtn';
const SettingsStack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <SettingsStack.Navigator initialRouteName="Home">
      <SettingsStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="PassWord"
        component={PassWord}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Transfers"
        component={Transfers}
        options={{headerShown: false}}
      />
       <SettingsStack.Screen
        name="Paginatorscreendisplay"
        component={Paginatorscreendisplay}
        options={{headerShown: false}}
      />
       <SettingsStack.Screen
        name="RadioBtn"
        component={RadioBtn}
        options={{headerShown: false}}
      />
       {/* <SettingsStack.Screen
        name="Disclaimerdesign"
        component={Disclaimerdesign}
        options={{headerShown: false}}
      /> */}
    </SettingsStack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
