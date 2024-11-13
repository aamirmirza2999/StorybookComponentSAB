import * as React from "react";
import {Image, StyleSheet, View, Text} from "react-native";
import { useTheme } from '../../constants/Theme/ThemeProvider';
import SvgIconList from "../../constants/SvgIconList";
import { actuatedNormalize } from "../../constants/PixelScaling";
import { globalStyles } from "../../constants/GlobalStyles";


const Tag = (props) => {
    const { theme, isDarkMode } = useTheme();

  	return (
    		<View style={[{ backgroundColor: 
                // isDarkMode ? theme.primarycolor2_100 : 
                theme.primarybgclr
                    // "#f2f3f4" 
                    },globalStyles.tagContainer, props.tagContainer,
                    // globalStyles.tagFlexBox,props.tagFlexBox
                ]}>
      			<View style={[globalStyles.iconWithoutBg, props.iconWithoutBg, globalStyles.IconStyle,props.IconStyle]}>
        				{/* <Image style={styles.iconoutlinehash} resizeMode="cover" source="icon/outline/hash.png" /> */}
                        {isDarkMode ? 
                            <SvgIconList
                                icon="HahTagIcon"
                                width={actuatedNormalize(32)}
                                height={actuatedNormalize(32)}                            
                            />
                            :
                            <SvgIconList
                                icon="HahTagIcon"
                                width={actuatedNormalize(32)}
                                height={actuatedNormalize(32)}                            
                            />
                        }
      			</View>
      			<View style={[globalStyles.tagTitle,]}>
        				<View style={[globalStyles.businessstyle]}>
          					<Text style={[globalStyles.category,{ color: theme.primarycolor}]}>
                                {props.BusinessTrip}
                            </Text>
        				</View>
        				<View style={globalStyles.transfertext}>
          					<Text style={[globalStyles.transactions,{color: theme.primarytxtclr}]}>{props.Transactions}</Text>
        				</View>
      			</View>
    		</View>);
};

// const styles = StyleSheet.create({
//   	tagFlexBox: {
//     		alignItems: "center",
//     		flexDirection: "row"
//   	},
//   	textFlexBox: {
//     		justifyContent: "center",
//     		alignSelf: "stretch"
//   	},
//   	categoryTypo: {
//     		textAlign: "left",
//     		fontFamily: "Univers Next for HSBC"
//   	},
//   	iconoutlinehash: {
//     		width: 32,
//     		height: 32
//   	},
//   	iconWithoutBg: {
//     		borderRadius: 4
//   	},
//   	category: {
//     		fontSize: 14,
//     		lineHeight: 18,
//     		fontWeight: "700",
//     		color: "#000",
//     		flex: 1
//   	},
//   	text: {
//     		flexDirection: "row",
//     		alignSelf: "stretch"
//   	},
//   	transactions: {
//     		fontSize: 13,
//     		lineHeight: 17,
//     		color: "#626469"
//   	},
//   	tagTitle: {
//     		paddingHorizontal: 0,
//     		paddingVertical: 10,
//     		gap: 3,
//     		flex: 1
//   	},
//   	tagContainer: {
//     		borderRadius: 8,
//     		backgroundColor: "#f2f3f4",
//     		width: "100%",
//     		height: 64,
//     		padding: 8,
//     		gap: 8,
//     		// flex: 1
//   	}
// });

export default Tag;
