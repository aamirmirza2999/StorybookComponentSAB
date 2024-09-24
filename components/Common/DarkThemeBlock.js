import React from 'react';
import { StyleSheet, View } from 'react-native';
import Toggleswitch from './Toggleswitch';
import TextComponent from './TextComponent';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { TextInfoIcon, TextInfoIconDark } from '../../constants/SvgLocations';

const DarkThemeBlock = (props) => {
    const { theme, isDarkMode } = useTheme();
    const backgroundColor = isDarkMode ? props.bgColor : 'white';
    const primaryTextColor = isDarkMode ? theme.primarycolor2 : theme.primarytextcolor;

    return (
        <View style={[styles.stackedlistitem, { backgroundColor }]}>
            <View style={[styles.stackedlistitemdefault, styles.wrapperFlexBox1]}>
                <View style={styles.listitemaddon}>
                    <View style={styles.wrapper}>
                    {isDarkMode?<TextInfoIconDark/>:<TextInfoIcon />}
                    </View>
                </View>
                <View style={styles.stackedlistitembody}>
                    <TextComponent
                        numberOfLines={1}
                        style={[styles.textStyle, { color: primaryTextColor }]}
                    >
                        {props.themeText}
                    </TextComponent>
                    <TextComponent
                        numberOfLines={1}
                        style={[styles.subTextStyle, { color: theme.primarytextcolor2 }]}
                    >
                        {props.themeChangeText}
                    </TextComponent>
                </View>
                {props.toggleButton && (
                    <View style={styles.toggleWrapper}>
                        <Toggleswitch />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperFlexBox1: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: actuatedNormalize(20),
        justifyContent: 'space-between',
    },
    wrapper: {
        borderRadius: 100,
        backgroundColor: 'rgba(118, 118, 118, 0.1)',
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listitemaddon: {
        flexDirection: 'row',
    },
    stackedlistitembody: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
    },
    stackedlistitemdefault: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: actuatedNormalize(10),
    },
    stackedlistitem: {
        flexDirection: 'row',
        width: '100%',
    },
    textStyle: {
        fontSize: actuatedNormalize(16),
        fontWeight: 'bold',
    },
    subTextStyle: {
        fontSize: actuatedNormalize(14),
        color: '#666',
    },
    toggleWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: actuatedNormalize(10),
    },
});

export default DarkThemeBlock;
