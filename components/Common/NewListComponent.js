import * as React from 'react';
import { Text, View, StyleSheet, I18nManager } from 'react-native';
import {
  RightArrow,
  InfoIconRed,
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
  Toggleunselect
} from '../../constants/SvgLocations';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { globalStyles } from '../../constants/GlobalStyles';
import { spacingM, spacingXXS, spacingXL, spacingL } from '../../constants/Size';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import TextComponent from './TextComponent';
const NewListComponent = props => {
  const { isDarkMode, theme } = useTheme();
  const backgroundColor = isDarkMode ? '#383838' : theme.primarycolor4;

  const getDefaultAction = () => {
    switch (props.listItemActionType) {
      case 'Toggle':
        return (
          <Toggleunselect width={actuatedNormalize(43)} height={actuatedNormalize(27)} />
        );
      case 'Check Box':
        return <CheckboxUnSelected width={spacingM} height={spacingM} />;
      case 'Chevron':
        return isDarkMode ? <Whiterightarrow transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
        width={spacingM} height={spacingM} /> : 
        <RightArrow transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
         width={spacingM} height={spacingM} />;
      case 'Radio Button':
        return <RadioUnSelect width={spacingM} height={spacingM} />;
      case 'Edit':
        return <EditBlack width={spacingL} height={spacingL} />;
      case 'Delete':
        return <Delete width={spacingL} height={spacingL} />;
      default:
        return <Toggle width={actuatedNormalize(43)} height={actuatedNormalize(27)} />;
        ;
    }
  };

  return (
    <View style={[globalStyles.flexBoxspacingS, { backgroundColor }]}>
      {props.listType === 'Inline' && (
        <>
          {props.inlineListItemType === 'Actionable' && (
            <View style={globalStyles.inlinelistitemmenu}>
              {props.listItemActionableType === 'Menu' ? (
                <View style={[globalStyles.wrapperFlexBoxRow]}>
                  {props.inlineListItemMenuIcon && (
                    isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />
                  )}

                  <Text
                    style={[
                      globalStyles.link,
                      globalStyles.linkTypo,
                      { color: theme.primarycolor },
                    ]}>
                    {props.linkActionableMenuText}
                  </Text>
                  <View style={globalStyles.wrapperFlexBoxRow}>
                    <View>
                      {props.inlineListItemMenuBadge && (
                        // <View
                        //   style={[
                        //     globalStyles.cicularView,
                        //     globalStyles.centerFlexBox,
                        //     {backgroundColor: theme.ragcolor15},
                        //   ]}>
                        //   <Text
                        //     style={[
                        //       globalStyles.circularViewtext,
                        //       {color: theme.primarycolor},
                        //     ]}>
                        //     1
                        //   </Text>
                        // </View>
                        <BadgeStatusMenu
                          badgeActionableMenuType={
                            props.badgeActionableMenuType
                          }
                          badgeNotificationMenuType={
                            props.badgeNotificationMenuType
                          }
                          badgeNotificationMenuSize={
                            props.badgeNotificationMenuSize
                          }
                          badgeNotificationMenuNumber={
                            props.badgeNotificationMenuNumber
                          }
                        />
                      )}
                    </View>
                    {props.inlineListItemMenuLink && (
                      isDarkMode ? <Whiterightarrow transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                        width={spacingM} height={spacingM} /> :
                        <RightArrow transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                          width={spacingM} height={spacingM} />
                    )}
                  </View>
                </View>
              ) : (
                <View style={[globalStyles.wrapperFlexBoxRow]}>
                  <Text
                    style={[
                      globalStyles.linkSelect,
                      globalStyles.linkTypo,
                      { color: theme.primarycolor },
                    ]}>
                    Label
                  </Text>
                  {props.listItemActionableSelectType === 'Check Box' ? (
                    <View
                      style={[
                        globalStyles.listItemActionableSelectType,
                        {
                          borderRadius: spacingXXS,
                          borderColor: theme.ragcolor6,
                        },
                      ]}
                    />
                  ) : (
                    <View
                      style={[
                        globalStyles.listItemActionableSelectType,
                        { borderRadius: spacingM, borderColor: theme.ragcolor6 },
                      ]}
                    />
                  )}
                </View>
              )}
            </View>
          )}

          {props.inlineListItemType === 'Preview' && (
            <View style={globalStyles.inlinelistitemmenu}>
              {props.listItemPreviewType === 'Value' ? (
                <>
                  {props.iconPreview ? (
                    <View style={globalStyles.rowFlexBoxSpaceBetween}>
                      <Text
                        style={[
                          globalStyles.labelLightPreviewValue,
                          { color: theme.primarytextcolor2 },
                        ]}>
                        {props.inlineListItemLabel}
                      </Text>

                      <Text
                        style={[
                          globalStyles.valueLightPreviewValue,
                          { color: theme.primarycolor },
                        ]}>
                        {props.inlineListItemValue}
                      </Text>

                      {props.iconPreview && (
                        isDarkMode ? <Whiterightarrow 
                        transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]} 
                        width={spacingM} height={spacingM} /> 
                        : 
                        <RightArrow transform={[{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]}
                        width={spacingM} height={spacingM} />
                      )}
                    </View>
                  ) : (
                    <View style={globalStyles.rowFlexBoxSpaceBetween}>
                      <View style={{ width: '50%' }}>
                        <Text
                          style={[
                            globalStyles.labelLightPreviewValue,
                            { color: theme.primarytextcolor2 },
                          ]}>
                          {props.inlineListItemLabel}
                        </Text>
                      </View>

                      {/* Middle Label */}
                      <View style={{ width: '50%' }}>
                        <Text
                          style={[
                            globalStyles.valueLightPreviewValue,
                            { color: theme.primarytextcolor2 },
                          ]}>
                          {props.inlineListItemValue}
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
                    <TickIcon width={spacingM} height={spacingM} />
                    <Text
                      style={[
                        globalStyles.labelBulletPoint,
                        { color: theme.primarycolor },
                      ]}>
                      Label
                    </Text>
                  </View>
                </>
              )}
            </View>
          )}
          {/* {props.Divider && <View style={globalStyles.dividerStyle} />} */}
        </>
      )}

      {props.listType === 'Stacked' && (
        <View style={globalStyles.rowFlexBox}>
          {props.stackedListItemType === 'Default' ? (
            <View style={[globalStyles.wrapperFlexBoxRow, { flex: 1 }]}>
              {props.stackedListItemDefaultIcon && (
                <ListItemAddon addonType={props.listtemAddonType} />
              )}
              <View style={globalStyles.stackedlistitembody}>
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
                />
              </View>
              {props.stackedListItemDefaultBadge && (
                // <View style={globalStyles.rowFlexBox}>
                <BadgeStatus
                  badgeStatusType={props.badgeStatusType}
                  badgeNotificationType={props.badgeNotificationType}
                  badgeNotificationSize={props.badgeNotificationSize}
                  badgeNotificationNumber={props.badgeNotificationNumber}
                />
              )}

              {/* <View
                    style={[
                      globalStyles.chipsinfoInactive,
                      globalStyles.centerFlexBox,
                      {backgroundColor: theme.ragcolor3tint,
                        borderColor : theme.strokecolor3tint
                      }
                    ]}>
                    <Text style={[globalStyles.labelTypoInactive,{color : theme.primarycolor}]}>
                      Inactive
                    </Text>
                  </View>
                </View> */}

              {props.stackedListItemDefaultAction &&
                // <RightArrow width={spacingM} height={spacingM} />
                getDefaultAction()}
            </View>
          ) : (
            <View style={globalStyles.wrapperDefaultContainer}>
              <Text
                style={[
                  globalStyles.labelDefaultContainer,
                  globalStyles.valueFlexBox,
                  { color: theme.primarytextcolor2 },
                ]}>
                Label
              </Text>
              <Text
                style={[
                  globalStyles.valueDefaultContainer,
                  globalStyles.valueFlexBox,
                  { color: theme.primarycolor },
                ]}>
                Value
              </Text>
              {props.stackedListItemPreviewSecondValue && (
                <Text
                  style={[
                    globalStyles.secondValueDefaultContainer,
                    globalStyles.valueFlexBox,
                    { color: theme.primarytextcolor2 },
                  ]}>
                  Second Value
                </Text>
              )}
            </View>
          )}
        </View>
      )}
      {props.Divider && (
        <View
          style={[
            globalStyles.dividerStyle,
            { backgroundColor: theme.primarycolor2_20 },
          ]}
        />
      )}
    </View>
  );
};

export default NewListComponent;

const ListItemAddon = ({ addonType }) => {
  const { theme, isDarkMode } = useTheme();
  return (
    <>
      {addonType === 'Avatar' && (
        <View style={globalStyles.avatarListItemAddon}>
          <TextComponent
            style={[
              globalStyles.avatarListItemAddonText,
              { color: theme.primarytextcolor3 },
            ]}>
            JM
          </TextComponent>
        </View>
      )}
      {addonType === 'Icon' && (
        isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />
      )}
      {addonType === 'Icon with BG' && (
        <View
          style={[
            globalStyles.wrapperListItemAddon,
            { backgroundColor: theme.primarycolor2_10 },
          ]}>
          {isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />}
        </View>
      )}
      {addonType === 'Pie Graph' && (
        <View>
          <Slices />
          <TextComponent
            style={[
              globalStyles.PieGraphListItemAddon,
              { color: theme.primaryComTextComponentcolor3, marginTop: actuatedNormalize(1) },
            ]}>
            45%
          </TextComponent>
        </View>
      )}
      {addonType === 'Logo' && (
        isDarkMode ? <SabLogoRound width={spacingXL} height={spacingXL} /> : <SabLogoRound width={spacingXL} height={spacingXL} />
      )}
      {addonType === 'Avatar With Bank' && (
        <View style={{ paddingRight: 0 }}>
          <View style={globalStyles.avatarListItemAddon}>
            <TextComponent
              style={[
                globalStyles.avatarListItemAddonText,
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
        <View>
          <Text
            style={[
              globalStyles.labeltypoHeadline,
              { color: theme.primarycolor },
            ]}>
            Headline
          </Text>
          {stackedListItemBodyShowContent && (
            <Text
              style={[
                globalStyles.labeltypoBody,
                { color: theme.primarytextcolor2 },
              ]}>
              Body copy
            </Text>
          )}
        </View>
      )}
      {stackedListItemBodyType === 'Label+Value' && (
        <View>
          <Text
            style={[
              globalStyles.labelstackedListItemBodyType,
              globalStyles.labelFlexBox,
              { color: theme.primarytextcolor2 },
            ]}>
            Label
          </Text>
          <Text
            style={[
              globalStyles.valuestackedListItemBodyType,
              globalStyles.labelFlexBox,
              { color: theme.primarycolor },
            ]}>
            Value
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
              Label
            </Text>
          )}
          <Text
            style={[
              globalStyles.stackedListItemBodyheadline,
              globalStyles.stackedListItemBodyheadlineFlexBox,
              { color: theme.primarycolor },
            ]}>
            Headline
          </Text>
          {stackedListItemBodyShowSubTitle && (
            <Text
              style={[
                globalStyles.subTitle,
                globalStyles.stackedListItemBodyheadlineFlexBox,
                { color: theme.primarycolor },
              ]}>
              Sub title
            </Text>
          )}
          {stackedListItemBodyShowBodyCopy && (
            <Text
              style={[
                globalStyles.bodyCopy,
                globalStyles.labelTypo,
                { color: theme.primarytextcolor2 },
              ]}>
              Body copy
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
                Status
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
        <View style={globalStyles.rowFlexBox}>
          <View
            style={[
              globalStyles.chipsinfoInactive,
              globalStyles.centerFlexBox,
              {
                backgroundColor: theme.ragcolor3tint,
                borderColor: theme.strokecolor3tint,
              },
            ]}>
            <Text
              style={[
                globalStyles.labelTypoInactive,
                { color:isDarkMode?theme.primarytextcolor4:theme.primarytextcolor },
              ]}>
              Inactive
            </Text>
          </View>
        </View>
      )}
      {badgeStatusType === 'Text' && (
        <Text
          style={[globalStyles.contentText, { color: theme.primarytextcolor2 }]}>
          Content
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
              Content
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
            Content
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
              Content
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

const BadgeStatusMenu = ({
  badgeActionableMenuType,
  badgeNotificationMenuType,
  badgeNotificationMenuSize,
  badgeNotificationMenuNumber,
}) => {
  const { theme } = useTheme();
  console.log('Proppss-->', badgeActionableMenuType);
  const getBadgeBackgroundColor = () => {
    switch (badgeNotificationMenuType) {
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

  return (
    <>
      {badgeActionableMenuType === 'Badge Notification' && (
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
      {badgeActionableMenuType === 'Chips Info' && (
        <View style={globalStyles.rowFlexBox}>
          <View
            style={[
              globalStyles.chipsinfoInactive,
              globalStyles.centerFlexBox,
              {
                backgroundColor: theme.ragcolor3tint,
                borderColor: theme.strokecolor3tint,
              },
            ]}>
            <Text
              style={[
                globalStyles.labelTypoInactive,
                { color: theme.primarycolor },
              ]}>
              Inactive
            </Text>
          </View>
        </View>
      )}
      {badgeActionableMenuType === 'Text' && (
        <Text
          style={[globalStyles.contentText, { color: theme.primarytextcolor2 }]}>
          Content
        </Text>
      )}

      {badgeActionableMenuType === 'Balance' && (
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
              Content
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
            Content
          </Text>
        </View>
      )}
      {badgeActionableMenuType === 'Balance with Status' && (
        <View style={globalStyles.typebalance}>
          <View style={globalStyles.wrapperContentAndSar}>
            <Text
              style={[
                globalStyles.contentBalanceWithStatus,
                { color: theme.primarycolor },
              ]}>
              Content
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
