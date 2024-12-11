
import { I18nManager, Dimensions, Platform } from "react-native";


import {
  spacingXXS, spacingXS, spacingS, spacingM, spacingL, spacingXL, fontXSmall, fontSmall, fontSmallMedium, fontMedium, fontMediumLarge, fontLarge, fontXLarge, fontXXLG, lineHeightXSmall, lineHeightSmall, lineHeightSmallMedium,
  radiusXS, radiusS, radiusL, avatarHeight, avatarRightandLeft, lineHeightXXSmall, fontXXSmall, lineHeightMedium, lineHeightMediumLarge, lineHeightLarge, fontWeightBold, sizeXL,
  fontWeightRegular,
} from "../constants/Size";
import Fonts from "../constants/Fonts";
import { actuatedNormalize } from "../constants/PixelScaling";


const deviceHeight = Dimensions.get('window').height;

export const GlobalStyleComponentLevel = {
blockname: {
    fontSize: fontMediumLarge,
    lineHeight: lineHeightMediumLarge,
    fontWeight: fontWeightRegular,
    fontFamily: Fonts.HSBC,
    textAlign: "left",
    display: "flex",
    width:  (108),
    overflow: "hidden"
  },
  blockSubName: {
    fontSize: fontSmall,
    lineHeight: lineHeightSmall,
    fontWeight: fontWeightRegular,
    fontFamily: Fonts.HSBC,
    textAlign: "left",
    display: "flex",
    width:  (108),
    overflow: "hidden"
  },
  primaryTextLarge: {
    textAlign: "center",
    fontWeight: fontWeightBold,
    lineHeight: lineHeightMediumLarge,
    fontSize: fontMediumLarge,
    fontFamily: Fonts.HSBC,
  },

};