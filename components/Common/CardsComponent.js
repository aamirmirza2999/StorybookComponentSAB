import React from 'react';
import {  View, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TextComponent from './TextComponent';
import * as Progress from "react-native-progress";
import SvgIconList from '../../constants/SvgIconList';
import {
    actuatedNormalize,
} from '../../constants/CommonImport';
import Divider from './Divider';
import {spacingXS} from '../../constants/Size'
import { globalStyles } from '../../constants/GlobalStyles';
import { useTranslation } from 'react-i18next';
import { useTheme } from "../../constants/Theme/ThemeProvider";

export const CardsComponent = (props) => {
    const { t } = useTranslation();
    const { theme, toggleTheme,isDarkMode } = useTheme();
    console.log("card component propssssss>>>>>>>>>", props)
    return (
        <View
        style={{  
          height: props.HeaderHeight,
            backgroundColor:theme.primaryinvert}}>

        <ImageBackground
            style={globalStyles.typecardsLanguagearabic}
            source={props.CardImage}
        >

            <View style={[globalStyles.parentFlexBox,{alignItems:props.chipsinfo?null:'center',justifyContent:props.chipsinfo?'space-between':'center'}]}>

                <TextComponent
                    style={[globalStyles.welcomeBack, globalStyles.sarTypo,{ }]}
                    numberOfLines={1}
                    ellipsizeMode="end"
                >{props.CardName}</TextComponent>

                {props.chipsinfo ?
                <View style={[globalStyles.chipsinfo, { backgroundColor: props.statusBgColor, borderColor: props.statusborderColor }]}>
                    <TextComponent style={[globalStyles.label, globalStyles.sarTypo]}>{props.CardStatus}</TextComponent>

                </View>
                :null}

            </View>


            <View style={[globalStyles.wrapper, globalStyles.parentFlexBox]}>
                <View style={{flexDirection:'column',bottom:!props.isFinanceProduct?spacingXS:null}}>
                {props.isAccount || props.isCards ?<TextComponent style={globalStyles.textTypo1}>{props.CardName}</TextComponent>:null}
                <TextComponent style={globalStyles.textTypo1}>{props.CardNumber}</TextComponent>
                </View>
                {props.isFinanceProduct ?
                    <SvgIconList
                        icon="WhiteInfo"
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                    />
                    : null}
            </View>

            {props.isCards ?
                <View style={[globalStyles.frameParent, globalStyles.wrapper1FlexBox]}>

                    <View style={globalStyles.parentFlexBox}>
                        <TextComponent style={globalStyles.textTypo1}>{t('initialLang:AvailableLimit')}</TextComponent>
                        <View style={[globalStyles.wrapper1, globalStyles.wrapperFlexBox]}>
                            <TextComponent style={globalStyles.textTypo}>{props.AvailableLimit}</TextComponent>
                            <View style={[globalStyles.wrapper2, globalStyles.wrapperFlexBox]}>
                                <TextComponent style={[globalStyles.sar, globalStyles.sarTypo]}>{props.currency}</TextComponent>
                            </View>
                        </View>
                    </View>

                    <View style={[globalStyles.groupParent, globalStyles.wrapperFlexBox1]}>

                        <View style={globalStyles.barParent}>
                            <Progress.Bar
                                unfilledColor={"#767676"}
                                color={"#eee"}
                                borderRadius={null}
                                borderWidth={0}
                                progress={props.progress}
                                width={null}
                            />

                        </View>
                        <View style={[globalStyles.creditLimit95Parent, globalStyles.parentFlexBox]}>
                            <TextComponent style={[globalStyles.creditLimit95, globalStyles.textTypo1]}>{t('initialLang:CreditLimit')}</TextComponent>
                            <View style={[globalStyles.wrapper1, globalStyles.wrapperFlexBox]}>
                                <TextComponent style={[globalStyles.text2, globalStyles.textTypo]}>{props.CreditLimit}</TextComponent>
                                <View style={[globalStyles.wrapper2, globalStyles.wrapperFlexBox]}>
                                    <TextComponent style={[globalStyles.sar, globalStyles.sarTypo]}>{props.currency}</TextComponent>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                :
             (props.isFinanceProduct || props.isAccount?
                <View style={[globalStyles.frameParent, globalStyles.wrapper1FlexBox]}>
                    <Divider />
                    <View style={globalStyles.mainAccountParent}>
                        <TextComponent style={[globalStyles.mainAccount, globalStyles.text1Layout]}>{props.isFinanceProduct?t('initialLang:PrincipleOutstanding'):props.isAccount? t('initialLang:Balance'):props.AmountHeader }</TextComponent>
                        <View style={[globalStyles.frameWrapper, globalStyles.sarParentPosition]}>
                            <View style={[globalStyles.sarParent, globalStyles.sarParentPosition]}>
                                <TextComponent style={[globalStyles.text1, globalStyles.text1Layout]}>{props.Balance}</TextComponent>
                                <TextComponent style={globalStyles.sar}>{props.currency}</TextComponent>

                            </View>
                        </View>
                    </View>
                </View>:null)}
        </ImageBackground>
        </View>);
};

export default CardsComponent;