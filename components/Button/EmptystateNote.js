import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { Warning } from "../../constants/SvgLocations";
import { globalStyles } from "../../constants/GlobalStyles";
import TextComponent from "./TextComponent";
import { useTheme } from "../../constants/Theme/ThemeProvider";
const EmptystateNote = () => {
	const {theme, toggleTheme} = useTheme();
  	return (
        <>
    		<View style={[globalStyles.emptystate,{backgroundColor: theme.primarycolor4}]}>
                <View style={[globalStyles.primarySpaceBlock]}>
                <View  style={[globalStyles.ragIcon]} > 
                <Warning/>
                </View>
      			<View style={[globalStyles.content, globalStyles.wrapperFlexBox]}>
        				<View style={globalStyles.title}>
          					<TextComponent style={[globalStyles.welcomeBack, globalStyles.actionTypo,{color:theme.primarycolor}]}>Headline</TextComponent>
        				</View>
        				<Text style={[globalStyles.enterYourUsername, globalStyles.actionTypo,{color: theme.primarycolor2_100}]}>Content to come here in as many lines as required.</Text>
      			</View>
      			<View style={globalStyles.mainbutton}>
        				<View style={[globalStyles.primary, globalStyles.wrapperFlexBox,{backgroundColor: theme.primarycolor3}]}>
          					<View style={[globalStyles.wrapper, globalStyles.wrapperFlexBox]}>
            						<View style={[globalStyles.wrapper1, globalStyles.wrapperFlexBox]}>
              							<TextComponent style={[globalStyles.action, globalStyles.actionTypo,{color: theme.primarycolor4}]}>Action</TextComponent>
            						</View>
          					</View>
        				</View>
      			</View>
            </View>
        </View>
            </>
            );
};

const styles = StyleSheet.create({
  	primarySpaceBlock: {
    		paddingHorizontal: 16,
    		borderRadius: 8,
    		flex: 1
  	},
  	wrapperFlexBox: {
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	actionTypo: {
    		textAlign: "center",
    		fontFamily: "Univers Next for HSBC"
  	},
  	ragIcon: {
    		width: 68,
    		height: 68,
    		overflow: "hidden"
  	},
  	welcomeBack: {
    		fontWeight: "700",
    		color: "#000",
    		lineHeight: 21,
    		fontSize: 16,
    		fontFamily: "Univers Next for HSBC",
    		flex: 1
  	},
  	title: {
    		flexDirection: "row",
    		alignSelf: "stretch"
  	},
  	enterYourUsername: {
    		fontSize: 14,
    		lineHeight: 18,
    		color: "#767676",
    		marginTop: 8,
    		alignSelf: "stretch"
  	},
  	content: {
    		marginTop: 16,
    		alignSelf: "stretch"
  	},
  	action: {
    		color: "#fff",
    		lineHeight: 21,
    		fontSize: 16,
    		fontFamily: "Univers Next for HSBC"
  	},
  	wrapper1: {
    		height: 24,
    		flexDirection: "row"
  	},
  	wrapper: {
    		flexDirection: "row"
  	},
  	primary: {
    		backgroundColor: "#db0011",
    		paddingTop: 11,
    		paddingBottom: 13,
    		minWidth: 128,
    		flexDirection: "row",
    		paddingHorizontal: 16,
    		borderRadius: 8,
    		flex: 1,
    		justifyContent: "center"
  	},
  	mainbutton: {
    		maxWidth: 311,
    		flexDirection: "row",
    		marginTop: 16,
    		width: "100%"
  	},
  	emptystate: {
    		backgroundColor: "#fff",
    		paddingVertical: 24,
    		alignItems: "center",
    		paddingHorizontal: 16,
    		overflow: "hidden",
    		width: "100%",
    		borderRadius: 8
  	}
});

export default EmptystateNote;
