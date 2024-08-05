import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Platform } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { globalStyles } from '../../constants/GlobalStyles';

const TooltipComponent = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [containerHeight, setContainerHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateHeight = () => {
            setContainerHeight(Dimensions.get('window').height);
        };
        Dimensions.addEventListener('change', updateHeight);
        return () => Dimensions.removeEventListener('change', updateHeight);
    }, []);

    const handleVisibilityToggle = () => {
        setIsVisible(!isVisible);
    };

    const fontsFamily = (fontFamily) => {
        switch (fontFamily) {
            case "Bold":
                return globalStyles.boldTextFamily;
            case "Regular":
                return globalStyles.regularTextFamily;
            case "Light":
                return globalStyles.lightTextFamily;
            default:
                return globalStyles.regularTextFamily;
        }
    };

    return (
        <View style={[globalStyles.badgenotification, { height: containerHeight }]}>
            <Tooltip
                isVisible={true}
                contentStyle={[globalStyles.tooltipContainerStyle,{backgroundColor: props.tooltipColor}]}
                arrowStyle={[{ marginLeft: actuatedNormalize(props.arrowMarginLeft || 0), marginTop: actuatedNormalize(props.arrowMarginTop || 0),zIndex:1 }]}
                backgroundColor={props.backgroundColor}
                childContentSpacing={actuatedNormalize(0)}
                useReactNativeModal={false}
                arrowSize={globalStyles.tooltipArrowSize}
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
