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
 import MainHeader from '../../components/Common/MainHeader';
 import Dashboard from '../Dashboard';
 import Menu from '../Menu'
 import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
 import Payment from '../Payment';
 import { useTranslation } from 'react-i18next';

 function getHeaderTitle(route) {
  const { t } = useTranslation();
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Home':
      return <MainHeader
      enableLogo={true}
      ></MainHeader>;
      case 'Payment':
        return  <PostLoginHeader
        Headline={'Headline Payment'}
      ></PostLoginHeader>;
      case 'New_Transfer':
        return     <PostLoginHeader
        Headline={'Headline'}
      ></PostLoginHeader>;
      case 'Menu':
        return    <PostLoginHeader
                LanguageSwitchReq={true}
                MenuHeader={true}
                HeaderTitleReq={false}
                Headline={t('initialLang:headline')}
                  />;
  }
}

const SettingsStack = createNativeStackNavigator();
const PostLoginNavigator = () => {

  return (
    <SettingsStack.Navigator initialRouteName="Home">
      <SettingsStack.Screen
        name="Home"
        component={TabBar}
       // options={{headerShown: false}}
       options={({ route }) => ({
        headerShown: true,
        header: () => (
          getHeaderTitle(route)
        ),
        //transitionPresets,
      })}
      />
     <SettingsStack.Screen
        name="Payment"
        component={Payment}
        options={({ route }) => ({
          headerShown: true,
          header: () => (
            getHeaderTitle(route)
          ),
          //transitionPresets,
        })}
      />

<SettingsStack.Screen
        name="New_Transfer"
        component={New_Transfer}
        options={({ route }) => ({
          headerShown: true,
          header: () => (
            getHeaderTitle(route)
          ),
          //transitionPresets,
        })}
      />
       <SettingsStack.Screen
        name="Menu"
        component={Menu}
        options={({ route }) => ({
          headerShown: true,
          header: () => (
            getHeaderTitle(route)
          ),
          //transitionPresets,
        })}
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
            HeaderTitleReq={true}
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
       <SettingsStack.Screen
        name="Dashboard"
        component={Dashboard}
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

export default PostLoginNavigator;

const styles = StyleSheet.create({});
