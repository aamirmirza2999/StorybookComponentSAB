import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import { globalStyles } from '../../constants/GlobalStyles';
import TextComponent from './TextComponent';
import { useTheme } from '../../constants/Theme/ThemeProvider';

const TextDivider = (props) => {
    const {theme, toggleTheme,isDarkMode} = useTheme();

  	return (
        <>
        {props.promotional ?
    		<View style={globalStyles.typepromotionalLanguageeng}>
      			<Text style={[globalStyles.headline, globalStyles.headlineFlexBox]}>Headline</Text>
      			<Text style={[globalStyles.nequePorroQuisquam, globalStyles.headlineFlexBox]}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur</Text>
    		</View>
            :null
            }

        {   props.pagetitle      ?                          
            <View style={globalStyles.typepageTitleLanguageengl}>
            <Text style={[globalStyles.welcomeBackText, globalStyles.welcomeBackFlexBox]}>Headline</Text>
            <Text style={[globalStyles.nametext, globalStyles.welcomeBackFlexBox]}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur</Text>
            </View>
            : null}

            </>
    );
};

const styles = StyleSheet.create({
  
});

export default TextDivider;
