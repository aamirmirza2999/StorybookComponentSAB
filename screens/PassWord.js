import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgHeader from '../components/Button/BgHeader';
import LogoComponent from '../components/Button/LogoComponent';
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
import { ComponentBottomPadding, ScreenLeftorRight, ScreenToporBottom, textTop } from '../constants/Size';
import { useTranslation } from 'react-i18next';

const PassWord = props => {
  const {theme, toggleTheme} = useTheme();

  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [enableButton, setEnableButton] = useState(true);

  const handlePasswordChange = text => {
    setPassword(text);
    validatePasswords(text, confirmPassword);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
    validatePasswords(password, text);
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password.length < 8 || confirmPassword.length < 8) {
      setEnableButton(true);
      setErrorMsg('Passwords must be at least 8 characters long');
    } else if (password !== confirmPassword) {
      setEnableButton(true);
      setErrorMsg('Passwords do not match');
    } else {
      setErrorMsg('');
      setEnableButton(false);
    }
  };

  const handleSubmit = () => {
    if (password && confirmPassword && !enableButton) {
      setErrorMsg('');
      // Proceed with your submit logic
    } else {
      setErrorMsg('Please enter valid passwords');
    }
  };

  const forgotPassWord = () => {
    props.navigation.navigate('PassWord');
  };
  const {t} = useTranslation();

  return (
    <>
      <PrimaryBgComponent
       ButtonContainer={{
        paddingLeft: ScreenLeftorRight,
        paddingRight: ScreenLeftorRight,
        paddingBottom:ScreenToporBottom,
        paddingTop: ScreenToporBottom,
      }}
      primaryBgColor={theme.primaryBgColor}

        PrimaryButton={
          <PrimaryButton
            onPress={handleSubmit}
            disabled={enableButton}
            label={'Submit'}
          />
        }
        SecondaryButton={<SecondaryButton label={'Register'} onPress={''} />}
        BgHeader={
          <BgHeader
            textColor={theme.primaryWhiteColor}
            title={t('initialLang:RegisterOnline')}
            customSvg={true}
            backButtonIsRequired={true}
            backFun={() => navigation.goBack()}
          />
        }>
        <LogoComponent />
        <TextComponent
          fontWeight={'Bold'}
          style={{
            color: theme.primaryTextColor,
            fontSize: actuatedNormalize(20),
            marginTop: ComponentBottomPadding,
          }}>
          Welcome
        </TextComponent>
        <TextComponent
          fontWeight={'Light'}
          style={{
            color: theme.primaryTextColor,
            fontSize: actuatedNormalize(14),
            marginTop: textTop,
          }}>
          Banking that fits your lifestyle
        </TextComponent>
        <TextInputComponent
          inputStyle={{width: '100%'}}
          label="Password"
          placeHolder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          errorMsg={errorMsg}
          secureTextEntry
        />
        <TextInputComponent
          inputStyle={{width: '100%'}}
          label="Confirm Password"
          placeHolder="Confirm Password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          errorMsg={errorMsg}
          secureTextEntry
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PassWord')}
            style={{
              alignSelf: 'flex-end',
            }}>
            <TextComponent
              fontWeight={'Bold'}
              style={{
                color: theme.primaryTextColor,
                fontSize: actuatedNormalize(12),
                marginTop: ComponentBottomPadding,
              }}>
              Forgot Username?
            </TextComponent>
          </TouchableOpacity>
        </View>
      </PrimaryBgComponent>
    </>
  );
};

export default PassWord;

const styles = StyleSheet.create({});
