import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  RightArrow,
  InfoIconRed,
  TickIcon,
  Slices,
} from '../../constants/SvgLocations';
import {actuatedNormalize} from '../../constants/PixelScaling';
import {globalStyles} from '../../constants/GlobalStyles';
import {spacingM, spacingXXS} from '../../constants/Size';
import { useTheme } from '../../constants/Theme/ThemeProvider';
const NewListComponent = props => {
  const { theme } = useTheme();

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
                <View style={globalStyles.rowFlexBox}>
                  <View
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
                </View>
              )}
              {props.stackedListItemDefaultAction && (
                <RightArrow width={spacingM} height={spacingM} />
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

