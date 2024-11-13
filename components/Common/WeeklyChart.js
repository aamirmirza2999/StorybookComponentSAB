import * as React from "react";
import { Text, StyleSheet, View, Image, Dimensions, I18nManager } from "react-native";
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { actuatedNormalize } from "../../constants/PixelScaling";
import { BarChart } from "react-native-chart-kit";
import TextComponent from "./TextComponent";
import { IconChevRight, Lightright } from "../../constants/SvgLocations";
import Fonts from "../../constants/Fonts";
import { useTranslation } from "react-i18next";

const screenWidth = Dimensions.get('window').width;
const WeeklyChart = (props) => {
    const { isDarkMode, theme } = useTheme();
    const { t } = useTranslation();

    const dataW = {
        labels: [t('initialLang:Mon'), t('initialLang:Tue'), t('initialLang:Wed'), t('initialLang:Thu'), t('initialLang:Fri'), t('initialLang:Sat'), t('initialLang:Sun')],
        datasets: [
            {
                data: [20, 15, 10, 12, 20, 10, 8],
            },
        ],
    };
    const dataM = {
        labels: ["W1", "W2", "W3", "W4"],

        datasets: [
            {
                data: [20, 15, 10, 12],
            },
        ],
    };
    const barWidthRatio = props.myActivityType === "Week" ? 0.8 : 1.5;
    const chartConfig = {
        backgroundGradientFrom: theme.stylescolorpressed1,
        backgroundGradientTo: theme.stylescolorpressed1,
        decimalPlaces: 0,
        color: () => theme.stylessecondarycolor6,
        barPercentage: barWidthRatio,
        fillShadowGradient: theme.stylescolorpressed1,
        fillShadowGradientOpacity: 1,
        fillShadowGradientTo: theme.stylescolorpressed1,
        fillShadowGradientToOpacity: 1,
        labelColor: () => theme.primarytextcolor2,
        style: {
            borderRadius: 16,
        },
    };


    return (
        <View style={[styles.typeweek, { backgroundColor: theme.stylescolorpressed1 }]}>
            <View style={styles.welcomeBackParent}>
                <Text style={[styles.welcomeBack, { color: theme.primarytextcolor }]}>{props.myActivityType === "Week" ? t('initialLang:weekReport') : t('initialLang:monReport')}</Text>
                <View style={[styles.linkButton, styles.wrapperFlexBox]}>
                    <View style={{ paddingBottom: I18nManager.isRTL ? 5 : 0 }}>
                        <TextComponent style={{ color: theme.primarytextcolor, fontFamily: Fonts.HSBC }}>
                            {t('initialLang:viewall')}
                        </TextComponent>
                    </View>
                    {isDarkMode ?
                        <Lightright
                            style={{
                                transform: [{ rotate: I18nManager.isRTL ? "180deg" : "0deg" }],
                            }}
                            width={24}
                            height={24} /> :
                        <IconChevRight
                            style={{
                                transform: [{ rotate: I18nManager.isRTL ? "180deg" : "0deg" }],
                            }}
                            width={24}
                            height={24}
                        />}
                </View>
            </View>
            <TextComponent style={[styles.enterYourUsername, { color: theme.primarytextcolor }]}>{props.myActivityType === "Week" ? t('initialLang:startingfrom') : "+59,950.00 SAR"}</TextComponent>

            <View style={styles.newExpensesBarChartWidget}>
                <BarChart
                    style={styles.chart}
                    data={props.myActivityType === "Week" ? dataW : dataM}
                    width={screenWidth - 32}
                    height={220}
                    chartConfig={chartConfig}
                    withHorizontalLabels={false}
                    withInnerLines={false}
                    showBarTops={true} // Display top line on bars
                    fromZero={true}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    chart: {
        paddingVertical: 16,    
        borderRadius: 8,
        alignSelf: "stretch",
        paddingLeft: 0,
        paddingRight: 0,
    },
    wrapperFlexBox: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        // borderColor: 'red', borderWidth: 2
    },
    welcomeBack: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: "700",
        fontFamily: Fonts.HSBC,
        flex: 1,
        // borderColor: 'blue', borderWidth: 2
    },
    welcomeBackParent: {
        // gap: 8,
        flexDirection: "row",
        alignSelf: "stretch",
        // borderColor:'red', borderWidth:2
    },
    enterYourUsername: {
        fontSize: 15,
        lineHeight: 20,
        alignSelf: "stretch",
        fontFamily: Fonts.HSBC,
        // borderColor:'red', borderWidth:2
    },
    newExpensesBarChartWidget: {
        //   height: 120,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        borderRadius:8,
        // borderColor: 'red', borderWidth: 1
    },
    typeweek: {
        padding: actuatedNormalize(16),
        borderRadius:8
    }
});

export default WeeklyChart;
