import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import { globalStyles } from '../../constants/GlobalStyles';
import TextComponent from './TextComponent';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import {RightRedArrow1} from '../../constants/SvgLocations';
import { LinkButton } from "./Button";
const TextDivider = (props) => {
    const {theme, toggleTheme,isDarkMode} = useTheme();

  	return (
        <>
        {props.promotional ?
    		<View style={globalStyles.typepromotionalLanguageeng}>
      			<Text style={[globalStyles.headline, globalStyles.headlineFlexBox]}>{props.Headline}</Text>
      			<Text style={[globalStyles.nequePorroQuisquam, globalStyles.headlineFlexBox]}>{props.Description}</Text>
    		</View>
            :null
            }

        {   props.pagetitle      ?                          
            <View style={globalStyles.typepageTitleLanguageengl}>
            <Text style={[globalStyles.welcomeBackText, globalStyles.welcomeBackFlexBox]}>{props.Headline} </Text>
            <Text style={[globalStyles.nametext, globalStyles.welcomeBackFlexBox]}>{props.Description}</Text>
            </View>
            : null}

         {props.bottomsheet?
            <View style={globalStyles.typebottomsheetLanguageeng}>
            <Text style={[globalStyles.bottomsheettext, globalStyles.FlexBox]}>{props.Headline}</Text>
            <Text style={[globalStyles.textcontent, globalStyles.welcomeBackFlexBox]}>{props.Description}</Text>
            </View>
            :null}

           {props.inpage ?
                <View style={globalStyles.typeinPageLanguageenglish}>
                <View style={globalStyles.welcomeBackParent}>
                <Text style={[globalStyles.Linktext, styles.welcomeBackTypo]}>{props.Headline}</Text>
                {/* <View style={globalStyles.linkFlexBox}>
                <View style={[globalStyles.wrapperlink, globalStyles.linkFlexBox]}>
                <Text style={[globalStyles.linkButton1, globalStyles.welcomeBackTypo]}>Link Button</Text>
                </View>
                <RightRedArrow1 style={globalStyles.iconchevronright} resizeMode="cover" />
                </View> */}
                <LinkButton
                label="LinkButton"
                enableLeftIcon={true}
                type="small"
                />
                </View>
                <Text style={[globalStyles.sublinktext, globalStyles.welcomeBackTypo]}>{props.Description}</Text>
                </View>
                :null}

            </>
    );
};

const styles = StyleSheet.create({
  
});

export default TextDivider;
