import { Animated, View, ScrollView } from 'react-native';
import React, { useRef } from 'react';
import { actuatedNormalize } from '../constants/PixelScaling';
import { QuickButton } from '../components/Common/Button';
import SvgIconList from '../constants/SvgIconList';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { spacingS, spacingM, spacingXXL } from '../constants/Size';
import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
import CardsComponent from '../components/Common/CardsComponent';
import {MainButton} from '../components/Common/Button';
import { useTheme } from '../constants/Theme/ThemeProvider';

const Otp = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const goScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{
        name: "Home",
        params: {
          screen: "Home",
          params: {
            fromScreen: "Otp"
          }
        },
      }],
    })
  }

  return (
    <View style={{ flex: 1 , padding:spacingS,  backgroundColor : theme.primaryinvert }}>

<MainButton
              backgroundColor={'#db0011'}
              label={'Action'}
              type={'large'} //large/small/stacked/inline
              enableLeftIcon={false}
              enableRightIcon={true}
              enableSecondaryBtn={true}
              onPress={() => {
                navigation.navigate('SuccessScreen');
              }}></MainButton>
      
      </View>
  );
};

export default Otp;
