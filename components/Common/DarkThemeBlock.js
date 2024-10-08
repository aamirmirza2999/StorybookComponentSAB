import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextComponent from './TextComponent';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { AvatarIconblack, AvatarIconwhite, BankLogo, Cancel, CheckboxSelected1, CheckboxUnSelected, Delete, EditBlack, InfoIconRed, ProfileEditIconDark, RadioUnSelect, RightArrow, SabLogoRound, Slices, SuccessTick, TextInfoIconDark, TickIcon, Toggle, Toggleunselect, Whiterightarrow } from '../../constants/SvgLocations';
import { globalStyles } from '../../constants/GlobalStyles';
import { fontLarge, fontMedium, fontMediumLarge, fontSmall, lineHeightMedium, lineHeightMediumLarge, lineHeightSmallMedium, spacingL, spacingM, spacingS, spacingXL, spacingXXL, spacingXXS } from '../../constants/Size';
import SvgIconList from '../../constants/SvgIconList';

const BadgeStatus = ({
  badgeStatusType, badgeNotificationType, chipsInfoLanguage,
  badgeNotificationSize, badgeNotificationNumber, chipsInfoLabelArabic,
  chipsInfoLabel, chipsInfoShowIcon, badgeStatusBalanceWithStatusFirstValue,
  chipsInfoState, chipsInfoType, chipsInfoSize, badgeStatusBalanceWithStatusShowFirstValue,
  badgeStatusFirstValue, badgeStatusSecondValue, badgeStatusText,
  badgeStatusShowFirstValue, badgeStatusShowSecondValue,
}) => {
  const { theme, isDarkMode } = useTheme();
  const getBadgeBackgroundColor = () => {
    switch (badgeNotificationType) {
      case 'Success':
        return theme.ragcolor6;
      case 'Primary':
        return theme.ragcolor3;
      case 'Warning':
        return theme.ragcolor15;
      case 'Neutral':
        return theme.ragneutral;
      case 'Reverse':
        return theme.primaryinvert;
      default:
        return theme.ragcolor15;
    }
  };
  const getChipsInfoBackgroundColor = () => {
    switch (chipsInfoState) {
      case 'Success':
        return theme.ragcolor6tint;
      case 'Warning':
        return theme.ragcolor15tint;
      case 'Neutral':
        return theme.ragneutraltint;
      case 'Error':
        return theme.ragcolor3tint;
      case 'Info':
        return theme.ragcolor6tint;
      default:
        return theme.ragcolor3tint;
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
  const getBadgeTextSize = () => {
    switch (badgeNotificationSize) {
      case 'Small':
        return {
          fontSize: 12,
          lineHeight: 17,
        };
      case 'Large':
        return {
          fontSize: 14,
          lineHeight: 18,
        };
      case 'XS':
        return {
          fontSize: 11,
          lineHeight: 15,
        };
      default:
        return {
          fontSize: 12,
          lineHeight: 17,
        };
    }
  };
  const chipsInfoTextSize = () => {
    switch (chipsInfoSize) {
      case 'Small':
        return {
          fontSize: fontMedium,
          lineHeight: lineHeightMedium,
        };
      case 'Large':
        return {
          fontSize: fontLarge,
          lineHeight: lineHeightMedium,
        };
      default:
        return {
          fontSize: fontMedium,
          lineHeight: lineHeightMedium,
        };
    }
  };
  return (
    <>
      {badgeStatusType === 'Badge Notification' && (
        <View
          style={[
            globalStyles.badgenotificationList,
            { backgroundColor: getBadgeBackgroundColor() },
          ]}>
          <Text
            style={[
              globalStyles.circularViewtext,
              { color: getBadgeTextColor() },
              getBadgeTextSize(),
            ]}>
            {badgeNotificationNumber}
          </Text>
        </View>
      )}
      {badgeStatusType === 'Chips Info' && (
        <View style={{}}>
          <View
            style={[
              globalStyles.chipsinfoInactive,
              globalStyles.centerFlexBox,
              {
                backgroundColor: getChipsInfoBackgroundColor(),
                borderColor: theme.strokecolor3tint,
              },
            ]}>
            {chipsInfoType === 'Default' ?
              <>
                {chipsInfoShowIcon ? <Cancel /> : null}
                <TextComponent
                  style={[
                    globalStyles.labelTypoInactive,
                    { color: theme.primarytextcolor },
                    chipsInfoTextSize()
                  ]}>
                  {chipsInfoLanguage === 'English' ? chipsInfoLabel : chipsInfoLabelArabic}
                </TextComponent>
              </>
              : <>
                <Cancel />
                <TextComponent
                  style={[
                    globalStyles.labelTypoInactive,
                    { color: theme.primarytextcolor },
                    chipsInfoTextSize()
                  ]}>
                  {chipsInfoLanguage === 'English' ? chipsInfoLabel : chipsInfoLabelArabic}
                </TextComponent>
              </>
            }
          </View>
        </View>
      )}
      {badgeStatusType === 'Text' && (
        <Text
          style={[globalStyles.contentText, { color: theme.primarytextcolor2 }]}>
          {badgeStatusText}
        </Text>
      )}

      {badgeStatusType === 'Balance' && (
        <View style={globalStyles.typebalance}>
          <View
            style={[
              globalStyles.typebalance,
              globalStyles.wrapperFlexBoxBadgeStatusBalance,
            ]}>
            <Text
              style={[
                globalStyles.stackedListItemBodyheadline,
                globalStyles.contentTypoRightAligned,
                { color: theme.primarycolor },
              ]}>
              {badgeStatusShowFirstValue ? badgeStatusFirstValue : null}
            </Text>
            <View
              style={[
                globalStyles.wrapperBalanceSAR,
                globalStyles.wrapperFlexBoxBadgeStatusBalance,
              ]}>
              <Text
                style={[globalStyles.sarLabel, { color: theme.primarycolor }]}>
                SAR
              </Text>
            </View>
          </View>
          <Text
            style={[
              globalStyles.contentBalanceStatusType,
              globalStyles.contentTypoRightAligned,
              { color: theme.primarytextcolor2 },
            ]}>
            {badgeStatusShowSecondValue ? badgeStatusSecondValue : null}
          </Text>
        </View>
      )}
      {badgeStatusType === 'Balance with Status' && (
        <View style={globalStyles.typebalance}>
          <View style={globalStyles.wrapperContentAndSar}>
            <Text
              style={[
                globalStyles.contentBalanceWithStatus,
                { color: theme.primarycolor },
              ]}>
              {badgeStatusBalanceWithStatusShowFirstValue ? badgeStatusBalanceWithStatusFirstValue : null}
            </Text>
            <View style={globalStyles.wrapperSARLabel}>
              <Text
                style={[globalStyles.sarLabel, { color: theme.primarycolor }]}>
                SAR
              </Text>
            </View>
          </View>
          <View style={globalStyles.chipsinfoBalanceStatusType}>
            <Cancel />
            <Text
              style={[globalStyles.labelInactive, { color: theme.primarycolor }]}>
              Inactive
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const InlineBadgeStatus = ({
  badgeStatusMenuType, badgeNotificationMenuType, chipsInfoLanguage,
  badgeNotificationMenuSize, badgeNotificationMenuNumber, chipsInfoLabelArabic,
  chipsInfoLabel, chipsInfoShowIcon, badgeStatusMenuBalanceWithStatusFirstValue,
  chipsInfoState, chipsInfoType, chipsInfoSize, badgeStatusMenuBalanceWithStatusShowFirstValue,
  badgeStatusMenuFirstValue, badgeStatusMenuSecondValue, badgeStatusMenuText,
  badgeStatusMenuShowFirstValue, badgeStatusMenuShowSecondValue,
}) => {
  const { theme } = useTheme();
  const getBadgeBackgroundColor = () => {
    switch (badgeNotificationMenuType) {
      case 'Success':
        return theme.ragcolor6;
      case 'Primary':
        return theme.ragcolor3;
      case 'Warning':
        return theme.ragcolor15;
      case 'Neutral':
        return theme.ragneutral;
      case 'Reverse':
        return theme.primaryinvert;
      default:
        return theme.ragcolor15;
    }
  };
  const getChipsInfoBackgroundColor = () => {
    switch (chipsInfoState) {
      case 'Success':
        return theme.ragcolor6tint;
      case 'Warning':
        return theme.ragcolor15tint;
      case 'Neutral':
        return theme.ragneutraltint;
      case 'Error':
        return theme.ragcolor3tint;
      case 'Info':
        return theme.ragcolor6tint;
      default:
        return theme.ragcolor3tint;
    }
  };
  const getBadgeTextColor = () => {
    switch (badgeNotificationMenuType) {
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
  const getBadgeTextSize = () => {
    switch (badgeNotificationMenuSize) {
      case 'Small':
        return {
          fontSize: 12,
          lineHeight: 17,
        };
      case 'Large':
        return {
          fontSize: 14,
          lineHeight: 18,
        };
      case 'XS':
        return {
          fontSize: 11,
          lineHeight: 15,
        };
      default:
        return {
          fontSize: 12,
          lineHeight: 17,
        };
    }
  };
  const chipsInfoTextSize = () => {
    switch (chipsInfoSize) {
      case 'Small':
        return {
          fontSize: fontMedium,
          lineHeight: lineHeightMedium,
        };
      case 'Large':
        return {
          fontSize: fontLarge,
          lineHeight: lineHeightMedium,
        };
      default:
        return {
          fontSize: fontMedium,
          lineHeight: lineHeightMedium,
        };
    }
  };
  return (
    <>
      {badgeStatusMenuType === 'Badge Notification' && (
        <View
          style={[
            globalStyles.badgenotificationList,
            { backgroundColor: getBadgeBackgroundColor() },
          ]}>
          <Text
            style={[
              globalStyles.circularViewtext,
              { color: getBadgeTextColor() },
              getBadgeTextSize(),
            ]}>
            {badgeNotificationMenuNumber}
          </Text>
        </View>
      )}
      {badgeStatusMenuType === 'Chips Info' && (
        <View style={{}}>
          <View
            style={[
              globalStyles.chipsinfoInactive,
              globalStyles.centerFlexBox,
              {
                backgroundColor: getChipsInfoBackgroundColor(),
                borderColor: theme.strokecolor3tint,
              },
            ]}>
            {chipsInfoType === 'Default' ?
              <>
                {chipsInfoShowIcon ? <Cancel /> : null}
                <TextComponent
                  style={[
                    globalStyles.labelTypoInactive,
                    { color: theme.primarytextcolor },
                    chipsInfoTextSize()
                  ]}>
                  {chipsInfoLanguage === 'English' ? chipsInfoLabel : chipsInfoLabelArabic}
                </TextComponent>
              </>
              : <>
                <Cancel />
                <TextComponent
                  style={[
                    globalStyles.labelTypoInactive,
                    { color: theme.primarytextcolor },
                    chipsInfoTextSize()
                  ]}>
                  {chipsInfoLanguage === 'English' ? chipsInfoLabel : chipsInfoLabelArabic}
                </TextComponent>
              </>
            }
          </View>
        </View>
      )}
      {badgeStatusMenuType === 'Text' && (
        <Text
          style={[globalStyles.contentText, { color: theme.primarytextcolor2 }]}>
          {badgeStatusMenuText}
        </Text>
      )}

      {badgeStatusMenuType === 'Balance' && (
        <View style={globalStyles.typebalance}>
          <View
            style={[
              globalStyles.typebalance,
              globalStyles.wrapperFlexBoxBadgeStatusBalance,
            ]}>
            <Text
              style={[
                globalStyles.stackedListItemBodyheadline,
                globalStyles.contentTypoRightAligned,
                { color: theme.primarycolor },
              ]}>
              {badgeStatusMenuShowFirstValue ? badgeStatusMenuFirstValue : null}
            </Text>
            <View
              style={[
                globalStyles.wrapperBalanceSAR,
                globalStyles.wrapperFlexBoxBadgeStatusBalance,
              ]}>
              <Text
                style={[globalStyles.sarLabel, { color: theme.primarycolor }]}>
                SAR
              </Text>
            </View>
          </View>
          <Text
            style={[
              globalStyles.contentBalanceStatusType,
              globalStyles.contentTypoRightAligned,
              { color: theme.primarytextcolor2 },
            ]}>
            {badgeStatusMenuShowSecondValue ? badgeStatusMenuSecondValue : null}
          </Text>
        </View>
      )}
      {badgeStatusMenuType === 'Balance with Status' && (
        <View style={globalStyles.typebalance}>
          <View style={globalStyles.wrapperContentAndSar}>
            <Text
              style={[
                globalStyles.contentBalanceWithStatus,
                { color: theme.primarycolor },
              ]}>
              {badgeStatusMenuBalanceWithStatusShowFirstValue ? badgeStatusMenuBalanceWithStatusFirstValue : null}
            </Text>
            <View style={globalStyles.wrapperSARLabel}>
              <Text
                style={[globalStyles.sarLabel, { color: theme.primarycolor }]}>
                SAR
              </Text>
            </View>
          </View>
          <View style={globalStyles.chipsinfoBalanceStatusType}>
            <Cancel />
            <Text
              style={[globalStyles.labelInactive, { color: theme.primarycolor }]}>
              Inactive
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const DarkThemeBlock = (props) => {
  const { theme, isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#383838' : theme.primarycolor4;
  // const primaryTextColor = isDarkMode ? theme.primarycolor2 : theme.primarytextcolor;

  const getDefaultAction = () => {
    switch (props.listItemActionType) {
      case 'Toggle':
        return (
          <>
            {props.listItemActionToggleState === 'Unselected' ?
              <Toggleunselect width={actuatedNormalize(43)} height={actuatedNormalize(27)} /> :
              <Toggle width={actuatedNormalize(43)} height={actuatedNormalize(27)} />
            }
          </>
        );
      case 'Check Box':
        return (
          <>
            {props.listItemActionCheckboxIcon === 'Checked' ?
              <CheckboxSelected1 width={spacingM} height={spacingM} /> :
              props.listItemActionCheckboxIcon === 'Disabled' ?
                <CheckboxUnSelected width={spacingM} height={spacingM} /> :
                <CheckboxUnSelected width={spacingM} height={spacingM} />

            }
          </>
        )
      case 'Chevron':
        return isDarkMode ? <Whiterightarrow width={spacingM} height={spacingM} /> : <RightArrow width={spacingM} height={spacingM} />;
      case 'Radio Button':
        return (
          <>
            {props.listItemActionRadioButton === 'Checked' ?
              <SvgIconList
                icon="RadioButtonSelect"
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
                fill={theme.ragcolor6}
              /> :
              props.listItemActionCheckboxIcon === 'Disabled' ?
                <SvgIconList
                  icon="RadioButtonSelect"
                  width={actuatedNormalize(24)}
                  height={actuatedNormalize(24)}
                  fill={theme.primarycolor2_100}
                /> : <RadioUnSelect width={spacingM} height={spacingM} />
            }
          </>
        )
      case 'Edit':
        return <EditBlack width={spacingM} height={spacingM} />;
      case 'Delete':
        return <Delete width={spacingM} height={spacingM} />;
      case 'Tick':
        return <SuccessTick width={spacingM} height={spacingM} />;
      default:
        return <Toggle width={actuatedNormalize(43)} height={actuatedNormalize(27)} />;
        ;
    }
  };

  const getSelectAction = () => {
    switch (props.inlineListItemSelectType) {
      case 'Check Box':
        return (
          <>
            {props.listItemActionCheckboxIcon === 'Checked' ?
              <CheckboxSelected1 width={spacingM} height={spacingM} /> :
              props.listItemActionCheckboxIcon === 'Disabled' ?
                <CheckboxUnSelected width={spacingM} height={spacingM} /> :
                <CheckboxUnSelected width={spacingM} height={spacingM} />

            }
          </>
        )
      case 'Radio Button':
        return (
          <>
            {props.listItemActionRadioButton === 'Checked' ?
              <SvgIconList
                icon="RadioButtonSelect"
                width={actuatedNormalize(24)}
                height={actuatedNormalize(24)}
                fill={theme.ragcolor6}
              /> :
              props.listItemActionRadioButton === 'Disabled' ?
                <SvgIconList
                  icon="RadioButtonSelect"
                  width={actuatedNormalize(24)}
                  height={actuatedNormalize(24)}
                  fill={theme.primarycolor2_100}
                /> :
                <RadioUnSelect width={spacingM} height={spacingM} />
            }
          </>
        )
      default:
        return <CheckboxUnSelected width={spacingM} height={spacingM} />;
        ;
    }
  };

  const ListItemAddon = ({ addonType }) => {
    const { theme, isDarkMode } = useTheme();

    // Avatar Sizes function
    const AvatarSizes = () => {
      switch (props.listItemAddonAvatarSize) {
        case 'Small':
          return {
            fontSize: fontSmall,
            lineHeight: lineHeightSmallMedium,
          };
        case 'Large':
          return {
            fontSize: fontLarge,
            lineHeight: lineHeightMedium,
          };
        case 'Medium':
          return {
            fontSize: fontMedium,
            lineHeight: lineHeightMediumLarge,
          };
        default:
          return {
            fontSize: 12,
            lineHeight: 17,
          };
      }
    };

    // Avatar Icon Width function
    const AvatarIconWidth = () => {
      switch (props.listItemAddonAvatarSize) {
        case 'Small':
          return spacingL;
        case 'Large':
          return spacingXXL;
        case 'Medium':
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
              <View style={[globalStyles.avatarListItemAddon1, { backgroundColor: theme.primarycolor3tonal }]}>
                <TextComponent
                  style={[
                    globalStyles.avatarListItemAddonText,
                    { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor3 },
                    AvatarSizes(),
                  ]}>
                  {props.listItemAddonAvatarInitials}
                </TextComponent>
              </View>
            )}
            {props.listItemAddonAvatarElements === 'Icon' && (
              <View style={[globalStyles.avatarSectionDarkTheme]}>
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
                {props.listItemAddonAvatarEdit && (
                  <View style={globalStyles.editIconWrapper}>
                    <ProfileEditIconDark width={spacingS} height={spacingS} />
                  </View>
                )}
              </View>
            )}
          </>
        )}
        {addonType === 'Avatar With Bank' && (
          <View style={{ paddingRight: 0 }}>
            <View style={globalStyles.avatarListItemAddon}>
              <TextComponent
                style={[
                  globalStyles.avatarListItemAddonText,
                  { color: isDarkMode ? theme.primarycolor3static : theme.primarytextcolor3 },
                ]}>
                {props.listItemAddonAvatarInitials}
              </TextComponent>
            </View>
            <View
              style={{
                position: 'absolute',
                right: -5,
                bottom: -5,
              }}>
              <BankLogo width={spacingM} height={spacingM} />
            </View>
          </View>
        )}
        {addonType === 'Icon' && (
          isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />
        )}
        {addonType === 'Icon with BG' && (
          <View
            style={[
              globalStyles.wrapperListItemAddon,
              { backgroundColor: isDarkMode ? theme.primarycolor2_100 : theme.primarycolor2_10 },
            ]}>
            {isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />}
          </View>
        )}
        {addonType === 'Logo' && (
          isDarkMode ? <SabLogoRound width={spacingXL} height={spacingXL} /> : <SabLogoRound width={spacingXL} height={spacingXL} />
        )}
        {addonType === 'Pie Graph' && (
          <View>
            <Slices />
            <TextComponent
              style={[
                globalStyles.PieGraphListItemAddon1,
                { color: theme.primarycolor3 },
              ]}>
              45%
            </TextComponent>
          </View>
        )}
      </>
    );
  };

  return (
    <View style={[globalStyles.flexBoxspacingS, { backgroundColor }]}>
      {props.listType === 'Inline' && (
        <>
          {props.inlineListItemType === 'Actionable' && (
            <View style={globalStyles.inlinelistitemmenu}>
              {props.inlineListItemActionableType === 'Menu' ? (
                <>
                  <View style={[globalStyles.wrapperFlexBoxRow]}>
                    {props.inlineListItemMenuIcon && (
                      isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />
                    )}
                    <Text
                      style={[
                        globalStyles.link,
                        globalStyles.linkTypo,
                        { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
                      ]}>
                      {props.inlineListItemMenuText}
                    </Text>
                    <View style={globalStyles.wrapperFlexBoxRow}>
                      <View>
                        {props.inlineListItemMenuBadge && (
                          <InlineBadgeStatus
                            badgeStatusMenuType={props.badgeStatusMenuType}
                            chipsInfoLabel={props.chipsInfoLabel}
                            badgeNotificationMenuType={props.badgeNotificationMenuType}
                            badgeNotificationMenuSize={props.badgeNotificationMenuSize}
                            badgeNotificationMenuNumber={props.badgeNotificationMenuNumber}
                            badgeStatusMenuText={props.badgeStatusMenuText}
                            badgeStatusMenuFirstValue={props.badgeStatusMenuFirstValue}
                            badgeStatusMenuSecondValue={props.badgeStatusMenuSecondValue}
                            badgeStatusMenuShowFirstValue={props.badgeStatusMenuShowFirstValue}
                            badgeStatusMenuShowSecondValue={props.badgeStatusMenuShowSecondValue}
                            badgeStatusMenuBalanceWithStatusFirstValue={props.badgeStatusMenuBalanceWithStatusFirstValue}
                            badgeStatusMenuBalanceWithStatusShowFirstValue={props.badgeStatusMenuBalanceWithStatusShowFirstValue}
                            chipsInfoLanguage={props.chipsInfoLanguage}
                            chipsInfoShowIcon={props.chipsInfoShowIcon}
                            chipsInfoState={props.chipsInfoState}
                            chipsInfoSize={props.chipsInfoSize}
                            chipsInfoType={props.chipsInfoType}
                            chipsInfoLabelArabic={props.chipsInfoLabelArabic}
                          />
                        )}
                      </View>
                      {props.inlineListItemMenuLink && (
                        isDarkMode ? <Whiterightarrow width={actuatedNormalize(36)} height={actuatedNormalize(36)} /> : <RightArrow width={actuatedNormalize(36)} height={actuatedNormalize(36)} />
                      )}
                    </View>
                  </View>
                  {props.inlineListItemMenuDivider && (
                    <View
                      style={[
                        globalStyles.dividerStyle1,
                        { backgroundColor: theme.primarycolor2_20 },
                      ]}
                    />
                  )}
                </>
              ) : (
                <View style={[globalStyles.wrapperFlexBoxRow]}>
                  <Text
                    style={[
                      globalStyles.link,
                      globalStyles.linkTypo,
                      { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
                    ]}>
                    {props.inlineListItemSelectLabel}
                  </Text>
                  {props.inlineListItemSelectIcon &&
                    getSelectAction()
                  }
                </View>
              )}
            </View>
          )}

          {props.inlineListItemType === 'Preview' && (
            <>
              <View style={globalStyles.inlinelistitemmenu}>
                {props.inlineListItemPreviewType === 'Value' ? (
                  <>
                    {props.inlineListItemValueIcon ? (
                      <View style={globalStyles.rowFlexBoxSpaceBetween}>
                        <Text
                          style={[
                            globalStyles.labelLightPreviewValue,
                            { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
                          ]}>
                          Label
                        </Text>

                        <Text
                          style={[
                            globalStyles.valueLightPreviewValue,
                            { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
                          ]}>
                          Value
                        </Text>

                        {props.inlineListItemValueIcon && (
                          isDarkMode ? <Whiterightarrow width={actuatedNormalize(36)} height={actuatedNormalize(36)} /> : <RightArrow width={actuatedNormalize(36)} height={actuatedNormalize(36)} />
                        )}
                      </View>
                    ) : (
                      <View style={globalStyles.rowFlexBoxSpaceBetween}>
                        <View style={{ width: '50%' }}>
                          <Text
                            style={[
                              globalStyles.labelLightPreviewValue,
                              { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor2 },
                            ]}>
                            Label
                          </Text>
                        </View>

                        {/* Middle Label */}
                        <View style={{ width: '50%' }}>
                          <Text
                            style={[
                              globalStyles.valueLightPreviewValue,
                              { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
                            ]}>
                            Value
                          </Text>
                        </View>
                      </View>
                    )}
                  </>
                ) : (
                  <>
                    <View
                      style={[
                        globalStyles.centerFlexBox,
                        globalStyles.wrapperFlexBoxRow,
                      ]}>
                      {/* <TickIcon width={spacingM} height={spacingM} /> */}
                      <SvgIconList
                        icon="TickIcon"
                        width={actuatedNormalize(24)}
                        height={actuatedNormalize(24)}
                      />
                      <Text
                        style={[
                          globalStyles.labelBulletPoint,
                          { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
                        ]}>
                        {props.inlineListItemBulletPointLabel}
                      </Text>
                    </View>
                  </>
                )}
              </View>
              {props.inlineListItemBulletPointDivider && (
                <View
                  style={[
                    globalStyles.dividerStyle1,
                    { backgroundColor: theme.primarycolor2_20 },
                  ]}
                />
              )}
            </>
          )}
          {/* {props.showDivider && <View style={globalStyles.dividerStyle} />} */}
        </>
      )
      }
      {
        props.listType === 'Stacked' && (
          <View style={[globalStyles.rowFlexBox]}>
            {props.stackedListItemType === 'Default' ? (
              <View style={[globalStyles.wrapperFlexBoxRow, { flex: 1 }]}>
                {props.stackedListItemDefaultIcon && (
                  <ListItemAddon addonType={props.listItemAddonType} />
                )}
                <View style={globalStyles.stackedlistitembody}>
                  <StackedListItemBody
                    stackedListItemBodyType={props.stackedListItemBodyType}
                    stackedListItemBodyHeadline={props.stackedListItemBodyHeadline}
                    stackedListItemBodyShowContent={props.stackedListItemBodyShowContent}
                    stackedListItemBodyContent={props.stackedListItemBodyContent}
                    stackedListItemBodyLabel={props.stackedListItemBodyLabel}
                    stackedListItemBodyValue={props.stackedListItemBodyValue}
                    stackedListItemBodyShowLabel={props.stackedListItemBodyShowLabel}
                    stackedListItemBodyShowSubTitle={props.stackedListItemBodyShowSubTitle}
                    stackedListItemBodySubTitle={props.stackedListItemBodySubTitle}
                    stackedListItemBodyShowStatus={props.stackedListItemBodyShowStatus}
                    stackedListItemBodyStatusState={props.stackedListItemBodyStatusState}
                    stackedListItemBodyStatus={props.stackedListItemBodyStatus}
                  />
                </View>
                {props.stackedListItemDefaultBadge && (
                  // <View style={globalStyles.rowFlexBox}>
                  <BadgeStatus
                    badgeStatusType={props.badgeStatusType}
                    chipsInfoLabel={props.chipsInfoLabel}
                    badgeNotificationType={props.badgeNotificationType}
                    badgeNotificationSize={props.badgeNotificationSize}
                    badgeNotificationNumber={props.badgeNotificationNumber}
                    badgeStatusText={props.badgeStatusText}
                    badgeStatusFirstValue={props.badgeStatusFirstValue}
                    badgeStatusSecondValue={props.badgeStatusSecondValue}
                    badgeStatusShowFirstValue={props.badgeStatusShowFirstValue}
                    badgeStatusShowSecondValue={props.badgeStatusShowSecondValue}
                    badgeStatusBalanceWithStatusFirstValue={props.badgeStatusBalanceWithStatusFirstValue}
                    badgeStatusBalanceWithStatusShowFirstValue={props.badgeStatusBalanceWithStatusShowFirstValue}
                    chipsInfoLanguage={props.chipsInfoLanguage}
                    chipsInfoShowIcon={props.chipsInfoShowIcon}
                    chipsInfoState={props.chipsInfoState}
                    chipsInfoSize={props.chipsInfoSize}
                    chipsInfoType={props.chipsInfoType}
                    chipsInfoLabelArabic={props.chipsInfoLabelArabic}
                  />
                )}
                {props.stackedListItemDefaultAction &&
                  getDefaultAction()}
              </View>
            ) : (
              <View style={globalStyles.wrapperDefaultContainer1}>
                <TextComponent
                  style={[
                    globalStyles.labelDefaultContainer,
                    globalStyles.valueFlexBox,
                    { color: theme.primarytextcolor2 },
                  ]}>
                  {props.stackedListItemPreviewLabel}
                </TextComponent>
                <TextComponent
                  style={[
                    globalStyles.valueDefaultContainer,
                    globalStyles.valueFlexBox,
                    { color: theme.primarytextcolor },
                  ]}>
                  {props.stackedListItemPreviewValue}
                </TextComponent>
                {props.stackedListItemPreviewSecondValue && (
                  <TextComponent
                    style={[
                      globalStyles.secondValueDefaultContainer,
                      globalStyles.valueFlexBox,
                      { color: theme.primarytextcolor2 },
                    ]}>
                    {props.stackedListItemPreviewSecondValueText}
                  </TextComponent>
                )}
                {props.stackedListItemPreviewDivider && (
                  <View
                    style={[
                      globalStyles.dividerStyle1,
                      { backgroundColor: theme.primarycolor2_20 },
                    ]}
                  />
                )}
              </View>
            )}

          </View>
        )
      }

    </View >
  );
};

export default DarkThemeBlock;

const StackedListItemBody = ({
  stackedListItemBodyType, stackedListItemBodyShowContent,
  stackedListItemBodyShowLabel, stackedListItemBodyShowSubTitle,
  stackedListItemBodyShowStatus, stackedListItemBodyStatus,
  stackedListItemBodyStatusState, stackedListItemBodyContent, stackedListItemBodySubTitle,
  stackedListItemBodyHeadline, stackedListItemBodyLabel, stackedListItemBodyValue
}) => {
  const { theme, isDarkMode } = useTheme();

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
        <View>
          <TextComponent
            style={[
              globalStyles.labeltypoHeadline,
              { color: theme.primarycolor },
            ]}>
            {stackedListItemBodyHeadline}
          </TextComponent>
          {stackedListItemBodyShowContent && (
            <TextComponent
              numberOfLines={2}
              style={[
                globalStyles.labeltypoBody,
                { color: isDarkMode ? theme.primarycolor2_100 : theme.primarytextcolor2 },
              ]}>
              {stackedListItemBodyContent}
            </TextComponent>
          )}
        </View>
      )}
      {stackedListItemBodyType === 'Label+Value' && (
        <View style={{ gap: spacingXXS }}>
          <Text
            style={[
              globalStyles.labelstackedListItemBodyType,
              globalStyles.labelFlexBox,
              { color: theme.primarytextcolor2 },
            ]}>
            {stackedListItemBodyLabel}
          </Text>
          <Text
            style={[
              globalStyles.valuestackedListItemBodyType,
              globalStyles.labelFlexBox,
              { color: theme.primarycolor },
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
                globalStyles.labelstackedListItemBodyLabel,
                globalStyles.labelTypo,
                { color: theme.primarytextcolor2_2 },
              ]}>
              {stackedListItemBodyLabel}
            </Text>
          )}
          <Text
            style={[
              globalStyles.stackedListItemBodyheadline,
              globalStyles.stackedListItemBodyheadlineFlexBox,
              { color: theme.primarycolor },
            ]}>
            {stackedListItemBodyHeadline}
          </Text>
          {stackedListItemBodyShowSubTitle && (
            <Text
              style={[
                globalStyles.subTitle,
                globalStyles.stackedListItemBodyheadlineFlexBox,
                { color: theme.primarycolor },
              ]}>
              {stackedListItemBodySubTitle}
            </Text>
          )}
          {stackedListItemBodyContent && (
            <Text
              style={[
                globalStyles.bodyCopy,
                globalStyles.labelTypo,
                { color: theme.primarytextcolor2 },
              ]}>
              {stackedListItemBodyContent}
            </Text>
          )}
          {stackedListItemBodyShowStatus && (
            <View style={globalStyles.status}>
              <Text
                style={[
                  globalStyles.status1,
                  globalStyles.labelTypo,
                  { color: getStatusColor() },
                ]}>
                {stackedListItemBodyStatus}
              </Text>
            </View>
          )}
        </View>
      )}
    </>
  );
};
