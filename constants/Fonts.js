// export default {
//     UniversNextforHSBC_Medium: 'UniversNextforHSBC-Medium',
//     UniversNextforHSBC_Light: 'UniversNextforHSBC-Light',
//     UniversNextforHSBC_Bold: 'UniversNextforHSBC-Bold',
//     UniversNextforHSBC_Regular: 'UniversNextforHSBC-Regular',
//     UniversNextforHSBC_Thin: 'UniversNextforHSBC-Thin',
//     UniversNextforHSBC_BoldTwo: 'UniversNextforHSBC-BoldTwo',
//     UniversArabicForHSBC_Light: 'Univers Arabic forHSBC Light',
//     UniversArabicForHSBC_Bold: 'Univers Arabic forHSBC Bold',
//     UniversArabicForHSBC_Regular: 'Univers Arabic forHSBC',
//     UniversArabicForHSBC_Thin: 'Univers Arabic forHSBC Thin',
// };
import { I18nManager } from "react-native";
export default {
    // UniversNextforHSBC_Medium: 'UniversNextforHSBC-Medium',
    Light_En: 'UniversNextforHSBC-Light',
    Bold_En: 'UniversNextforHSBC-Bold',
    Regular_En: 'UniversNextforHSBC-Regular',
    Medium_En: 'UniversNextforHSBC-Medium',
    Light_Ar: 'Univers Arabic forHSBC Light',
    Bold_Ar: 'Univers Arabic forHSBC Bold',
    Regular_Ar: 'Univers Arabic forHSBC',
    Thin_Ar: 'Univers Arabic forHSBC Thin',
    Light : I18nManager.isRTL? 'Univers Arabic forHSBC Light' : 'UniversNextforHSBC-Light',
    Regular : I18nManager.isRTL? 'Univers Arabic forHSBC' : 'UniversNextforHSBC-Regular',
    Bold : I18nManager.isRTL? 'Univers Arabic forHSBC Bold' : 'UniversNextforHSBC-Bold',
};

//reglar_en
//medium
//bold
