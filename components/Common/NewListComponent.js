import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
  CheckboxUnSelected
} from '../../constants/SvgLocations';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {globalStyles} from '../../constants/GlobalStyles';
import {spacingM, spacingXXS} from '../../constants/Size';
import { useTheme } from '../../constants/Theme/ThemeProvider';
const NewListComponent = props => {
  const { theme } = useTheme();

  const getDefaultAction = () => {
    switch (props.listItemActionType) {
      case 'Toggle':
        return <Toggle width={spacingM} height={spacingM}/>;
      case 'Check Box':
        return <CheckboxUnSelected width={spacingM} height={spacingM}/>;
      case 'Chevron':
        return <RightArrow width={spacingM} height={spacingM} />;
      case 'Radio Button':
        return <RadioUnSelect width={spacingM} height={spacingM} />;
      case 'Edit':
        return <EditBlack width={spacingM} height={spacingM} />;
      case 'Delete':
        return <Delete width={spacingM} height={spacingM} />;
      default:
        return <RightArrow width={spacingM} height={spacingM} />;
    }
  };

  return (
    <View style={globalStyles.flexBoxspacingS}>
      {props.listType === 'Inline' && (
        <>
          {props.inlineListItemType === 'Actionable' && (
            <View style={globalStyles.inlinelistitemmenu}>
              {props.listItemActionableType === 'Menu' ? (
                <View style={[globalStyles.wrapperFlexBoxRow]}>
                  {props.iconActionableMenu && (
                    <InfoIconRed width={spacingM} height={spacingM} />
                  )}

                  <Text style={[globalStyles.link, globalStyles.linkTypo,{color : theme.primarycolor}]}>
                    Link
                  </Text>
                  <View style={globalStyles.wrapperFlexBoxRow}>
                    <View>
                      {props.badgeActionableMenu && (
                        <View
                          style={[
                            globalStyles.cicularView,
                            globalStyles.centerFlexBox,
                            {backgroundColor : theme.ragcolor15}
                          ]}>
                          <Text style={[globalStyles.circularViewtext,{color : theme.primarycolor}]}>1</Text>
                        </View>
                      )}
                    </View>
                    {props.linkActionableMenu && (
                      <RightArrow width={spacingM} height={spacingM} />
                    )}
                  </View>
                </View>
              ) : (
                <View style={[globalStyles.wrapperFlexBoxRow]}>
                  <Text style={[globalStyles.link, globalStyles.linkTypo,{color : theme.primarycolor}]}>
                    Label
                  </Text>
                  {props.listItemActionableSelectType === 'Check Box' ? (
                    <View
                      style={[
                        globalStyles.listItemActionableSelectType,
                        {borderRadius: spacingXXS,
                          borderColor : theme.ragcolor6
                        },
                      ]}
                    />
                  ) : (
                    <View
                      style={[
                        globalStyles.listItemActionableSelectType,
                        {borderRadius: spacingM,
                          borderColor : theme.ragcolor6
                        },
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
                      <Text style={[globalStyles.labelLightPreviewValue,{color:theme.primarytextcolor2}]}>
                        Label
                      </Text>

                      <Text style={[globalStyles.valueLightPreviewValue,{color : theme.primarycolor}]}>
                        Value
                      </Text>

                      {props.iconPreview && (
                        <RightArrow width={spacingM} height={spacingM} />
                      )}
                    </View>
                  ) : (
                    <View style={globalStyles.rowFlexBoxSpaceBetween}>
                      <View style={{width: '50%'}}>
                        <Text style={[globalStyles.labelLightPreviewValue,{color:theme.primarytextcolor2}]}>
                          Label
                        </Text>
                      </View>

                      {/* Middle Label */}
                      <View style={{width: '50%'}}>
                        <Text style={[globalStyles.valueLightPreviewValue, {color : theme.primarycolor}]}>
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
                    <Text style={[globalStyles.labelBulletPoint,{color : theme.primarycolor}]}>Label</Text>
                  </View>
                </>
              )}
            </View>
          )}
          {/* {props.showDivider && <View style={globalStyles.dividerStyle} />} */}
        </>
      )}

      {props.listType === 'Stacked' && (
        <View style={globalStyles.rowFlexBox}>
          {props.stackedListItemType === 'Default' ? (
            <View style={[globalStyles.wrapperFlexBoxRow, {flex: 1}]}>
              {props.stackedListItemDefaultIcon && (
                <ListItemAddon addonType={props.listtemAddonType} />
              )}
              <View style={globalStyles.stackedlistitembody}>
                <StackedListItemBody
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
                  <BadgeStatus badgeStatusType={props.badgeStatusType}
                  badgeNotificationType = {props.badgeNotificationType}
                  badgeNotificationSize= {props.badgeNotificationSize}
                  badgeNotificationNumber= {props.badgeNotificationNumber}/>
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
              
              {props.stackedListItemDefaultAction && (
                // <RightArrow width={spacingM} height={spacingM} />
                getDefaultAction()
              )}
            </View>
          ) : (
            <View style={[globalStyles.wrapperFlexBoxRow, {flex: 1}]}>
              <InfoIconRed width={spacingM} height={spacingM} />
              <View style={globalStyles.stackedlistitembody}>
                <Text style={[globalStyles.labeltypoHeadline, {color : theme.primarycolor}]}>Headline</Text>
                <Text style={[globalStyles.labeltypoBody,{color: theme.primarytextcolor2}]}>Body copy</Text>
              </View>
              <View style={globalStyles.rowFlexBox}>
                <View
                  style={[
                    globalStyles.chipsinfoInactive,
                    globalStyles.centerFlexBox,
                    {backgroundColor: theme.ragcolor3tint,
                      borderColor : theme.strokecolor3tint
                    }
                  ]}>
                  <Text style={[globalStyles.labelTypoInactive, {color : theme.primarycolor}]}>Inactive</Text>
                </View>
              </View>
              <RightArrow width={spacingM} height={spacingM} />
            </View>
          )}
        </View>
      )}
      {props.showDivider && <View style={[globalStyles.dividerStyle, {backgroundColor: theme.primarycolor2_20}]} />}
    </View>
  );
};

export default NewListComponent;

const ListItemAddon = ({addonType}) => {
  const { theme } = useTheme();
  return (
    <>
      {addonType === 'Avatar' && (
        <View style={globalStyles.avatarListItemAddon}>
          <Text style={[globalStyles.avatarListItemAddonText,{color: theme.primarytextcolor3}]}>JM</Text>
        </View>
      )}
      {addonType === 'Icon' && (
        <InfoIconRed width={spacingM} height={spacingM} />
      )}
      {addonType === 'Icon with BG' && (
        <View style={[globalStyles.wrapperListItemAddon,{backgroundColor: theme.primarycolor2_10}]}>
          <InfoIconRed width={spacingM} height={spacingM} />
        </View>
      )}
      {addonType === 'Pie Graph' && (
        <View>
          <Slices />
          <Text style={[globalStyles.PieGraphListItemAddon, {color: theme.primarytextcolor3}]}>45%</Text>
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
          <Text style={[globalStyles.labeltypoHeadline, {color : theme.primarycolor}]}>Headline</Text>
          {stackedListItemBodyShowContent && (
            <Text style={[globalStyles.labeltypoBody,{color: theme.primarytextcolor2}]}>Body copy</Text>
          )}
        </View>
      )}
      {stackedListItemBodyType === 'Label+Value' && (
        <View>
          <Text style={[globalStyles.labelstackedListItemBodyType, globalStyles.labelFlexBox , {color:theme.primarytextcolor2}]}>Label</Text>
          <Text style={[globalStyles.valuestackedListItemBodyType, globalStyles.labelFlexBox, {color : theme.primarycolor}]}>Value</Text>
        </View>
      )}
      {stackedListItemBodyType === 'Extra Content' && (
        <View>
          {stackedListItemBodyShowLabel && (
            <Text
              style={[globalStyles.labelstackedListItemBodyLabel, globalStyles.labelTypo,{color: theme.primarytextcolor2_2}]}>
              Label
            </Text>
          )}
          <Text style={[globalStyles.stackedListItemBodyheadline, globalStyles.stackedListItemBodyheadlineFlexBox, {color : theme.primarycolor}]}>
            Headline
          </Text>
          {stackedListItemBodyShowSubTitle && (
            <Text style={[globalStyles.subTitle, globalStyles.stackedListItemBodyheadlineFlexBox,  {color : theme.primarycolor}]}>
              Sub title
            </Text>
          )}
          {stackedListItemBodyShowBodyCopy && (
            <Text style={[globalStyles.bodyCopy, globalStyles.labelTypo, {color:theme.primarytextcolor2}]}>Body copy</Text>
          )}
          {stackedListItemBodyShowStatus && (
            <View style={globalStyles.status}>
              <Text
                style={[
                  globalStyles.status1,
                  globalStyles.labelTypo,
                  {color: getStatusColor()},
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
  badgeNotificationNumber
}) => {
  const {theme} = useTheme();
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
            styles.badgenotification,
            {backgroundColor: getBadgeBackgroundColor()},
          ]}>
          <Text style={[styles.text, {color: getBadgeTextColor()},getBadgeTextSize()]}>{badgeNotificationNumber}</Text>
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
                {color: theme.primarycolor},
              ]}>
              Inactive
            </Text>
          </View>
        </View>
      )}
      {badgeStatusType === 'Text' &&
      <Text style={styles.contentText}>Content</Text>}

{badgeStatusType === 'Balance' &&
      <View style={styles.typebalance1}>
<View style={[styles.wrapper2, styles.wrapperFlexBox1]}>
<Text style={[styles.content1, styles.contentTypo1]}>Content</Text>
<View style={[styles.wrapper11, styles.wrapperFlexBox1]}>
<Text style={styles.sar1}>SAR</Text>
</View>
</View>
<Text style={[styles.content11, styles.contentTypo1]}>Content</Text>
</View>}
      {badgeStatusType === 'Balance with Status' && (
        <View style={styles.typebalanceWithStatus}>
          <View style={styles.wrapper}>
            <Text style={styles.content}>Content</Text>
            <View style={styles.wrapper1}>
              <Text style={[styles.sar, styles.sarTypo]}>SAR</Text>
            </View>
          </View>
          <View style={styles.chipsinfo}>
            <Cancel />
            <Text style={[styles.label, styles.sarTypo]}>Inactive</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  sarTypo: {
    textAlign: 'left',
    color: '#000',
    fontFamily: 'Univers Next for HSBC',
  },
  content: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    textAlign: 'right',
    color: '#000',
    fontFamily: 'Univers Next for HSBC',
  },
  contentText: {
    fontSize: 13,
    lineHeight: 17,
    fontFamily: "Univers Next for HSBC",
    color: "#767676",
    textAlign: "right"
    },
  sar: {
    fontSize: 11,
    lineHeight: 15,
  },
  wrapper1: {
    paddingHorizontal: 0,
    paddingVertical: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  wrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'flex-end',
  },
  ragIcon: {
    width: 16,
    height: 16,
  },
  label: {
    fontSize: 13,
    lineHeight: 17,
  },
  chipsinfo: {
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  typebalanceWithStatus: {
    gap: 4,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: 'Univers Next for HSBC',
    color: '#000',
    textAlign: 'center',
    width: 19,
    height: 19,
  },
  badgenotification: {
    borderRadius: 100,
    backgroundColor: '#ffbb33',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapperFlexBox1: {
    flexDirection: "row",
    alignItems: "flex-end"
    },
    contentTypo1: {
    textAlign: "right",
    fontFamily: "Univers Next for HSBC"
    },
    content1: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    color: "#000"
    },
    sar1: {
    fontSize: 11,
    lineHeight: 15,
    textAlign: "left",
    color: "#000",
    fontFamily: "Univers Next for HSBC"
    },
    wrapper11: {
    paddingHorizontal: 0,
    paddingVertical: 1
    },
    wrapper2: {
    justifyContent: "flex-end",
    gap: 4
    },
    content11: {
    fontSize: 13,
    lineHeight: 17,
    color: "#767676"
    },
    typebalance1: {
    // flex: 1,
    // width: "100%",
    gap: 4,
    alignItems: "flex-end"
    }
});



