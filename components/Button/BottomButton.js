import {I18nManager, StyleSheet, Text, TouchableOpacity,Platform, View,Animated,Easing,KeyboardAvoidingView} from 'react-native';
import React, { useState, useEffect } from 'react'
import {actuatedNormalize} from '../../constants/PixelScaling';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import PrimaryButton from './PrimaryButton';
import { spacingS } from '../../constants/Size';
import { globalStyles } from '../../constants/GlobalStyles';
const BottomButton = props => {
  console.log("props>>>>",props)
  const { theme, toggleTheme } = useTheme();
  const [bottomViewAnimation] = useState({
    bounceValue: new Animated.Value(100),
    opacityValue: new Animated.Value(0)
})
const showHideController = () => {

    var toValue = 100;
    var opacityValue = 0

    if (props.show) {
        toValue = 0
        opacityValue = 1
    }

    Animated.parallel([
        Animated.timing(
            bottomViewAnimation.bounceValue,
            {
                toValue: toValue,
                duration: 200,
                useNativeDriver: true
            }
        ),
        Animated.timing(bottomViewAnimation.opacityValue, {
            toValue: opacityValue,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: true
        })]).start();
}

useEffect(() => {
    showHideController()
}, [props.show])

const CurrencyFormatted = (num) => {
    const dec = num.split('.')[1]
    const len = dec && dec.length > 2 ? dec.length : 2
    return CommaFormatted(Number(num).toFixed(len));
    return Number(num).toFixed(len)
}


const CommaFormatted = (amount) => {
    var delimiter = ","; // replace comma if desired
    var a = amount.split('.', 2)
    var d = a[1];
    var i = parseInt(a[0]);
    if (isNaN(i)) { return ''; }
    var minus = '';
    if (i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while (n.length > 3) {
        var nn = n.substr(n.length - 3);
        a.unshift(nn);
        n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    if (d.length < 1) { amount = n; }
    else { amount = n + '.' + d; }
    amount = minus + amount;
    return amount;
}

const number = 10000.00

const addCommaToNumber = (data) => {
    if (!data) {
      if (data === 0) {
        return `${data}${".00"}`;
      }
      return "";
    }
    let num = data.toString();

    const dec = num.split(".")[1];
    const len = dec && dec.length > 2 ? dec.length : 2;
    let amount = Number(num).toFixed(len);

    var delimiter = ","; // replace comma if desired
    var a = amount.split(".", 2);
    var d = a[1];
    var i = parseInt(a[0]);
    if (isNaN(i)) {
      return "";
    }
    var minus = "";
    if (i < 0) {
      minus = "-";
    }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while (n.length > 3) {
      var nn = n.substr(n.length - 3);
      a.unshift(nn);
      n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) {
      a.unshift(n);
    }
    n = a.join(delimiter);
    if (d.length < 1) {
      amount = n;
    } else {
      amount = n + "." + d;
    }
    amount = minus + amount;
    return amount;
  }


  let Component = TouchableOpacity;
  return (
    <>
        
        <KeyboardAvoidingView
          keyboardVerticalOffset={actuatedNormalize(-2)}
          behavior={Platform.OS === "ios" ? null : null}
          
        >
          <Animated.View
            style={[globalStyles.animatedview]}
          >
            <View
              style={[globalStyles.overalldesign]}
            >
              <View
                style={[globalStyles.firstview]}
              >
                <View
                  style={[globalStyles.overview]}
                >
                  <TextComponent
                    style={[globalStyles.totalamount,{color:theme.primarycolor4}]}
                  >
                   Total Amount
                  </TextComponent>
                </View>
                {I18nManager.isRTL ? (
                  <View
                    style={{
                      marginLeft: actuatedNormalize(15),
                      flex: 1,
                      height: actuatedNormalize(30),
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                 
                    <TextComponent
                      style={{
                        fontFamily: Fonts.Bold ,
                        fontSize: actuatedNormalize(16),
                        color: "#ffffff",
                        lineHeight:actuatedNormalize(24)
                      }}
                    >
                     {props.TotalAmount}
                    </TextComponent>
                    <TextComponent
                      style={{
                        ...Platform.select({
                          ios: {
                            top: I18nManager.isRTL
                              ? actuatedNormalize(1)
                              : actuatedNormalize(2),
                          },
                          android: {
                            top: I18nManager.isRTL
                              ? actuatedNormalize(3)
                              : actuatedNormalize(3),
                          },
                        }),
                        marginLeft: actuatedNormalize(3.5),
                        fontFamily: Fonts.Regular,
                        fontSize: actuatedNormalize(12),
                        color: "#ffffff",
                      }}
                    >
                     SAR
                    </TextComponent>
                  </View>
                ) : (
                  <View
                    style={[globalStyles.amount,{color:theme.primarycolor4}]}
                  >
                    <TextComponent
                      style={[globalStyles.totalamt,{color:theme.primarycolor4}]}
                    >
                     {props.TotalAmount}
                    </TextComponent>
                    <TextComponent
                      style={[globalStyles.sartext,{color:theme.primarycolor4}]}
                    >
                      SAR
                    </TextComponent>
                  </View>
                )}
              </View>
            </View>
          
                <View
                  style={[globalStyles.divider]}
                ></View>
                <View
                    style={[globalStyles.text]}
                  >
                  <View
                    style={[globalStyles.textview]}
                  >
                    <View
                      style={{
                       
                        alignItems: "flex-start",

                      }}
                    >
                                
                      <TextComponent>
                        <TextComponent
                          style={[globalStyles.bottombtntext ,{color:theme.primarycolor4}]}
                        >
                         {props.limitamount1} SAR left Of {props.limitamount2} SAR Payment Limit
                        </TextComponent>
                        {/* <TextComponent
                          style={[globalStyles.bottombtntext ,{color:theme.primarycolor4}]}
                        >
                          {" "}
                          SAR
                        </TextComponent>
                        <TextComponent
                          style={[globalStyles.bottombtntext ,{color:theme.primarycolor4}]}
                        >
                          {" "}
                         left Of
                        </TextComponent>
                        <TextComponent
                          style={[globalStyles.bottombtntext ,{color:theme.primarycolor4}]}
                        >
                          {" "}
                          {props.limitamount2}
                        </TextComponent>
                        <TextComponent
                          style={[globalStyles.bottombtntext ,{color:theme.primarycolor4}]}
                        >
                          {" "}
                          {
                           "SAR"
                          }
                        </TextComponent>
                        <TextComponent
                          style={[globalStyles.bottombtntext ,{color:theme.primarycolor4}]}
                        >
                          {" "}
                        Payment Limit
                        </TextComponent> */}
                      </TextComponent>
  
                    </View>
                  </View>
              </View>
           
              <View style={[globalStyles.bottombtn]}>
                <PrimaryButton
                   onPress={props.onPress}
                   textColor={'white'}
                   PrimaryButtonBgClr={theme.primaryredstatic}
                   label={props.label}
                />

              </View>


          </Animated.View>
       
        </KeyboardAvoidingView>
       

    </>
)
};

export default BottomButton;



