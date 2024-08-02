import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { actuatedNormalize } from '../../constants/PixelScaling';
import { RightRedArrow1,Home } from '../../constants/SvgLocations';
import Divider from '../Button/Divider';
import TextComponent from '../Button/TextComponent';
import { globalStyles } from '../../constants/GlobalStyles';
import { useTheme } from '../../constants/Theme/ThemeProvider';


const AccordianMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const { theme } = useTheme();

 const toggleExpanded = () => {
  setCollapsed(!collapsed)
   
  };

  const titlePressed=()=>{
    alert("Title Pressed")
  }
  
  const subDataPressed=(item)=>{
    alert(item,"Pressed")
  }
 
    return (

        <View style={[globalStyles.AccordianMenuContainer,{backgroundColor:theme.stylesblockbg,}]}>
          <TouchableOpacity onPress={props.subData?toggleExpanded:titlePressed}>   
             <View style={globalStyles.AccordianMenuTitleBox}>
               <Home style={{ height: 24, width: 24}}/>
               <TextComponent style={[globalStyles.AccordianTitleText,{ color: "#000",}]}>
                   {props.HeaderText}
                </TextComponent>
                {props.subData?
                 <RightRedArrow1 style={{  marginLeft: 8,  height: 24,width: 24,	transform: [{ rotate:collapsed?  "90deg" :"270deg" }], }} />
                 :null
                }
          </View> 
          </TouchableOpacity>
        {props.subData?
          <Collapsible collapsed={collapsed} align="center">
            {props.subData.map((item,key) => (
              <TouchableOpacity
                onPress={()=>subDataPressed(item.title)}
              >
                <View style={[globalStyles.AccordianSubMenuConatiner,{backgroundColor:theme.stylesblockbg,}]}>
                  <TextComponent
                    style={[globalStyles.AccordianSubTitleText,{ color:theme.primarycolor}]}
                  >
                  {item.title}
                  </TextComponent>
                </View>

                {item.key === props.subData.length ?null:
                  <Divider
                    backgroundColor="rgba(118, 118, 118, 0.2)"
                    height={actuatedNormalize(1)} 
                  />
                }

              </TouchableOpacity>  
            ))}
          </Collapsible>
          :null}
          </View>
         
    );
  
}

const styles = StyleSheet.create({
 
});

export default AccordianMenu;