import * as React from "react";
import {Text, StyleSheet, View, I18nManager} from "react-native";
import { globalStyles } from '../../constants/GlobalStyles';
import TextComponent from './TextComponent';
import { useTheme } from '../../constants/Theme/ThemeProvider';
import {RightRedArrow1} from '../../constants/SvgLocations';
import { LinkButton } from "./Button";
import { useTranslation } from 'react-i18next';

const TextDivider = (props) => {
    const {theme, toggleTheme,isDarkMode} = useTheme();
    const { t } = useTranslation();
  	return (
        <>
        {props.promotional ?
    		<View style={[globalStyles.typepromotionalLanguageeng,{backgroundColor:theme.primaryinvert}]}>
      			<Text style={[globalStyles.headline, globalStyles.headlineFlexBox,{color:theme.primarycolor}]}>{props.Headline}</Text>
      			<Text style={[globalStyles.nequePorroQuisquam, globalStyles.headlineFlexBox,{color:theme.primarycolor}]}>{props.Description}</Text>
    		</View>
            :null
            }

        {   props.pagetitle      ?                          
            <View style={[globalStyles.typepageTitleLanguageengl,{backgroundColor:theme.primaryinvert}]}>
            <Text style={[globalStyles.welcomeBackText, globalStyles.welcomeBackFlexBox,{color:theme.primarycolor}]}>{props.Headline} </Text>
            <Text style={[globalStyles.nametext, globalStyles.welcomeBackFlexBox,{color:theme.primarycolor}]}>{props.Description}</Text>
            </View>
            : null}

         {props.bottomsheet?
            <View style={[globalStyles.typebottomsheetLanguageeng,{backgroundColor:theme.primaryinvert}]}>
            <Text style={[globalStyles.bottomsheettext, globalStyles.FlexBox,{color:theme.primarycolor}]}>{props.Headline}</Text>
            <Text style={[globalStyles.textcontent, globalStyles.welcomeBackFlexBox,{color:theme.primarycolor}]}>{props.Description}</Text>
            </View>
            :null}

           {props.inpage ?
                <View style={[globalStyles.typeinPageLanguageenglish,{backgroundColor:theme.primaryinvert}]}>
                <View style={globalStyles.welcomeBackParent}>
                <Text style={[globalStyles.Linktext, styles.welcomeBackTypo,{color:theme.primarycolor}]}>{props.Headline}</Text>
                {/* <View style={globalStyles.linkFlexBox}>
                <View style={[globalStyles.wrapperlink, globalStyles.linkFlexBox]}>
                <Text style={[globalStyles.linkButton1, globalStyles.welcomeBackTypo]}>Link Button</Text>
                </View>
                <RightRedArrow1 style={globalStyles.iconchevronright} resizeMode="cover" />
                </View> */}
                <LinkButton
                label={t('initialLang:linkButton')}
                enableLeftIcon={I18nManager.isRTL?true:false}
                enableRightIcon={I18nManager.isRTL?false:true}
                type="small"
                />
                </View>
                <Text style={[globalStyles.sublinktext, globalStyles.welcomeBackTypo,{color:theme.primarycolor}]}>{props.Description}</Text>
                </View>
                :null}

            </>
    );
};

const styles = StyleSheet.create({
  
});

export default TextDivider;
