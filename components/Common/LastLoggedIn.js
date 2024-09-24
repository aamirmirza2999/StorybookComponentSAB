import React from 'react';
import { StyleSheet, View } from "react-native";
import { AvatarIconWhiteFilled, AvatarIconblackDark, LogoutIconDark, LogoutIconWhite, ProfileEditIconDark } from '../../constants/SvgLocations';
import { actuatedNormalize } from '../../constants/PixelScaling';
import TextComponent from './TextComponent';
import { useTheme } from '../../constants/Theme/ThemeProvider';

const LastLoggedIn = (props) => {
    const { theme, isDarkMode } = useTheme();
    const primaryTextColor = isDarkMode ? theme.primarycolor2 : theme.primarytextcolor;

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? theme.primarycolorstatic : theme.primarycolor4 }]}>
            <View style={styles.userInfoSection}>
                <View style={styles.avatarSection}>
                    {/* Avatar Icon */}
                    {isDarkMode ? <AvatarIconblackDark width={actuatedNormalize(48)} height={actuatedNormalize(48)} /> : <AvatarIconWhiteFilled width={actuatedNormalize(48)} height={actuatedNormalize(48)} />}
                    
                    {/* Profile Edit Icon (Overlaid on Avatar) */}
                    <View style={styles.editIconWrapper}>
                        <ProfileEditIconDark width={actuatedNormalize(16)} height={actuatedNormalize(16)} />
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <TextComponent
                        numberOfLines={1}
                        style={[styles.title, { color: primaryTextColor }]}
                    >
                        {props.name}
                    </TextComponent>
                    <TextComponent
                        numberOfLines={1}
                        style={[styles.subCopy, { color: theme.primarytextcolor2 }]}
                    >
                        {props.status}
                    </TextComponent>
                </View>
            </View>
            {props.powerButton ?
                isDarkMode ?
                    <LogoutIconDark width={actuatedNormalize(24)} height={actuatedNormalize(24)} /> :
                    <LogoutIconWhite width={actuatedNormalize(24)} height={actuatedNormalize(24)} /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Ensure space between user info and LogoutIcon
        width: "100%",
        height: actuatedNormalize(73),
        paddingHorizontal: actuatedNormalize(16), // Adjust horizontal padding
    },
    userInfoSection: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1, // Allows this section to grow and take available space
    },
    avatarSection: {
        position: 'relative',  // For positioning the edit icon relative to the avatar
        width: actuatedNormalize(40), 
        height: actuatedNormalize(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIconWrapper: {
        position: 'absolute', // Allows the edit icon to overlap the avatar
        bottom: -2,
        right: -2,
        backgroundColor: 'white', // Optional: You can add a background circle to the edit icon for clarity
        borderRadius: actuatedNormalize(8),
        padding: actuatedNormalize(2), // Slight padding for better visibility
    },
    textWrapper: {
        marginLeft: actuatedNormalize(12), // Space between the avatar and the text
        // gap: 3,
        justifyContent: "center",
    },
    title: {
        fontWeight: "700",
        fontSize: actuatedNormalize(17),
        lineHeight: 22,
        textAlign: "left",
    },
    subCopy: {
        fontSize: actuatedNormalize(14), // Slightly smaller for subtext
        lineHeight: 20,
        textAlign: "left",
        color: "#767676",
    },
});

export default LastLoggedIn;
