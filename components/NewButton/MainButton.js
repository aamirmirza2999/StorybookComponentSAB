import React,{useState} from 'react'
import {Text, StyleSheet, View, Image,TouchableOpacity} from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";
import TextComponent from '../Common/TextComponent';
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { actuatedNormalize } from "../../constants/PixelScaling";
import SvgIconList from "../../constants/SvgIconList";
import { RightArrowBlackLarge,RightArrowBlackSmall,RightRedArrow,AddBenefiary,RightRedArrow1, Split, GreyInfo } from "../../constants/SvgLocations";
import SegmentedControlTab from "react-native-segmented-control-tab";

const MainButton = (props) => {
	const { theme } = useTheme();
	const [selectedIndex, SetselectedIndex] = useState(0);
    let Component = TouchableOpacity;

	const handleIndexChange = (value) => {
		SetselectedIndex(value);
	  };
  	
  	return (
    	<>
		{/* {props.segmentButton?
		<View
		style={{
			marginTop:actuatedNormalize(10)
		}}
		>
		 <SegmentedControlTab
		  tabsContainerStyle={{
		 marginHorizontal:actuatedNormalize(10),
		  }}
		  tabStyle={[globalStyles.segmenttabStyle,{ backgroundColor: theme.primarycolor2_20,}]}
		  activeTabStyle={[globalStyles.segmentactiveTabStyle,{shadowColor: "rgba(0, 0, 0, 0.15)",backgroundColor:theme.primarycolor4,}]}
		  tabTextStyle={[globalStyles.segmenttabTextStyle,{color: "#000"}]}
		  activeTabTextStyle={[globalStyles.segmenttabTextStyle,{color: "#000"}]}
          values={props.data}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
        />
		</View>
		:null} */}
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
            		<View style={[{	backgroundColor:props.disabled?theme.primarycolor2_30:theme.primarycolor3,alignSelf:"flex-start"},globalStyles.primaryFlexBoxLarge, props.primaryFlexBoxLarge]}>			
                  		 <TextComponent style={[{color: theme.primarycolor4},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.label}</TextComponent>
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
				<View style={[{	backgroundColor:props.disabled?theme.primarycolor2_30:theme.primarycolor3,alignSelf:"flex-start"},globalStyles.primaryFlexBoxSmall,props.primaryFlexBoxSmall]}>			
					<TextComponent style={[{color: theme.primarycolor4},globalStyles.primaryTextSmall,props.primaryTextSmall]}>{props.label}</TextComponent>
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
				<View style={[{	backgroundColor:props.disabled?theme.primarycolor2_30:theme.primarycolor,alignSelf:"flex-start"},globalStyles.primaryFlexBoxLarge,props.primaryFlexBoxLarge]}>			
					<TextComponent style={[{color: theme.primarycolor4},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.label}</TextComponent>
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
				<View style={[{	backgroundColor:props.disabled?theme.primarycolor2_30:theme.primarycolor,alignSelf:"flex-start"},globalStyles.primaryFlexBoxSmall,props.primaryFlexBoxSmall]}>			
					<TextComponent style={[{color: theme.primarycolor4},globalStyles.primaryTextSmall,props.primaryTextSmall]}>{props.label}</TextComponent>
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
				<View style={[{	backgroundColor:theme.primarytextcolor4,borderColor:props.disabled?theme.primarycolor2_30: theme.primarycolor,alignSelf:"flex-start"},globalStyles.secondaryFlexBoxLarge,props.secondaryFlexBoxLarge]}>			
					<TextComponent style={[{color:props.disabled?theme.primarycolor2_30: theme.primarycolor},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.label}</TextComponent>
				</View>
				</Component>:null}

			{/* Secondary Large Button Red Border */}
{/* 
				{props.enableSecondaryBorderRed?
					<Component
					testID={props.testID ? props.testID : 'primaryCTARB'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTARB'
					}
					onPress={props.onPress}
					disabled={props.disabled}
				>
				<View style={[{	backgroundColor:theme.primarytextcolor4,borderColor:props.disabled?theme.primarycolor2_30: theme.primarycolor3,alignSelf:"flex-start"},props.secondaryFlexBoxLarge,globalStyles.secondaryFlexBoxLarge]}>			
					<TextComponent style={[{color:props.disabled?theme.primarycolor2_30: theme.primarycolor3},props.primaryTextLarge,globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
				</View>
				</Component>:null} */}

			{/* Prelogin Red Background Button */}
				{/* {props.preloginRedButton?
					<Component
						testID={props.testID ? props.testID : 'primaryCTALarge'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTALarge'
						}
						onPress={props.onPress}
						disabled={props.disabled}
					>
            		<View style={[{	backgroundColor:props.disabled?theme.primarycolor2_30:theme.primarycolor3,alignSelf:"flex-start"},props.preloginRedButton,globalStyles.preloginRedButton]}>			
                  		 <TextComponent style={[{color: theme.primarycolor4},props.primaryTextLarge,globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
        			</View>
					</Component>:null} */}

			{/* Prelogin Black Background Button */}
			
					{/* {props.preloginBlackButton?
					<Component
					testID={props.testID ? props.testID : 'primaryCTALargeBlack'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTALargeBlack'
					}
					onPress={props.onPress}
					disabled={props.disabled}
				>
				<View style={[{	backgroundColor:props.disabled?theme.primarycolor2_30:theme.primarycolor,alignSelf:"flex-start"},props.preloginRedButton,globalStyles.preloginRedButton]}>			
					<TextComponent style={[{color: theme.primarycolor4},props.primaryTextLarge,globalStyles.primaryTextLarge]}>{props.label}</TextComponent>
				</View>
				</Component>:null} */}

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
					style={[globalStyles.quickActionButtonBox,props.quickActionButtonBox,{backgroundColor: theme.stylesblockbg} ]}
					>
						<View
							style={{
							marginTop: actuatedNormalize(8),
							}}
						>
							{props.Icon}
						</View>
						<TextComponent style={[globalStyles.quickActionButtonTxt,props.quickActionButtonTxt,{  color: theme.primaryblack}]}>{props.quickActionButtonLabel}</TextComponent>
					</View>
					:null}

				    {props.quickActionButtonType===2?
								<View
								style={[globalStyles.quickActionButtonBox1,props.quickActionButtonBox1,{backgroundColor: theme.stylesblockbg}]}
								>
										{props.Icon}
								
									<TextComponent style={[globalStyles.quickActionButtonTxt1,props.quickActionButtonTxt1,{  color: theme.primaryblack}]}>{props.quickActionButtonLabel}</TextComponent>
									<View
									style={[globalStyles.badgeNotification,props.badgeNotification,{}]}
									>
									<TextComponent
									style={[globalStyles.badgeTxt,props.badgeTxt]}
									>{props.listNotificationCount}</TextComponent></View>
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
								style={[globalStyles.quickActionButtonBox2,props.quickActionButtonBox2,{backgroundColor: theme.stylesblockbg}]}
								>
										{props.Icon}
								</View>
								<TextComponent style={[globalStyles.quickActionButtonTxt2,props.quickActionButtonTxt2,{color: theme.primaryblack}]}>{props.quickActionButtonLabel}</TextComponent>
							
							<View
							style={[globalStyles.badgeNotification1,props.badgeNotification1]}
							>
								<TextComponent
									style={[globalStyles.badgeTxt,props.badgeTxt]}
									>{props.listNotificationCount}</TextComponent>
							</View>
							</View>
					:null}
			
				</Component>:null}

				{/* Link Button */}

				{props.linkButton?
					<Component
						testID={props.testID ? props.testID : 'linkButton'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'linkButton'
						}
						onPress={props.onPress}>
							<View
							style={{
								flexDirection: "row",
								alignItems:"center",
							}}
							>
								<TextComponent
								style={[props.linkType==="small"?globalStyles.linkTextsmall:globalStyles.linkTextlarge,props.linkText,{color:theme.primarycolor3,alignSelf:"center"}]}
								>{props.label}</TextComponent>
							<RightRedArrow1
							style={{
								marginTop:actuatedNormalize(2)
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							></RightRedArrow1>

							</View>
			
						</Component>:
						
				null}

					{/* Floating Button */}

					{/* {props.floatingButton?
					<Component
						testID={props.testID ? props.testID : 'floatingButton'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'floatingButton'
						}
						onPress={props.onPress}>
						<View
						style={[globalStyles.floatingButton,{ backgroundColor:theme.primarycolor3,}]}>
							<AddBenefiary
							width={actuatedNormalize(32)}
							height={actuatedNormalize(32)}
							/>

						</View>
			
						</Component>:
						
				null} */}

				{/*  Button Group */}

				{props.enableprimary?
						<Component
						style={{
							marginHorizontal:actuatedNormalize(16),
							marginVertical:actuatedNormalize(16)
						}}
							testID={props.testID ? props.testID : 'primaryCTA'}
							accessibilityLabel={
							props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTA'
							}
							onPress={props.onPress}>
						
						<View style={[{	backgroundColor:props.disabled?theme.primarycolor2_30:theme.primarycolor3,}, globalStyles.primaryFlexBoxLarge,props.primaryFlexBoxLarge]}>			
						<TextComponent style={[{color: theme.primarycolor4}, globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.label}</TextComponent>
						</View>
							</Component>:null}

			{/* Chips */}
				{props.chips?
				<Component
					style={{
						marginHorizontal:actuatedNormalize(16),
						marginVertical:actuatedNormalize(16)
					}}
						testID={props.testID ? props.testID : 'chips'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'chips'
						}
					onPress={props.onPress}>
					{props.chipsType==="large"||props.chipsType==="small"?
						<View style={[{	backgroundColor:props.chipsBackgroudColor,borderColor:props.chipsBorderColor,alignSelf:"flex-start"},props.chipsType==="large"?props.chipsButtonLarge:props.chipsButtonSmall,props.chipsType==="large"?globalStyles.chipsButtonLarge:globalStyles.chipsButtonSmall]}>			
                  		 <TextComponent style={[{color: theme.primarycolor},props.chipsType==="large"?props.chipsTextLarge:props.chipsTextSmall,props.chipsType==="large"?globalStyles.chipsTextLarge:globalStyles.chipsTextSmall]}>{props.label}</TextComponent>
        			</View>
							
					:
						<View
						style={{
							flexDirection:"row",
							alignItems:"center",
							justifyContent:"center"
						}}
						>
						{props.Icon}
						<TextComponent style={[globalStyles.chipsTextSmall,{color: theme.primarycolor}]}>{props.label}</TextComponent>
						</View>
					}
						</Component>	:null}


					{props.enableSecondary?		

					<Component
							style={{
								marginHorizontal:actuatedNormalize(16)
							}}
								testID={props.testID ? props.testID : 'floatingButton'}
								accessibilityLabel={
								props.accessibilityLabel ? props.accessibilityLabel : 'floatingButton'
								}
								onPress={props.onPress}>
							
							<View style={[{	backgroundColor:theme.primarytextcolor4,borderColor:props.disabled?theme.primarycolor2_30: theme.primarycolor,},globalStyles.secondaryFlexBoxLarge,props.secondaryFlexBoxLarge]}>			
						<TextComponent style={[{color:props.disabled?theme.primarycolor2_30: theme.primarycolor},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.label}</TextComponent>
					</View>
					</Component>:null}
				
				{props.enableImageButton?				
				<Component>
					<View
					style={[globalStyles.imageButton,props.imageButton,{borderColor: "#000",}]}
					>
						<Split
						width={actuatedNormalize(24)}
						height={actuatedNormalize(24)}
						
						></Split>
					</View>
				</Component>:null}
					

					{/* List Button */}

					{props.listButton?
					<Component
						testID={props.testID ? props.testID : 'listButton'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'listButton'
						}
						onPress={props.onPress}>

						{props.listButtonType===1|| props.listButtonType===2?

						<View
						style={[props.listButtonType===1?globalStyles.listButtonSmall:globalStyles.listButtonLarge,{backgroundColor:theme.stylesblockbg},props.listButton]}>
							<View>
								{props.Icon}
							</View>
						<View
						style={{
							//backgroundColor:"yellow",
							flexDirection:"column"
						}}
						>	
							<TextComponent
								style={[globalStyles.listButtonTxtLargeHeadline,,props.listButtonTxt,{color:theme.primaryblack}]}
								>{props.listHeadlLine}</TextComponent>
								<TextComponent
								style={[globalStyles.listButtonTxtLarge,,props.listButtonTxt,{color:theme.primarycolor2_100}]}
								>{props.listDescription}</TextComponent>
						</View>

						
							<View>
								{props.listButtonType===1?
								<RightArrowBlackSmall
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></RightArrowBlackSmall>:null}
								{props.listButtonType===2?
								<RightArrowBlackLarge
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></RightArrowBlackLarge>:null}
								</View>
							</View>
						:
						props.listButtonType===3?
						<View style={[globalStyles.listButtonDashboard,props.listButtonDashboard,{backgroundColor:theme.stylesblockbg}]}>
						<TextComponent
						style={[globalStyles.listButtonTxt,props.listButtonTxt,{color:theme.primaryblack}]}
						>{props.label}</TextComponent>
						<RightRedArrow
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></RightRedArrow>
						</View>:
					<View
					style={[globalStyles.listButtonDashboard1,props.listButtonDashboard1,{backgroundColor:theme.stylesblockbg}]}
					>
						<RightRedArrow
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								style={{
									transform: [{ rotate:  "90deg"  }],
									marginRight:actuatedNormalize(8)
							}}
								></RightRedArrow>
						<TextComponent
							style={[globalStyles.listButtonTxt1,props.listButtonTxt1,{color:theme.primaryblack}]}
						>{props.label}</TextComponent>
					</View>
						}
						
						</Component>:
						
				null}

</>	
			);
};

const styles = StyleSheet.create({

  });

export default MainButton;
