import * as React from "react";
import {Text, StyleSheet, View, Image,TouchableOpacity} from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";
import TextComponent from "../Button/TextComponent";
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { actuatedNormalize } from "../../constants/PixelScaling";

const MainButton = (props) => {
	const { theme } = useTheme();
    let Component = TouchableOpacity;
  	
  	return (
    	<>
		{/* Primary Large Button Red Background */}
      			{props.enablePrimaryLarge?
					<Component
						testID={props.testID ? props.testID : 'primaryCTALarge'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTALarge'
						}
						onPress={props.onPress}
						disabled={props.disabled}
					>
            		<View style={[{	backgroundColor:props.disabled?theme.primarygray30:theme.primaryred,alignSelf:"flex-start"}, props.primaryFlexBoxLarge,globalStyles.primaryFlexBoxLarge]}>			
                  		 <TextComponent style={[{color: theme.primarywhite},props.primaryTextLarge, globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
        			</View>
					</Component>:null}
			
			{/* Primary Small Button Red Background */}

				{props.enablePrimarySmall?
				<Component
					testID={props.testID ? props.testID : 'primaryCTASmall'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTA'
					}
					onPress={props.onPress}
					disabled={props.disabled}
				>
				<View style={[{	backgroundColor:props.disabled?theme.primarygray30:theme.primaryred,alignSelf:"flex-start"},props.primaryFlexBoxSmall,globalStyles.primaryFlexBoxSmall]}>			
					<TextComponent style={[{color: theme.primarywhite},props.primaryTextSmall,globalStyles.primaryTextSmall]}>{props.label}</TextComponent>
				</View>
				</Component>:null}

				{/* Primary Large Button Black Background */}

				{props.enablePrimaryLargeBlack?
					<Component
					testID={props.testID ? props.testID : 'primaryCTALargeBlack'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTALargeBlack'
					}
					onPress={props.onPress}
					disabled={props.disabled}
				>
				<View style={[{	backgroundColor:props.disabled?theme.primarygray30:theme.primaryblack,alignSelf:"flex-start"},props.primaryFlexBoxLarge,globalStyles.primaryFlexBoxLarge]}>			
					<TextComponent style={[{color: theme.primarywhite},props.primaryTextLarge,globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
				</View>
				</Component>:null}

			{/* Primary Small Button Black Background */}

				{props.enablePrimaryLargeSmall?
				<Component
					testID={props.testID ? props.testID : 'primaryCTABlackSmall'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTABlackSmall'
					}
					onPress={props.onPress}
					disabled={props.disabled}
				>
				<View style={[{	backgroundColor:props.disabled?theme.primarygray30:theme.primaryblack,alignSelf:"flex-start"},props.primaryFlexBoxSmall,globalStyles.primaryFlexBoxSmall]}>			
					<TextComponent style={[{color: theme.primarywhite},props.primaryTextSmall,globalStyles.primaryTextSmall]}>{props.label}</TextComponent>
				</View>
				</Component>:null}

				{/* Secondary Large Button Black Border */}

				{props.enableSecondaryBorderBlack?
					<Component
					testID={props.testID ? props.testID : 'secondaryCTABB'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'secondaryCTABB'
					}
					onPress={props.onPress}
					disabled={props.disabled}
				>
				<View style={[{	backgroundColor:theme.textwhite,borderColor:props.disabled?theme.primarygray30: theme.primaryblack,alignSelf:"flex-start"},props.secondaryFlexBoxLarge,globalStyles.secondaryFlexBoxLarge]}>			
					<TextComponent style={[{color:props.disabled?theme.primarygray30: theme.primaryblack},props.primaryTextLarge,globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
				</View>
				</Component>:null}

			{/* Secondary Large Button Red Border */}

				{props.enableSecondaryBorderRed?
					<Component
					testID={props.testID ? props.testID : 'primaryCTARB'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTARB'
					}
					onPress={props.onPress}
					disabled={props.disabled}
				>
				<View style={[{	backgroundColor:theme.textwhite,borderColor:props.disabled?theme.primarygray30: theme.primaryred,alignSelf:"flex-start"},props.secondaryFlexBoxLarge,globalStyles.secondaryFlexBoxLarge]}>			
					<TextComponent style={[{color:props.disabled?theme.primarygray30: theme.primaryred},props.primaryTextLarge,globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
				</View>
				</Component>:null}

			{/* Prelogin Red Background Button */}
				{props.preloginRedButton?
					<Component
						testID={props.testID ? props.testID : 'primaryCTALarge'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTALarge'
						}
						onPress={props.onPress}
						disabled={props.disabled}
					>
            		<View style={[{	backgroundColor:props.disabled?theme.primarygray30:theme.primaryred,alignSelf:"flex-start"},props.preloginRedButton,globalStyles.preloginRedButton]}>			
                  		 <TextComponent style={[{color: theme.primarywhite},props.primaryTextLarge,globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
        			</View>
					</Component>:null}

			{/* Prelogin Black Background Button */}
			
					{props.preloginBlackButton?
					<Component
					testID={props.testID ? props.testID : 'primaryCTALargeBlack'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTALargeBlack'
					}
					onPress={props.onPress}
					disabled={props.disabled}
				>
				<View style={[{	backgroundColor:props.disabled?theme.primarygray30:theme.primaryblack,alignSelf:"flex-start"},props.preloginRedButton,globalStyles.preloginRedButton]}>			
					<TextComponent style={[{color: theme.primarywhite},props.primaryTextLarge,globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
				</View>
				</Component>:null}

				{/* Quick Action Button */}
			
				{props.quickActionButton?
				<Component
					testID={props.testID ? props.testID : 'quickActionButton'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'quickActionButton'
					}
					onPress={props.onPress}
				>
					{props.quickActionButtonType===1?
					<View
					style={[props.quickActionButtonBox,globalStyles.quickActionButtonBox,{backgroundColor: theme.stylesblockbg} ]}
					>
						<View
							style={{
							marginTop: actuatedNormalize(8),
							}}
						>
							{props.quickActionButtonIcon}
						</View>
						<TextComponent style={[props.quickActionButtonTxt,globalStyles.quickActionButtonTxt,{  color: theme.primaryblack}]}>{props.quickActionButtonLabel}</TextComponent>
					</View>
					:null}

				    {props.quickActionButtonType===2?
								<View
								style={[props.quickActionButtonBox1,globalStyles.quickActionButtonBox1,{backgroundColor: theme.stylesblockbg}]}
								>
										{props.quickActionButtonIcon}
									<TextComponent style={[props.quickActionButtonTxt1,globalStyles.quickActionButtonTxt1,{  color: theme.primaryblack}]}>{props.quickActionButtonLabel}</TextComponent>
								</View>
					:null}

					{props.quickActionButtonType===3?
						<View
						style={{
							flexDirection:"column",
							alignItems:"center"
						}}
						>
								<View
								style={[props.quickActionButtonBox2,globalStyles.quickActionButtonBox2,{backgroundColor: theme.stylesblockbg}]}
								>
										{props.quickActionButtonIcon}
								</View>
								<TextComponent style={[props.quickActionButtonTxt2,globalStyles.quickActionButtonTxt2,{color: theme.primaryblack}]}>{props.quickActionButtonLabel}</TextComponent>
							</View>
					:null}
			
				</Component>:null}

</>	
			);
};

const styles = StyleSheet.create({
  
  });

export default MainButton;