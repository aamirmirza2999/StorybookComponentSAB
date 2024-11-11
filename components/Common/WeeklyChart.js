import * as React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { globalStyles } from "../../constants/GlobalStyles";
import SvgIconList from "../../constants/SvgIconList";
import { actuatedNormalize } from "../../constants/PixelScaling";
import { BarChart } from "react-native-chart-kit";
import TextComponent from "./TextComponent";
import Fonts from "../../constants/Fonts";
import { IconChevRight, Lightright } from "../../constants/SvgLocations";

const screenWidth = Dimensions.get('window').width;
const WeeklyChart = (props) => {
    const { isDarkMode, theme } = useTheme();

    const dataW = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        backgroundGradientFrom: theme.primaryinvert,
        backgroundGradientTo: theme.primaryinvert,
        decimalPlaces: 0,
        color: () => theme.stylessecondarycolor6,
        barPercentage: barWidthRatio,
        fillShadowGradient: theme.primaryinvert,
        fillShadowGradientOpacity: 1,
        fillShadowGradientTo: theme.primaryinvert,
        labelColor: () => theme.primarytextcolor2,
        style: {
            borderRadius: 16,
        },
    };


    return (
        <View style={[styles.typeweek, { backgroundColor: theme.primaryinvert }]}>
            <View style={styles.welcomeBackParent}>
                <Text style={[styles.welcomeBack, { color: theme.primarytextcolor }]}>Weekly Report</Text>
                <View style={[styles.linkButton, styles.wrapperFlexBox]}>
                    <View style={[styles.wrapper, styles.listSpaceBlock]}>
                        <TextComponent style={[styles.linkButton1, styles.welcomeBackTypo, { color: theme.primarytextcolor }]}>View All</TextComponent>
                    </View>
                    {isDarkMode ? <Lightright width={24} height={24} /> : <IconChevRight width={24} height={24} />}
                </View>
            </View>
            {/* <Text style={[styles.enterYourUsername, styles.welcomeBackTypo]}>Starting with 27 Oct</Text> */}
            <TextComponent style={[styles.enterYourUsername, styles.welcomeBackTypo, { color: theme.primarytextcolor }]}>{props.myActivityType === "Week" ? "Starting with 27 Oct" : "+59,950.00 SAR"}</TextComponent>

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
        marginVertical: 16,
        // borderRadius: 16,
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
        // borderColor:'red', borderWidth:2
    },
    newExpensesBarChartWidget: {
        //   height: 120,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        // borderColor: 'red', borderWidth: 1
    },
    typeweek: {
        // backgroundColor: "#f2f3f4",
        // width: "100%",
        padding: actuatedNormalize(16),
        // flex: 1,
        // borderRadius: 8
    }
});

export default WeeklyChart;
