import React from 'react';
import { I18nManager, StyleSheet, View } from "react-native";
import { AvatarIconWhiteFilled, AvatarIconblackDark, LogoutIconDark, LogoutIconWhite, ProfileEditIconDark } from '../../constants/SvgLocations';
import { actuatedNormalize } from '../../constants/PixelScaling';
import TextComponent from './TextComponent';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { fontLarge, fontMedium, fontWeightBold, spacingM, spacingS, spacingXL } from '../../constants/Size';
import { globalStyles } from '../../constants/GlobalStyles';

const LastLoggedIn = (props) => {
    const { theme, isDarkMode } = useTheme();
    const primaryTextColor = isDarkMode ? theme.primarycolor2 : theme.primarytextcolor;

    return (
        <View style={[globalStyles.lastLoginContainer, { backgroundColor: isDarkMode ? '#383838' : theme.primarycolor4 }]}>
            <View style={globalStyles.userInfoSection}>
                <View style={globalStyles.avatarSection}>
                    {isDarkMode ? <AvatarIconblackDark width={spacingXL} height={spacingXL} /> : <AvatarIconWhiteFilled width={spacingXL} height={spacingXL} />}
                    <View style={globalStyles.editIconWrapper}>
                        <ProfileEditIconDark
                            style={{
                                transform: [{ rotate: I18nManager.isRTL ? "180deg" : "0deg" }],
                            }}
                            width={spacingS} height={spacingS} />
                    </View>
                </View>
                <View style={globalStyles.textWrapper}>
                    <TextComponent
                        numberOfLines={1}
                        fontSize={fontLarge}
                        fontWeight={fontWeightBold}
                        style={[{ color: primaryTextColor }]}
                    >
                        {props.name}
                    </TextComponent>
                    <TextComponent
                        numberOfLines={1}
                        fontSize={fontMedium}
                        style={[{ color:isDarkMode?theme.primarycolor2_100: theme.primarytextcolor2 }]}
                    >
                        {props.status}
                    </TextComponent>
                </View>
                <View>
                {props.powerButton ?
                isDarkMode ?
                    <LogoutIconDark width={spacingM} height={spacingM} /> :
                    <LogoutIconWhite width={spacingM} height={spacingM} /> : null}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default LastLoggedIn;
