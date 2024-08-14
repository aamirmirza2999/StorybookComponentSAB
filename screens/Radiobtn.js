import {
    I18nManager,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
  } from 'react-native';
  import React, {useState, useReducer} from 'react';
  import BgHeader from '../components/Common/BgHeader';
  import {
    Colors,
    TextComponent,
    actuatedNormalize,
    Fonts,
  } from '../constants/CommonImport';
  import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
  import TextInputComponent from '../components/Common/TextInputComponent';
  import PrimaryButton from '../components/Common/PrimaryButton';
  import {useNavigation} from '@react-navigation/native';
  import ProgressHeader from '../components/Common/ProgressComponent';
  import {globalStyles} from '../constants/GlobalStyles';
  import DropdownComponent from '../components/Common/DropdownComponent';
  import {useTheme} from '../constants/Theme/ThemeProvider';
  import BottomButton from '../components/Common/BottomButton';
  import CheckboxComponent from '../components/Common/CheckboxComponent';
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
  