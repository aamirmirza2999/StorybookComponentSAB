
import React, { } from 'react';
import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../constants/Theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { spacingM, spacingS } from '../constants/Size';
import CardsComponent from '../components/Common/CardsComponent';
import { ScrollView, View } from 'react-native';

const Menu = () => {

  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const CardsComponentStory = {
    CardImage: require("../assets/cardColorDarkBlue.png"),
    CardName: "SAB Signature Visa Credit Card",
    chipsinfo: true,
    isFinanceProduct: false,
    isAccount: false,
    isCards: true,
    Balance: "84,900.00",
    statusBgColor: "#f9f2f3",
    statusborderColor: "#e5b2b5",
    CardStatus: "Active",
    CardNumber: "4272-2201-0114-9091",
    currency: "SAR",
    AvailableLimit: "81,986.90",
    CreditLimit: "84,900.00",
    progress: "0.6",
    lang: 'en',
    enableDarktheme: false,
  };
  return (
   
     <View style={{flex:1}}>
     <ScrollView
      >
        {Array(10).fill(null).map((_, index) => (
          <CardsComponent key={index} {...CardsComponentStory} />
        ))}
      </ScrollView>
     </View>
 
    
 
  )

}
export default Menu;