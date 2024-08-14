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
  import {useNavigation} from '@react-navigation/native';
  import ProgressHeader from '../components/Common/ProgressComponent';
  import {globalStyles} from '../constants/GlobalStyles';
  import DropdownComponent from '../components/Common/DropdownComponent';
  import {useTheme} from '../constants/Theme/ThemeProvider';
  import Paginator from '../components/Common/Paginator';
import Avatarcomponent from '../components/Common/Avatarcomponent';
  
  const Paginatorscreendisplay = props => {
    const data = [
      { title: 'Item 1', text: 'Text 1' },
      { title: 'Item 2', text: 'Text 2' },
      { title: 'Item 3', text: 'Text 3' },
      { title: 'Item 4', text: 'Text 4' },
      { title: 'Item 5', text: 'Text 5' },
    ];
    
    const subdata = [
        { title: 'Item 1', text: 'Text 1' },
        { title: 'Item 2', text: 'Text 2' },
        { title: 'Item 3', text: 'Text 3' },
       
      ];
    const {theme, toggleTheme} = useTheme();
  
    const navigation = useNavigation();
   
    
    return (
      <>
 <View>
  <Paginator
  data={data}
  subdata={subdata}
  />
    
</View>   
<View>
<Avatarcomponent/>
  </View>       
      </>
    );
  };
  
  export default Paginatorscreendisplay;
  
  const styles = StyleSheet.create({});
  