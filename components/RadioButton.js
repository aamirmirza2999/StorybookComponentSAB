import {
    I18nManager,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import BgHeader from '../components/Button/BgHeader';
  import {
    TextComponent,
  } from '../constants/CommonImport';
  import {globalStyles} from '../constants/GlobalStyles';
  import {useTheme} from '../constants/Theme/ThemeProvider';
  import BouncyCheckbox from 'react-native-bouncy-checkbox';
  import {
    RadioSelect,
    RadioUnSelect,
  } from '../constants/SvgLocations';
  import Fonts from '../constants/CommonImport';
  // import { ComponentBottomPadding, TextInputBottom ,ScreenToporBottom,ScreenLeftorRight,inputVertical} from "./Size";
  const RadioButton = props => {
    const {theme, toggleTheme} = useTheme();
    const [errorMsg, setErrorMsg] = useState('');
    const { selected,selectedd,onPress,onPress1, setSelectedd } = props;
    // const handlePress = (option) => {
    //   if (selected === option) {
    //     onPress(null); // Unselect if the same option is clicked again
        
    //   } else {
    //     onPress(option);
    //   }
    // };


    useEffect(() => {
      if (!selected) {
        setErrorMsg("Please select a value to continue");
      } else {
        setErrorMsg('');
      }
    }, [selected]);
  
    const handlePress = (option) => {
      if (selected === option) {
        onPress(null); // Unselect if the same option is clicked again
        setErrorMsg("Please select a value to continue"); // Set error message if unselected
      } else {
        onPress(option);
        setErrorMsg(''); // Clear error message if a new option is selected
      }
    };

 
    const handlePress1 = (option) => {
        if (selectedd === option) {
          onPress1(null); // Unselect if the same option is clicked again
        } else {
          onPress1(option);
        }
      };
    return (
      <>
       <View>
       <View style={[globalStyles.iconOverflowContainerRadio1,{backgroundColor:theme.primarycolor4,borderColor:theme.secondarycolor10,}]}>
     <BouncyCheckbox
        size={25}
        fillColor={theme.primarycolor4}
        unfillColor={theme.primarycolor4}
        text={props.textlabel}
        iconStyle={{ borderColor: "white" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily:'Regular',textDecorationLine: 'none' }}
        isChecked={selected === 'radio1'}
        onPress={() => handlePress('radio1')}      
        iconComponent={selected === 'radio1' ? <RadioSelect/> : <RadioUnSelect/>}
      />
      </View>
      <View style={[globalStyles.iconOverflowContainerRadio1,{backgroundColor:theme.primarycolor4,borderColor:theme.secondarycolor10,}]}>

      <BouncyCheckbox
        size={25}
        fillColor={theme.primarycolor4}
        unfillColor={theme.primarycolor4}
        text={props.textlabel2}
        iconStyle={{ borderColor: "white" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: 'Regular',textDecorationLine: 'none' }}
        isChecked={selected === 'radio2'}
        onPress={() => handlePress('radio2')}        
        iconComponent={selected === 'radio2' ? <RadioSelect/> : <RadioUnSelect/>}
      />
    </View> 
    {errorMsg ? <TextComponent style={{marginHorizontal: 16, color: 'red' }}>{props.errorMsg}</TextComponent> : null}
    </View>   
    <View style={[globalStyles.Radiobtnv2]}>
    <View style={[globalStyles.iconOverflowContainerRadio3,{backgroundColor:theme.primarycolor4,borderColor:theme.secondarycolor10,}]}>

     <BouncyCheckbox
        size={25}
        fillColor={theme.primarycolor4}
        unfillColor={theme.primarycolor4}
        text={props.textlabel}
        iconStyle={{ borderColor: "white" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "Regular",textDecorationLine: 'none' }}
        isChecked={selectedd === 'radio1'}
        onPress={() => handlePress1('radio1')}   
        iconComponent={selectedd === 'radio1' ?  <RadioSelect/> : <RadioUnSelect/>}
      />

</View>
<View style={[globalStyles.iconOverflowContainerRadio3,{backgroundColor:theme.primarycolor4,borderColor:theme.secondarycolor10,}]}>
      <BouncyCheckbox
        size={25}
        fillColor={theme.primarycolor4}
        unfillColor={theme.primarycolor4}
        text={props.textlabel2}
        iconStyle={{ borderColor: "white" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "Regular",textDecorationLine: 'none' }}
        isChecked={selectedd === 'radio2'}
        onPress={() => handlePress1('radio2')}   
        iconComponent={selectedd === 'radio2' ?  <RadioSelect/> : <RadioUnSelect/>}
      />
    </View> 
    </View> 
    <View style={{flexDirection:"column"}}> 
   <View style={[globalStyles.wrapper]}/>
   <View style={[globalStyles.statechecked]}>
<View style={[globalStyles.wrappers]}>
<View style={[globalStyles.wrapper1]} />
</View>
</View>
<View style={[globalStyles.statechecked]}>
<View style={[globalStyles.wrapper2]} />
</View>
</View>
      </>
    );
  };
  
  export default RadioButton;
  
  const styles = StyleSheet.create({});
  