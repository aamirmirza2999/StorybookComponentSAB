import {I18nManager, StyleSheet, Text, TouchableOpacity,Platform, View,Animated,Easing,KeyboardAvoidingView} from 'react-native';
import React, { useState, useEffect } from 'react'
import {actuatedNormalize} from '../../constants/PixelScaling';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import PrimaryButton from './PrimaryButton';
import { spacingS } from '../../constants/Size';

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
            style={{
              height: "auto",
              backgroundColor: "#263a52",
              borderTopLeftRadius:actuatedNormalize(8),
              borderTopRightRadius: actuatedNormalize(8),
             // position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              transform: [{
                translateY:
                    bottomViewAnimation.bounceValue,
            }],
            opacity: bottomViewAnimation.opacityValue, 
            }}
          >
            <View
              style={{
                marginTop: actuatedNormalize(20),
                height: actuatedNormalize(30),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginLeft: spacingS,
                  marginRight: spacingS,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    height: actuatedNormalize(25),
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <TextComponent
                    style={{
                      fontFamily: I18nManager.isRTL
                      ? Fonts.Regular_Ar
                      : Fonts.Regular_En,
                      fontSize: actuatedNormalize(14),
                      color: "#ffffff",
                    }}
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
                        fontFamily: I18nManager.isRTL ? Fonts.Bold_Ar : Fonts.Bold_En,
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
                        fontFamily: I18nManager.isRTL
                        ? Fonts.Regular_Ar
                        : Fonts.Regular_En,
                        fontSize: actuatedNormalize(12),
                        color: "#ffffff",
                      }}
                    >
                     SAR
                    </TextComponent>
                  </View>
                ) : (
                  <View
                    style={{
                      marginLeft: spacingS,
                      flex: 1,
                      height: actuatedNormalize(25),
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <TextComponent
                      style={{
                        fontFamily: I18nManager.isRTL ? Fonts.Bold_Ar : Fonts.Bold_En,
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
                              ? actuatedNormalize(4)
                              : actuatedNormalize(2),
                          },
                        }),
                         marginLeft: actuatedNormalize(3.5),
                        fontFamily: I18nManager.isRTL
                        ? Fonts.Regular_Ar
                        : Fonts.Regular_En,
                        fontSize: actuatedNormalize(12),
                        color: "#ffffff",
                      }}
                    >
                      SAR
                    </TextComponent>
                  </View>
                )}
              </View>
            </View>
          
                <View
                  style={{
                    marginLeft: actuatedNormalize(15),
                    marginRight: actuatedNormalize(15),
                    height: 2,
                    backgroundColor: "rgba(179,177,179,0.2)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></View>

                <View
                  style={{
                    width: "100%",
                    height: actuatedNormalize(40),
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      marginTop: actuatedNormalize(10),
                      marginLeft: spacingS,
                      marginRight: spacingS,
                    }}
                  >
                    <View
                      style={{
                       
                        alignItems: "flex-start",
                      }}
                    >
                                
                      <TextComponent>
                        <TextComponent
                          style={{
                            color: "white",
                            lineHeight: actuatedNormalize(16),
                            fontSize: actuatedNormalize(12),
                            fontFamily: I18nManager.isRTL
                            ? Fonts.Regular_Ar
                            : Fonts.Regular_En,
                          }}
                        >
                         {props.limitamount1}
                        </TextComponent>
                        <TextComponent
                          style={{
                            color: "white",
                            lineHeight: actuatedNormalize(16),
                            fontSize: actuatedNormalize(12),
                            fontFamily: I18nManager.isRTL
                            ? Fonts.Regular_Ar
                            : Fonts.Regular_En,
                          }}
                        >
                          {" "}
                          SAR
                        </TextComponent>
                        <TextComponent
                          style={{
                            color: "white",
                            lineHeight: actuatedNormalize(16),
                            fontSize: actuatedNormalize(12),
                            fontFamily: I18nManager.isRTL
                            ? Fonts.Regular_Ar
                            : Fonts.Regular_En,
                          }}
                        >
                          {" "}
                         left Of
                        </TextComponent>
                        <TextComponent
                          style={{
                            color: "white",
                            lineHeight: actuatedNormalize(16),
                            fontSize: actuatedNormalize(12),
                            fontFamily: I18nManager.isRTL
                            ? Fonts.Regular_Ar
                            : Fonts.Regular_En,
                          }}
                        >
                          {" "}
                          {props.limitamount2}
                        </TextComponent>
                        <TextComponent
                          style={{
                            color: "white",
                            lineHeight: actuatedNormalize(16),
                            fontSize: actuatedNormalize(12),
                            fontFamily: I18nManager.isRTL
                            ? Fonts.Regular_Ar
                            : Fonts.Regular_En,
                          }}
                        >
                          {" "}
                          {
                           "SAR"
                          }
                        </TextComponent>
                        <TextComponent
                          style={{
                            color: "white",
                            lineHeight: actuatedNormalize(16),
                            fontSize: actuatedNormalize(12),
                            fontFamily: I18nManager.isRTL
                            ? Fonts.Regular_Ar
                            : Fonts.Regular_En,
                          }}
                        >
                          {" "}
                        Payment Limit
                        </TextComponent>
                      </TextComponent>
  
                    </View>
                  </View>
                </View>
              
           
              <View style={{ paddingHorizontal: spacingS, paddingBottom: actuatedNormalize(27) , marginTop:actuatedNormalize(15) }}>
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


const styles = StyleSheet.create({
    TotalAmountMainContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: actuatedNormalize(20),
        backgroundColor: "#263a52",
        paddingTop: actuatedNormalize(23),
        borderTopLeftRadius:actuatedNormalize(8),
        borderTopRightRadius: actuatedNormalize(8),
        //paddingBottom: actuatedNormalize(20)

    },
    totalAmountContent1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(179,177,179,0.25)",
        paddingBottom:  actuatedNormalize(14),
        alignItems: 'baseline'
    },
    totalAmountLabelSty: {
        fontSize: actuatedNormalize(16),
        color: "#ffffff",
        lineHeight:actuatedNormalize(24),
        fontFamily: I18nManager.isRTL ? Fonts.universArabicforHSBClight : Fonts.universlTStd,
    },
    amountSty: {
        fontSize: actuatedNormalize(16), color: "#ffffff",
        fontFamily: Fonts.universLTStd_bold,

    },
    currencySty: {
        fontSize: actuatedNormalize(12), color: "#ffffff",
        fontFamily: Fonts.universLTStd_light,
        // top: Platform.OS === "ios" ? 0 :
        //     I18nManager.isRTL ? -4 : -4
    },
    totalAmountContent2: {
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingTop: actuatedNormalize(10),

    },

    bottomOptionContainer: {
        height: actuatedNormalize(56),
       

    },

    // buttonContainer: {
    //     alignItems: 'center',
    //     height: actuatedNormalize(56),
    //     justifyContent: 'center'
    // },
    buttonTxt: {
       
        fontSize: actuatedNormalize(16),
        fontFamily: I18nManager.isRTL ? Fonts.universArabicforHSBClight : Fonts.universlTStd,
        color: "#ffffff",
        ...Platform.select({
            ios: {
                marginTop: I18nManager.isRTL ? -actuatedNormalize(10) : 0
            },
            android: {
                marginTop: I18nManager.isRTL ? -actuatedNormalize(5) : 0
            }
        }),
    },
    limitTextSty:{
        color: "#ffffff",
        fontSize:actuatedNormalize(12)
    }
})
