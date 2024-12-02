import {
  I18nManager,
  StyleSheet,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import i18n from '../locales/i18n';
import RNRestart from 'react-native-restart';

import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../constants/Theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { spacingM, spacingS } from '../constants/Size';
import MainHeader from '../components/Common/MainHeader';
import { MainButton } from '../components/Common/Button';
import Dashboard from './Dashboard';
const mainTabs = [
  { key: 0, title: i18n.t('initialLang:All') },
  { key: 1, title: i18n.t('initialLang:Mobile') },
  { key: 2, title: i18n.t('initialLang:International') },
  { key: 3, title: i18n.t('initialLang:Transfer') },
  { key: 4, title: i18n.t('initialLang:Payment') },
  { key: 5, title: i18n.t('initialLang:Beneficary') }
];

const subTabs = [
  { title: i18n.t('initialLang:All'), key: 0 },
  { title: i18n.t('initialLang:Payment'), key: 1 },
  { title: i18n.t('initialLang:Mobile'), key: 2 },
  { title: i18n.t('initialLang:Transfer'), key: 3 },
  { title: i18n.t('initialLang:International'), key: 4 },
  { title: i18n.t('initialLang:Beneficary'), key: 5 },
  // Add more sub-tabs here if needed
];

const Home = props => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [enableButton, setenableButton] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const [language, setlanguage] = useState('en');
  const [Screen, setScreen] = useState('Home');

  useEffect(() => {
    props.route.params
      ?.fromScreen === undefined ? setScreen("Home") : setScreen("Dashboard")
  }, [])
  const { t } = useTranslation();

  const handleUsernameChange = text => {
    setUsername(text);
    if (text.length < 3) {
      setenableButton(true);
      setErrorMsg('Enter The UserName');
      // setErrorMsg('Username must be at least 3 characters long');
    } else {
      setErrorMsg('');
      setenableButton(false);
    }
  };

  const HandleSubmit = () => {
    if (username) {
      setErrorMsg('');
      navigation.navigate('Dashboard');
    } else {
      setErrorMsg('Enter The UserName');
    }
  };
  const forgotPassWord = () => {
    // navigation.navigate('PassWord')
    props.navigation.navigate('PassWord');
  };

  const changeLanguage = async language => {
    if (language === 'ar') {
      RNRestart.Restart();
      I18nManager.forceRTL(true);
    } else {
      RNRestart.Restart();
      I18nManager.forceRTL(false);
    }
    i18n.changeLanguage(language);
    await AsyncStorage.setItem('currentLang', language); // Enable Disable CR 500 International Swift Validation
    setlanguage(language);
  };
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let lang = 'en';
    let currentLang = await AsyncStorage.getItem('currentLang');
    console.log('currentLang', currentLang);
    if (currentLang == 'ar') {
      lang = 'ar';
    }

    i18n.changeLanguage(lang);
    setlanguage(lang);
  };
  return (
    <>
      {Screen === "Home" ?

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
              state='prelogin'
              LanguageIcon={true}

              changeLanguage={() => changeLanguage(language == 'en' ? 'ar' : 'en')}

            />
          }
        >
          <View>
            <MainButton
              backgroundColor={"#db0011"}
              label={"Action"}
              type={"large"}//large/small/stacked/inline
              enableLeftIcon={false}
              enableRightIcon={true}
              enableSecondaryBtn={true}
              onPress={() => setScreen("Dashboard")}
            ></MainButton>
          </View>
        </PrimaryBgComponent>
        :
        <Dashboard
          changeScreen={() => setScreen("Home")}
        />
      }
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
