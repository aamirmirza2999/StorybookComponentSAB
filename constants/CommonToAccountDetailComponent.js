import React from 'react'
import {
  View,
  I18nManager
} from 'react-native'


import { useTranslation } from 'react-i18next'


import { actuatedNormalize } from './PixelScaling';
import CommonHelper from './CommonHelper';
import Fonts from './Fonts';
import TextComponent from '../components/common/TextComponent';
import { useTheme } from '../theme/ThemeProvider';
import { spacingS } from './Size';


const CommonToAccountDetailComponent = (props) => {

  const { colors } = useTheme()
  const { t } = useTranslation()
  const theme = colors

  return (

    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: spacingS,
          marginBottom: actuatedNormalize(8),

          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <View
          style={{

            flex: 1,

            justifyContent: "flex-start",

            alignContent: "center",

          }}
        >
          <TextComponent
            style={{
              color: theme.menuTextColor,
              fontSize: actuatedNormalize(14),
              textAlign: "left",
              fontFamily: Fonts.Bold,
              textTransform: "capitalize",
            }}
          >
            {t('sadad:To')}
          </TextComponent>
        </View>
      </View>
      <View>

        <View
          testID="FormAcccountOption"
          accessibilityLabel="FormAcccountOption"
          activeOpacity={0.6}
          style={[
            styles.optionHorizontal,
            { backgroundColor: theme.menuViewBackgroundColor },
            props.optionHorizontalReview,
          ]}
        >

          <View style={[styles.optionSubContainer2]}>
            <TextComponent
              style={{
                fontFamily: Fonts.Regular,
                fontSize: actuatedNormalize(14),
                color: theme.menuTextColor,
                textTransform: "capitalize",
                fontWeight: Platform.OS === "ios" ? null : '600',
              }}
            >
              {props?.forOneTimeReview.BillerName || ""}
            </TextComponent>
            <View style={{
              flexDirection: "row", alignItems: "center",
              marginTop: I18nManager.isRTL
                ? Platform.OS === "ios" ? actuatedNormalize(7) : actuatedNormalize(7)
                : Platform.OS === "ios" ? actuatedNormalize(7) : actuatedNormalize(7)
            }}>
              <TextComponent style={{
                fontFamily: Fonts.Regular,
                fontSize: actuatedNormalize(12),
                color: "#767676",
                textTransform: "capitalize"
              }}>
                {props?.forOneTimeReview.BillderID || ""}

              </TextComponent>
            </View>

            <View style={{
              flexDirection: "row", alignItems: "center",
              marginTop: I18nManager.isRTL
                ? Platform.OS === "ios" ? actuatedNormalize(7) : actuatedNormalize(7)
                : Platform.OS === "ios" ? actuatedNormalize(7) : actuatedNormalize(7)
            }}>
              <TextComponent style={{
                fontFamily: Fonts.Regular,
                fontSize: actuatedNormalize(12),
                color: "#767676",
                //   textTransform:"capitalize"
              }}>
                {props?.forOneTimeReview.billerAccNo || ""}

              </TextComponent>
            </View>

            <View style={{
              flexDirection: "row", alignItems: "center",
              marginTop: I18nManager.isRTL
                ? Platform.OS === "ios" ? actuatedNormalize(7) : actuatedNormalize(7)
                : Platform.OS === "ios" ? actuatedNormalize(7) : actuatedNormalize(7)
            }}>
              <TextComponent style={{
                fontFamily: Fonts.Regular,
                fontSize: actuatedNormalize(12),
                color: "#767676",
                //   textTransform:"capitalize"
              }}>
                {CommonHelper.addCommaToNumber(props?.forOneTimeReview.payAmt) || ""} {props?.accountCurrency || ""}

              </TextComponent>
            </View>
          </View>

          <View style={styles.optionSubContainer3}>
          </View>

        </View>
      </View>
    </>
  )
}



const styles = {
  mainContainer: {
    width: '100%',

    flexDirection: 'row',
    borderRadius: actuatedNormalize(5),
    marginTop: actuatedNormalize(20)
  },

  subContainer1Sub: {
    width: '80%',
    alignItems: 'flex-start'

  },
  fromLabel1: {
    fontSize: actuatedNormalize(16),
    color: "#263a52",
    fontFamily: Fonts.Regular,
  },
  fromLabel2: {
    fontSize: actuatedNormalize(14),
    color: "#626469",
    // marginTop: 5,
    marginTop: I18nManager.isRTL ? Platform.OS === "ios" ? actuatedNormalize(7) : 0 : actuatedNormalize(5),
  },
  fromLabelSubContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // marginTop: 10,
    marginTop: I18nManager.isRTL ? actuatedNormalize(10) : actuatedNormalize(10),

  },
  fromLabelAmount: {
    fontSize: actuatedNormalize(18),
    color: "#1d262c",
    fontFamily: Fonts.Bold
  },
  fromLabelCurrency: {
    fontSize: actuatedNormalize(11),
    marginLeft: actuatedNormalize(5),
    top: Platform.OS === "ios" ? -1 : -2,
    color: "#1d262c",
    fontFamily: Fonts.Light
  },
  fromTextStyle: {
    fontSize: actuatedNormalize(14),
    color: "#000000",
    opacity: Platform.OS === "ios" ? 0.7 : 0.5,
    fontFamily: Fonts.Bold,
  },
  optionHorizontal: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingTop: Platform.OS === "ios" ? actuatedNormalize(16) :
      I18nManager.isRTL ? actuatedNormalize(16) : actuatedNormalize(16),
    paddingBottom: Platform.OS === "ios" ? actuatedNormalize(16) :
      I18nManager.isRTL ? actuatedNormalize(16) : actuatedNormalize(16),
    paddingLeft: actuatedNormalize(16),
    paddingRight: actuatedNormalize(5),

    borderRadius: actuatedNormalize(8),
    paddingHorizontal: actuatedNormalize(16)

  },
  optionSubContainer1: {
    width: '12%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: actuatedNormalize(13),

  },
  optionSubContainer2: {
    width: '85%',

    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  optionSubContainer3: {
    width: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

}


export default CommonToAccountDetailComponent