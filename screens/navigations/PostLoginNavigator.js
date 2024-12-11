import { StyleSheet, Text, View, Animated } from 'react-native';
import React, {useRef} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import New_Transfer from '../New_Transfer';
import Bills from '../Bills';
import SuccessScreen from '../SuccessScreen';
import TabBar from './TabBar';
import MainHeader from '../../components/Common/MainHeader';
import Dashboard from '../Dashboard';
import Menu from '../Menu'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Payment from '../Payment';
import { useTranslation } from 'react-i18next';
import PaymentTransfer from '../PaymentTransfer';
import Otp from '../Otp';

function getHeaderTitle(route,scrollY) {
  const { t } = useTranslation();
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Payment':
      return <MainHeader
        type="level1"
        Headline={true}
        HeadlineText={t('initialLang:payments')}
        back={false}
        state={'postlogin'}
        showLinkButton={false}
  linkButtonsize = 'small'
  link= "Add Bill"
  IconLeft={false}
  IconRight= {true}
  avatarElements="Icons"
        avatarType="Filled"
        avatarSize={'Small'}
        // AccountType={t('initialLang:Premier')}
        scrollY={0}
        scroll={false}
      ></MainHeader>;
    case 'New_Transfer':
      return <MainHeader
        type="level1"
        Headline={true}
        state={'postlogin'}
        HeadlineText={t('initialLang:transfer')}
        back={false}
        showLinkButton={false}
  linkButtonsize = 'small'
  link= "Link Button"
  IconLeft={false}
  IconRight= {true}
        scrollY={0}
        scroll={false}
        avatarElements="Icons"
        avatarType="Filled"
        avatarSize={'Small'}
      ></MainHeader>;
    case 'Menu':
      return <MainHeader
        type="level1-menu"
        Headline={true}
        HeadlineText={t('initialLang:menu')}
        avatarElements="Icons"
        state='postlogin'
        avatarType="Filled"
        avatarSize={'Small'}
        scrollY={scrollY}
        scroll={true}
      />;
    case 'PFM':
      return <MainHeader
        type="level1"
        Headline={true}
        HeadlineText={t('initialLang:pfm')}
        back={false}
        showLinkButton={false}
        scrollY={scrollY}
      ></MainHeader>;
  }
}

const SettingsStack = createNativeStackNavigator();
const PostLoginNavigator = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
   
  return (
    <SettingsStack.Navigator initialRouteName="Home">
      <SettingsStack.Screen
        name="Home"
        component={()=><TabBar scrollY={scrollY}/>}
           
        options={({ route }) => ({
          headerShown: true,
          header: () => (
            getHeaderTitle(route,scrollY)
          ),

        })}
      />
      <SettingsStack.Screen
        name="Payment"
        component={Payment}
        options={({ route }) => ({
          headerShown: true,
          header: () => (
            getHeaderTitle(route,null)
          ),

        })}
      />

      <SettingsStack.Screen
        name="New_Transfer"
        component={New_Transfer}
        options={({ route }) => ({
          headerShown: true,
          header: () => (
            getHeaderTitle(route, null)
          ),

        })}
      />
      <SettingsStack.Screen
        name="Menu"
        component={Menu}
        options={({ route }) => ({
          headerShown: true,
          header: () => (
            getHeaderTitle(route,null)
          ),

        })}
      />


      <SettingsStack.Screen
        name="Bills"
        component={Bills}
        options={{
          headerShown: true,
          header: () => (
            <MainHeader
              type={'level2'}
              Headline={true}
              HeadlineText={'Primary Button'}
              back={true}
              CloseIcon={true}
              HeaderTitleReq={true}
            ></MainHeader>
          ),

        }}
      />

<SettingsStack.Screen
        name="PaymentTransfer"
        component={()=><PaymentTransfer scrollY={scrollY}/>}
        options={{
          headerShown: true,
          header: () => (
            <MainHeader
              type={'level1-foryou'}
              Headline={true}
              HeadlineText={'Transfer'}
              scroll={true}
              scrollY={scrollY}            
  back={true}
     state={'postlogin'}
            ></MainHeader>
          ),

        }}
      />
      <SettingsStack.Screen
        name="Otp"
        component={Otp}
        options={{
          headerShown: true,
          header: () => (
            <MainHeader
              type={'authentication'}
              Headline={true}
              HeadlineText={'Authentication'}
              CloseIcon={true}
            ></MainHeader>
          ),

        }}
      />
      <SettingsStack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{
          headerShown: true,
          header: () => (
            <MainHeader></MainHeader>
          ),

        }}
      />


      <SettingsStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />


    </SettingsStack.Navigator>
  );
};

export default PostLoginNavigator;

const styles = StyleSheet.create({});
