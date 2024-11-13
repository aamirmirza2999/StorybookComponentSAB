import * as React from "react";
import {Text, StyleSheet, View, I18nManager,} from "react-native";
import { globalStyles } from '../../constants/GlobalStyles';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import {RightRedArrow1} from '../../constants/SvgLocations';
import TextComponent from "../Common/TextComponent"
import { LinkButton } from "./Button";
import { useTranslation } from 'react-i18next';
import { PassWordeye ,PassWordeyeDark} from "../../constants/SvgLocations";
const TextDivider = (props) => {
    const {theme, toggleTheme,isDarkMode} = useTheme();
    const { t } = useTranslation();
  	return (
        <>
        {props.textDividerType === "promotional" ?
    		<View style={[globalStyles.typepromotionalLanguageeng,{backgroundColor:theme.stylescolorpressed1}]}>
      			<Text style={[globalStyles.headline, globalStyles.headlineFlexBox,{color:theme.primarycolor}]}>{props.Headline}</Text>
                  {props.textDividerSubtitle ? 
      			<Text style={[globalStyles.nequePorroQuisquam, globalStyles.headlineFlexBox,{color:theme.primarycolor}]}>{props.text}</Text>
                :null}
    		</View>
            :null
            }

        {   props.textDividerType=== 'pagetitle'      ?                          
            <View style={[globalStyles.typepageTitleLanguageengl,{backgroundColor:theme.stylescolorpressed1}]}>
            <Text style={[globalStyles.welcomeBackText, globalStyles.welcomeBackFlexBox,{color:theme.primarycolor}]}>{props.Headline} </Text>
            {props.textDividerSubtitle ? 
            <Text style={[globalStyles.nametext, globalStyles.welcomeBackFlexBox,{color:theme.primarycolor}]}>{props.text}</Text>
            :null}
            </View>
            : null}

         {props.textDividerType === 'bottomsheet'?
            <View style={[globalStyles.typebottomsheetLanguageeng,{backgroundColor:theme.stylescolorpressed1}]}>
            <Text style={[globalStyles.bottomsheettext, globalStyles.FlexBox,{color:theme.primarycolor}]}>{props.Headline}</Text>
            {props.textDividerSubtitle ? 
            <Text style={[globalStyles.textcontent, globalStyles.welcomeBackFlexBox,{color:theme.primarycolor}]}>{props.text}</Text>
            :null}
            </View>
            :null}

           {props.textDividerType==='inpage' ?
                <View style={[globalStyles.typeinPageLanguageenglish,{backgroundColor:theme.stylescolorpressed1}]}>
                <View style={globalStyles.welcomeBackParent}>
                <Text style={[globalStyles.Linktext, styles.welcomeBackTypo,{color:theme.primarycolor}]}>{props.Headline}</Text>
               {props.textDividerLink?
                <LinkButton
                label={props.Link}
                linkbuttoneIconLeft={props.linkbuttonIconleft}
                linkbuttonIconRight={props.linkbuttonIconright}
                linkbuttonType={props.linkbuttonsize}
                />
                :null}
                </View>
                {props.textDividerSubtitle ? 
                <Text style={[globalStyles.sublinktext, globalStyles.welcomeBackTypo,{color:theme.primarycolor}]}>{props.text}</Text>
                :null}
                </View>
                :null}
<View style={[globalStyles.texttitleactions,{backgroundColor:theme.stylescolorpressed1}]}>
<View style={[globalStyles.languageenglish, globalStyles.languagearabicPosition]}>
<View style={globalStyles.frameParenttextdivider}>
<View style={globalStyles.Vewallheader}>
<Text style={[globalStyles.Viewheadlinetext, globalStyles.viewall,{color:theme.primarycolor}]}>{props.Headline}</Text>
{props.texttitleactionPassword?
isDarkMode?
<PassWordeyeDark/>
:
<PassWordeye/>
:null}
</View>
<View style={globalStyles.linkFlexBox}>
<View style={[globalStyles.wrapperview, globalStyles.wrapperFlexBoxview]}>
<Text style={[globalStyles.viewalltextdivi, globalStyles.textLayout,{color:theme.primarycolor}]}>{props.viewall}</Text>
</View>
</View>
</View>
</View>
</View>
            </>
    );
};

const styles = StyleSheet.create({
   
});

export default TextDivider;
