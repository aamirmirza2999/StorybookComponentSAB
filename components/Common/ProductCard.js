import React from 'react'
import {
    View,
    ImageBackground
} from 'react-native'
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { actuatedNormalize } from '../../constants/PixelScaling';
import SvgIconList from '../../constants/SvgIconList';
import { spacingS, fontSmall, lineHeightSmall, spacingXXS, lineHeightSmallMedium, fontSmallMedium, spacingXS, fontMedium, lineHeightMedium, radiusXS, radiusS } from '../../constants/Size';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';
import PngLocations from '../../constants/PngLocations';

const ProductCard = (props) => {

    const { theme } = useTheme();

    return (
        <>
            <View style={[styles.imageSizesmall,]}>
                <ImageBackground style={[styles.merchantIcon, { height: props.type === "Small" ? 108 : 164, }]} resizeMode="cover" source={PngLocations.ProductImage}>
                    {props.ChipInfo ?
                        <View style={{ alignItems: 'flex-end' }}>
                            <View style={styles.chipsinfoWrapper}>

                                <TextComponent style={styles.label}>{props.ChipInfoText}</TextComponent>

                            </View>
                        </View>
                        : null}
                    {props.Icon ?
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <SvgIconList
                                icon="Gift"
                                width={actuatedNormalize(48)}
                                height={actuatedNormalize(48)}
                            />
                        </View>
                        : null}
                </ImageBackground>
                <View style={styles.content}>
                    <View style={styles.textParent}>
                        <View style={styles.text}>
                            <TextComponent style={styles.category}>{props.CategoryText}</TextComponent>
                            <TextComponent style={styles.productName}>{props.ProductText}</TextComponent>
                        </View>
                        {props.type === 'Small' && props.ExtraContent ?
                            <TextComponent style={styles.extraContent}>{props.ExtraContentText}</TextComponent>
                            : null}
                    </View>
                    {props.type === 'Small' && props.Amount ?
                        <View style={styles.amount}>
                            <TextComponent style={[styles.startingFrom, styles.sarTypo]}>Starting from</TextComponent>
                            <TextComponent style={[styles.sar, styles.sarTypo]}>{props.Amount}</TextComponent>
                        </View>

                        : null}
                </View>
            </View>


        </>
    )

}
const styles = {

    sarTypo: {
        textAlign: "center",
        fontFamily: Fonts.HSBC
    },
    label: {
        textAlign: "right",
        color: "#000",
        lineHeight: lineHeightMedium,
        fontSize: fontMedium,
        fontFamily: Fonts.HSBC
    },

    chipsinfoWrapper: {
        alignItems: "center",
        justifyContent: 'center',
        width: actuatedNormalize(79),
        height: actuatedNormalize(22),
        borderTopLeftRadius: radiusXS,
        borderBottomLeftRadius: radiusXS,
        backgroundColor: "#f9f2f3",
        borderStyle: "solid",
        borderColor: "#e5b2b5",
        borderWidth: 0.5,
        paddingVertical: 2,
    },

    merchantIcon: {
        borderRadius: radiusS,
        width: "100%",
        paddingHorizontal: 0,
        paddingVertical: spacingXS,
        opacity: 0.9,
    },
    category: {
        fontSize: fontSmallMedium,
        lineHeight: lineHeightSmallMedium,
        fontFamily: Fonts.HSBC,
        color: "#767676",
        textAlign: "left",

    },
    productName: {
        textAlign: "left",
        fontFamily: Fonts.HSBC,
        fontWeight: "700",
        color: "#000",
        lineHeight: lineHeightMedium,
        fontSize: fontMedium
    },
    text: {
        gap: spacingXXS,
        justifyContent: "center"
    },
    extraContent: {
        width: actuatedNormalize(140),
        textAlign: "left",
        color: "#767676",
        fontFamily: Fonts.HSBC,
        alignItems: "center",
        lineHeight: lineHeightSmall,
        fontSize: fontSmall
    },
    textParent: {
        gap: spacingXS
    },
    startingFrom: {
        color: "rgba(118, 118, 118, 0.6)",
        lineHeight: lineHeightSmall,
        fontSize: fontSmall
    },
    sar: {
        fontWeight: "700",
        color: "#000",
        lineHeight: lineHeightMedium,
        fontSize: fontMedium
    },
    amount: {
        justifyContent: "center"
    },
    content: {
        alignSelf: "stretch",
        paddingVertical: spacingS,
        gap: spacingS,
        paddingHorizontal: spacingXS,
        justifyContent: "center"
    },
    imageSizesmall: {
        borderRadius: radiusS,
        backgroundColor: "#f2f3f4",
        overflow: "hidden",
        alignItems: "center",
        width: "50%"
    }
}
export default ProductCard