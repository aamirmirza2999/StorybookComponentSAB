import { View, TouchableOpacity, Switch ,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import ToggleSwitch from 'toggle-switch-react-native';
import { globalStyles } from '../../constants/GlobalStyles'
 import { useTheme } from '../../constants/Theme/ThemeProvider';
import TextComponent from './TextComponent'
// import Fonts from '../constants/Fonts';

const Toggleswitch = (props) => {

  const { theme,  } = useTheme();
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = (value) => {
    setIsOn(value);
  };

  return (

    <View style={styles.container}>
    {/* <TextComponent style={styles.text}>Toggle Switch Example</TextComponent> */}
    <ToggleSwitch
      isOn={isOn}
      onColor="#00847F"
      offColor="#767676"
      label="Toggle Me"
      labelStyle={globalStyles.togglelabel}
      size="large"
      onToggle={toggleSwitch}
      
    />
    {/* <TextComponent style={styles.text}>Switch is {isOn ? 'ON' : 'OFF'}</TextComponent> */}
  </View>
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
 
});

export default Toggleswitch;

// import * as React from "react";
// import {Image, StyleSheet, View} from "react-native";
// import { Toggle } from "../../constants/SvgLocations";
// import { Toggleunselect } from "../../constants/SvgLocations";

// const Toggleswitch = () => {
  	
//   	return (
//     		<View style={styles.toggle}>
//       			<Toggle style={[styles.stateunselectedIcon, styles.iconLayout]} resizeMode="cover" source="State=Unselected.png" />
//       			<Toggleunselect style={[styles.stateselectedIcon, styles.iconLayout]} resizeMode="cover" source="State=Selected.png" />
//     		</View>);
// };

// const styles = StyleSheet.create({
//   	iconLayout: {
//     		height: 27,
//     		width: 43,
//     		position: "absolute"
//   	},
//   	stateunselectedIcon: {
//     		top: 20,
//     		left: 91
//   	},
//   	stateselectedIcon: {
//     		top: 22,
//     		left: 24
//   	},
//   	toggle: {
//     		borderRadius: 5,
//     		borderStyle: "dashed",
//     		borderColor: "#9747ff",
//     		borderWidth: 1,
//     		flex: 1,
//     		width: "100%",
//     		height: 71,
//     		overflow: "hidden"
//   	}
// });

// export default Toggleswitch;
