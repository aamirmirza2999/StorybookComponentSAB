import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PngLocations from "../../constants/PngLocations";
import { useTheme } from '../../constants/Theme/ThemeProvider';
import { globalStyles } from '../../constants/GlobalStyles';

const StoryModule = (props) => {
	const { isDarkMode, theme } = useTheme();

	return (
		<View style={[globalStyles.storyModuleContainer, { backgroundColor: theme.primaryinvert }]}>
			{props.storyStateType === 'ToSee' &&
				<LinearGradient style={[globalStyles.storyStates, { backgroundColor: "transparent" }]} locations={[0, 0.39, 0.92]} colors={['#ba1110', '#a8282f', '#fff']} useAngle={true} angle={225}>
					<Image style={globalStyles.iconSabStoreStoryModule} resizeMode="cover" source={PngLocations.SabstoreStory} />
				</LinearGradient>}
			{props.storyStateType === 'Seen' &&
				<View style={[globalStyles.storyStates, { backgroundColor: theme.primarycolor2 }]}>
					<Image style={globalStyles.iconSabStoreStoryModule} resizeMode="cover" source={PngLocations.SabstoreStory} />
				</View>}
			<View style={styles.texttextParent}>
				<View style={globalStyles.texttextFlexBox}>
					<Text style={[globalStyles.smallFont, globalStyles.sarTypo, { color: theme.primarycolor }]}>Text line</Text>
				</View>
				{props.storyModuleExtraContent &&
					<View style={[globalStyles.texttextFlexBox]}>
						<Text style={[globalStyles.extraSmallFont, globalStyles.sarTypo, { color: theme.primarytextcolor2 }]}>Support Text</Text>
					</View>}
			</View>
		</View>);
};

const styles = StyleSheet.create({
	texttextParent: {
		alignItems: "center"
	},
});

export default StoryModule;
