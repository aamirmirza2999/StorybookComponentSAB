import React, { Component } from 'react';
import { View, StyleSheet, Image, I18nManager } from 'react-native';
import TextComponent from '../Common/TextComponent';
import { Cross,Check } from '../../constants/SvgLocations';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { globalStyles } from '../../constants/GlobalStyles';

class PasswordStrength extends Component {

  render() {

    let minLen = false
    let combine = false
    let validate = false
    let barColor = []
    let label = ''
    let score = 0
    let barstyle;
    let policystyle;
    let pwdpolicy = true;
    let password = this.props.password;

    if (this.props.module === "Prelogin") {
      barstyle = globalStyles.pwdbarStyle
      policystyle = globalStyles.pwdlabel2
    }

    if (this.props.module === "Postlogin") {
      barstyle = globalStyles.pwdpostbarStyle
      policystyle = globalStyles.pwdpostlabel2
    }

    if (password.length >= 8) {
      minLen = true
      score++
      const charpattern = /^[a-zA-Z0-9\u0621-\u064A\u0660-\u0669]+$/
      let checkchar = false
      let invalid = false
      for (var i = 0; i < password.length; i++) {
        let char = password.charAt(i)
        if (charpattern.test(char)) {
          checkchar = true
        }
        else if (/[!@$=_'.*?-]/.test(char)) {
          checkchar = true
        }
        else {
          invalid = true
        }
      }
      validate = invalid ? false : checkchar
      if (validate === true) {
        score++;
      }
      else {
        score--;
      }
    }

    if (/[0-9\u0660-\u0669]/.test(password) && /[a-zA-Z\u0621-\u064A]/.test(password)) {
      combine = true
      score++
    }

    if (minLen && combine && validate) {
      pwdpolicy = false
    }

    if (password.length === 0) {
      score = 0;
      // barColor = "";
    }
   
    if (score === 0) {
      barColor = ['rgb(210, 38, 48)', 'rgb(210, 38, 48)', 'rgba(248, 161, 62,1)']
      // barColor = ""
      label = 'Login:Login.label.weak';
      barwidth = "30%"
    }
    let barwidth;
    if (score === 1) {
      barColor = ['rgb(210, 38, 48)', 'rgb(210, 38, 48)', 'rgba(248, 161, 62,1)']
      //barColor = 'red'
      label = 'Login:Login.label.weak'
      barwidth = "30%"
    }
    if (score === 2) {
      barColor = ['rgb(210, 38, 48)', 'rgba(248, 161, 62, 1)']
      // barColor = 'orange'
      label = 'Login:Login.label.average'
      barwidth = "65%"
    }
    if (score === 3) {
      barColor = ['rgb(210, 38, 48)', 'rgba(248, 161, 62, 1)', 'rgb(0,184,181)']
      //barColor = 'blue'
      label = 'Login:Login.label.strong'
      barwidth = "100%"
    }

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          {password.length !== 0 ? <TextComponent style={[globalStyles.pwdlabel, { color: "#000000" }]}>{this.props.label}</TextComponent> : null}
        </View>
        {password.length !== 0 ?
          <View style={globalStyles.pwdmeterContainer}>
            {score >= 0 || score === 1 ?
              <View style={[globalStyles.pwdbarStyle, { backgroundColor: score >= 0 || score === 1 ? "#a8000b" : "" }]} />
              : <></>}
            {score >= 2 ?
              <View style={[globalStyles.pwdbarStyle, { backgroundColor: score >= 2 ? "#ffbb33" : "" }]} /> : <></>}
            {score >= 3 ?
              <View style={[globalStyles.pwdbarStyle, { backgroundColor: score >= 3 ? '#00847f' : "" }]} /> : <></>}
            {/* <TextComponent style={{ top: actuatedNormalize(13), color: barColor, right: actuatedNormalize(70), fontSize: actuatedNormalize(12), fontFamily: I18nManager.isRTL ? Fonts.universArabicforHSBClight : Fonts.universlTStd }}>{t(label)}</TextComponent> */}
          </View> : null}

        {pwdpolicy === true ?
          <View style={globalStyles.pwdtextContainer}>
            <View style={{ flexDirection: 'row', marginVertical: actuatedNormalize(7), }}>
              <View style={{ width: '7%', top: I18nManager.isRTL ? actuatedNormalize(4) : actuatedNormalize(2)  }}>
                {minLen ? <Check width={actuatedNormalize(18)} height={actuatedNormalize(18)}/> : <Cross width={actuatedNormalize(18)} height={actuatedNormalize(18)}/>}
              </View>
              <View style={{ width: '93%'  }}>
                <TextComponent style={[policystyle , { color:"#000000"}]}>Between 8 - 30 characters</TextComponent>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: actuatedNormalize(7), }}>
              <View style={{ width: '7%', top: I18nManager.isRTL ? actuatedNormalize(4) : actuatedNormalize(2) }}>
                {validate ? <Check width={actuatedNormalize(18)} height={actuatedNormalize(18)}/> : <Cross width={actuatedNormalize(18)} height={actuatedNormalize(18)}/>}
              </View>
              <View style={{ width: '93%' }}>
                <TextComponent style={[policystyle , { color:"#000000" }]}>Only letters, numbers or these characters @ _ . - ? ! $ * = ' can be used.</TextComponent>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: actuatedNormalize(7), }}>
              <View style={{ width: '7%', top: I18nManager.isRTL ? actuatedNormalize(4) : actuatedNormalize(2) }}>
                {combine ? <Check width={actuatedNormalize(18)} height={actuatedNormalize(18)}/> : <Cross width={actuatedNormalize(18)} height={actuatedNormalize(18)}/>}
              </View>
              <View style={{ width: '93%' }}>
                <TextComponent style={[policystyle ,{ color:"#000000" }]}>Must contain at least one letter and one number</TextComponent>
              </View>
            </View>
          </View>
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
})
export default PasswordStrength;