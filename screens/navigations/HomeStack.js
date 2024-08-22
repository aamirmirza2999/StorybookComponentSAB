import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import PassWord from '../PassWord';
import Transfers
 from '../Transfers';
 import New_Transfer from '../New_Transfer';
 import Paginatorscreendisplay from '../Paginatorscreendisplay';
 import RadioBtn from '../Radiobtn';
 import Bills from '../Bills';
 import SuccessScreen from '../SuccessScreen';
 import TabBar from './TabBar';
 import PostLoginHeader from '../../components/Common/PostLoginHeader';

const SettingsStack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <SettingsStack.Navigator initialRouteName="Home">
      <SettingsStack.Screen
        name="Home"
        component={TabBar}
        options={{headerShown: false}}
      />
     
      <SettingsStack.Screen
        name="Transfers"
        component={Transfers}
        options={{headerShown: false}}
      />
       <SettingsStack.Screen
        name="Bills"
        component={Bills}
        options={{
          headerShown: true,
          header: () => (
            <PostLoginHeader
            title={'Primary Button'}
            textColor={'white'}
            enableBackButton={true}
            enableCloseButton={true}
            hideHeader={false}
            ></PostLoginHeader>
          ),
          //transitionPresets,
        }}
      />
        <SettingsStack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{
          headerShown: true,
          header: () => (
           <PostLoginHeader></PostLoginHeader>
          ),
          //transitionPresets,
        }}
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
