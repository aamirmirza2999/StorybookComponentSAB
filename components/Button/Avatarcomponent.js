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
  import { useTheme } from '../../constants/Theme/ThemeProvider';
import { AvatarIconblack,AvatarIconwhite,SplitIcon,EditIcon,AddBenefiary} from '../../constants/SvgLocations';
import { globalStyles } from '../../constants/GlobalStyles';
import TextComponent from './TextComponent';

  const Avatarcomponent = props => {
  const {theme, toggleTheme} = useTheme();
  
   
    return (
      <>
        <View>
          {props.avatarblack?
        <View style={globalStyles.avatar}>
   <AvatarIconblack/>
   </View>
   :null}

       {props.avatarwhite? 
       <View style={globalStyles.avatar}>
        <AvatarIconwhite/>
   </View>
   :null}
  {props.avatarsplit? 
   <View style={globalStyles.splitavatar}>
  <SplitIcon/>
   </View>:null}
   {props.avatarassbene? 
   <View style={globalStyles.Addbeneavatar}>
   <AddBenefiary/>
   </View> : null}
   {props.avataredit? 
   <View style={{}}>
   <EditIcon/>
   </View> : null }
   {props.avatarname? 
   <View style={{flexDirection:"row",}}>
   <View style={[globalStyles.typefilledElementsinitials,]}>
   {/* <Image style={globalStyles.path3Icon} resizeMode="cover" source="Path 3.png" /> */}
      			<TextComponent style={globalStyles.jm}>JM</TextComponent>
    		</View>
        <View style={[globalStyles.typefilledElementsinitials,{marginLeft:65}]}>
      			<TextComponent style={globalStyles.jm2}>JM</TextComponent>
    		</View>
       <View style={[globalStyles.typefilledElementsinitials,{marginLeft:125}]}>
      			<TextComponent style={globalStyles.jm3}>JM</TextComponent>
    		</View>
</View>  
:null}
</View>

      </>
    );
  };
  
  
  export default Avatarcomponent;
  
  const styles = StyleSheet.create({});
 