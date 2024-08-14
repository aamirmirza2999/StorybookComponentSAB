import React from 'react'
import {
    View,
    I18nManager,
    Pressable,
    StyleSheet,
    Image
} from 'react-native'
import { actuatedNormalize, isTab } from '../../constants/PixelScaling';
import TextComponent from './TextComponent';
import { globalStyles } from '../../constants/GlobalStyles';
import SvgIconList from '../../constants/SvgIconList';
import Divider from './Divider';

const ListComponent = (props) => {

    return (
        <Pressable
            onPress={props.onPress}
        >

            <View style={styles.typeinline}>

                <View style={styles.wrapperFlexBox}>
                    {props.IconFirst ?
                        <SvgIconList
                            icon={props.IconFirst}
                            width={props.IconFirstwidth}
                            height={props.IconFirstheight}
                            transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                        />
                        : null}
                    <View style={styles.stackedlistitembody}>
                        <TextComponent style={styles.Header}>{props.Header}</TextComponent>
                        <TextComponent style={[styles.SubText, styles.labelTypo]}>{props.SubText}</TextComponent>
                    </View>
                    <View style={[styles.wrapper1, styles.wrapperFlexBox]}>
                        <View>

                            {props.SubcomponentItem ? props.SubcomponentItem : null}

                        </View>
                        {props.IconSecond ?
                            <SvgIconList
                                icon={props.IconSecond}
                                width={props.IconSecondwidth}
                                height={props.IconSecondheight}
                                transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                            />
                            : null}
                    </View>
                </View>

                <Divider />


            </View>
        </Pressable>
    )

}
const styles = StyleSheet.create({
    wrapperFlexBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
    },
    linkClr: {
        color: "#000",
        //fontFamily: "Univers Next for HSBC"
    },
    iconoutlineinfo: {
        width: 24,
        height: 24
    },
    link: {
        fontSize: 14,
        lineHeight: 18,
        textAlign: "left",
        marginLeft: 8,
        flex: 1
    },
    text: {
        fontSize: 12,
        lineHeight: 17,
        textAlign: "center",
        width: 19,
        height: 19
    },
    badgenotification: {
        borderRadius: 100,
        backgroundColor: "#ffbb33",
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    listitemactionsIcon: {
        width: 18,
        height: 18,
        marginLeft: 8
    },
    wrapper1: {
        alignItems: "center",

    },
    inlinelistitem: {
        alignSelf: "stretch"
    },
    inlinelistitemmenu: {
        justifyContent: "center",
        alignSelf: "stretch"
    },
    typeinline: {
        width: "100%",
        flex: 1,

    },
    stackedlistitembody: {
        marginLeft: 8,
        flex: 1
    },
    Header: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "700",
        textAlign: "left",
        // fontFamily: "Univers Next for HSBC",
        color: "#000",
        alignSelf: "stretch"
    },
    SubText: {
        color: "#767676",
        marginTop: 4,
        fontSize: 12,
        alignSelf: "stretch"
    },
});
export default ListComponent