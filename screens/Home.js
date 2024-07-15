import {
  Button,
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BgHeader from '../components/Button/BgHeader';
import LogoComponent from '../components/Button/LogoComponent';
import i18n from '../locales/i18n';
import RNRestart from 'react-native-restart';
import {
  // Colors,
  TextComponent,
  actuatedNormalize,
  Fonts,
} from '../constants/CommonImport';
import PrimaryBgComponent from '../components/Button/PrimaryBgComponent';
import TextInputComponent from '../components/Button/TextInputComponent';
import PrimaryButton from '../components/Button/PrimaryButton';
import SecondaryButton from '../components/Button/SecondaryButton';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../constants/Theme/ThemeProvider';
import {globalStyles} from '../constants/GlobalStyles';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgIconList from '../constants/SvgIconList';
import {ComponentBottomPadding, ScreenLeftorRight, ScreenToporBottom, textTop} from '../constants/Size';

const Home = props => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [enableButton, setenableButton] = useState(true);
  const {theme, toggleTheme} = useTheme();
  const [language, setlanguage] = useState('en');
  console.log("ggggggg",theme);
  const {t} = useTranslation();

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
      navigation.navigate('Transfers');
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
      <PrimaryBgComponent
        ButtonContainer={{
          paddingLeft: ScreenLeftorRight,
          paddingRight: ScreenLeftorRight,
          paddingBottom:ScreenToporBottom,
          paddingTop: ScreenToporBottom,
        }}
        primaryBgColor={theme.primaryColor}
        PrimaryButton={
          <PrimaryButton
            onPress={HandleSubmit}
            textColor={'white'}
            disabled={enableButton}
            PrimaryButtonBgClr={theme.PrimaryButtonBgClr}
            label={t('initialLang:submit')}
            {...props}
          />
        }
        SecondaryButton={
          <SecondaryButton
            label={t('initialLang:register1')}
            // SecondaryButtonBgClr={"red"}
          />
        }
        BgHeader={
          <BgHeader
            title={t('initialLang:RegisterOnline')}
            customSvg={true}
            backButtonIsRequired={true}
            textColor={theme.SecondaryColor1}
          />
        }>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <LogoComponent enableLogo={true} changeTheme={toggleTheme} />
          <TouchableOpacity
            onPress={() => changeLanguage(language == 'en' ? 'ar' : 'en')}>
            <SvgIconList
              icon="ChangeLang"
              width={actuatedNormalize(25)}
              height={actuatedNormalize(25)}
              transform={[{rotate: I18nManager.isRTL ? '180deg' : '0deg'}]}
            />
          </TouchableOpacity>
        </View>
        <TextComponent
          fontWeight={'Bold'}
          style={{
            color:theme.primaryColor1,
            fontSize: actuatedNormalize(20),
            marginTop: ComponentBottomPadding,
          }}>
          {t('initialLang:welcome')}
        </TextComponent>
        <TextComponent
          fontWeight={'Light'}
          style={{
            color: theme.primaryColor1,
            fontSize: actuatedNormalize(14),
            marginTop: textTop,
          }}>
          {t('initialLang:lifestyle')}
        </TextComponent>
        {/* <Button
          onPress={() => changeLanguage(language == 'en' ? 'ar' : 'en')}
          title="Lang"
        /> */}
        <View
          style={{
            paddingTop: actuatedNormalize(24),
          }}>
          <TextInputComponent
            label={t('initialLang:Username')}
            placeHolder={t('initialLang:Username')}
            value={username}
            inputStyle={{width: '100%'}}
            onChangeText={handleUsernameChange}
            errorMsg={errorMsg}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PassWord')}
            style={{
              
              alignSelf: 'flex-end',
            }}>
            <TextComponent
              fontWeight={'Bold'}
              style={{
                color: theme.primaryColor,
                fontSize: actuatedNormalize(12),
                marginTop: ComponentBottomPadding,
              }}>
              {t('initialLang:forgot')}
            </TextComponent>
          </TouchableOpacity>
        </View>
      </PrimaryBgComponent>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
