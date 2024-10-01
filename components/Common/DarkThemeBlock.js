import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextComponent from './TextComponent';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { BlackRightarrow, CheckboxUnSelected, Delete, EditBlack, InfoIcon, InfoIconRed, RadioUnSelect, RightArrow, Slices, SuccessTick, TextInfoIcon, TextInfoIconDark, TickIcon, Toggle, Toggleunselect, Whiterightarrow } from '../../constants/SvgLocations';
import { globalStyles } from '../../constants/GlobalStyles';
import { spacingL, spacingM, spacingXXS } from '../../constants/Size';
const BadgeStatus = ({
  badgeStatusType,
  badgeNotificationType,
  badgeNotificationSize,
  badgeNotificationNumber,
}) => {
  const { theme, isDarkMode } = useTheme();
  // console.log('Proppss-->', badgeStatusType);
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
        <View style={{}}>
          <View
            style={[
              globalStyles.chipsinfoInactive,
              globalStyles.centerFlexBox,
              {
                backgroundColor: theme.ragcolor3tint,
                borderColor: theme.strokecolor3tint,
              },
            ]}>
            <TextComponent
              style={[
                globalStyles.labelTypoInactive,
                { color: isDarkMode ? theme.primarytextcolor4 : theme.primarytextcolor },
              ]}>
              Inactive
            </TextComponent>
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

const DarkThemeBlock = (props) => {
  const { theme, isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#383838' : theme.primarycolor4;
  // const primaryTextColor = isDarkMode ? theme.primarycolor2 : theme.primarytextcolor;

  const getDefaultAction = () => {
    switch (props.listItemActionType) {
      case 'Toggle':
        return (
          <Toggleunselect width={actuatedNormalize(43)} height={actuatedNormalize(27)} />
        );
      case 'Check Box':
        return <CheckboxUnSelected width={spacingM} height={spacingM} />;
      case 'Chevron':
        return isDarkMode ? <Whiterightarrow width={actuatedNormalize(36)} height={actuatedNormalize(36)} /> : <RightArrow width={actuatedNormalize(36)} height={actuatedNormalize(36)} />;
      case 'Radio Button':
        return <RadioUnSelect width={spacingM} height={spacingM} />;
      case 'Edit':
        return <EditBlack width={spacingL} height={spacingL} />;
      case 'Delete':
        return <Delete width={spacingL} height={spacingL} />;
        case 'Tick':
          return <SuccessTick width={spacingL} height={spacingL} />;
      default:
        return <Toggle width={actuatedNormalize(43)} height={actuatedNormalize(27)} />;
        ;
    }
  };
  const ListItemAddon = ({ addonType }) => {
    const { theme } = useTheme();
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
      </>
    );
  };
  return (
    <View style={[globalStyles.flexBoxspacingS, { backgroundColor }]}>
      {props.listType === 'Inline' && (
        <>
          {props.inlineListItemType === 'Actionable' && (
            <View style={globalStyles.inlinelistitemmenu}>
              {props.listItemActionableType === 'Menu' ? (
                <View style={[globalStyles.wrapperFlexBoxRow]}>
                  {props.iconActionableMenu && (
                    isDarkMode ? <TextInfoIconDark width={spacingM} height={spacingM} /> : <InfoIconRed width={spacingM} height={spacingM} />
                  )}

                  <Text
                    style={[
                      globalStyles.link,
                      globalStyles.linkTypo,
                      { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
                    ]}>
                    Link
                  </Text>
                  <View style={globalStyles.wrapperFlexBoxRow}>
                    <View>
                      {props.badgeActionableMenu && (
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
                    {props.linkActionableMenu && (
                      isDarkMode ? <Whiterightarrow width={actuatedNormalize(36)} height={actuatedNormalize(36)} /> : <RightArrow width={actuatedNormalize(36)} height={actuatedNormalize(36)} />
                    )}
                  </View>
                </View>
              ) : (
                <View style={[globalStyles.wrapperFlexBoxRow]}>
                  <Text
                    style={[
                      globalStyles.link,
                      globalStyles.linkTypo,
                      { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
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

                      {props.iconPreview && (
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
                    <TickIcon width={spacingM} height={spacingM} />
                    <Text
                      style={[
                        globalStyles.labelBulletPoint,
                        { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor },
                      ]}>
                      Label
                    </Text>
                  </View>
                </>
              )}
            </View>
          )}
          {/* {props.showDivider && <View style={globalStyles.dividerStyle} />} */}
          {props.showDivider && (
            <View
              style={[
                globalStyles.dividerStyle,
                { backgroundColor: theme.primarycolor2_20 },
              ]}
            />
          )}
        </>
      )}

      {props.listType === 'Stacked' && (
        <View style={[globalStyles.rowFlexBox, {width:'88%'}]}>
          {props.stackedListItemType === 'Default' ? (
            <View style={[globalStyles.wrapperFlexBoxRow, { flex: 1 }]}>
              {props.stackedListItemDefaultIcon && (
                <ListItemAddon addonType={props.listtemAddonType} />
              )}
              <View style={globalStyles.stackedlistitembody}>
                <StackedListItemBody
                  themeText={props.themeText}
                  themeChangeText={props.themeChangeText}
                  stackedListItemBodyType={props.stackedListItemBodyType}
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
              {props.stackedListItemDefaultAction &&
                // <RightArrow width={spacingM} height={spacingM} />
                getDefaultAction()}
            </View>
          ) : (
            <View style={globalStyles.wrapperDefaultContainer}>
              <TextComponent
                style={[
                  globalStyles.labelDefaultContainer,
                  globalStyles.valueFlexBox,
                  { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor2 },
                ]}>
                Label
              </TextComponent>
              <TextComponent
                style={[
                  globalStyles.valueDefaultContainer,
                  globalStyles.valueFlexBox,
                  { color: theme.primarycolor },
                ]}>
                Value
              </TextComponent>
              {props.stackedListItemPreviewSecondValue && (
                <TextComponent
                  style={[
                    globalStyles.secondValueDefaultContainer,
                    globalStyles.valueFlexBox,
                    { color: isDarkMode ? theme.primarycolor : theme.primarytextcolor2 },
                  ]}>
                  Second Value
                </TextComponent>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default DarkThemeBlock;

const StackedListItemBody = ({
  stackedListItemBodyType,
  stackedListItemBodyShowContent,
  stackedListItemBodyShowLabel,
  stackedListItemBodyShowSubTitle,
  stackedListItemBodyShowBodyCopy,
  stackedListItemBodyShowStatus,
  stackedListItemBodyStatusState,
  themeChangeText, themeText
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
            {themeText}
          </TextComponent>
          {stackedListItemBodyShowContent && (
            <TextComponent   
            numberOfLines={2}   
              style={[
                globalStyles.labeltypoBody,
                { color: isDarkMode ? theme.primarycolor2_100 : theme.primarytextcolor2 },
              ]}>
              {themeChangeText}
            </TextComponent>
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
            {themeText}
          </Text>
          {stackedListItemBodyShowSubTitle && (
            <Text
              style={[
                globalStyles.subTitle,
                globalStyles.stackedListItemBodyheadlineFlexBox,
                { color: theme.primarycolor },
              ]}>
              {themeChangeText}
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
