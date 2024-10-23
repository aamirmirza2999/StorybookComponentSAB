import React from 'react'
import {
    View,
    Image
} from 'react-native'
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { actuatedNormalize } from '../../constants/PixelScaling';
import SvgIconList from '../../constants/SvgIconList';
import { lineHeightXXSmall, fontXXSmall, lineHeightXSmall, fontXSmall, fontMediumLarge, lineHeightMediumLarge, spacingS, fontSmall, lineHeightSmall, spacingXXS, lineHeightSmallMedium, fontSmallMedium, spacingXS, fontMedium, lineHeightMedium, radiusXS, radiusS } from '../../constants/Size';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
import PngLocations from '../../constants/PngLocations';
import ProductCardNestedComponent from './ProductCardNestedComponent';

const SummaryCardComponent = (props) => {

    const { theme } = useTheme();

    return (
        <>
            <View style={[styles.productscardssummary, styles.wrapperFlexBox]}>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Image style={styles.brandsIcon} resizeMode="cover" source={PngLocations.Brands} />
                    <View style={styles.content}>
                        <View style={styles.text}>
                            <View style={styles.wrapperParent}>
                                <View style={styles.wrapper1}>
                                    <TextComponent style={styles.category}>Category</TextComponent>
                                    <TextComponent style={[styles.productName]} numberOfLines={1}>Product Name</TextComponent>
                                </View>
                                <View style={[styles.wrapperGroup, styles.linkButtonFlexBox]}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextComponent style={[styles.text1]}>50.00</TextComponent>
                                        <TextComponent style={[styles.sar, styles.sarFlexBox]}>SAR</TextComponent>
                                        <TextComponent style={[styles.incVat, styles.sarFlexBox]} numberOfLines={1}>(Inc. VAT)</TextComponent>
                                    </View>
                                    {props.ExtraContent ?
                                        <View style={[styles.extraContent, styles.linkButtonFlexBox]}>
                                            <TextComponent style={[styles.expiryDate000000, styles.expiryTypo]}>Expiry date 00/00/00</TextComponent>
                                        </View>
                                        : null}

                                    {props.ExtraContentGreen ?
                                        <View style={[styles.extraContent, styles.linkButtonFlexBox]}>
                                            <TextComponent style={[styles.expiryDate0000001, styles.expiryTypo]}>Expiry date 00/00/00</TextComponent>
                                        </View>
                                        : null}
                                </View>
                            </View>
                        </View>
                        {props.Details ?
                            <View style={[styles.bulletpoints, styles.linkButtonFlexBox]}>
                                <View style={[styles.extraContent, styles.linkButtonFlexBox]}>
                                    <TextComponent style={[styles.detailLine1, styles.detailLine1Typo]}>Detail Line 1</TextComponent>
                                </View>
                                {props.TwodetailLine ?
                                    <View style={[styles.extraContent, styles.linkButtonFlexBox]}>
                                        <TextComponent style={[styles.detailLine1, styles.detailLine1Typo]}>Detail Line 2</TextComponent>
                                    </View>
                                    : null}
                                {props.ThreedetailLine ?
                                    <View style={[styles.extraContent, styles.linkButtonFlexBox]}>
                                        <TextComponent style={[styles.detailLine1, styles.detailLine1Typo]}>Detail Line 3</TextComponent>
                                    </View>
                                    : null}
                                {props.FourdetailLine ?
                                    <View style={[styles.extraContent, styles.linkButtonFlexBox]}>
                                        <TextComponent style={[styles.detailLine1, styles.detailLine1Typo]}>Detail Line 4</TextComponent>
                                    </View>
                                    : null}
                            </View>
                            : null}
                        {props.Link ?
                            <View style={[styles.linkButton, styles.linkButtonFlexBox]}>
                                <View style={[styles.wrapper4, styles.wrapperFlexBox]}>
                                    <TextComponent style={[styles.linkButton1, styles.detailLine1Typo]}>Preview Voucher</TextComponent>
                                </View>
                            </View>
                            : null}
                    </View>
                </View>
                <View style={[styles.addonProductscard, styles.wrapper2FlexBox]}>
                    <ProductCardNestedComponent
                        type={props.type}
                    />
                </View>
            </View>

        </>
    )

}
const styles = {

    wrapperFlexBox: {
        alignItems: "center",
        flexDirection: "row"
    },

    linkButtonFlexBox: {

        alignSelf: "stretch"
    },
    wrapper2FlexBox: {
        alignItems: "flex-end",
        alignSelf: "stretch"
    },
    sarFlexBox: {
        display: "flex",
        alignItems: "flex-end",
        color: "#000",
        fontFamily: "Univers Next for HSBC",
        alignSelf: "stretch"
    },
    expiryTypo: {
        fontFamily: "Univers Next for HSBC",
        textAlign: "left",
        lineHeight: lineHeightSmallMedium,
        fontSize: fontSmallMedium,
        flex: 1
    },
    detailLine1Typo: {
        lineHeight: lineHeightSmall,
        fontSize: fontSmall,
        fontFamily: "Univers Next for HSBC",
        textAlign: "left"
    },
    brandsIcon: {
        borderTopLeftRadius: radiusS,
        borderBottomLeftRadius: radiusS,
        height: "100%",
        width: actuatedNormalize(88),
        alignSelf: "stretch"
    },
    category: {
        fontFamily: "Univers Arabic forHSBC",
        textAlign: "left",
        lineHeight: lineHeightSmallMedium,
        fontSize: fontSmallMedium,
        color: "#767676",
        alignSelf: "stretch"
    },
    productName: {
        color: "#000",
        fontWeight: "700",
        lineHeight: lineHeightMediumLarge,
        fontSize: fontMediumLarge,
        fontFamily: "Univers Next for HSBC",
        alignSelf: "stretch"
    },
    wrapper1: {
        gap: spacingXXS,
        alignSelf: "stretch"
    },
    text1: {
        color: "#000",
        fontWeight: "700",
        lineHeight: lineHeightMediumLarge,
        fontSize: fontMediumLarge,
        fontFamily: "Univers Next for HSBC",
        alignSelf: "stretch",
    },
    amount: {
        backgroundColor: 'black',
        height: actuatedNormalize(18)
    },
    sar: {
        fontSize: fontXSmall,
        lineHeight: lineHeightXSmall,
        textAlign: "center",
        width: actuatedNormalize(23),
        justifyContent: "center"
    },

    incVat: {
        fontSize: fontXXSmall,
        lineHeight: lineHeightXXSmall,
        left: actuatedNormalize(5)


    },
    wrapper2: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    expiryDate000000: {
        color: "#767676"
    },
    extraContent: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    expiryDate0000001: {
        color: "#00847f"
    },
    wrapperGroup: {
        gap: spacingXXS
    },
    wrapperParent: {
        gap: spacingXS,
        justifyContent: "center",
        alignSelf: "stretch"
    },
    text: {
        justifyContent: "center",
        alignSelf: "stretch"
    },
    detailLine1: {
        color: "#767676",
        flex: 1
    },
    bulletpoints: {
        height: actuatedNormalize(76),
        gap: spacingXXS
    },
    linkButton1: {
        color: "#db0011"
    },
    wrapper4: {
        flex: 1
    },
    linkButton: {
        alignItems: "center",
        flexDirection: "row"
    },
    content: {
        paddingLeft: spacingS,
        paddingTop: spacingS,
        paddingRight: spacingXS,
        paddingBottom: spacingS,
        gap: spacingS,
        justifyContent: "center",
        alignSelf: "stretch",
        flex: 1
    },
    wrapper: {
        alignSelf: "stretch",
        flex: 1
    },
    linkButtonIcon: {
        width: actuatedNormalize(24),
        height: actuatedNormalize(24)
    },
    addonProductscard: {
        width: actuatedNormalize(104),
        padding: spacingS
    },
    productscardssummary: {
        borderRadius: radiusS,
        backgroundColor: "#f2f3f4",
        width: "100%",
        justifyContent: "flex-end",
        flex: 1
    }
}
export default SummaryCardComponent