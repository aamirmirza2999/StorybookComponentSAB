import * as React from "react";
import {Image, StyleSheet, View, Text, I18nManager} from "react-native";
import PngLocations from "../../constants/PngLocations";
import SvgIconList from "../../constants/SvgIconList";
import { actuatedNormalize } from "../../constants/PixelScaling";
import * as Progress from "react-native-progress";
import { globalStyles } from "../../constants/GlobalStyles";
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { spacingM, spacingXXS, 
	spacingXL, spacingL, 
	lineHeightSmallMedium, lineHeightMedium, 
	lineHeightMediumLarge, fontMedium, fontLarge, 
	fontSmall, spacingXXL, spacingS, spacingXS 
} from '../../constants/Size';
import {
	RightArrow,
	InfoIconRed,
	IconsImages,
	TickIcon,
	Slices,
	Cancel,
	Toggle,
	RadioUnSelect,
	EditBlack,
	Delete,
	CheckboxUnSelected,
	Whiterightarrow,
	TextInfoIconDark,
	SabLogoRound,
	BankLogo,
	Toggleunselect,
	ProfileEditIconDark,
	SuccessTick,
	CheckboxSelected1,
	RadioSelect,
	BulletPoint,
	NewExclamatory,
	InfoIcon,
	GreyInfo
  } from '../../constants/SvgLocations';
  import TextComponent from './TextComponent';



const CategoryStory = (props) => {
	const { isDarkMode, theme } = useTheme();

	const getDefaultAction = () => {
		switch (props.listItemActionType) {
			case 'Toggle':
			// return (
			// 	<Toggleunselect width={actuatedNormalize(43)} height={actuatedNormalize(27)} />
			// );
			if (props.listItemActionstoggleState === 'Unselected') {
				return <Toggleunselect 
				width={actuatedNormalize(43)} 
				height={actuatedNormalize(27)} 
				/>
			} else {
				return <Toggle 
				width={actuatedNormalize(43)} 
				height={actuatedNormalize(27)} 
				/>
			}
			case 'Check Box':
				if (props.listItemActionscheckboxIconState === 'Disabled') {
					return <CheckboxUnSelected width={spacingM} height={spacingM} />;
				} else if (props.listItemActionscheckboxIconState === 'Checked') {
					return <CheckboxSelected1 width={actuatedNormalize(28)} height={actuatedNormalize(28)} />;
				} else {
					return <CheckboxUnSelected width={spacingM} height={spacingM} />;
				}
			case 'Chevron':
			return isDarkMode ? <Whiterightarrow transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
			width={actuatedNormalize(28)} height={actuatedNormalize(28)} /> : 
			<RightArrow transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
				width={actuatedNormalize(28)} height={actuatedNormalize(28)} />;
			case 'Radio Button':
				if (props.listItemActionsradiobuttonIconState === 'Unchecked') {
					return <RadioUnSelect width={spacingM} height={spacingM} />;
				} else if (props.listItemActionsradiobuttonIconState === 'Checked') {
					return <RadioSelect width={spacingM} height={spacingM} />;
				} else {
					return <RadioUnSelect width={spacingM} height={spacingM} />;
				}
			// <RadioUnSelect width={spacingM} height={spacingM} />;
			case 'Edit':
			return (
				<View style ={{marginTop: 0}}>
					<EditBlack width={actuatedNormalize(28)} height={actuatedNormalize(28)} />
				</View>
		    )
			case 'Delete':
			return (
			<View style={{marginTop: 0}}>
				<Delete width={actuatedNormalize(28)} height={actuatedNormalize(28)} />
			</View>
		    )
			case 'Tick':
			return (
				<View style={{marginTop: 0}}>
					<SuccessTick width={spacingL} height={spacingL}/>
				</View>
			)
			default:
			return <Toggle width={actuatedNormalize(43)} height={actuatedNormalize(27)} />;
			;
		}
	};

	const barprogress = () => {
		switch (props.BarProgressProperty1) {
		  case '100%':
			if (props.BarProgresshorizontalbarProperty1 === "active") {
				return {
					width : "100%"
				  }
			}else {
				return {
					width : "0%"
				  }
			}
		  case '75%':
			if (props.BarProgresshorizontalbarProperty1 === "active") {
				return {
					width : "100%"
				  }
			}else {
				return {
					width : "75%"
				  }
			}
		  case '50%':
			if (props.BarProgresshorizontalbarProperty1 === "active") {
				return {
					width : "100%"
				  }
			}else {
				return {
					width : "50%"
				  }
			}
		  case '25%':
			if (props.BarProgresshorizontalbarProperty1 === "active") {
				return {
					width : "100%"
				  }
			}else {
				return {
					width : "25%"
				  }
			}
		  default:
			return {
				width : "75%"
		  }
		}
	};

  	return (
		<>
		{props.stackedListItemType === 'Default' ? (
        <View style = {{
			flex : 1, marginTop: actuatedNormalize(10),
			}}
		>
			<View style={globalStyles.catagroystackedlistitem}>
                <View style={[globalStyles.catagroystackedlistitemdefault,globalStyles.catagroywrapperFlexBox]}>
                        <View style={globalStyles.catagroylistitemaddon}>
						{props.stackedListItemDefaultIcon && (
                        //     <View style={[globalStyles.catagroywrapper,globalStyles.catagroywrapperFlexBox]}>
						//    {/* <Image style={styles.iconsab360transport} resizeMode="cover" source={PngLocations.IconsImages} /> */}
						// 		<SvgIconList	
						// 		icon="ImagesIcon"
						// 		width={actuatedNormalize(24)}
						// 		height={actuatedNormalize(24)}                            
						// 		/>
				        //     </View>
						    <ListItemAddon addonType={props.listitemAddonType} props={props} />
						)}
                        </View>
                        <View style={globalStyles.catagroystackedlistitembody}>
                            {/* <Text style={[globalStyles.catagroyheadline, globalStyles.catagroysarTypo]}>{'Cars & Transportation'}</Text>
                            <Text style={[globalStyles.catagroybodyCopy, globalStyles.catagroysarTypo]}>58%</Text> */}
							<StackedListItemBody
								stackedListItemBodyType={props.stackedListItemBody}
								stackedListItemBodyShowContent={
									props.stackedListItemBodyShowContent
								}
								stackedListItemBodyShowLabel={
									props.stackedListItemBodyShowLabel
								}
								stackedListItemBodyShowSubTitle={
									props.stackedListItemBodyShowSubTitle
								}
								stackedListItemBodyShowBodyCopy={
									props.stackedListItemBodyShowBodyCopy
								}
								stackedListItemBodyShowStatus={
									props.stackedListItemBodyShowStatus
								}
								stackedListItemBodyStatusState={
									props.stackedListItemBodyStatusState
								}
								stackedListItemBodyHeadline={
									props.stackedListItemBodyHeadline
								}
								stackedListItemBodyContent={
									props.stackedListItemBodyContent
								}
								stackedListItemBodyLabel={
									props.stackedListItemBodyLabel
								}
								stackedListItemBodyValue={
									props.stackedListItemBodyValue
								}
								stackedListItemBodySubTitle={
									props.stackedListItemBodySubTitle
								}
								stackedListItemBodystatusStatus={
									props.stackedListItemBodystatusStatus
								}
						    />
                        </View>
                            <View style={globalStyles.catagroybadgestatus}>
							 {props.stackedListItemDefaultBadge && (
                            //     <View style={globalStyles.catagroywrapper1}>
							// 		<Text style={globalStyles.catagroycontent}>1,230.00</Text>
							// 		<View style={globalStyles.catagroywrapper2}>
							// 			<Text style={[globalStyles.catagroysar, globalStyles.catagroysarTypo]}>SAR</Text>
							// 		</View>
						    //    </View>
								<BadgeStatus
									badgeStatusType={props.badgeStatusType}
									badgeNotificationType={props.badgeNotificationType}
									badgeNotificationSize={props.badgeNotificationSize}
									badgeNotificationNumber={props.badgeNotificationNumber}
									badgeStatusShowFirstValue={props.badgeStatusShowFirstValue}
	                                badgeStatusShowSecondValue={props.badgeStatusShowSecondValue}
									badgeStatusSecondValue={props.badgeStatusSecondValue}
									badgeStatuschipsInfoState={props.badgeStatuschipsInfoState}
									badgeStatuschipsInfoSize={props.badgeStatuschipsInfoSize}
									badgeStatuschipsInfoType={props.badgeStatuschipsInfoType}
									badgeStatuschipsInfoShowIcon={props.badgeStatuschipsInfoShowIcon}
									badgeStatuschipsInfoLabel={props.badgeStatuschipsInfoLabel}
									badgeStatusText={props.badgeStatusText}
									badgeStatusFirstValue={props.badgeStatusFirstValue}
							    />
							 )}
                            </View>
							{props.stackedListItemDefaultAction && (
								<View style = {{
									// marginTop : 5,
									alignSelf: "center"
								}}>
									{/* <SvgIconList
										icon="SabrightArrow"
										width={actuatedNormalize(18)}
										height={actuatedNormalize(18)}                            
									/> */}
								{getDefaultAction()}
								</View>
							)}
                </View>
            </View>
            {/* <View style={[globalStyles.barParent,{flex : 1,marginTop: 10}]}>
                <Progress.Bar
                    unfilledColor={"#eee"}
                    color={"#a15a4f"}
                    // borderRadius={"100"}
                    borderWidth={0}
                    progress={0.6}
                    width={null}
                />
            </View> */}
			<View style={globalStyles.barProgress}>
				<View style={[globalStyles.horizontalbarWrapper, globalStyles.horizontalbarPosition]}>
				<View style={[globalStyles.horizontalbarWrapper, globalStyles.horizontalbarPosition]}>
				<View style={[globalStyles.bar, globalStyles.horizontalbarPosition]} />
				</View>
				</View>
				<View style={[globalStyles.horizontalbar1, globalStyles.horizontalbarPosition,barprogress()]} />
			</View>
			
        </View>
		) : 
		(
			<View style = {{
				// flex : 1, marginTop: 10,
				}}>
				
				<View style = {{flexDirection : "column"}}>
					<Text
						style={[
						globalStyles.categorylink1,
						globalStyles.linkTypo1,
						{ color: theme.primarycolor },
						]}>
						{props.CategoryActionableMenuText1}
					</Text>
					<Text
						style={[
						globalStyles.categorylink2,
						globalStyles.linkTypo1,
						{ color: theme.primarycolor },
						]}>
						{props.CategoryActionableMenuText2}
					</Text>
					{props.Seconvalue && (
						<Text
							style={[
							globalStyles.categorylink3,
							globalStyles.linkTypo1,
							{ color: theme.primarycolor2_5 },
							]}
						>
						    {props.CategoryActionableMenuText3}
						</Text>
					)}
				</View>
				{props.Divider && (
					<View
					style={[
						globalStyles.dividerStyle3,
						{ backgroundColor: theme.primarycolor2_20 },
					]}
					/>
				)} 
			</View>
		)
		}
		</>
    );
};
const ListItemAddon = ({ addonType , props}) => {
	const { theme, isDarkMode } = useTheme();
	const AvatarSizes = () => {
	  switch (props.listItemAddonAvatarSize) {
		case 'Small':
		  return {
			fontSize: fontSmall,
			lineHeight: lineHeightSmallMedium,
		  };
		case 'Medium':
		return {
			fontSize: fontMedium,
			lineHeight: lineHeightMedium,
		};
		case 'Large':
		  return {
			fontSize: fontLarge,
			lineHeight:lineHeightMediumLarge,
		  };
		
		default:
		  return {
			fontSize: actuatedNormalize(12),
			lineHeight: actuatedNormalize(17),
		  };
	  }
	};
  
	// Avatar Icon Width function
	const AvatarIconWidth = () => {
	  switch (props.listItemAddonAvatarSize) {
		case 'Small':
		  return spacingL;
		case 'Medium':
		  return spacingXL;
		case 'Large':
		return spacingXXL;
		default:
		  return spacingXXL;
	  }
	};
	return (
	  <>
		
		{addonType === 'Avatar' && (
			<>
			  {props.listItemAddonAvatarElements === 'Initials' && (
				<View style={[globalStyles.categoryavatarListItemAddon1, { backgroundColor: theme.primarycolor3tonal }]}>
				  <TextComponent
					style={[
					  globalStyles.categoryavatarListItemAddonText,
					  { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor3 },
					  AvatarSizes(),
					]}>
					{props.listItemAddonAvatarInitials}
				  </TextComponent>
				</View>
			  )}
			  {props.listItemAddonAvatarElements === 'Icon' && (
				<View style={[globalStyles.categoryavatarSectionDarkTheme]}>
				  {props.listItemAddonAvatarType === 'Filled' ? (
					<SvgIconList
					  icon="AvatarIconFilled"
					  width={AvatarIconWidth()} // Directly use the value, not an object
					  height={AvatarIconWidth()}
					/>
				  ) : (
					<SvgIconList
					  icon="AvatarIconOutlined"
					  width={AvatarIconWidth()} // Directly use the value, not an object
					  height={AvatarIconWidth()}
					/>
				  )}
				  {props.listItemAddonavataredit && (
					<View style={globalStyles.categoryeditIconWrapper}>
					  <ProfileEditIconDark width={spacingS} height={spacingS} />
					</View>
				  )}
				</View>
			  )}
			</>
		  )}
		{addonType === 'Icon' && (
		//   isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />
		<IconsImages width={spacingM} height={spacingM} />
		)}
		{addonType === 'Icon with BG' && (
		  <View
			// style={[
			//   globalStyles.wrapperListItemAddon,
			//   { backgroundColor: theme.primarycolor2_10 },
			// ]}
			style={[globalStyles.catagroywrapper,globalStyles.catagroywrapperFlexBox]}
			>
			{/* {isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />} */}
			<IconsImages width={spacingM} height={spacingM} />
		  </View>
		)}
		{addonType === 'Pie Graph' && (
		  <View>
			<Slices />
			<TextComponent
			  style={[
				globalStyles.CtPieGraphListItemAddon,
				{ color: theme.primaryComTextComponentcolor3, marginTop: actuatedNormalize(1) },
			  ]}>
			  45%
			</TextComponent>
		  </View>
		)}
		{addonType === 'Logo' && (
		  isDarkMode ? <SabLogoRound width={spacingXL} height={spacingXL} /> : 
		  <SabLogoRound width={spacingXL} height={spacingXL} />
		)}
		{addonType === 'Avatar With Bank' && (
		  <View style={{ paddingRight: 0 }}>
			<View style={globalStyles.categoryavatarListItemAddon}>
			  <TextComponent
				style={[
				  globalStyles.categoryavatarListItemAddonText,
				  { color: theme.primarytextcolor3 },
				]}>
				JM
			  </TextComponent>
  
			</View>
			<View style={{
			  position: "absolute", right: -5,
			  bottom: -5,
  
			}}>
			  <BankLogo width={spacingM} height={spacingM} />
			</View>
		  </View>
		)}
	  </>
	);
};

const StackedListItemBody = ({
	stackedListItemBodyType,
	stackedListItemBodyShowContent,
	stackedListItemBodyShowLabel,
	stackedListItemBodyShowSubTitle,
	stackedListItemBodyShowBodyCopy,
	stackedListItemBodyShowStatus,
	stackedListItemBodyStatusState,
	stackedListItemBodyHeadline,
	stackedListItemBodyContent,
	stackedListItemBodyLabel,
	stackedListItemBodyValue,
	stackedListItemBodySubTitle,
	stackedListItemBodystatusStatus,
	}) => {
	const { theme } = useTheme();
  
	const getStatusColor = () => {
	  switch (stackedListItemBodyStatusState) {
		case 'Success':
		  return '#00847F';
		case 'Error':
		  return '#A8000B';
		case 'Warning':
		  return '#FFBB33';
		case 'Neutral':
		  return '#305A85';
		default:
		  return '#00847F';
	  }
	};
	return (
	  <>
		{stackedListItemBodyType === 'Headline+Body' && (
		    <View style = {{flexDirection : "column", justifyContent: "center",justifyContent:"center"}}>
				<Text
				style={[
					globalStyles.categorylabeltypoHeadline,
					{ color: theme.primarycolor },
					stackedListItemBodyShowContent ? 
					({marginTop : actuatedNormalize(0)}):({marginTop: actuatedNormalize(0)})
					
				]}>
				{stackedListItemBodyHeadline}
				</Text>
				{stackedListItemBodyShowContent && (
				<Text
					style={[
					globalStyles.categorylabeltypoBody,
					{ color: theme.primarytextcolor2 },
					{marginTop: actuatedNormalize(5)}
					]}>
					{stackedListItemBodyContent}
				</Text>
				)}
		    </View>
		)}
		{stackedListItemBodyType === 'Label+Value' && (
		  <View style = {{marginLeft: actuatedNormalize(5)}}>
			<Text
			  style={[
				globalStyles.CtlabelstackedListItemBodyType,
				globalStyles.CtlabelFlexBox,
				{ color: theme.primarytextcolor2 },
			  ]}>
			  {stackedListItemBodyLabel}
			</Text>
			<Text
			  style={[
				globalStyles.CtvaluestackedListItemBodyType,
				globalStyles.CtlabelFlexBox,
				{ color: theme.primarycolor },
				{marginTop : actuatedNormalize(0)}
			  ]}>
			  {stackedListItemBodyValue}
			</Text>
		  </View>
		)}
		{stackedListItemBodyType === 'Extra Content' && (
		  <View>
			{stackedListItemBodyShowLabel && (
			  <Text
				style={[
				  globalStyles.CtlabelstackedListItemBodyLabel,
				  globalStyles.CtlabelTypo,
				  { color: theme.primarytextcolor2_2 },
				  {marginBottom : actuatedNormalize(5)}
				]}>
				{stackedListItemBodyLabel}
			  </Text>
			)}
			
			<Text
			style={[
				globalStyles.CtstackedListItemBodyheadline,
				globalStyles.CtstackedListItemBodyheadlineFlexBox,
				{ color: theme.primarycolor },				
			]}>
				{stackedListItemBodyHeadline}
			</Text>
			
			{stackedListItemBodyShowSubTitle && (
			  <Text
				style={[
				  globalStyles.CtsubTitle,
				  globalStyles.CtstackedListItemBodyheadlineFlexBox,
				  { color: theme.primarycolor },
				]}>
				{stackedListItemBodySubTitle}
			  </Text>
			)}
			{stackedListItemBodyShowBodyCopy && (
			  <Text
				style={[
				  globalStyles.CtbodyCopy,
				  globalStyles.CtlabelTypo,
				  { color: theme.primarytextcolor2 },
				]}>
				{stackedListItemBodyContent}
			  </Text>
			)}
			{stackedListItemBodyShowStatus && (
			  <View style={globalStyles.Ctstatus}>
				<Text
				  style={[
					globalStyles.Ctstatus,
					globalStyles.CtlabelTypo,
					{ color: getStatusColor() },
					{marginTop: actuatedNormalize(5)}
				  ]}>
				  {stackedListItemBodystatusStatus}
				</Text>
			  </View>
			)}
		  </View>
		)}
	  </>
	);
};

const BadgeStatus = ({
	badgeStatusType,
	badgeNotificationType,
	badgeNotificationSize,
	badgeNotificationNumber,
	badgeStatusShowFirstValue,
	badgeStatusShowSecondValue,
	badgeStatuschipsInfoState,
	badgeStatuschipsInfoSize,
	badgeStatuschipsInfoType,
	badgeStatuschipsInfoShowIcon,
	badgeStatuschipsInfoLabel,
	badgeStatusText,
	badgeStatusFirstValue,
	badgeStatusSecondValue
  }) => {
	const { theme, isDarkMode } = useTheme();
	console.log('Proppss-->', badgeStatusType);
	const getBadgeBackgroundColor = () => {
	  switch (badgeNotificationType) {
		case 'Success':
		  return '#00847F';
		case 'Primary':
		  return '#A8000B';
		case 'Warning':
		  return '#FFBB33';
		case 'Neutral':
		  return '#305A85';
		case 'Reverse':
		  return '#ffffff';
		default:
		  return '#A8000B';
	  }
	};
  
	const getBadgeTextColor = () => {
	  switch (badgeNotificationType) {
		case 'Success':
		  return '#ffffff';
		case 'Primary':
		  return '#ffffff';
		case 'Warning':
		  return '#000000';
		case 'Neutral':
		  return '#000000';
		case 'Reverse':
		  return '#A8000B';
		default:
		  return '#000000';
	  }
	};
	const chipsinfoTextColor = () => {
		switch (badgeStatuschipsInfoState) {
		  case 'Success':
			return {
				backgroundColor: "#E5F2F2",
				borderColor: "#6699C2",
			  }
		  case 'Error':
			return {
				backgroundColor: theme.ragcolor3tint,
				borderColor: theme.strokecolor3tint,
			  }
		  case 'Warning':
			return {
				backgroundColor: "#FFF8EA",
				borderColor: "#FFBB33",
			  }
		  case 'Neutral':
			return {
				backgroundColor: "#EBEFF4",
				borderColor: "#B2B2B2",
			  }
		  case 'Info':
			return {
				backgroundColor: "#E5F2F2",
				borderColor: "#6699C2",
			  }
		  default:
			return {
				backgroundColor: theme.ragcolor3tint,
				borderColor: theme.strokecolor3tint,
		  }
		}
	};
	const defaultIcon = () => {
		switch (badgeStatuschipsInfoState) {
			case 'Success':
			  return (
					<BulletPoint
						width={actuatedNormalize(18)} height={actuatedNormalize(18)}
					 />
			  )

				
			case 'Error':
			  return (
                    <Cancel
			            width={actuatedNormalize(18)} height={actuatedNormalize(18)}
			        />
			  )
				
			case 'Warning':
			  return (
                    <NewExclamatory
			            width={actuatedNormalize(18)} height={actuatedNormalize(18)}
			        />
			  )
			case 'Neutral':
			  return (
                    <GreyInfo
			           width={actuatedNormalize(18)} height={actuatedNormalize(18)}
			        />
			  )
			  
			case 'Info':
			  return (
                    <InfoIcon
			            width={actuatedNormalize(18)} height={actuatedNormalize(18)}
			        />
			  )
			  
			default:
			  return (
			  <Cancel
			     width={actuatedNormalize(18)} height={actuatedNormalize(18)}
			  />
			)
		}
	}
	const chipsinfoTextSize = () => {
		switch (badgeStatuschipsInfoSize) {
		  case 'Large':
			return {
				paddingHorizontal:spacingXS,
                paddingVertical: actuatedNormalize(8),
			  }
		  case 'Small':
			return {
				paddingHorizontal: spacingXS,
                paddingVertical: actuatedNormalize(4),
			  }
		  default:
			return {
				paddingHorizontal: spacingXS,
                paddingVertical: actuatedNormalize(2),
		  }
		}
	};
  
	const getBadgeTextSize = () => {
	  switch (badgeNotificationSize) {
		case 'Small':
		  return {
			fontSize: actuatedNormalize(12),
			lineHeight: actuatedNormalize(17),
		  };
		case 'Large':
		  return {
			fontSize: actuatedNormalize(14),
			lineHeight: actuatedNormalize(18),
		  };
		case 'XS':
		  return {
			fontSize: actuatedNormalize(11),
			lineHeight: actuatedNormalize(15),
		  };
		default:
		  return {
			fontSize: actuatedNormalize(12),
			lineHeight: actuatedNormalize(17),
		  };
	  }
	};
   
	return (
	  <>
		{badgeStatusType === 'Badge Notification' && (
		  <View
			style={[
			  globalStyles.CtbadgenotificationList,
			  { backgroundColor: getBadgeBackgroundColor() },
			]}>
			<Text
			  style={[
				globalStyles.CtcircularViewtext,
				{ color: getBadgeTextColor() },
				getBadgeTextSize(),
			  ]}>
			  {badgeNotificationNumber}
			</Text>
		  </View>
		)}
		{badgeStatusType === 'Chips Info' && (
		  <View style={globalStyles.CtrowFlexBox}>
			<View
			  style={[
				badgeStatuschipsInfoType === 'Text with Icon' ? null:
				globalStyles.CtchipsinfoInactive,
				globalStyles.CtcenterFlexBox,
				// {
				//   backgroundColor: theme.ragcolor3tint,
				//   borderColor: theme.strokecolor3tint,
				// },
				badgeStatuschipsInfoType === 'Text with Icon' ? 

					null: chipsinfoTextColor(),
					
				chipsinfoTextSize()
			  ]}>
			  {/* <Text
				style={[
				  globalStyles.labelTypoInactive,
				  { color:isDarkMode?theme.primarytextcolor4:theme.primarytextcolor },
				]}>
				Inactive
			  </Text> */}
			  {badgeStatuschipsInfoType === 'Text with Icon' ? (
                <View style={globalStyles.CtchipsinfoBalanceStatusType}>
				    <View style = {{marginTop: actuatedNormalize(3)}}>
						{/* <Cancel 
						   width={actuatedNormalize(18)} height={actuatedNormalize(18)}
						/> */}
						{defaultIcon()}
				    </View>
				    <Text
					  style={[globalStyles.CtlabelInactive, { color: theme.primarycolor }]}>
					  {badgeStatuschipsInfoLabel}
				    </Text>
			    </View>
			  )
			  : (
				<View style={globalStyles.CtchipsinfoBalanceStatusType}>
					{badgeStatuschipsInfoShowIcon &&
					
					    // <Cancel
					    //    width={actuatedNormalize(18)} height={actuatedNormalize(18)}
					    // />
						defaultIcon()
					
					}
					<Text
						style={[globalStyles.CtlabelInactive, { color: theme.primarycolor }]}>
						{badgeStatuschipsInfoLabel}
					</Text>
				</View>
			  )
			  }
			</View>
		  </View>
		)}
		{badgeStatusType === 'Text' && (
		  <Text
			style={[globalStyles.CtcontentText, { color: theme.primarytextcolor2 }]}>
			{badgeStatusText}
		  </Text>
		)}
  
		{badgeStatusType === 'Balance' && (
		  <View style={globalStyles.Cttypebalance}>
			<View
			  style={[
				globalStyles.Cttypebalance,
				globalStyles.CtwrapperFlexBoxBadgeStatusBalance,
				// badgeStatusShowSecondValue? 
				// ({marginTop : actuatedNormalize(0)}):({marginTop: actuatedNormalize(2)})
			  ]}
			>
				{badgeStatusShowFirstValue && (
				
					<Text
						style={[
						globalStyles.CtstackedListItemBodyheadline,
						globalStyles.CtcontentTypoRightAligned,
						{ color: theme.primarycolor },
						]}>
						{badgeStatusFirstValue}
					</Text>
				)}
				<View
					style={[
					globalStyles.CtwrapperBalanceSAR,
					globalStyles.CtwrapperFlexBoxBadgeStatusBalance,
					]}
				>
					<Text
					style={[globalStyles.CtsarLabel, { color: theme.primarycolor }]}>
					SAR
					</Text>
				</View>
			</View>
			{badgeStatusShowSecondValue && (
				<Text
					style={[
					globalStyles.CtcontentBalanceStatusType,
					globalStyles.CtcontentTypoRightAligned,
					{ color: theme.primarytextcolor2 },
					]}
				>
				 {badgeStatusSecondValue}
			    </Text>
			)}
		  </View>
		)}
		{badgeStatusType === 'Balance with Status' && (
		  <View style={globalStyles.Cttypebalance}>
			<View style={globalStyles.CtwrapperContentAndSar}>
			  <Text
				style={[
				  globalStyles.CtcontentBalanceWithStatus,
				  { color: theme.primarycolor },
				]}>
				{badgeStatusFirstValue}
			  </Text>
			  <View style={globalStyles.CtwrapperSARLabel}>
				<Text
				  style={[globalStyles.CtsarLabel, { color: theme.primarycolor }]}>
				  SAR
				</Text>
			  </View>
			</View>
			<View style={globalStyles.CtchipsinfoBalanceStatusType}>
			  <Cancel />
			  <Text
				style={[globalStyles.CtlabelInactive, { color: theme.primarycolor }]}>
				{badgeStatuschipsInfoLabel}
			  </Text>
			</View>
		  </View>
		)}
	  </>
	);
  };



const styles = StyleSheet.create({
	
});

export default CategoryStory;
