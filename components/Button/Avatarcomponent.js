import {
    I18nManager,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
    Image,
  } from 'react-native';
  import React, {useState, useReducer} from 'react';
  import {useNavigation} from '@react-navigation/native';
  import { useTheme } from '../../constants/Theme/ThemeProvider';
import { AvatarIconblack,AvatarIconwhite,SplitIcon,EditIcon,AddBenefiary} from '../../constants/SvgLocations';
import { globalStyles } from '../../constants/GlobalStyles';
import TextComponent from './TextComponent';
  const Avatarcomponent = props => {
    const {theme, toggleTheme} = useTheme();
  
    const navigation = useNavigation();
   
    return (
      <>
       
          
         
       <View>
   <AvatarIconblack
   width={50} height={50}
   />
   <AvatarIconwhite/>
   <View style={globalStyles.splitavatar}>

   <SplitIcon/>
   </View>
   <View style={globalStyles.Addbeneavatar}>
   <AddBenefiary/>
   </View>
   <EditIcon/>
   <View style={{flexDirection:"row"}}>
   <View style={[globalStyles.typefilledElementsinitials,{top:-40,marginLeft:55}]}>
   {/* <Image style={globalStyles.path3Icon} resizeMode="cover" source="Path 3.png" /> */}
      			<TextComponent style={globalStyles.jm}>JM</TextComponent>
    		</View>
        <View style={[globalStyles.typefilledElementsinitials,{top:-40,marginLeft:130}]}>
      			<TextComponent style={globalStyles.jm2}>JM</TextComponent>
    		</View>
       <View style={[globalStyles.typefilledElementsinitials,{top:-40}]}>
      			<TextComponent style={globalStyles.jm3}>JM</TextComponent>
    		</View>
</View>  
</View>

      </>
    );
  };
  
  
  export default Avatarcomponent;
  
  const styles = StyleSheet.create({});
 