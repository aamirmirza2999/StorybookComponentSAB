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


const AccordianMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

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

        <View style={globalStyles.AccordianMenuContainer}>
          <TouchableOpacity onPress={props.subData?toggleExpanded:titlePressed}>   
             <View style={globalStyles.AccordianMenuTitleBox}>
               <Home style={{ height: 24, width: 24}}/>
               <TextComponent style={globalStyles.AccordianTitleText}>
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
                <View style={globalStyles.AccordianSubMenuConatiner}>
                  <TextComponent
                    style={globalStyles.AccordianSubTitleText}
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
  menuFlexBox: {
    alignItems: "center",
    alignSelf: "stretch"
    },
    iconoutlinehomeLayout: {
    height: 24,
    width: 24
    },
    menu: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Univers Next for HSBC",
    color: "#000",
    textAlign: "left",
    display: "flex",
    marginLeft: 8,
    flex: 1,
    alignItems: "center"
    },
    iconchevrondown: {
    marginLeft: 8
    },
    accordionTitle: {
    flexDirection: "row"
    },
    menuWrapper: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-end"
    },
    typeCountcollapsed: {
    borderRadius: 8,
    backgroundColor: "#f2f3f4",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1
    }
});

export default AccordianMenu;