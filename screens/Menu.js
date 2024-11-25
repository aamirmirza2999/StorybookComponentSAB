
import React, { } from 'react';
import PrimaryBgComponent from '../components/Common/PrimaryBgComponent';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../constants/Theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { spacingM, spacingS } from '../constants/Size';

const Menu = (props) => {

  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <PrimaryBgComponent
        ButtonContainer={{
          paddingLeft: spacingS,
          paddingRight: spacingS,
          paddingBottom: spacingM,
          paddingTop: spacingM,
        }}
      >
      </PrimaryBgComponent>
    </>
  )

}
export default Menu;