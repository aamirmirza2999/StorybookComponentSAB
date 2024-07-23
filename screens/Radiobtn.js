import {
    I18nManager,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
  } from 'react-native';
  import React, {useState, useReducer} from 'react';
  import BgHeader from '../components/Button/BgHeader';
  import {
    Colors,
    TextComponent,
    actuatedNormalize,
    Fonts,
  } from '../constants/CommonImport';
  import PrimaryBgComponent from '../components/Button/PrimaryBgComponent';
  import TextInputComponent from '../components/Button/TextInputComponent';
  import PrimaryButton from '../components/Button/PrimaryButton';
  import {useNavigation} from '@react-navigation/native';
  import ProgressHeader from '../components/Button/ProgressComponent';
  import {globalStyles} from '../constants/GlobalStyles';
  import DropdownComponent from '../components/Button/DropdownComponent';
  import {useTheme} from '../constants/Theme/ThemeProvider';
  import BottomButton from '../components/Button/BottomButton';
  import CheckboxComponent from '../components/Button/CheckboxComponent';
  import { textTop } from '../constants/Size';
  import BouncyCheckbox from 'react-native-bouncy-checkbox';
  import {
    CheckboxUnSelected,
    CheckboxSelected,
    CheckboxSelected1,
    RadioSelect,
    RadioUnSelect,
    RedUnSelected,
    RedSelected,
    CheckboxUnSelected1
  } from '../constants/SvgLocations';
  import RadioButton from '../components/RadioButton';
  const RadioBtn = props => {
    const {theme, toggleTheme} = useTheme();
  
    const navigation = useNavigation();
   
    const [selected, setSelected] = useState(null); // State to manage selected radio button
    const [selectedd, setSelectedd] = useState(null);
   
    
    const handlePress = (value) => {
      setSelected(value);
    };
   
    const handlePress1 = (value) => {
      setSelectedd(value);
    };
    return (
      <>
       
          
         
       <View>
   <RadioButton
     selected={selected}
     selectedd={selectedd}
     onPress={handlePress}
     onPress1={handlePress1}
   />
    
   
</View>          
      </>
    );
  };
  
  export default RadioBtn;
  
  const styles = StyleSheet.create({});
  