import React,{useEffect,useState} from 'react'
import { StyleSheet, View,TouchableOpacity,I18nManager, Alert, Text} from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";
import TextComponent from '../Common/TextComponent';
import { useTheme } from "../../constants/Theme/ThemeProvider";
import { actuatedNormalize } from "../../constants/PixelScaling";
import { RightArrowBlackLarge,RightArrowBlackSmall,BlackArrow,RightRedArrow,RightRedArrow1, Split, WhiteArrow, RightArrowDarkLarge, RightRedArrowDark, RightRedArrowDark1, BlackArrowDark,  } from "../../constants/SvgLocations";
import { spacingM, spacingS, spacingXL } from '../../constants/Size';
import CommonHelper from '../../constants/CommonHelper';
import SvgIconList from '../../constants/SvgIconList';

export const MainButton = (props) => {
	const { theme,isDarkMode } = useTheme();
	// useEffect(() => {
	
	// toggleTheme()
	
	//   }, [props.themeStatus]);


    let Component = TouchableOpacity;

  	return (
    	<>
		{/* Primary Large Button Red Background */}
      			{props.enablePrimaryBtn?
				props.type==="large"?
					<Component
						testID={props.testID ? props.testID : 'primaryCTALarge'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTALarge'
						}
						onPress={props.onPress}
						disabled={props.disablePrimaryBtn}
					>
            		<View style={[{	backgroundColor:props.disablePrimaryBtn?theme.primarycolor2_30:props.backgroundColor,alignSelf:"flex-start"},globalStyles.primaryFlexBoxLarge, props.primaryFlexBoxLarge]}>			
						{props.enableLeftIcon?
								<WhiteArrow
								style={{
									marginRight:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>
						:null}
						 <TextComponent style={[{color: theme.primarycolor4},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.label}</TextComponent>
						{props.enableRightIcon?
							<WhiteArrow
							style={{
								marginLeft:actuatedNormalize(8),
								transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							></WhiteArrow>
						:null}
					</View>
					</Component>:
					<Component
						testID={props.testID ? props.testID : 'primaryCTASmall'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTA'
						}
						onPress={props.onPress}
						disabled={props.disablePrimaryBtn}
					>
						<View style={[{	backgroundColor:props.disablePrimaryBtn?theme.primarycolor2_30:props.backgroundColor,alignSelf:"flex-start"},globalStyles.primaryFlexBoxSmall,props.primaryFlexBoxSmall]}>			
							{props.enableLeftIcon?
								<WhiteArrow
								style={{
									marginRight:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>
							:null}
							<TextComponent style={[{color: theme.primarycolor4},globalStyles.primaryTextSmall,props.primaryTextSmall]}>{props.label}</TextComponent>
							{props.enableRightIcon?
								<WhiteArrow
								style={{
									marginLeft:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>
						:null}
						</View>
					</Component>
					:null}

				{/* Secondary Large Button Black Border */}

				{props.enableSecondaryBtn?
				props.type==="large"?
					<Component
					testID={props.testID ? props.testID : 'secondaryCTABB'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'secondaryCTABB'
					}
					onPress={props.onPress}
					disabled={props.disableSecondaryBtn}
				>
				<View style={[{	backgroundColor:'transparent',borderColor:props.disableSecondaryBtn?theme.primarycolor:theme.primarycolor,alignSelf:"flex-start"},globalStyles.secondaryFlexBoxLarge,props.secondaryFlexBoxLarge]}>			
				{props.enableLeftIcon?
				isDarkMode?
				<WhiteArrow
								style={{
									marginRight:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>

								:
								<BlackArrow
								style={{
									marginRight:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
							
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></BlackArrow>
								
								
						:null}
					<TextComponent style={[{color:props.disableSecondaryBtn?theme.primarycolor2_30: theme.primarycolor},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.label}</TextComponent>
					{props.enableRightIcon?
					isDarkMode?
								
								<WhiteArrow
								style={{
									marginLeft:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>:
								<BlackArrow
								style={{
									marginLeft:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></BlackArrow>
						:null}
				</View>
				</Component>:
				<Component
					testID={props.testID ? props.testID : 'secondaryCTABS'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'secondaryCTABS'
					}
					onPress={props.onPress}
					disabled={props.disableSecondaryBtn}
					>
					<View style={[{	backgroundColor:theme.primarytextcolor4,borderColor:props.disableSecondaryBtn?theme.primarycolor2_30: theme.primarycolor,alignSelf:"flex-start"},globalStyles.secondaryFlexBoxSmall,props.secondaryFlexBoxSmall]}>			
					{props.enableLeftIcon?
					isDarkMode?
							

								<WhiteArrow
								style={{
									marginRight:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>:

								<BlackArrow
								style={{
									marginRight:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></BlackArrow>

						:null}
						<TextComponent style={[{color:props.disableSecondaryBtn?theme.primarycolor2_30: theme.primarycolor},globalStyles.primaryTextSmall,props.primaryTextSmall]}>{props.label}</TextComponent>
						{props.enableRightIcon?
							isDarkMode?
						
							
								
							<WhiteArrow
								style={{
									marginLeft:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>:
								<BlackArrow
								style={{
									marginLeft:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></BlackArrow>
						:null}
					</View>
			</Component>
				:null}
		
			
</>	
			);
};

export const LinkButton = (props) => {
	const { theme,isDarkMode } = useTheme();

    let Component = TouchableOpacity;

  	return (
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
							{props.enableLeftIcon?
							isDarkMode?
							<RightRedArrowDark1
							style={{
							
								transform: [{ rotate:I18nManager.isRTL?"360deg":"180deg"}],
						
							marginTop:actuatedNormalize(2)
						}}
							/>:
							<RightRedArrow1
							style={{
							
									transform: [{ rotate:I18nManager.isRTL?"360deg":"180deg"}],
							
								marginTop:actuatedNormalize(2)
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							></RightRedArrow1>:null}
								<TextComponent
								style={[props.type==="small"?globalStyles.linkTextsmall:globalStyles.linkTextlarge,props.linkText,{color:isDarkMode? theme.primarycolor4 : theme.primarycolor3,alignSelf:"center"}]}
								>{props.label}</TextComponent>
							{props.enableRightIcon?
							isDarkMode?
							<RightRedArrowDark1
							style={{
								marginTop:actuatedNormalize(2),
								transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							/>:
							<RightRedArrow1
							style={{
								marginTop:actuatedNormalize(2),
								transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							></RightRedArrow1>
							:null}

							</View>
			
						</Component>
		
	)
};

export const GroupButton = (props) => {
	const { theme ,isDarkMode} = useTheme();

    let Component = TouchableOpacity;

  	return (
		<>
			<View
				style={{
					 marginVertical:spacingM,
					 marginHorizontal:spacingS
				}}
				>
					{props.buttonType==="stacked"?
					<>
					{props.enableprimary?
							<Component
								testID={props.testID ? props.testID : 'primaryCTA'}
								accessibilityLabel={
								props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTA'
								}
								onPress={props.onPressPrimary}
								disabled={props.disablePrimary}
								>
							
							<View style={[{	backgroundColor:props.disablePrimary?"rgba(118, 118, 118, 0.3)":props.backgroundColor,}, globalStyles.primaryFlexBoxLarge,props.primaryFlexBoxLarge]}>			
							{props.enableLeftIcon?
								<WhiteArrow
								style={{
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
									marginRight:actuatedNormalize(8),
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>
						:null}
							<TextComponent style={[{color: theme.primarycolor4}, globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.primaryLabel}</TextComponent>
							{props.enableRightIcon?
								<WhiteArrow
								style={{
									marginLeft:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>
						:null}
							</View>
								</Component>:null}

						{props.enableSecondary?
								<Component
								style={{
									marginTop:spacingS
								}}
								testID={props.testID ? props.testID : 'secondarybtn'}
								accessibilityLabel={
								props.accessibilityLabel ? props.accessibilityLabel : 'secondarybtn'
								}
								onPress={props.onPressSecondary}
								disabled={props.disableSecondary}
								>
							
							<View style={[{	backgroundColor:'transparent',borderColor:props.disableSecondary?theme.primarycolor2_30: theme.primarycolor,},globalStyles.secondaryFlexBoxLarge,props.secondaryFlexBoxLarge]}>			
							{props.enableLeftIcon?
							isDarkMode?
							<WhiteArrow
							style={{
								marginRight:actuatedNormalize(8),
								transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}/>:
							props.disableSecondary?
								<BlackArrowDark
								style={{
									marginRight:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></BlackArrowDark>:
								<BlackArrow
								style={{
									marginRight:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></BlackArrow>
						:null}
						<TextComponent style={[{color:props.disableSecondary?theme.primarycolor2_30: theme.primarycolor},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.secondaryLabel}</TextComponent>
						{props.enableRightIcon?
						isDarkMode?
						<WhiteArrow
						style={{
							marginLeft:actuatedNormalize(8),
							transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
						}}
						width={actuatedNormalize(24)}
						height={actuatedNormalize(24)}
						/>:
						props.disableSecondary?
								<BlackArrowDark
								style={{
									marginLeft:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></BlackArrowDark>:
								<BlackArrow
								style={{
									marginLeft:actuatedNormalize(8),
									transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></BlackArrow>
						:null}
					</View>
					</Component>:null}

					{props.enableTertiary?
							<Component
							style={{
								marginTop:spacingS,
								alignSelf:"center"
							}}
							testID={props.testID ? props.testID : 'linkButton'}
							accessibilityLabel={
							props.accessibilityLabel ? props.accessibilityLabel : 'linkButton'
							}
							onPress={props.onPressTertiary}>
								<View
								style={{
									flexDirection: "row",
									alignItems:"center",
								}}
								>
						{props.enableLeftIcon?
							isDarkMode?
							<RightRedArrowDark1
							style={{
							
								transform: [{ rotate:I18nManager.isRTL?"360deg":"180deg"}],
						
							marginTop:actuatedNormalize(2)
						}}/>:
							<RightRedArrow1
							style={{
							
									transform: [{ rotate:I18nManager.isRTL?"360deg":"180deg"}],
							
								marginTop:actuatedNormalize(2)
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							></RightRedArrow1>:null}
									<TextComponent
									style={[props.linktype==="small"?globalStyles.linkTextsmall:globalStyles.linkTextlarge,props.linkText,{color:theme.primarycolor3,alignSelf:"center"}]}
									>{props.tertiaryLabel}</TextComponent>
						
						{props.enableRightIcon?
						<>
						{isDarkMode?
							<RightRedArrowDark1
							style={{
								transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								marginTop:actuatedNormalize(2)
							}}/>:
								<RightRedArrow1
								style={{
									transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
									marginTop:actuatedNormalize(2)
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></RightRedArrow1>}</>:null}
	
								</View>
				
							</Component>
				:null}
				</>	:
				<View
				style={{
					flexDirection:"row",
					justifyContent:"space-evenly",
					alignItems:"center"
				}}
				>
				{props.enableprimary?
				<>
				{props.inlineSize==="large"?
				<Component
						testID={props.testID ? props.testID : 'primaryCTALarge'}
						accessibilityLabel={
						props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTALarge'
						}
						onPress={props.onPressPrimary}
						disabled={props.disablePrimary}
					>
            		<View style={[{	backgroundColor:props.disablePrimary?theme.primarycolor2_30:props.backgroundColor,alignSelf:"flex-start"},globalStyles.primaryFlexBoxLarge, props.primaryFlexBoxLarge]}>			
						{props.enableLeftIcon?
								<WhiteArrow
								style={{
									marginRight:actuatedNormalize(8),
								    transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
								}}
								width={actuatedNormalize(24)}
								height={actuatedNormalize(24)}
								></WhiteArrow>
						:null}
						 <TextComponent style={[{color: theme.primarycolor4},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.primaryLabel}</TextComponent>
						{props.enableRightIcon?
							<WhiteArrow
							style={{
								marginLeft:actuatedNormalize(8),
								transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							></WhiteArrow>
						:null}
					</View>
					</Component>

					:	<Component
					testID={props.testID ? props.testID : 'primaryCTASmall'}
					accessibilityLabel={
					props.accessibilityLabel ? props.accessibilityLabel : 'primaryCTA'
					}
					onPress={props.onPress}
					disabled={props.disablePrimaryBtn}
				>
					<View style={[{	backgroundColor:props.disablePrimaryBtn?theme.primarycolor2_30:props.backgroundColor,alignSelf:"flex-start"},globalStyles.primaryFlexBoxSmall,props.primaryFlexBoxSmall]}>			
						{props.enableLeftIcon?
							<WhiteArrow
							style={{
								marginRight:actuatedNormalize(8),
								transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							></WhiteArrow>
						:null}
						<TextComponent style={[{color: theme.primarycolor4},globalStyles.primaryTextSmall,props.primaryTextSmall]}>{props.primaryLabel}</TextComponent>
						{props.enableRightIcon?
							<WhiteArrow
							style={{
								marginLeft:actuatedNormalize(8),
								transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							></WhiteArrow>
					:null}
					</View>
				</Component>}
				</>
					:null}
				{props.enableSecondary?
				<>
				{props.inlineSize==="large"?
					<Component
							testID={props.testID ? props.testID : 'secondaryCTABB'}
							accessibilityLabel={
							props.accessibilityLabel ? props.accessibilityLabel : 'secondaryCTABB'
							}
							onPress={props.onPressSecondary}
							disabled={props.disableSecondary}
						>
						<View style={[{	backgroundColor:'transparent',borderColor:props.disableSecondary?theme.primarycolor2_30: theme.primarycolor,alignSelf:"flex-start"},globalStyles.secondaryFlexBoxLarge,props.secondaryFlexBoxLarge]}>			
						 {props.enableLeftIcon?
							isDarkMode?
							<BlackArrowDark
							style={{
								marginRight:actuatedNormalize(8),
								transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							/>:
										<BlackArrow
										style={{
											marginRight:actuatedNormalize(8),
											transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
										}}
										width={actuatedNormalize(24)}
										height={actuatedNormalize(24)}
										></BlackArrow>
								:null} 
							<TextComponent style={[{color:props.disableSecondary?theme.primarycolor2_30: theme.primarycolor},globalStyles.primaryTextLarge,props.primaryTextLarge]}>{props.secondaryLabel}</TextComponent>
							{props.enableRightIcon?
							isDarkMode?
							<BlackArrowDark
							style={{
								marginLeft:actuatedNormalize(8),
								transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
							}}
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							/>:
									<BlackArrow
									style={{
										marginLeft:actuatedNormalize(8),
										transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
									}}
									width={actuatedNormalize(24)}
									height={actuatedNormalize(24)}
									></BlackArrow>
								:null} 
						</View>
						</Component>:
							<Component
							testID={props.testID ? props.testID : 'secondaryCTABS'}
							accessibilityLabel={
							props.accessibilityLabel ? props.accessibilityLabel : 'secondaryCTABS'
							}
							onPress={props.onPress}
							disabled={props.disableSecondaryBtn}
							>
							<View style={[{	backgroundColor:theme.primarytextcolor4,borderColor:props.disableSecondaryBtn?theme.primarycolor2_30: theme.primarycolor,alignSelf:"flex-start"},globalStyles.secondaryFlexBoxSmall,props.secondaryFlexBoxSmall]}>			
							{props.enableLeftIcon?
							isDarkMode?
									
		
										<WhiteArrow
										style={{
											marginRight:actuatedNormalize(8),
											transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
										}}
										width={actuatedNormalize(24)}
										height={actuatedNormalize(24)}
										></WhiteArrow>:
		
										<BlackArrow
										style={{
											marginRight:actuatedNormalize(8),
											transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
										}}
										width={actuatedNormalize(24)}
										height={actuatedNormalize(24)}
										></BlackArrow>
		
								:null}
								<TextComponent style={[{color:props.disableSecondaryBtn?theme.primarycolor2_30: theme.primarycolor},globalStyles.primaryTextSmall,props.primaryTextSmall]}>{props.secondaryLabel}</TextComponent>
								{props.enableRightIcon?
									isDarkMode?
								
									
										
									<WhiteArrow
										style={{
											marginLeft:actuatedNormalize(8),
											transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
										}}
										width={actuatedNormalize(24)}
										height={actuatedNormalize(24)}
										></WhiteArrow>:
										<BlackArrow
										style={{
											marginLeft:actuatedNormalize(8),
											transform: [{ rotate:I18nManager.isRTL?"0deg":"180deg"}],
										}}
										width={actuatedNormalize(24)}
										height={actuatedNormalize(24)}
										></BlackArrow>
								:null}
							</View>
					</Component>}
						</>
						:null}
				{props.enableTertiary?
						<Component
							onPress={props.onPressTertiary}
						>
						<View
						style={[globalStyles.imageButton,props.imageButton,{borderColor: theme.primarycolor,}]}
						>
							<Split
							width={actuatedNormalize(24)}
							height={actuatedNormalize(24)}
							
							></Split>
						</View>
					</Component>
				:null}

				</View>
				
				}
				 </View>
		</>
	)
};

export const QuickButton = (props) => {
	const { theme,isDarkMode } = useTheme();

    let Component = TouchableOpacity;

  	return (
		<View
		style={{
			flex:1,
			backgroundColor:theme.stylescolorpressed1
		}}
		>
		<Component
		testID={props.testID ? props.testID : 'quickActionButton'}
		accessibilityLabel={
		props.accessibilityLabel ? props.accessibilityLabel : 'quickActionButton'
		}
		onPress={props.onPress}
	>
		{props.Type==="Vertical"?
		<View
		style={[globalStyles.quickActionButtonBox,props.quickActionButtonBox,{backgroundColor: theme.stylesblockbg} ]}
		>
			{props.HideIcon?
			<View
				style={{
				//marginTop: actuatedNormalize(48),
				}}
			>
				{props.Icon}
			</View>:null}
			<TextComponent style={[globalStyles.quickActionButtonTxt,props.quickActionButtonTxt,{  color: theme.primarycolor}]}>{props.Text}</TextComponent>
		</View>
		:null}

		{props.Type==="Horizontal"?
					<View
					style={[globalStyles.quickActionButtonBox1,props.quickActionButtonBox1,{backgroundColor: theme.stylesblockbg}]}
					>
							{props.Icon}
					
						<TextComponent style={[globalStyles.quickActionButtonTxt1,props.quickActionButtonTxt1,{  color: theme.primarycolor}]}>{props.Text}</TextComponent>
						{props.Badge?
						<View
						style={[globalStyles.badgeNotification,props.badgeNotification,{}]}
						>
						<TextComponent
						style={[globalStyles.badgeTxt,props.badgeTxt]}
						>{props.quickNotificationCount}</TextComponent></View>:null}
					</View>
		:null}

		{props.Type==="Vertical-Small"?
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
					<TextComponent style={[globalStyles.quickActionButtonTxt2,props.quickActionButtonTxt2,{color: theme.primarycolor}]}>{props.Text}</TextComponent>
			{props.Badge?
				<View
				style={[globalStyles.badgeNotification1,props.badgeNotification1]}
				>
					<TextComponent
						style={[globalStyles.badgeTxt,props.badgeTxt]}
						>{props.quickNotificationCount}</TextComponent>
				</View>:null}
				</View>
		:null}
		{props.Type==="Vertical-Small-Selected"?
			<View
			style={{
				flexDirection:"column",
				alignItems:"center"
			}}
			>
					<View
					style={[globalStyles.quickActionButtonBox3,props.quickActionButtonBox3,{backgroundColor: theme.stylesblockbg}]}
					><SvgIconList
					icon="AccountActionFill"
					width={24}
					height={24}
				   />
					</View>
					<TextComponent style={[globalStyles.quickActionButtonTxt3,props.quickActionButtonTxt3,{color: theme.primarycolor}]}>{props.quickActionButtonLabel}</TextComponent>
			{props.Badge?
				<View
				style={[globalStyles.badgeNotification1,props.badgeNotification1]}
				>
					<TextComponent
						style={[globalStyles.badgeTxt,props.badgeTxt]}
						>{props.quickNotificationCount}</TextComponent>
				</View>:null}
				</View>
		:null}

	</Component>
	</View>
	)
};

export const ListButton = (props) => {
	const { theme,isDarkMode } = useTheme();

    let Component = TouchableOpacity;

  	return (
		<Component
		testID={props.testID ? props.testID : 'listButton'}
		accessibilityLabel={
		props.accessibilityLabel ? props.accessibilityLabel : 'listButton'
		}
		onPress={props.onPress}>

		{props.listButtonType==="Big"|| props.listButtonType==="Small"?

		<View
		style={[props.listButtonType==="Small"?globalStyles.listButtonSmall:globalStyles.listButtonLarge,{backgroundColor:theme.stylesblockbg},props.listButton]}>
			<View
			style={{
				flexDirection:"row",
				//backgroundColor:"red",
				alignItems: "center",
				alignSelf:"center",
			}}
			>
				<View
				style={{
					flexDirection:"row",
					alignItems:"center",
					//backgroundColor:"yellow",
					width:"95%"
				}}
				>
			{props.showIcon?
			<View
			
			>
				{props.Icon}
			</View>:null}
		<View
		style={{
			flexDirection:"column",
			alignItems:"flex-start"
		}}
		>	
			<TextComponent
				style={[props.listButtonType==="Small"?globalStyles.listButtonTxtLargeHeadlineSmall:globalStyles.listButtonTxtLargeHeadline,,props.listButtonTxt,{color:theme.primarycolor}]}
				>{props.listHeadlLine}</TextComponent>
				{props.listButtonType==="Big"?
				<>
				{props.listDescription!==""?
				<TextComponent
				style={[globalStyles.listButtonTxtLarge,,props.listButtonTxt,{color:theme.primarycolor2_100}]}
				>{props.listDescription}</TextComponent>:null}
				<View
				style={{
					//flex:1,
					alignSelf:"flex-start"
				}}
				>
				{props.showBadge?
				<View style={globalStyles.listBadge}>
				<TextComponent style={globalStyles.listBadgeTxt}>{props.listBadgeText}</TextComponent>
				</View>:null}
				</View></>
				:null}
		</View>
		</View>

		
			<View
			style={{
			//backgroundColor:"blue",
				width:"5%",
				flexDirection:"row",
				alignSelf:"center"
			}}
			>
				{props.listButtonType==="Small"?
				<RightArrowBlackSmall
				style={{
					transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
				}}
				width={actuatedNormalize(24)}
				height={actuatedNormalize(24)}
				></RightArrowBlackSmall>:null}
				{props.listButtonType==="Big"?
				isDarkMode?<RightArrowDarkLarge
				style={{
					transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
				}}
				width={actuatedNormalize(24)}
				height={actuatedNormalize(24)}
				/>:
				<RightArrowBlackLarge
				style={{
					transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
				}}
				width={actuatedNormalize(24)}
				height={actuatedNormalize(24)}
				></RightArrowBlackLarge>:null}
				</View>
				</View>
			</View>
		:
		props.listButtonType==="Right"?
		<View style={[globalStyles.listButtonDashboard,props.listButtonDashboard,{backgroundColor:theme.stylesblockbg}]}>
		<TextComponent
		style={[globalStyles.listButtonTxt,props.listButtonTxt,{color:theme.primarycolor}]}
		>{props.label}</TextComponent>
		{isDarkMode?<RightRedArrowDark
		style={{
			transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
		}}
		width={actuatedNormalize(24)}
		height={actuatedNormalize(24)}
		/>:
		<RightRedArrow
		style={{
					transform: [{ rotate:I18nManager.isRTL?"180deg":"0deg"}],
				}}
				width={actuatedNormalize(24)}
				height={actuatedNormalize(24)}
				></RightRedArrow>}
				
				
		</View>:
	<View
	style={[globalStyles.listButtonDashboard1,props.listButtonDashboard1,{backgroundColor:theme.stylesblockbg}]}
	>{isDarkMode?<RightRedArrowDark
		width={actuatedNormalize(24)}
		height={actuatedNormalize(24)}
		style={{
			transform: [{ rotate:  "90deg"  }],
			marginRight:actuatedNormalize(8)
	}}
		/>:
		<RightRedArrow
				width={actuatedNormalize(24)}
				height={actuatedNormalize(24)}
				style={{
					transform: [{ rotate:  "90deg"  }],
					marginRight:actuatedNormalize(8)
			}}
				></RightRedArrow>}
		<TextComponent
			style={[globalStyles.listButtonTxt1,props.listButtonTxt1,{color:theme.primarycolor}]}
		>{props.label}</TextComponent>
	</View>
		}
		
			</Component>
	)
;}
const styles = StyleSheet.create({

  });


