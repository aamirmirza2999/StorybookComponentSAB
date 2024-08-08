import React from 'react';
import { StyleSheet, View, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TextComponent from './TextComponent';
import * as Progress from "react-native-progress";
import SvgIconList from '../../constants/SvgIconList';
import {
    actuatedNormalize,
} from '../../constants/CommonImport';
import Divider from './Divider';

export const CardsComponent = (props) => {

    console.log("card component propssssss>>>>>>>>>", props)
    return (


        <ImageBackground
            style={styles.typecardsLanguagearabic}
            source={props.CardImage}
        //resizeMode="stretch"
        >

            <View style={styles.parentFlexBox}>

                <TextComponent
                    style={[styles.welcomeBack, styles.sarTypo]}
                    numberOfLines={1}
                    ellipsizeMode="end"
                >{props.CardName}</TextComponent>

                <View style={[styles.chipsinfo, { backgroundColor: props.statusBgColor, borderColor: props.statusborderColor }]}>
                    <TextComponent style={[styles.label, styles.sarTypo]}>{props.CardStatus}</TextComponent>

                </View>

            </View>

            <View style={[styles.wrapper, styles.parentFlexBox]}>
                <TextComponent style={styles.textTypo1}>{props.CardNumber}</TextComponent>
                {props.infoiconRequired ?
                    <SvgIconList
                        icon="WhiteInfo"
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                    />
                    : null}
            </View>

            {props.LimitDetailsRequired ?
                <View style={[styles.frameParent, styles.wrapper1FlexBox]}>

                    <View style={styles.parentFlexBox}>
                        <TextComponent style={styles.textTypo1}>Available Limit</TextComponent>
                        <View style={[styles.wrapper1, styles.wrapperFlexBox]}>
                            <TextComponent style={styles.textTypo}>{props.AvailableLimit}</TextComponent>
                            <View style={[styles.wrapper2, styles.wrapperFlexBox]}>
                                <TextComponent style={[styles.sar, styles.sarTypo]}>{props.currency}</TextComponent>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.groupParent, styles.wrapperFlexBox1]}>

                        <View style={styles.barParent}>
                            <Progress.Bar
                                unfilledColor={"#767676"}
                                color={"#eee"}
                                borderRadius={null}
                                borderWidth={0}
                                progress={props.progress}
                                width={null}
                            />

                        </View>
                        <View style={[styles.creditLimit95Parent, styles.parentFlexBox]}>
                            <TextComponent style={[styles.creditLimit95, styles.textTypo1]}>Credit Limit</TextComponent>
                            <View style={[styles.wrapper1, styles.wrapperFlexBox]}>
                                <TextComponent style={[styles.text2, styles.textTypo]}>{props.CreditLimit}</TextComponent>
                                <View style={[styles.wrapper2, styles.wrapperFlexBox]}>
                                    <TextComponent style={[styles.sar, styles.sarTypo]}>{props.currency}</TextComponent>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                :

                <View style={[styles.frameParent, styles.wrapper1FlexBox]}>
                    <Divider />
                    <View style={styles.mainAccountParent}>
                        <TextComponent style={[styles.mainAccount, styles.text1Layout]}>Balance</TextComponent>
                        <View style={[styles.frameWrapper, styles.sarParentPosition]}>
                            <View style={[styles.sarParent, styles.sarParentPosition]}>
                                <TextComponent style={[styles.text1, styles.text1Layout]}>{props.Balance}</TextComponent>
                                <TextComponent style={styles.sar}>{props.currency}</TextComponent>

                            </View>
                        </View>
                    </View>
                </View>}
        </ImageBackground>);
};
const styles = StyleSheet.create({

    sarTypo: {
        textAlign: "left",
        fontFamily: "Univers Next for HSBC"
    },
    wrapperFlexBox1: {
        alignSelf: "stretch",
        marginTop: 8
    },
    wrapper1FlexBox: {
        justifyContent: "flex-end",
        alignSelf: "stretch"
    },
    wrapperFlexBox: {
        alignItems: "flex-end",
        flexDirection: "row"
    },

    parentFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch"
    },
    textTypo1: {
        fontFamily: "Univers Arabic forHSBC",
        lineHeight: 20,
        fontSize: 14,
        textAlign: "left",
        color: "#fff"
    },
    textTypo: {
        textAlign: "right",
        lineHeight: 22,
        fontFamily: "Univers Arabic forHSBC",
        color: "#fff",
        fontSize: 16
    },

    welcomeBack: {
        lineHeight: 21,
        width: 221,
        height: 42,
        color: "#fff",
        textAlign: "left",
        fontFamily: "Univers Next for HSBC",
        fontWeight: "700",
        fontSize: 16
    },

    label: {
        fontSize: 12,
        lineHeight: 16,
        color: "#000",
        textAlign: "left",
        fontFamily: "Univers Next for HSBC"
    },

    chipsinfo: {
        borderRadius: 4,
        backgroundColor: "#f9f2f3",
        borderStyle: "solid",
        borderColor: "#e5b2b5",
        borderWidth: 0.5,
        width: 70,
        height: 20,
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignItems: "center",
        flexDirection: "row"
    },

    wrapper: {
        marginTop: 8,
        flexDirection: "row"
    },

    sar: {
        fontSize: 10,
        lineHeight: 13,
        color: "#fff",
        textAlign: "left",
        fontFamily: "Univers Next for HSBC"
    },

    wrapper2: {
        paddingHorizontal: 0,
        paddingVertical: 1,
        marginLeft: 4
    },

    wrapper1: {
        justifyContent: "flex-end",
        alignSelf: "stretch"
    },


    barParent: {
        height: 4,
        width: 310
    },
    creditLimit95: {
        display: "flex",
        width: 118,
        height: 19,
        alignItems: "center"
    },
    text2: {
        fontWeight: "700"
    },
    creditLimit95Parent: {
        height: 19,
        marginTop: 8
    },
    groupParent: {
        height: 31,
        marginTop: 8
    },
    frameParent: {
        marginTop: 8,
        flex: 1,
        justifyContent: "flex-end"
    },
    typecardsLanguagearabic: {
        borderRadius: 16,
        height: 178,
        padding: 16,
        backgroundColor: "transparent",
        overflow: "hidden",
        flex: 1,
        alignSelf: "stretch"
    },
    mainAccount: {
        top: "0%",
        left: "0%",
        position: "absolute",
        lineHeight: 20,
        fontSize: 14,
        textAlign: "left",
        width: "100%"
    },
    mainAccountParent: {
        height: 44,
        width: 128,
        marginTop: 8
    },
    text1Layout: {
        lineHeight: 20,
        letterSpacing: 0,
        color: "#fff",
        fontFamily: "Univers Next for HSBC"
    },
    sarParentPosition: {
        left: 0,
        position: "absolute",
        width: 128
    },
    frameWrapper: {
        top: 24,
        height: 20
    },
    sarParent: {
        top: 0,
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    text1: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: "700",
        textAlign: "left"
    },
});
export default CardsComponent;