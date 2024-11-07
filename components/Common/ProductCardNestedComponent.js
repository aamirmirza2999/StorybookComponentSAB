import React from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { actuatedNormalize } from '../../constants/PixelScaling';
import SvgIconList from '../../constants/SvgIconList';
import { fontXSmall, fontMedium, lineHeightXSmall, lineHeightMedium } from '../../constants/Size';
import TextComponent from './TextComponent';
import Fonts from '../../constants/Fonts';


const ProductCardNestedComponent = (props) => {

    const {theme} = useTheme();

    return (
        <View style={[styles.MainView, {
           
        }, props.MainViewStyles]}>


            <View style={{ top: props.top }}>
                <View style={styles.typeamountAndQuantity}>
                    {props.type === "Share" ?
                        <TouchableOpacity
                            style={styles.IconStyle}
                            onPress={props.ShareonPress}
                        >
                            <SvgIconList
                                icon="Share"
                                width={actuatedNormalize(24)}
                                height={actuatedNormalize(24)}
                            />
                        </TouchableOpacity>
                        : null}

                    {props.type === "Amount" || props.type === "Amount and Quantity" ?
                        <View>
                            <TextComponent style={[styles.text, styles.sarTypo, { color: theme.primarycolor }]}>{props.Amount}</TextComponent>
                            <TextComponent style={[styles.sar, styles.sarTypo, { color: theme.primarycolor }]}>{props.Currency}</TextComponent>
                        </View>
                        : null}

                    {props.type === "Delete" || props.type === "Delete and Quantity" ?

                        <TouchableOpacity
                            style={[styles.IconStyle, { left: actuatedNormalize(32) }]}
                            onPress={props.DeleteOnpress}
                        >
                            <SvgIconList
                                icon="Delete"
                                width={actuatedNormalize(24)}
                                height={actuatedNormalize(24)}
                            />
                        </TouchableOpacity>
                        : null}

                    {props.type === "Quantity" || props.type === "Amount and Quantity" || props.type === "Delete and Quantity" ?
                        <View>
                            <View style={styles.addonreviewbuttongroup}>
                                <TouchableOpacity style={styles.buttonLinkIcon}
                                    onPress={props.MinusOnpress}>
                                    <SvgIconList
                                        icon="Minus"
                                        width={actuatedNormalize(24)}
                                        height={actuatedNormalize(24)}
                                    />
                                </TouchableOpacity>

                                <View style={[styles.pininputcell, styles.pininputcellLayout]}>
                                    <TextComponent style={styles.Quantitytext}>1</TextComponent>
                                </View>
                                <TouchableOpacity style={styles.buttonLinkIcon}
                                    onPress={props.PlusOnpress}>
                                    <SvgIconList
                                        icon="Plus"
                                        width={actuatedNormalize(24)}
                                        height={actuatedNormalize(24)}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View> : null}

                    {props.type === "Confirmation Status" ?
                        <TouchableOpacity
                            style={styles.IconStyle}
                            onPress={props.ShareonPress}
                        >
                            <SvgIconList
                                icon="Check"
                                width={actuatedNormalize(24)}
                                height={actuatedNormalize(24)}
                            />
                        </TouchableOpacity>
                        : null}
                </View>
            </View>
        </View>
    )

}
const styles = {

    MainView: {
        
    },

    // Share ---------------
    IconStyle: {
        height: actuatedNormalize(24),
        width: actuatedNormalize(24),
        alignItems: "center",
        justifyContent: "center",
    },

    //Ammount ----------------
    sarTypo: {
        textAlign: "center",
        color: "#000",
        fontFamily: Fonts.HSBC
    },
    text: {
        fontSize: fontMedium,
        lineHeight: lineHeightMedium,
        fontWeight: "700"
    },
    sar: {
        fontSize: fontXSmall,
        lineHeight: lineHeightXSmall
    },

    //Quatity ------------------
    pininputcellFlexBox: {
        justifyContent: "center",
        alignItems: "center"
    },
    pininputcellLayout: {
        height: actuatedNormalize(24),
        width: actuatedNormalize(24)
    },
    buttonLinkIcon: {
        borderRadius: 20,
        backgroundColor: "#FFFFFF"
    },
    Quantitytext: {
        fontSize: fontMedium,
        lineHeight: lineHeightMedium,
        fontWeight: "700",
        fontFamily: Fonts.HSBC,
        color: "#767676",
        textAlign: "center"
    },
    pininputcell: {
        borderRadius: 8,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    addonreviewbuttongroup: {
        flexDirection: "row",
        gap: 8,
    },

    //Amount and Quantity--------------------
    typeamountAndQuantity: {

        height: 74,
        justifyContent: "space-between",
        paddingHorizontal: 8,
        paddingVertical: 0,
        alignItems: "center"
    }


}
export default ProductCardNestedComponent
