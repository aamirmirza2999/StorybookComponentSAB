import * as React from 'react';
import {Text, View} from 'react-native';
import {RightArrow, InfoIconRed, TickIcon} from '../../constants/SvgLocations';
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
          {props.showDivider && <View style={globalStyles.dividerStyle} />}
        </>
      )}

      {props.listType === 'Stacked' && (
        <View style={globalStyles.rowFlexBox}>
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
        </View>
      )}
    </View>
  );
};

export default NewListComponent;
