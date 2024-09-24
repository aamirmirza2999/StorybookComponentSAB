import {
    Button,
    I18nManager,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
  import { useNavigation } from '@react-navigation/native';
  import { useTheme } from '../constants/Theme/ThemeProvider';
  import { useTranslation } from 'react-i18next';
  import MainHeader from '../components/Common/MainHeader';
  import { spacingM, spacingS, spacingXS } from '../constants/Size';

  const Dashboard = (props) =>{

    const navigation = useNavigation();
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    return (
        <>
         <PrimaryBgComponent
        ButtonContainer={{
          paddingLeft: spacingS,
          paddingRight: spacingS,
          paddingBottom: spacingM,
          paddingTop: spacingM,
        }}

        BgHeader={
          <MainHeader
          type="level0"
          state='postlogin'
          showbadge={true}
          avatarElements="Icons"
          avatarType="Filled"
          AccountType={t('initialLang:Premier')}
            //changeTheme={toggleTheme}
            //LanguageSwitchReq = {true}
            //changeLanguage={() => changeLanguage(language == 'en' ? 'ar' : 'en')}
           
            />
        }>
      </PrimaryBgComponent>
        </>
    )

  }
  export default Dashboard;