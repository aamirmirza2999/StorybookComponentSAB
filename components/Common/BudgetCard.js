import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Cancel, Check, ErrorIcon, GreyInfo, InfoIcon, Warning } from "../../constants/SvgLocations";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { actuatedNormalize } from "../../constants/PixelScaling";
import { useTheme } from '../../constants/Theme/ThemeProvider';

const BudgetCard = (props) => {
	const {theme, toggleTheme,isDarkMode} = useTheme();

	// const currentAmount = 28160.00; // Example current amount
    // const totalAmount = 60000.00; // Example total amount
    // const fillPercentage = (currentAmount / totalAmount) * 100;   
	const fillPercentage = parseInt(props.BudgetCardTypePiechart);
		return (
    		<View style={[styles.budgetCard,{backgroundColor:theme.stylescolorpressed1}]}>
      			<View style={styles.wraper}>
        				<View style={styles.text}>
          					<Text style={[styles.date, styles.dateTypo,{color:theme.primarycolor}]}>{props.Month}</Text>
							{props.BudgetCardDaystogo?
          					<Text style={[styles.daysToGo, styles.daysToGoLayout]}>{props.Daystogo}</Text>
							  :null}

        				</View>
						{props.chipsInfoState === "Error"?
        				<View style={[styles.chipsinfoError,{ paddingVertical: props.chipsInfoSize === "small" ? 2 : 8 }]}>
							{props.chipsInfoShowIcon === true?
							<Cancel
							
								width={props.chipsInfoSize === "small" ? 20:24}
								height={props.chipsInfoSize === "small" ? 20:24}
								bottom={props.chipsInfoSize === "small" ? 0:2}

					
							/>
							:null}
          					<Text style={[styles.label, styles.labelLayout,{ fontSize:props.chipsInfoSize === "small" ?  11:16,color:theme.primarycolorstatic}]}>3.97 SAR / Day</Text>
        				</View>
						:null}
						{props.chipsInfoState === "Warning"?
        				<View style={[styles.chipsinfoWarning,{ paddingVertical: props.chipsInfoSize === "small" ? 2 : 8 }]}>
							{props.chipsInfoShowIcon === true?
							<Warning
							width={props.chipsInfoSize === "small" ? 20:24}
								height={props.chipsInfoSize === "small" ? 20:24}
								bottom={props.chipsInfoSize === "small" ? 0:2}
							/>
							:null}
          					<Text style={[styles.label, styles.labelLayout,{ fontSize:props.chipsInfoSize === "small" ?  11:16,color:theme.primarycolorstatic}]}>3.97 SAR / Day</Text>
        				</View>
						:null}
						{props.chipsInfoState === "Info"?
        				<View style={[styles.chipsinfo,{ paddingVertical: props.chipsInfoSize === "small" ? 2 : 8 }]}>
							{props.chipsInfoShowIcon === true?
							<InfoIcon
							    width={props.chipsInfoSize === "small" ? 20:24}
								height={props.chipsInfoSize === "small" ? 20:24}
								bottom={props.chipsInfoSize === "small" ? 0:2}
							/>
							:null}
          					<Text style={[styles.label, styles.labelLayout,{fontSize:props.chipsInfoSize === "small" ?  11:16,color:theme.primarycolorstatic}]}>3.97 SAR / Day</Text>
        				</View>
						:null}
						{props.chipsInfoState === "Neutral"?
        				<View style={[styles.chipsinfoNeutral,{paddingVertical: props.chipsInfoSize === "small" ? 2 : 8}]}>
							{props.chipsInfoShowIcon === true?
							<GreyInfo
							width={props.chipsInfoSize === "small" ? 20:24}
							height={props.chipsInfoSize === "small" ? 20:24}
							bottom={props.chipsInfoSize === "small" ? 0:2}
							/>
							:null}
          					<Text style={[styles.label, styles.labelLayout,{ontSize:props.chipsInfoSize === "small" ?  11:16,color:theme.primarycolorstatic}]}>3.97 SAR / Day</Text>
        				</View>
						:null}
						{props.chipsInfoState === "Success"?
        				<View style={[styles.chipsinfoSuccess,{paddingVertical: props.chipsInfoSize === "small" ? 2 : 8}]}>
							{props.chipsInfoShowIcon === true?
							<Check
							width={props.chipsInfoSize === "small" ? 20:24}
							height={props.chipsInfoSize === "small" ? 20:24}
							bottom={props.chipsInfoSize === "small" ? 0:2}
							/>
							:null}
          					<Text style={[styles.label, styles.labelLayout,{ontSize:props.chipsInfoSize === "small" ?  11:16,color:theme.primarycolorstatic}]}>3.97 SAR / Day</Text>
        				</View>
						:null}
						{props.BudgetCardstatusType ==="On Track"?
        				<View style={styles.budgetStatus}>
          					<View style={styles.text1}>
                                <Check/>
            						<Text style={[styles.enterYourUsername, styles.dateTypo,{color:theme.secondarycolor10}]}>{props.onTrack}</Text>
          					</View>
        				</View>
						:null}
						{props.BudgetCardstatusType ==="Overspent"?
        				<View style={styles.budgetStatus}>
          					<View style={styles.text1}>
                                <ErrorIcon
								width={24}
								height={24}
								/>
            						<Text style={[styles.Overspent, styles.dateTypo]}>{props.Overspent}</Text>
          					</View>
        				</View>
						:null}
						{props.BudgetCardstatusType ==="Be careful"?
        				<View style={styles.budgetStatus}>
          					<View style={styles.text1}>
                                <InfoIcon/>
            						<Text style={[styles.Becareful, styles.dateTypo]}>{props.Becareful}</Text>
          					</View>
        				</View>
						:null}
      			</View>
      			<View style={styles.grap}>
				  <AnimatedCircularProgress
                    size={150}
                    width={15}
                    fill={fillPercentage}
                    tintColor={fillPercentage === 100 ? "#FF0000" : theme.secondarycolor360}
                    backgroundColor={theme.strokecolor360tint}
                    rotation={0}
					lineCap={"round"}
                >
                    {() => (
                        <View style={styles.leftToSpend}>
                            <View style={styles.totalSpendingParent}>
                                <Text style={[styles.totalSpending, styles.text3Typo]}>Left to Spend</Text>
                                <View style={styles.parent}>
                                    <Text style={[styles.text2, styles.sarTypo,{color:theme.primarycolor}]}>28,160.00</Text>
                                    <Text style={[styles.sar, styles.sarTypo,{color:theme.primarycolor2_100}]}>SAR</Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={[styles.text3, styles.text3Typo,{color:theme.primarycolor2_100}]}>of 60,000.00</Text>
                                    <Text style={[styles.sar, styles.sarTypo,{color:theme.primarycolor2_100}]}>SAR</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </AnimatedCircularProgress>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	dateTypo: {
    		textAlign: "left",
    		fontFamily: "Univers Next for HSBC"
  	},
  	daysToGoLayout: {
    		lineHeight: 16,
    		fontSize: 12
  	},
  	labelLayout: {
    		lineHeight: 15,
    		// fontSize: 11
  	},
  	budgetFlexBox: {
    		gap: 10,
    		flexDirection: "row"
  	},
  	text3Typo: {
    		textAlign: "center",
    		fontFamily: "Univers Next for HSBC"
  	},
  	sarTypo: {
    		textAlign: "right",
    		fontFamily: "Univers Next for HSBC"
  	},
  	date: {
    		height: 19,
    		// color: "#000",
    		textAlign: "left",
    		fontFamily: "Univers Next for HSBC",
    		lineHeight: 20,
    		fontSize: 15,
    		alignSelf: "stretch"
  	},
  	daysToGo: {
    		color: "#767676",
    		textAlign: "left",
    		fontFamily: "Univers Next for HSBC",
    		alignSelf: "stretch"
  	},
  	text: {
    		height: 35,
    		alignSelf: "stretch"
  	},
  	label: {
    		textAlign: "left",
    		fontFamily: "Univers Next for HSBC",
    		// color: "#000"
  	},
  	chipsinfo: {
    		borderRadius: 4,
    		backgroundColor: "#ebeff4",
    		borderStyle: "solid",
    		borderColor: "#99cecc",
    		borderWidth: 0.5,
    		paddingHorizontal: 8,
    		// paddingVertical: 2,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
			marginRight:50
  	},
	  chipsinfoError: {
		borderRadius: 4,
		backgroundColor: "#E5B2B5",
		borderStyle: "solid",
		borderColor: "#E5B2B5",
		borderWidth: 0.5,
		paddingHorizontal: 8,
		// paddingVertical: 2,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginRight:50

  },
  chipsinfoWarning: {
	borderRadius: 4,
	backgroundColor: "#FFCF70",
	borderStyle: "solid",
	borderColor: "#FFCF70",
	borderWidth: 0.5,
	paddingHorizontal: 8,
	// paddingVertical: 2,
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "row",
	marginRight:50
},
chipsinfoNeutral: {
	borderRadius: 4,
	backgroundColor: "#B2B2B2",
	borderStyle: "solid",
	borderColor: "#D7D8D6",
	borderWidth: 0.5,
	paddingHorizontal: 8,
	// paddingVertical: 2,
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "row",
	marginRight:50
},
chipsinfoSuccess: {
	borderRadius: 4,
	backgroundColor: "#99CECC",
	borderStyle: "solid",
	borderColor: "#99CECC",
	borderWidth: 0.5,
	paddingHorizontal: 8,
	// paddingVertical: 2,
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "row",
	marginRight:50
},
  	iconfilledsuccess: {
    		width: 24,
    		height: 24
  	},
  	enterYourUsername: {
    		fontSize: 13,
    		lineHeight: 17,
    		// color: "#00847f",
    		textAlign: "left",
    		fontFamily: "Univers Next for HSBC"
  	},
	  Overspent: {
		fontSize: 13,
		lineHeight: 17,
		 color: "red",
		textAlign: "left",
		fontFamily: "Univers Next for HSBC"
  },
  Becareful: {
	fontSize: 13,
		lineHeight: 17,
		color: "#305A85",
		textAlign: "left",
		fontFamily: "Univers Next for HSBC"
  },
  	text1: {
    		width: 91,
    		gap: 4,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	budgetStatus: {
    		flexDirection: "row"
  	},
  	wraper: {
    		gap: 13,
    		justifyContent: "center",
    		alignSelf: "stretch",
    		flex: 1,
            // backgroundColor:"red"
  	},
  	largePieChartGraphBudget: {
    		width: 150,
    		height: 150,
    		zIndex: 0
  	},
  	totalSpending: {
    		color: "#00847f",
    		lineHeight: 16,
    		fontSize: 12
  	},
  	text2: {
    		fontWeight: "700",
    		color: "#1a293b",
    		lineHeight: 20,
    		fontSize: 15
  	},
  	sar: {
    		fontSize: 10,
    		lineHeight: 14,
    		display: "flex",
    		width: 21,
    		alignItems: "flex-end",
    		// color: "#767676",
    		// alignSelf: "stretch",
  	},
  	parent: {
    		alignItems: "flex-end",
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	text3: {
    		lineHeight: 15,
    		fontSize: 11,
    		// color: "#767676"
  	},
  	group: {
    		gap: 2,
    		opacity: 0.4,
    		justifyContent: "center",
    		alignSelf: "stretch",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	totalSpendingParent: {
    		alignItems: "center"
  	},
  	leftToSpend: {
    		position: "absolute",
    		marginTop: -25,
    		marginLeft: -58,
    		top: "50%",
    		left: "50%",
    		width: 116,
    		zIndex: 1,
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	budgetPieChart1: {
    		zIndex: 0
  	},
  	incomeIcon: {
    		borderRadius: 50,
    		width: 18,
    		height: 18,
    		display: "none"
  	},
  	grap: {
    		justifyContent: "center",
    		alignItems: "center",
  	},
  	budgetCard: {
    		borderRadius: 8,
    		// backgroundColor: "#f2f3f4",
    		width: "100%",
    		overflow: "hidden",
    		justifyContent: "space-between",
    		padding: 16,
    		alignItems: "center",
    		flexDirection: "row",
    		flex: 1
  	}
});

export default BudgetCard;
