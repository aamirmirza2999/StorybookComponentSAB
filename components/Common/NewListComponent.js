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

const NewListComponent = props => {
  console.log('props--->', props);

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

                  <Text style={[globalStyles.link, globalStyles.linkTypo]}>
                    Link
                  </Text>
                  <View style={globalStyles.wrapperFlexBoxRow}>
                    <View>
                      {props.badgeActionableMenu && (
                        <View
                          style={[
                            globalStyles.cicularView,
                            globalStyles.centerFlexBox,
                          ]}>
                          <Text style={globalStyles.circularViewtext}>1</Text>
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
                  <Text style={[globalStyles.link, globalStyles.linkTypo]}>
                    Label
                  </Text>
                  {props.listItemActionableSelectType === 'Check Box' ? (
                    <View
                      style={[
                        globalStyles.listItemActionableSelectType,
                        {borderRadius: spacingXXS},
                      ]}
                    />
                  ) : (
                    <View
                      style={[
                        globalStyles.listItemActionableSelectType,
                        {borderRadius: spacingM},
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
                      <Text style={[globalStyles.labelLightPreviewValue]}>
                        Label
                      </Text>

                      <Text style={[globalStyles.valueLightPreviewValue]}>
                        Value
                      </Text>

                      {props.iconPreview && (
                        <RightArrow width={spacingM} height={spacingM} />
                      )}
                    </View>
                  ) : (
                    <View style={globalStyles.rowFlexBoxSpaceBetween}>
                      <View style={{width: '50%'}}>
                        <Text style={[globalStyles.labelLightPreviewValue]}>
                          Label
                        </Text>
                      </View>

                      {/* Middle Label */}
                      <View style={{width: '50%'}}>
                        <Text style={[globalStyles.valueLightPreviewValue]}>
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
                    <Text style={globalStyles.labelBulletPoint}>Label</Text>
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
                {/* <Text style={[globalStyles.labeltypoHeadline]}>Headline</Text>
                <Text style={[globalStyles.labeltypoBody]}>Body copy</Text> */}
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
                    ]}>
                    <Text style={[globalStyles.labelTypoInactive]}>
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
                <Text style={[globalStyles.labeltypoHeadline]}>Headline</Text>
                <Text style={[globalStyles.labeltypoBody]}>Body copy</Text>
              </View>
              <View style={globalStyles.rowFlexBox}>
                <View
                  style={[
                    globalStyles.chipsinfoInactive,
                    globalStyles.centerFlexBox,
                  ]}>
                  <Text style={[globalStyles.labelTypoInactive]}>Inactive</Text>
                </View>
              </View>
              <RightArrow width={spacingM} height={spacingM} />
            </View>
          )}
        </View>
      )}
      {props.showDivider && <View style={globalStyles.dividerStyle} />}
    </View>
  );
};

export default NewListComponent;

const ListItemAddon = ({addonType}) => {
  return (
    <>
      {addonType === 'Avatar' && (
        <View style={globalStyles.avatarListItemAddon}>
          <Text style={globalStyles.avatarListItemAddonText}>JM</Text>
        </View>
      )}
      {addonType === 'Icon' && (
        <InfoIconRed width={spacingM} height={spacingM} />
      )}
      {addonType === 'Icon with BG' && (
        <View style={globalStyles.wrapperListItemAddon}>
          <InfoIconRed width={spacingM} height={spacingM} />
        </View>
      )}
      {addonType === 'Pie Graph' && (
        <View>
          <Slices />
          <Text style={globalStyles.PieGraphListItemAddon}>45%</Text>
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
          <Text style={[globalStyles.labeltypoHeadline]}>Headline</Text>
          {stackedListItemBodyShowContent && (
            <Text style={[globalStyles.labeltypoBody]}>Body copy</Text>
          )}
        </View>
      )}
      {stackedListItemBodyType === 'Label+Value' && (
        <View>
          <Text style={[globalStyles.labelstackedListItemBodyType, globalStyles.labelFlexBox]}>Label</Text>
          <Text style={[globalStyles.valuestackedListItemBodyType, globalStyles.labelFlexBox]}>Value</Text>
        </View>
      )}
      {stackedListItemBodyType === 'Extra Content' && (
        <View>
          {stackedListItemBodyShowLabel && (
            <Text
              style={[globalStyles.labelstackedListItemBodyLabel, globalStyles.labelTypo]}>
              Label
            </Text>
          )}
          <Text style={[globalStyles.stackedListItemBodyheadline, globalStyles.stackedListItemBodyheadlineFlexBox]}>
            Headline
          </Text>
          {stackedListItemBodyShowSubTitle && (
            <Text style={[globalStyles.subTitle, globalStyles.stackedListItemBodyheadlineFlexBox]}>
              Sub title
            </Text>
          )}
          {stackedListItemBodyShowBodyCopy && (
            <Text style={[globalStyles.bodyCopy, globalStyles.labelTypo]}>Body copy</Text>
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

