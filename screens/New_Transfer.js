import { Animated, View, ScrollView } from 'react-native';
import React, { useRef } from 'react';
import { actuatedNormalize } from '../constants/PixelScaling';
import { QuickButton } from '../components/Common/Button';
import SvgIconList from '../constants/SvgIconList';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { spacingS, spacingM } from '../constants/Size';
import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
import CardsComponent from '../components/Common/CardsComponent';

const New_Transfer = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();


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
    <View style={{ flex: 1 }}>
      <ScrollView
      >
        {Array(10).fill(null).map((_, index) => (
          <CardsComponent key={index} {...CardsComponentStory} />
        ))}
      </ScrollView>
    </View>
  );
};

export default New_Transfer;
