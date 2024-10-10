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
import { AvatarIconblack,AvatarIconwhite,SplitIcon,EditIcon,AddBenefiary,AvatarIconblackDark,AvatarIconDarkOutlined,ProfileEditIconDark} from '../../constants/SvgLocations';
import { globalStyles } from '../../constants/GlobalStyles';
import TextComponent from './TextComponent';
import { actuatedNormalize } from '../../constants/PixelScaling';

  const Avatarcomponent = props => {
  const {theme, toggleTheme,isDarkMode} = useTheme();
  
   
    return (
      <>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}> 
          {props.avatarblack ?
          isDarkMode?
          <>
        <View style={[globalStyles.avatar,{}]}>
          {props.avatarSizesmall ?
          <AvatarIconblackDark
          width={actuatedNormalize(24)}
          height={actuatedNormalize(24)}
          />:null}
           {props.avatarSizemedium ?
          <AvatarIconblackDark
          width={actuatedNormalize(32)}
          height={actuatedNormalize(32)}
          />:null}
           {props.avatarSizelarge ?
          <AvatarIconblackDark
          width={actuatedNormalize(40)}
          height={actuatedNormalize(40)}
          />:null}

          </View>
         
          </>
          :
        <View style={[globalStyles.avatar,{}]}>
          {props.avatarSizesmall?
   <AvatarIconblack
     width= {actuatedNormalize(24)}
     height={actuatedNormalize(24)}
   />
   :null}
     {props.avatarSizemedium?
   <AvatarIconblack
     width= {actuatedNormalize(32)}
     height={actuatedNormalize(32)}
   />
   :null}
     {props.avatarSizelarge?
   <AvatarIconblack
     width= {actuatedNormalize(40)}
     height={actuatedNormalize(40)}
   />
   :null}
   </View>
   :null}

       {props.avatarwhite? 
       isDarkMode?
       <View style={globalStyles.avatar}>
        
           {props.avatarSizesmall ?
        <AvatarIconDarkOutlined
         width= {actuatedNormalize(24)}
         height={actuatedNormalize(24)}
        />:null}
         {props.avatarSizemedium ?
        <AvatarIconDarkOutlined
         width= {actuatedNormalize(32)}
         height={actuatedNormalize(32)}
        />:null}
         {props.avatarSizelarge ?
        <AvatarIconDarkOutlined
         width= {actuatedNormalize(40)}
         height={actuatedNormalize(40)}
        />:null}
   </View>: <View style={globalStyles.avatar}>
        
        {props.avatarSizesmall ?
     <AvatarIconwhite
      width= {actuatedNormalize(24)}
      height={actuatedNormalize(24)}
     />:null}
      {props.avatarSizemedium ?
     <AvatarIconwhite
      width= {actuatedNormalize(32)}
      height={actuatedNormalize(32)}
     />:null}
      {props.avatarSizelarge ?
     <AvatarIconwhite
      width= {actuatedNormalize(40)}
      height={actuatedNormalize(40)}
     />:null}
</View>
   :null}
  {props.avatarsplit? 
   <View style={globalStyles.splitavatar}>
  <SplitIcon/>
   </View>:null}
   {props.avatarassbene? 
   <View style={[globalStyles.Addbeneavatar,{backgroundColor:theme.primarycolor3  }]}>
   <AddBenefiary/>
   </View> : null}
   {props.avataredit? 
   <View style={{}}>
   <EditIcon/>
   </View> : null }
   <View style={{flexDirection:"row"}}>
   {props.avatarname? 
     <View style={[globalStyles.typefilledElementsinitials,{backgroundColor:isDarkMode? "#580007":"#DB001110"}]}>
     <TextComponent style={[globalStyles.jm,{color:isDarkMode?"white":"#DB0011"}]}>{props.avatarinitial}</TextComponent>
 </View>
 :null}
 {props.avatarnamemid?
 <View style={[globalStyles.typefilledElementsinitials,{backgroundColor:isDarkMode? "#580007":"#DB001110"}]}>
 <TextComponent style={[globalStyles.jm2,{color:isDarkMode?"white":"#DB0011"}]}>{props.avatarinitial}</TextComponent>
</View>
 :null}
 {props.avatarnamesmall?
 <View style={[globalStyles.typefilledElementsinitials,{  backgroundColor:isDarkMode? "#580007":"#DB001110"}]}>
 <TextComponent style={[globalStyles.jm3,{color:isDarkMode?"white":"#DB0011"}]}>{props.avatarinitial}</TextComponent>
</View>
 :null}
 </View>

   
   {/* {props.avatarname? 
   <View style={{flexDirection:"row",}}>
   <View style={[globalStyles.typefilledElementsinitials,{backgroundColor: "#fbe5e7"}]}>
      			<TextComponent style={[globalStyles.jm,{color:theme.primarycolor3}]}>JM</TextComponent>
    		</View>
        <View style={[globalStyles.typefilledElementsinitials,{marginLeft:65,backgroundColor: "#fbe5e7"}]}>
      			<TextComponent style={[globalStyles.jm2,{color:theme.primarycolor3}]}>JM</TextComponent>
    		</View>
       <View style={[globalStyles.typefilledElementsinitials,{marginLeft:125,  backgroundColor: "#fbe5e7"}]}>
      			<TextComponent style={[globalStyles.jm3,{color:theme.primarycolor3}]}>JM</TextComponent>
    		</View>
</View>  
:null} */}
</View>

      </>
    );
  };
  
  
  export default Avatarcomponent;
  
  const styles = StyleSheet.create({});
 