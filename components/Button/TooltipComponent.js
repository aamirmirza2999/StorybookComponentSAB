import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { globalStyles } from '../../constants/GlobalStyles';

const TooltipComponent = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleVisibilityToggle = () => {
        setIsVisible(!isVisible);
    };

    const fontsFamily = (fontFamily) => {
        switch (fontFamily) {
            case "Bold": {
                return globalStyles.boldTextFamily
            }
            case "Regular": {
                return globalStyles.regularTextFamily
            }
            case "Light": {
                return globalStyles.lightTextFamily
            }
            default: {
                return globalStyles.regularTextFamily
            }
        }
    }

    return (
        <View style={globalStyles.badgenotification}>
            <Tooltip
                isVisible={true}
                contentStyle={globalStyles.tooltipContainerStyle}
                arrowStyle={[{ marginLeft: actuatedNormalize(props.arrowMarginLeft || 0), marginTop: actuatedNormalize(props.arrowMarginTop || 0) }]}
                backgroundColor="#fff"
                childContentSpacing={actuatedNormalize(0)}
                useReactNativeModal={false}
                // showChildInTooltip={true}
                content={
                    <Text style={[globalStyles.tooltipText, { color: props.textColor, textTransform: props.textTransform || "none" }, fontsFamily(props.fontFamily)]}>
                        {"prompt text"}
                    </Text>
                }
                placement={props.placement}
                onClose={handleVisibilityToggle}
            >
                <Text>{" "}</Text>
            </Tooltip>

        </View>
    );
};


export default TooltipComponent;
