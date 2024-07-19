import React from 'react'
import {
    View,
    I18nManager
} from 'react-native'

// import TextComponent from '../../common/TextComponent'
// import { useTheme } from '../../../theme/ThemeProvider';

// import Fonts from '../../../constants/Fonts';

import { useTranslation } from 'react-i18next'
// import CommonHelper from '../../../constants/CommonHelper'

import { actuatedNormalize } from './PixelScaling';
import CommonHelper from './CommonHelper';
import Fonts from './Fonts';
import TextComponent from '../components/common/TextComponent';
import { useTheme } from '../theme/ThemeProvider';
import { spacingS } from './Size';
// import {
//     actuatedNormalize
//   } from '../../../constants/PixelScaling'

const CommonToAccountDetailComponent = (props) => {

    const { colors } = useTheme()
    const { t } = useTranslation()
    const theme = colors

    return (
        // <View style={[styles.mainContainer,
        // {
        //     // backgroundColor:theme.menuViewBackgroundColor
        // }]}>
        //     <View style={{width:'15%'}}>
        //         <TextComponent style={[styles.fromTextStyle, { color: theme.blackWhite }]}>{t('sadad:To')}</TextComponent>

        //     </View>
        //     <View style={{width:'85%'}}>
        //     <TextComponent style={[styles.fromLabel1, { color: theme.blueWhite }]}>{props?.forOneTimeReview.BillerName || ""}</TextComponent>
        //             <TextComponent style={[styles.fromLabel2, { color: theme.darkLightGray }]}>{props?.forOneTimeReview.BillderID || ""}</TextComponent>
        //             <TextComponent style={[styles.fromLabel2, { color: theme.darkLightGray }]}>{props?.forOneTimeReview.billerAccNo || ""}</TextComponent>
        //             <View style={styles.fromLabelSubContainer}>
        //                 <TextComponent style={[styles.fromLabelAmount, { color: theme.menuTextColor }]}>{CommonHelper.addCommaToNumber(props?.forOneTimeReview.payAmt) || ""}</TextComponent>
        //                 <TextComponent style={[styles.fromLabelCurrency, { color: theme.menuTextColor }]}>{props?.accountCurrency || ""}</TextComponent>
        //             </View>

        //     </View>

        // </View>
<>
<View
style={{
  flex: 1,
  flexDirection: "row",
  marginTop: spacingS,
  marginBottom: actuatedNormalize(8),
  // marginLeft: actuatedNormalize(16),
  // marginRight: actuatedNormalize(16),
  alignItems: "center",
  justifyContent: "center",
  //alignSelf: 'center',
  //backgroundColor: 'blue'
  //marginTop: actuatedNormalize(10),
}}
>
<View
  style={{
    //height: 28,
    flex: 1,
    //backgroundColor: '#b3b1b3',
    //borderRadius: 10,
    justifyContent: "flex-start",
    //alignItems: 'center',
    alignContent: "center",
    //backgroundColor: 'blue',
  }}
>
  <TextComponent
    style={{
      color: theme.menuTextColor,
      fontSize: actuatedNormalize(14),
      textAlign: "left",
      fontFamily: I18nManager.isRTL
        ? Fonts.UniversArabicForHSBC_Bold
        : Fonts.UniversNextforHSBC_Bold,
        textTransform:"capitalize",
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
{/* <View style={styles.optionSubContainer1}>{props.icon}</View> */}
<View style={[styles.optionSubContainer2]}>
    <TextComponent
      style={{
        fontFamily: I18nManager.isRTL
          ? Fonts.UniversArabicForHSBC_Regular
          : Fonts.UniversNextforHSBC_Medium,
        fontSize: actuatedNormalize(14),
        color: theme.menuTextColor,
        textTransform:"capitalize",
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
        fontFamily: I18nManager.isRTL
          ? Fonts.UniversArabicForHSBC_Regular
          : Fonts.UniversNextforHSBC_Regular,
        fontSize: actuatedNormalize(12),
        color: "#767676",
        textTransform:"capitalize"
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
        fontFamily: I18nManager.isRTL
          ? Fonts.UniversArabicForHSBC_Regular
          : Fonts.UniversNextforHSBC_Regular,
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
        fontFamily: I18nManager.isRTL
          ? Fonts.UniversArabicForHSBC_Regular
          : Fonts.UniversNextforHSBC_Regular,
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
    mainContainer:{
        width:'100%',
//     backgroundColor:'white',
//     elevation:5,
//     shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 7,
// },
// shadowOpacity: 0.15,
// shadowRadius: 9.51,
    // paddingHorizontal:actuatedNormalize(15),
    // paddingVertical:actuatedNormalize(18),
    flexDirection:'row',
    borderRadius:actuatedNormalize(5),
    marginTop:actuatedNormalize(20)
    },
    
subContainer1Sub: {
    width: '80%',
    alignItems: 'flex-start'

},
fromLabel1: {
    fontSize: actuatedNormalize(16),
    color: "#263a52",
    fontFamily: I18nManager.isRTL ? Fonts.universArabicforHSBClight : Fonts.universlTStd,
},
fromLabel2: {
    fontSize: actuatedNormalize(14),
    color: "#626469",
    // marginTop: 5,
    marginTop:I18nManager.isRTL? Platform.OS==="ios"? actuatedNormalize(7) : 0 : actuatedNormalize(5),
},
fromLabelSubContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // marginTop: 10,
    marginTop:I18nManager.isRTL? actuatedNormalize(10) : actuatedNormalize(10),

},
fromLabelAmount: {
    fontSize: actuatedNormalize(18),
    color: "#1d262c",
    fontFamily: Fonts.universLTStd_bold
},
fromLabelCurrency: {
    fontSize: actuatedNormalize(11),
    marginLeft: actuatedNormalize(5),
    top: Platform.OS === "ios" ? -1 : -2,
    color: "#1d262c",
    fontFamily: Fonts.universLTStd_light
},
fromTextStyle: {
    fontSize: actuatedNormalize(14),
    color: "#000000",
    opacity: Platform.OS==="ios"? 0.7 : 0.5,
    fontFamily: I18nManager.isRTL ? Fonts.universArabicforHSBCbold : Fonts.universLTStd_bold,
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
    // marginBottom: actuatedNormalizeVertical(7),
    // marginTop: actuatedNormalizeVertical(15),
    borderRadius: actuatedNormalize(8),
    paddingHorizontal: actuatedNormalize(16)
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 8,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 9.51,

    // elevation: 10,
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
    // height: '100%',
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