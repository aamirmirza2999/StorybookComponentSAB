import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { globalStyles } from "../../constants/GlobalStyles";
import TextComponent from '../Common/TextComponent';
import { Blockcard, Blockgenericred, BlackRightarrow, Lightmyacounts, Lightright, Whitecard } from "../../constants/SvgLocations";
import { actuatedNormalize } from "../../constants/PixelScaling";
import { LinkButton } from "./Button";


export const BlockBanner = (props) => {
    const { theme, isDarkMode } = useTheme();
    const backgroundColor = isDarkMode ? theme.primarycolorstatic : theme.primarycolor4;
    return (
        <>
            {/* <TextComponent style={[{color: theme.primarycolor},globalStyles.BlockText,props.BlockText]}>Block banner</TextComponent> */}
            <View style={[globalStyles.Entairebanner, props.Entairebanner, { backgroundColor }]}>
                <View style={[{ backgroundColor: isDarkMode ? theme.stylesblockbg : theme.stylesbgshades }, globalStyles.buttonquickaction, props.buttonquickaction]}>
                    <View style={{
                        marginLeft: actuatedNormalize(8),
                    }}>
                        {/* <Blockcard
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                    ></Blockcard> */}

                        {isDarkMode ? <Whitecard /> : <Blockcard />}
                    </View>

                    <View style={[globalStyles.buttonquickactionInner]}>
                        <View style={[globalStyles.frameWrapper]}>
                            <View style={[globalStyles.frameContainer]}>
                                <View style={[globalStyles.frameContainer]}>
                                    <Text style={[{ color: isDarkMode ? theme.primarycolor4 : theme.primarycolor }, globalStyles.checkOutYour, props.checkOutYour]}
                                    >{props.BlockcardText}</Text>
                                    <LinkButton linkText={[globalStyles.linkButton1]} label={props.LinkButton} enableRightIcon={true} />
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </>

    );
};

export const BlockGeneric = (props) => {
    const { theme, isDarkMode } = useTheme();
    return (
        <>
            {/* <TextComponent style={[{color: theme.primarycolor},globalStyles.BlockText,props.BlockText]}>Block generic</TextComponent> */}
            {props.BlockBoxType === "Solid" ?
                <View style={[{ backgroundColor: isDarkMode ? theme.primarybackground : theme.stylesblockbg }, globalStyles.typesolid, props.typesolid]}>
                    {/* <Blockgenericred
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                    ></Blockgenericred> */}
                    {isDarkMode ? <Lightmyacounts /> : <Blockgenericred />}
                    <View style={[globalStyles.Blocktext2, props.Blocktext2, globalStyles.textFlexBox2, props.textFlexBox2]}>
                        <View style={[globalStyles.nameWrapper]}>
                            <TextComponent style={[{ color: isDarkMode ? theme.primarytextcolor : theme.primarytextcolor }, globalStyles.blockname, globalStyles.textFlexBox3, props.textFlexBox3]}>{props.SolidText}</TextComponent>
                        </View>
                        {/* <BlackRightarrow
                            width={actuatedNormalize(24)}
                            height={actuatedNormalize(24)}
                        ></BlackRightarrow> */}
                        {isDarkMode ? <Lightright width={actuatedNormalize(24)} height={actuatedNormalize(24)} /> : <BlackRightarrow />}
                    </View>
                </View>
                : null}

            {props.BlockBoxType === "Pattern" ?
                <View style={[{ backgroundColor: theme.complimentaryprimarycolor3_2 }, globalStyles.typesolid, props.typesolid]}>
                    <Lightmyacounts
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                    ></Lightmyacounts>
                    <View style={[globalStyles.Blocktext2, props.Blocktext2, globalStyles.textFlexBox2, props.textFlexBox2]}>
                        <View style={[globalStyles.nameWrapper]}>
                            <TextComponent style={[{ color: theme.primarycolor4 }, globalStyles.blockname, globalStyles.textFlexBox3, props.textFlexBox3]}>{props.PattrenText}</TextComponent>
                        </View>
                        <Lightright
                            width={actuatedNormalize(24)}
                            height={actuatedNormalize(24)}
                        ></Lightright>
                    </View>
                </View>
                : null}


        </>
    )
}

export const BlockGenericTxtChange = (props) => {
    const { theme, isDarkMode } = useTheme();
    return (
        <>
            {/* <TextComponent style={[{color: theme.primarycolor},globalStyles.BlockText,props.BlockText]}>Block generic</TextComponent> */}
            <View style={[{ backgroundColor: theme.complimentaryprimarycolor3_2 }, globalStyles.typesolid, props.typesolid]}>
                <Lightmyacounts
                    width={actuatedNormalize(24)}
                    height={actuatedNormalize(24)}
                ></Lightmyacounts>
                <View style={[globalStyles.Blocktext2, props.Blocktext2, globalStyles.textFlexBox2, props.textFlexBox2]}>
                    <View style={[globalStyles.nameWrapper]}>
                        <TextComponent style={[{ color: theme.primarycolor4 }, globalStyles.blockname, globalStyles.textFlexBox3, props.textFlexBox3]}>{props.PattrenText}</TextComponent>
                    </View>
                    <Lightright
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                    ></Lightright>
                </View>
            </View>
        </>
    )
}



const styles = StyleSheet.create({

});
