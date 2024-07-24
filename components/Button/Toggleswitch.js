import { View, TouchableOpacity,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { globalStyles } from '../../constants/GlobalStyles'
 import { useTheme } from '../../constants/Theme/ThemeProvider';
import TextComponent from './TextComponent'
// import Fonts from '../constants/Fonts';
import { Switch } from 'react-native-switch';
const Toggleswitch = (props) => {

  const { theme,  } = useTheme();
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = (value) => {
    setIsOn(value);
  };

  return (

    <View style={styles.container}>
      <Switch
    value={isOn}
    onValueChange={toggleSwitch}
    disabled={false}
    activeText={'On'}
    inActiveText={'Off'}
    circleSize={35}
    barHeight={40}
    circleBorderWidth={1}
    backgroundActive={'#00847F'}
    backgroundInactive={'#767676'}
    circleActiveColor={'#ffffff'}
    circleInActiveColor={'#ffffff'}
    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} 
    outerCircleStyle={{}} // style for outer animated circle
    renderActiveText={false}
    renderInActiveText={false}
    switchLeftPx={2} 
    switchRightPx={2} 
    switchWidthMultiplier={2} 
    switchBorderRadius={30} 
  />
  </View>
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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

