import { ScrollView, View,Animated,StyleSheet,Switch } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../constants/PixelScaling';
import { LinkButton, QuickButton } from '../components/Common/Button';
import SvgIconList from '../constants/SvgIconList';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { spacingS,spacingXS } from '../constants/Size';
import CardsComponent from '../components/Common/CardsComponent';
import { useTheme } from '../constants/Theme/ThemeProvider';
import { Fonts, TextComponent } from '../constants/CommonImport';

import { GlobalStyleComponentLevel } from '../components/GlobalStyleComponentLevel';
import { BlockComponent } from '../components/Common/BlockComponent';

const Payment = ({scrollY}) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const {theme, toggleTheme,isDarkMode} = useTheme();


  const BlockPress = () =>{

  }

  return (
    <View style={{ flex: 1, backgroundColor:theme.primaryinvert, padding:spacingS }}>
     <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
      >
        
        <View style={{flex:1, flexDirection:'row', height:actuatedNormalize(24),justifyContent:'space-between' }}>
       <TextComponent style={[{ color: theme.primarycolor }, GlobalStyleComponentLevel.primaryTextLarge]}  >
        {'Bills and other Services'}
        </TextComponent>  
        
                  <LinkButton
                    label={'Add Bills'}
                    linkbuttonType={'small'}
                    linkbuttonIconRight={true}
                    linkbuttoneIconLeft={true}
                    onPress={()=>{
                      console.log("------link pressssss")
                    }}
                    rightIconType='RightRedArrow1'
                    leftIconType='Plus'
                  />
                
      </View>
      
      

       <View style={styles.gridContainer}>
  {[
    { icon: 'Blockcard', type:'Solid', label: 'Bills',lableSubText:'0 Unpaid Bills' },
    { icon: 'Blockcard', type:'Solid', label: 'One Time Payment' },
    { icon: 'LocalAccount', type:'Solid', label: 'Traffic Fines'},
    { icon: 'Blockcard', type:'Solid',label: 'MOI Services' },
    { icon: 'LocalAccount', type:'Solid', label: 'Esal Payments'},
    { icon: 'Blockcard', type:'Solid',label: 'Pre-paid Bills' },
  ].map((item, index) => (
    <View style={styles.gridItem} key={index}>
      <BlockComponent blockIcon={item.icon} type={item.type} labelText={item.label} onPress={BlockPress} lableSubText={item.lableSubText} />
    </View>
  ))}

<Switch
        trackColor={{
          false:'gray', // Track color in false state
          true:'white', // Track color in true state
        }}
        style={{marginTop:spacingS}}
        thumbColor={theme.primarytextcolor3} // Thumb color
        // ios_backgroundColor={isDarkMode ? 'green' : 'red'} // iOS fallback
        onValueChange={toggleTheme}
        value={isDarkMode}
      />
</View>

    </Animated.ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically
    paddingHorizontal: 16, // Adjust padding if needed
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Wraps items to the next row
    justifyContent: 'space-between', // Spacing between items
    marginTop:spacingS,
  },
  gridItem: {
    width: '48%', // Ensures two items fit in one row with some spacing
    marginBottom: spacingXS, // Adds vertical spacing between rows
    marginHorizontal: '1%', // Adds horizontal spacing while ensuring alignment
  },
});

export default Payment;